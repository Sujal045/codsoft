import React from "react";

const Header = () => {
  return (
    <nav>
      <NavContent />
    </nav>
  );
};

const NavContent = () => (
  <>
    <h2>Sujal.</h2>
    <div>
      <a href="#home">Home</a>
      <a href="#experience">Experience</a>
      <a href="#work">Work</a>
      <a href="#services">Services</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#contact">Contact</a>
    </div>
    <a href="mailto:sujalprajapati045@gmail.com">
      <button>Email</button>
    </a>
  </>
);

export default Header;
