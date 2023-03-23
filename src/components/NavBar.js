import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import linkedln from '../assets/img/navLinkedln.png';
import github from '../assets/img/navGithub.png';
import gmail from '../assets/img/navGmail-whitescale.png';
import discord from '../assets/img/navDiscord.png';
import whatsapp from '../assets/img/navWhatsapp.png';
/*
import telegram from '../assets/img/navTelegram.png';
import medium from '../assets/img/navMedium.png';
import facebook from '../assets/img/navFacebook.svg';
import instagram from '../assets/img/navInstagram.svg';
import { HashLink } from 'react-router-hash-link';
*/
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="https://juanpablodesigner.github.io/space-ux-portfolio/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('project')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/jaypy/"><img src={linkedln} alt="Linkedln" /></a>
                <a href="https://github.com/JuanPabloDesigner"><img src={github} alt="GitHub" /></a>
                <a href="mailto:jaypy.uxdesign@gmail.com"><img src={gmail} alt="Gmail" /></a>
                <a href="https://api.whatsapp.com/send?phone=5521966442965&text=I%27ve%20reviewed%20your%20resume%20and%20am%20reaching%20out%20to%20offer%20you%20a%20job%20opportunity."><img src={whatsapp} alt="WhatsApp" /></a>
                <a href="https://discordapp.com/users/908604345992491018"><img src={discord} alt="Discord" /></a>
                {/*
                <a href="https://t.me/jaypy06"><img src={telegram} alt="Telegram" /></a>
                <a href="https://medium.com/@JuanPablo./"><img src={medium} alt="Medium" /></a>
                <a href="https://www.facebook.com/people/Juan-Pablo/100075404547097/"><img src={facebook} alt="Facebook" /></a>
                <a href="https://www.instagram.com/jaypy06/"><img src={instagram} alt="Instagram" /></a>
                */}
              </div>
              <a href="https://juanpablodesigner.github.io/ProductDesigner-Resume/">
                <button className="vvd"><span>My Resume</span></button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

export default NavBar;
