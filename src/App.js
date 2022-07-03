import Footer from "./components/footers/Footer";
import Navbar from "./components/navbars/Navbar";
import Contact from "./containers/contact/Contact";
import Landing from "./containers/landing/Landing";
import Prizes from "./containers/prizes/Prizes";
import Schedule from "./containers/schedule/Schedule";
import Sponsors from "./containers/sponsors/Sponsors";

function App() {
  return (
    <div className="bg-beige flex flex-col h-screen justify-between">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 sm:px-6">
        <Landing />
        <Schedule />
        <Prizes />
        <Sponsors />
        <Contact id="contact-us" />
      </main>

      <Footer />
    </div>
  );
}

export default App;
