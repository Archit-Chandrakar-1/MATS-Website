
import Navbar from '../../components/navbar/navbar';
import Carousel from '../../components/carousel/carousel';
import Stats from '../../components/stats/stats';
import About from '../../components/about/about';
import QuickAccess from '../../components/quickAccess/quickAccess';
import ChatBot from '../../components/chatbot/chatbot';
import Footer from '../../components/footer/footer';
import Testimonials from '../../components/testimonials/testimonial';
import ExploreCampus from '../../components/exploreCampus/exploreCampus';
import ActionMenu from '../../components/actionMenu/actionMenu';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Carousel />
      <Stats />
      <About />
      <QuickAccess />
      <ChatBot />
      <Testimonials/>
      <ExploreCampus/>
      <Footer/>
      <ActionMenu/>
      
    </>
  );
}
