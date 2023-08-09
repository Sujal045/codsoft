import React from "react";
import me from "../assets/me.jpg";
import { AiFillGithub, AiFillLinkedin, AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="" />
        <h2>Sujal Prajapati</h2>
        <p>Bringing ideas to life with pixel-perfect precision</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://github.com/Sujal045" target={"blank"}>
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/sujal-prajapati-4a68ab220/"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />{" "}
      </a>
    </footer>
  );
};

export default Footer;
