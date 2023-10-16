import React, { useState } from "react";
import whiteLogo from "../assets/white-logo.png";
import {
  FaTimes,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaChevronDown,
} from "react-icons/fa";

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Modify the click handler for dropdown items to prevent the default behavior
  const handleDropdownClick = (event, index) => {
    event.preventDefault(); // Prevent the default behavior of anchor tags
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
        { title: "Destination", link: "" },
        { title: "Destination Details", link: "" },
      ],
    },
    {
      title: "Tour",
      link: "/",
      submenu: [
        { title: "Tour", link: "" },
        { title: "Tour Detail", link: "/tour-detail" },
      ],
    },
    {
      title: "Blog",
      link: "/",
      submenu: [
        { title: "Blog", link: "/blog" },
        { title: "Blog Details", link: "/blog/blog-details" },
      ],
    },
    { title: "Contact us", link: "/contact" },
  ];

  return (
    <nav className="navbar navbar-modal">
      <div className="container">
        <div className="nav-header">
          <div className="row">
            <div>
              <img src={whiteLogo} alt="" />
            </div>
            <div>
              <FaTimes />
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
                    className={activeDropdown === index ? "active dropdown-items" : ""}
                  >
                    <a
                      href={item.link}
                      onClick={(e) => handleDropdownClick(e, index)} // Use the modified click handler
                    >
                      {item.title}
                      {item.submenu && <FaChevronDown />}
                    </a>
                    {item.submenu && activeDropdown === index && (
                      <ul className="submenu">
                        {item.submenu.map((subitem, subIndex) => (
                          <li key={subIndex}>
                            <a href={subitem.link}>{subitem.title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="nav-icon">
              <ul>
                <li>
                  <a href="">
                    <span className="icon">
                      <FaFacebook />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
                    <span className="icon">
                      <FaInstagram />
                    </span>
                  </a>
                </li>
                <li>
                  <a href="">
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
  );
}

export default Navbar;
