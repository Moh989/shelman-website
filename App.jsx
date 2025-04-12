
// Shelman Website with Integrated Logo
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SplashScreen() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <img
        src="/لوكو.png"
        alt="Shelman Logo"
        width={150}
        height={150}
        className="animate-pulse mb-4"
      />
      <h1 className="text-yellow-400 text-2xl font-semibold">Shelman For Decor & Construction</h1>
    </div>
  );
}

// ... other components and App function omitted for brevity (identical to canvas content)

export default function App() {
  const [splash, setSplash] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setSplash(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (splash) return <SplashScreen />;

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/consult" element={<ConsultPage />} />
      </Routes>
    </Router>
  );
}
