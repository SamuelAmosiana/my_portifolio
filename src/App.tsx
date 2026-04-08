import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Navigation } from "./components/Navigation";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#1f1f1f] min-h-screen text-white overflow-x-hidden selection:bg-[#FFDD00] selection:text-black">
        <Toaster position="bottom-right" theme="dark" />
        <Navigation />
        <main className="pt-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
