import React, { useState } from "react";
import Modal from "react-modal";
import {
  FaYoutube,
  FaEnvelope,
  FaTwitter,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaSearch,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import Navbar from "./navbar";
import logoImage from "../assets/logo.png";
import whiteLogo from "../assets/white-logo.png";
import logoIconWhite from "../assets/logo-icon-white.svg";

function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleDropdownClick = (event, index) => {
    event.preventDefault();
    toggleDropdown(index);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "About", link: "/" },
    {
      title: "Destination",
      link: "/",
      submenu: [
        { title: "Destination", link: "/" },
        { title: "Destination Details", link: "/" },
      ],
    },
    {
      title: "Tour",
      link: "/",
      submenu: [
        { title: "Tour", link: "/tour" },
        { title: "Tour Detail", link: "/tour-detail" },
      ],
    },
    {
      title: "Blog",
      link: "/",
      submenu: [
        { title: "Blog", link: "/" },
        { title: "Blog Details", link: "/" },
      ],
    },
    { title: "Contact us", link: "/contact" },
  ];

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const customStyles = {
    content: {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      border: "none",
      background: "#2b2b2b",
      overflow: "auto",
      outline: "none",
      padding: "20px",
    },
  };

  return (
    <header className="site-header">
      <div className="top-header">
        <div className="container">
          <div className="row">
            <div className="two-col">
              <ul className="contact-list-item">
                <li>
                  <a href="mailto:holidayplanner@gmail.com">
                    <span className="icon">
                      <FaEnvelope />
                    </span>
                    <span className="text">holidayplanners@gmail.com</span>
                  </a>
                </li>
                <li>
                  <a href="tel:1234567890">
                    <span className="icon">
                      <FaPhoneAlt />
                    </span>
                    <span className="text">123 456 7890</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="two-col">
              <ul className="header-social">
                <li>
                  <a href="https://facebook.com">
                    <span className="icon">
                      <FaFacebookF />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com">
                    <span className="icon">
                      <FaInstagram />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com">
                    <span className="icon">
                      <FaTwitter />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-header">
        <div className="container bottom-header-container">
          <div className="bottom-header-content">
            <div className="row">
              <div className="two-col">
                <div className="site-branding">
                  <a href="/"><img src={logoImage} alt="Logo" /></a>
                </div>
              </div>
              <div className="two-col">
                <div className="reserve-button">
                  <a href="/login" className="btn">
                    login
                  </a>
                </div>
                <div className="search">
                  <span className="search-icon">
                    <FaSearch />
                  </span>
                </div>
                <div className="main-navigation">
                  <button className="nav-btn" onClick={openModal}>
                    <span className="first"></span>
                    <span className="second"></span>
                    <span className="third"></span>
                  </button>
                  {isModalOpen && (
                    <div className="modal-overlay">
                      <div className="modal">
                        <nav className="navbar navbar-modal">
                          <div className="container">
                            <div className="nav-header">
                              <div className="row">
                                <div>
                                  <img src={whiteLogo} alt="White Logo" />
                                </div>
                                <div className="close-modal">
                                  <button
                                    className="close-modal-one"
                                    onClick={closeModal}
                                  >
                                    <FaTimes />
                                  </button>
                                </div>
                              </div>
                            </div>
                            <div className="nav-body">
                              <div className="row">
                                <div className="navlink">
                                  <ul>
                                    {menuItems.map((item, index) => (
                                      <li
                                        key={index}
                                        className={
                                          item.submenu ? "active dropdown-items" : ""
                                        }
                                      >
                                        <a
                                          href={item.submenu ? "" : item.link}
                                          onClick={(e) =>
                                            item.submenu && handleDropdownClick(e, index)
                                          }
                                        >
                                          {item.title}
                                          {item.submenu && <FaChevronDown />}
                                        </a>
                                        {item.submenu &&
                                          activeDropdown === index && (
                                            <ul className="submenu">
                                              {item.submenu.map(
                                                (subitem, subIndex) => (
                                                  <li key={subIndex}>
                                                    <a href={subitem.link}>
                                                      {subitem.title}
                                                    </a>
                                                  </li>
                                                )
                                              )}
                                            </ul>
                                          )}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="nav-icon">
                                  <ul>
                                    <li>
                                      <a href="/dashboard">
                                        <span className="icon">
                                          <FaFacebookF />
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://instagram.com">
                                        <span className="icon">
                                          <FaInstagram />
                                        </span>
                                      </a>
                                    </li>
                                    <li>
                                      <a href="https://twitter.com">
                                        <span className="icon">
                                          <FaTwitter />
                                        </span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
