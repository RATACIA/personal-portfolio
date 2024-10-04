"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
          const id = section.getAttribute("id");
          if (id) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a
          href="#home"
          className={`nav-item ${
            activeSection === "home" ? "bg-white text-gray-900" : ""
          }`}
        >
          Home
        </a>
        <a
          href="#projects"
          className={`nav-item ${
            activeSection === "projects" ? "bg-white text-gray-900" : ""
          }`}
        >
          Projects
        </a>
        <a
          href="#about"
          className={`nav-item ${
            activeSection === "about" ? "bg-white text-gray-900" : ""
          }`}
        >
          About
        </a>
        <a
          href="#contact"
          className={`nav-item ${
            activeSection === "contact" ? "bg-white text-gray-900" : ""
          }`}
        >
          Contact
        </a>
      </nav>
    </div>
  );
};
