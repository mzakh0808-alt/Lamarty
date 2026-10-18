import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Advantages from "./components/Advantages";
import Decors from "./components/Decors";
import Specs from "./components/Specs";
import Applications from "./components/Applications";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#0d0b09] font-sans antialiased selection:bg-amber-400/30">
      <Navbar />
      <Hero />
      <Advantages />
      <Decors />
      <Specs />
      <Applications />
      <Contacts />
      <Footer />
    </div>
  );
}
