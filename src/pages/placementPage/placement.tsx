import React, { useState } from "react";
import { X, ArrowRight, Target, Lightbulb, CheckCircle } from "lucide-react";

// Placement Modal Component
const PlacementModal: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const handlePlacementFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      "Registration submitted successfully! Our placement team will contact you soon."
    );
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#142143]">
              Placement Registration
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <form onSubmit={handlePlacementFormSubmit} className="space-y-4">
            {/* --- Your form fields here --- */}
            {/* Example field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#142143]"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 bg-[#142143] text-white rounded-lg hover:bg-[#142143]/90 transition-colors"
              >
                Register for Placement
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// Placement Page Component
const PlacementPage: React.FC = () => {
  const [isPlacementModalOpen, setIsPlacementModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#142143] to-blue-800 py-20">
        <div className="text-center text-white">
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Training & Placement Cell
          </h1>
          <p className="text-xl mb-8">
            Bridging the gap between academia and industry
          </p>
          <button
            onClick={() => setIsPlacementModalOpen(true)}
            className="bg-[#ffaf00] text-[#142143] px-8 py-4 rounded-full hover:bg-yellow-400"
          >
            Register for Placement <ArrowRight className="inline ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* Modal */}
      {isPlacementModalOpen && (
        <PlacementModal onClose={() => setIsPlacementModalOpen(false)} />
      )}
    </div>
  );
};

export default PlacementPage;
