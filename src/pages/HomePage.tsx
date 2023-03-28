import ClientTestimonials from "../components/Clients";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";
import WorkCarousel from "../components/WorkCarousel";

function HomePage() {
  return (
    <div>
      <NavBar />
      <ClientTestimonials />
      <WorkCarousel />
      <Footer />
    </div>
  );
}

export default HomePage;
