import React, { useEffect, useState } from 'react';

type MediaItem = {
  id: string;
  type: 'image' | 'video';
  filename: string;
  url: string;
};

const AdminCarousel: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadMessage, setUploadMessage] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [mediaList, setMediaList] = useState<MediaItem[]>([]);
  const [loadingMedia, setLoadingMedia] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  // Fetch media list from backend on mount
  const fetchMedia = async () => {
    setLoadingMedia(true);
    try {
      const res = await fetch('/api/carousel/media');
      if (res.ok) {
        const data = await res.json();
        setMediaList(data);
      } else {
        setUploadMessage('Failed to load media list');
      }
    } catch {
      setUploadMessage('Error loading media list');
    } finally {
      setLoadingMedia(false);
    }
  };

  useEffect(() => {
    fetchMedia();
  }, []);

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      setFile(e.target.files[0]);
      setUploadMessage(null);
    }
  };

  // Upload new media
  const handleUpload = async () => {
    if (!file) {
      setUploadMessage('Select a file to upload');
      return;
    }

    setUploading(true);
    setUploadMessage(null);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await fetch('/api/carousel/upload', {
        method: 'POST',
        body: formData,
      });

      if (res.ok) {
        setUploadMessage('Upload successful!');
        setFile(null);
        fetchMedia(); // Refresh list after upload
      } else {
        setUploadMessage('Upload failed.');
      }
    } catch {
      setUploadMessage('Error during upload.');
    } finally {
      setUploading(false);
    }
  };

  // Delete media item by id
  const handleDelete = async (id: string) => {
    if (!window.confirm('Delete this media item?')) return;

    setDeletingId(id);

    try {
      const res = await fetch(`/api/carousel/media/${id}`, {
        method: 'DELETE',
      });

      if (res.ok) {
        setUploadMessage('Item deleted');
        fetchMedia();
      } else {
        setUploadMessage('Delete failed');
      }
    } catch {
      setUploadMessage('Error deleting item');
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <section>
      <h2 className="text-xl font-bold text-[#142143] mb-4">Add Main Carousel Media</h2>

      <input
        type="file"
        accept="image/*,video/*"
        onChange={handleFileChange}
        className="mb-4"
      />
      <br />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`px-6 py-2 rounded font-semibold text-white ${
          uploading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#ffaf00] hover:bg-yellow-400'
        }`}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>

      {uploadMessage && <p className="mt-4 text-[#142143]">{uploadMessage}</p>}

      <hr className="my-6" />

      <h3 className="text-lg font-semibold text-[#142143] mb-2">Uploaded Media</h3>

      {loadingMedia ? (
        <p>Loading media...</p>
      ) : mediaList.length === 0 ? (
        <p className="text-gray-600">No media uploaded yet.</p>
      ) : (
        <ul className="space-y-3">
          {mediaList.map(({ id, type, filename, url }) => (
            <li
              key={id}
              className="flex items-center justify-between p-3 bg-white rounded shadow"
            >
              <div className="flex items-center space-x-4 max-w-xs truncate">
                {type === 'image' ? (
                  <img src={url} alt={filename} className="w-20 h-14 object-cover rounded" />
                ) : (
                  <video
                    src={url}
                    controls
                    className="w-36 h-20 rounded"
                    preload="metadata"
                  />
                )}
                <span className="truncate font-medium">{filename}</span>
              </div>
              <button
                onClick={() => handleDelete(id)}
                disabled={deletingId === id}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                {deletingId === id ? 'Deleting...' : 'Delete'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default AdminCarousel;
