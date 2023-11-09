import React, { useState, useEffect } from "react";
import logoImage from "../assets/logo-icon.svg";
import abtBigImage from "../assets/about-big-image.jpg";
import abtSmallImage from "../assets/about-small-image.jpg";
import waveDesign from "../assets/wave-design.jpg";
import whiteMap from "../assets/white-map.png";
import destination1 from "../assets/destination-img1.jpg";
import destination2 from "../assets/destination-img2.jpg";
import destination3 from "../assets/destination-img3.jpg";
import destination4 from "../assets/destination-img4.jpg";
import offerImg1 from "../assets/offer-img1.jpg";
import offerImg2 from "../assets/offer-img2.jpg";
import offerImg3 from "../assets/offer-img3.jpg";
import offerImg4 from "../assets/offer-img4.jpg";
import offerImg5 from "../assets/offer-img5.jpg";
import highlightVid from "../assets/highlight-video.mp4";
import highlightBg from "../assets/highlight-image.jpg";
import tourIcon1 from "../assets/tour-service-icon1.svg";
import tourIcon2 from "../assets/tour-service-icon2.svg";
import tourIcon3 from "../assets/tour-service-icon3.svg";
import tourBoxImage1 from "../assets/tour-box-image1.jpg";
import tourBoxImage2 from "../assets/tour-box-image2.jpg";
import tourBoxImage3 from "../assets/tour-box-image3.jpg";
import tourBoxImage4 from "../assets/tour-box-image4.jpg";
import testimonialQuote from "../assets/testimonial-quote.svg";
import blogImage1 from "../assets/blog-image1.jpg";
import blogImage2 from "../assets/blog-image2.jpg";
import blogImage3 from "../assets/blog-image3.jpg";
import instagramImage1 from "../assets/instagram-image1.jpg";
import instagramImage2 from "../assets/instagram-image2.jpg";
import instagramImage3 from "../assets/instagram-image3.jpg";
import instagramImage4 from "../assets/instagram-image4.jpg";
import instagramImage5 from "../assets/instagram-image5.jpg";
import instagramImage6 from "../assets/instagram-image6.jpg";
import partnerLogo1 from "../assets/partners-logo1.png";
import partnerLogo4 from "../assets/partners-logo4.png";
import partnerLogo2 from "../assets/partners-logo2.png";
import partnerLogo3 from "../assets/partners-logo3.png";

import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaFlag,
  FaCaretDown,
  FaClock,
  FaUserFriends,
  FaStar,
  FaInstagram,
} from "react-icons/fa";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import "swiper/css";

import bannerSlide1 from "../assets/banner-slide-1.jpg";
import bannerSlide2 from "../assets/banner-slide-2.jpg";
import bannerSlide3 from "../assets/banner-slide-3.jpg";

import Header from "./header";
import Footer from "./footer";

function home() {
  const slides = [
    {
      image: bannerSlide1,
      heading: "Get Ready to Travel",
      subheading: "The World.",
      paragraph:
        "A journey of 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.",
    },
    {
      image: bannerSlide2,
      heading: "Enjoy The Travel With",
      subheading: "Holiday Planners",
      paragraph:
        "A journey of 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.",
    },
    {
      image: bannerSlide3,
      heading: "Life is Short and",
      subheading: "The World is Wide.",
      paragraph:
        "A journey of 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.",
    },
  ];

  // State for current slide
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  //tour slider

  // Auto slide transition
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  const destinationBgStyle = {
    backgroundImage: `url(${waveDesign})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const dest1Style = {
    backgroundImage: `url(${destination1})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const dest2Style = {
    backgroundImage: `url(${destination2})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const tourBoxStyle = {
    backgroundImage: `url(${tourBoxImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const tourBoxStyle1 = {
    backgroundImage: `url(${tourBoxImage2})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const tourBoxStyle2 = {
    backgroundImage: `url(${tourBoxImage3})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const tourBoxStyle3 = {
    backgroundImage: `url(${tourBoxImage4})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const dest3Style = {
    backgroundImage: `url(${destination3})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const dest4Style = {
    backgroundImage: `url(${destination4})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const offer1 = {
    backgroundImage: `url(${offerImg1})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const offer5 = {
    backgroundImage: `url(${offerImg5})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const offer4 = {
    backgroundImage: `url(${offerImg4})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const offer2 = {
    backgroundImage: `url(${offerImg2})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const offer3 = {
    backgroundImage: `url(${offerImg3})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const highlightStyle = {
    backgroundImage: `url(${highlightBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const tourStyle = {
    backgroundImage: `url(${whiteMap})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const blogStyle1 = {
    backgroundImage: `url(${blogImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const blogStyle2 = {
    backgroundImage: `url(${blogImage2})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const blogStyle3 = {
    backgroundImage: `url(${blogImage3})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const instagramStyle1 = {
    backgroundImage: `url(${instagramImage1})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const instagramStyle2 = {
    backgroundImage: `url(${instagramImage2})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const instagramStyle3 = {
    backgroundImage: `url(${instagramImage3})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const instagramStyle4 = {
    backgroundImage: `url(${instagramImage4})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const instagramStyle5 = {
    backgroundImage: `url(${instagramImage5})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const instagramStyle6 = {
    backgroundImage: `url(${instagramImage6})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  return (
    <main className="home-content">
      <section className="home-banner">
        <div className="banner-slider">
          <img src={slides[currentSlide].image} alt="Banner" />
          <div className="slider-text">
            <h1>
              {slides[currentSlide].heading}{" "}
              <p>
                <span className="empty-space"></span>
              </p>
              <span>{slides[currentSlide].subheading}</span>
            </h1>
            <p>{slides[currentSlide].paragraph}</p>
          </div>
        </div>
        <div className="swiper-button-prev" onClick={prevSlide}>
          <span className="btn">prev</span>
        </div>
        <div className="swiper-button-next" onClick={nextSlide}>
          <span className="btn">next</span>
        </div>
      </section>
      {/* home banner form */}
      <section className="banner-form">
        <div className="form-container">
          <form action="" className="form">
            <div className="banner-form-input">
              <span className="input-box where-wrap">
                <span className="icon">
                  <FaMapMarkerAlt />
                </span>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Where To?"
                />
              </span>
            </div>
            <div className="banner-form-input">
              <span className="input-box when-wrap">
                <span className="icon">
                  <FaCalendarAlt />
                </span>
                <select className="form-input">
                  <option>When?</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
                <span className="arrow">
                  <FaCaretDown />
                </span>
              </span>
            </div>
            <div className="banner-form-input">
              <span className="input-box travel-wrap">
                <span className="icon">
                  <FaFlag />
                </span>
                <select className="form-input">
                  <option>Travel Type</option>
                  <option>Cultural</option>
                  <option>Adventure</option>
                  <option>Historical</option>
                  <option>Seaside</option>
                  <option>Discovery</option>
                </select>
                <span className="arrow">
                  <FaCaretDown />
                </span>
              </span>
            </div>
            <div className="banner-form-input form-btn">
              <span className="input-box button-wrap">
                <button className="btn">
                  <span>Find Now</span>
                </button>
              </span>
            </div>
          </form>
        </div>
      </section>
      {/* about section */}
      <section className="main-about common-sec">
        <div className="logo-icon">
          <img src={logoImage} alt="logo" />
        </div>
        <div className="abt-container">
          <div className="row">
            <div className="two-col col-6">
              <div className="abt-image">
                <div className="abt-img">
                  <div className="about-image-box big-img">
                    <div className="about-image back-image">
                      <img src={abtBigImage} />
                    </div>
                  </div>
                  <div className="about-image-box small-img">
                    <div className="about-image back-image">
                      <img src={abtSmallImage} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="two-col col-6">
              <div className="abt-content">
                <div className="line-title">
                  <h4 className="h4-title">About us</h4>
                </div>
                <h2 className="h2-title">
                  Plan Your <span>Trip</span> With <span>Us</span>
                </h2>
                <div className="about-content-text">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth. Even
                    the all-powerful Pointing has no control about the blind
                    texts it is an almost unorthographic. Italic Mountains, she
                    had a last view back on the skyline
                  </p>
                </div>
                <a href="/about" className="btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* home destination section */}
      <section
        className="main-destination common-sec"
        style={destinationBgStyle}
      >
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="sec-title">
                <div className="line-title">
                  <h4 className="h4-title">Amazing Destination</h4>
                </div>
                <h2 className="h2-title">
                  Choose The <span>Destination</span> Just Right For{" "}
                  <span>Your Vocation</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row dest-img-sec">
            <div className="col-8">
              <div className="destination-box">
                <a href="/destination-detail">
                  <div className="destination-box-image-wp">
                    <div
                      className="destination-box-image"
                      style={dest1Style}
                    ></div>
                  </div>
                  <div className="destination-box-content">
                    <div className="destination-box-content-inner">
                      <h3 className="h3-title">Greece</h3>
                    </div>
                  </div>
                </a>
              </div>
              <div className="row">
                <div className="col-6">
                  <div className="destination-box">
                    <a href="/destination-detail">
                      <div className="destination-box-image-wp">
                        <div
                          className="destination-box-image"
                          style={dest2Style}
                        ></div>
                      </div>
                      <div className="destination-box-content">
                        <div className="destination-box-content-inner">
                          <h3 className="h3-title">Thailand</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-6">
                  <div className="destination-box">
                    <a href="/destination-detail">
                      <div className="destination-box-image-wp">
                        <div
                          className="destination-box-image"
                          style={dest3Style}
                        ></div>
                      </div>
                      <div className="destination-box-content">
                        <div className="destination-box-content-inner">
                          <h3 className="h3-title">Switzerland</h3>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="destination-box big-height">
                <a href="/destination-detail">
                  <div className="destination-box-image-wp">
                    <div
                      className="destination-box-image"
                      style={dest4Style}
                    ></div>
                  </div>
                  <div className="destination-box-content">
                    <div className="destination-box-content-inner">
                      <h3 className="h3-title">India</h3>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row dest-img-sec">
            <div className="col-12">
              <div className="dest-see-more">
                <a href="/destination" className="btn">
                  <span>View All</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* home tour section */}
      <section className="main-tour-sec">
        <div className="header-tour pt-70 bg-f6">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="sec-title">
                  <div className="line-title">
                    <h4 className="h4-title4">Amazing Offers</h4>
                  </div>
                  <h2 className="h2-title">
                    Special <span>Deals</span> And Last Minute
                    <span> Amazing Offers</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tour-slider-wp pb-70">
          <div className="tour-slider-container">
            <div className="swiper-container">
              <div className="row swiper-wrapper">
                <div className="col-4 swiper-slide">
                  <div className="tour-offer-box">
                    <a href="/tour-detail">
                      <div className="tour-offer-box-image-wp">
                        <div className="tour-offer-box-image" style={offer1}>
                          <span className="discount-label">22% off</span>
                        </div>
                      </div>
                      <div className="tour-offer-box-content">
                        <h4 className="h4-title">Cinque Terre, Italy</h4>
                        <span className="price-label">$1200</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-4 swiper-slide">
                  <div className="tour-offer-box">
                    <a href="/tour-detail">
                      <div className="tour-offer-box-image-wp">
                        <div className="tour-offer-box-image" style={offer2}>
                          <span className="discount-label">15% off</span>
                        </div>
                      </div>
                      <div className="tour-offer-box-content">
                        <h4 className="h4-title">Panthonon, Greece</h4>
                        <span className="price-label">$2500</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-4 swiper-slide">
                  <div className="tour-offer-box">
                    <a href="/tour-detail">
                      <div className="tour-offer-box-image-wp">
                        <div className="tour-offer-box-image" style={offer3}>
                          <span className="discount-label">38% off</span>
                        </div>
                      </div>
                      <div className="tour-offer-box-content">
                        <h4 className="h4-title">Jaisalmer Fort, Jaisalmer</h4>
                        <span className="price-label">$750</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-4 swiper-slide">
                  <div className="tour-offer-box">
                    <a href="/tour-detail">
                      <div className="tour-offer-box-image-wp">
                        <div className="tour-offer-box-image" style={offer4}>
                          <span className="discount-label">32% off</span>
                        </div>
                      </div>
                      <div className="tour-offer-box-content">
                        <h4 className="h4-title">JungGrenzgipfel, Thailand</h4>
                        <span className="price-label">$970</span>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="col-4 swiper-slide">
                  <div className="tour-offer-box">
                    <a href="/tour-detail">
                      <div className="tour-offer-box-image-wp">
                        <div className="tour-offer-box-image" style={offer5}>
                          <span className="discount-label">15% off</span>
                        </div>
                      </div>
                      <div className="tour-offer-box-content">
                        <h4 className="h4-title">
                          Jungfrau Mountain, Switzerland
                        </h4>
                        <span className="price-label">$1280</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </div>
      </section>

      <section className="main-highlight" style={highlightStyle}>
        <div className="highlight-bg-video">
          <video autoPlay muted loop>
            <source src={highlightVid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="sec-wp">
          <div className="container">
            <div className="row">
              <div className="col-8">
                <div className="sec-title">
                  <h2 className="h2-title">
                    <span>Traveling Highlights</span>
                  </h2>
                  <h3 className="h3-title">Your New Traveling Idea</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-tour bg-f6 back-image" style={tourStyle}>
        <div className="tour-services">
          <div className="container">
            <div className="tour-services-row wow">
              <div className="row">
                <div className="col-4">
                  <div className="tour-service-box">
                    <div className="tour-service-icon">
                      <img src={tourIcon1} />
                    </div>
                    <div className="tour-service-content">
                      <h4 className="h4-title">700+ DESTINATIONS</h4>
                      <p>
                        Far away, behind the word mountains, far countries
                        Vokalia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="tour-service-box">
                    <div className="tour-service-icon">
                      <img src={tourIcon2} />
                    </div>
                    <div className="tour-service-content">
                      <h4 className="h4-title">BEST PRICE GUARANTEE</h4>
                      <p>
                        Far away, behind the word mountains, far countries
                        Vokalia
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div className="tour-service-box">
                    <div className="tour-service-icon">
                      <img src={tourIcon3} />
                    </div>
                    <div className="tour-service-content">
                      <h4 className="h4-title">TOP NOTCH SUPPORT</h4>
                      <p>
                        Far away, behind the word mountains, far countries
                        Vokalia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tour-sec pt-70">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <div className="sec-title wow">
                  <div className="line-title">
                    <h4 className="h4-title">Amazing Tours</h4>
                  </div>
                  <h2 className="h2-title">
                    Trending, <span>Best Selling Tours</span> And Fun
                    Destinations
                  </h2>
                </div>
              </div>
            </div>
            <div className="row tour-slider wow">
              <div className="col-4">
                <div className="tour-box">
                  <div
                    className="tour-box-image back-image"
                    style={tourBoxStyle}
                  ></div>
                  <div className="tour-box-content">
                    <div className="tour-box-label">
                      <div className="tour-box-inner-label">
                        <h4 className="h4-title">Italy</h4>
                      </div>
                    </div>
                    <div className="tour-box-title">
                      <h4 className="h4-title">
                        Holiday Planner is a World Leading Online Tour Booking
                        Platform
                      </h4>
                    </div>
                    <div className="tour-box-description">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove.
                      </p>
                    </div>
                    <div className="tour-info-box">
                      <div className="row">
                        <div className="col-6">
                          <div className="tour-info">
                            <div className="tour-info-icon">
                              <i>
                                <FaClock />
                              </i>
                            </div>
                            <div className="tour-info-content">
                              <h5 className="h6-title">Duration</h5>
                              <p>2 days</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="tour-info">
                            <div className="tour-info-icon">
                              <i>
                                <FaUserFriends />
                              </i>
                            </div>
                            <div className="tour-info-content">
                              <h5 className="h6-title">Group Size</h5>
                              <p>6 People</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tour-box-bottom">
                      <div className="tour-price">
                        <h3 className="h3-title">$1200</h3>
                      </div>
                      <div className="book-now-button">
                        {/* <a href={`/tour/${tour._id}`} className="btn">Book Now</a> */}
                        <a href="" className="btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="tour-box">
                  <div
                    className="tour-box-image back-image"
                    style={tourBoxStyle1}
                  >
                    <span className="discount-label">15% Off</span>
                  </div>
                  <div className="tour-box-content">
                    <div className="tour-box-label">
                      <div className="tour-box-inner-label">
                        <h4 className="h4-title">Greece</h4>
                      </div>
                    </div>
                    <div className="tour-box-title">
                      <h4 className="h4-title">
                        Holiday Planner is a World Leading Online Tour Booking
                        Platform
                      </h4>
                    </div>
                    <div className="tour-box-description">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove.
                      </p>
                    </div>
                    <div className="tour-info-box">
                      <div className="row">
                        <div className="col-6">
                          <div className="tour-info">
                            <div className="tour-info-icon">
                              <i>
                                <FaClock />
                              </i>
                            </div>
                            <div className="tour-info-content">
                              <h5 className="h6-title">Duration</h5>
                              <p>6 days 3 hours</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="tour-info">
                            <div className="tour-info-icon">
                              <i>
                                <FaUserFriends />
                              </i>
                            </div>
                            <div className="tour-info-content">
                              <h5 className="h6-title">Group Size</h5>
                              <p>15+ People</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tour-box-bottom">
                      <div className="tour-price">
                        <h3 className="h3-title">$2500</h3>
                      </div>
                      <div className="book-now-button">
                        {/* <a href={`/tour/${tour._id}`} className="btn">Book Now</a> */}
                        <a href="" className="btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="tour-box">
                  <div
                    className="tour-box-image back-image"
                    style={tourBoxStyle2}
                  >
                    <span className="discount-label">38% Off</span>
                  </div>
                  <div className="tour-box-content">
                    <div className="tour-box-label">
                      <div className="tour-box-inner-label">
                        <h4 className="h4-title">Jaisalmer</h4>
                      </div>
                    </div>
                    <div className="tour-box-title">
                      <h4 className="h4-title">
                        Holiday Planner is a World Leading Online Tour Booking
                        Platform
                      </h4>
                    </div>
                    <div className="tour-box-description">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove.
                      </p>
                    </div>
                    <div className="tour-info-box">
                      <div className="row">
                        <div className="col-6">
                          <div className="tour-info">
                            <div className="tour-info-icon">
                              <i>
                                <FaClock />
                              </i>
                            </div>
                            <div className="tour-info-content">
                              <h5 className="h6-title">Duration</h5>
                              <p>1 days 8 hours</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="tour-info">
                            <div className="tour-info-icon">
                              <i>
                                <FaUserFriends />
                              </i>
                            </div>
                            <div className="tour-info-content">
                              <h5 className="h6-title">Group Size</h5>
                              <p>50+ People</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tour-box-bottom">
                      <div className="tour-price">
                        <h3 className="h3-title">$750</h3>
                      </div>
                      <div className="book-now-button">
                        {/* <a href={`/tour/${tour._id}`} className="btn">Book Now</a> */}
                        <a href="" className="btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="tour-box">
                  <div
                    className="tour-box-image back-image"
                    style={tourBoxStyle3}
                  ></div>
                  <div className="tour-box-content">
                    <div className="tour-box-label">
                      <div className="tour-box-inner-label">
                        <h4 className="h4-title">Switzerland</h4>
                      </div>
                    </div>
                    <div className="tour-box-title">
                      <h4 className="h4-title">
                        Holiday Planner is a World Leading Online Tour Booking
                        Platform
                      </h4>
                    </div>
                    <div className="tour-box-description">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove.
                      </p>
                    </div>
                    <div className="tour-info-box">
                      <div className="row">
                        <div className="col-6">
                          <div className="tour-info">
                            <div className="tour-info-icon">
                              <i>
                                <FaClock />
                              </i>
                            </div>
                            <div className="tour-info-content">
                              <h5 className="h6-title">Duration</h5>
                              <p>7 days 8 hours</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="tour-info">
                            <div className="tour-info-icon">
                              <i>
                                <FaUserFriends />
                              </i>
                            </div>
                            <div className="tour-info-content">
                              <h5 className="h6-title">Group Size</h5>
                              <p>50+ People</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tour-box-bottom">
                      <div className="tour-price">
                        <h3 className="h3-title">$750</h3>
                      </div>
                      <div className="book-now-button">
                        {/* <a href={`/tour/${tour._id}`} className="btn">Book Now</a> */}
                        <a href="" className="btn">
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-testimonial">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-5">
              <div className="testimonial-left-side pt-70 wow">
                <div className="sec-title">
                  <div className="line-title">
                    <h4 className="h4-title">Testimonials</h4>
                  </div>
                  <h2 className="h2-title">
                    Customer <span>Reviews</span>
                  </h2>
                </div>
                <div className="testimonial-quote">
                  <img src={testimonialQuote} alt="testimonial-quote" />
                </div>
              </div>
            </div>
            <div className="col-6 offset-lg-1">
              <div className="testimonial-right-side wow">
                <div className="testimonial-slider">
                  <div className="testimonial-slide">
                    <div className="testimonial-stars">
                      <i>
                        <FaStar />
                      </i>
                      <i>
                        <FaStar />
                      </i>
                      <i>
                        <FaStar />
                      </i>
                      <i>
                        <FaStar />
                      </i>
                      <i>
                        <FaStar />
                      </i>
                    </div>
                    <div className="overflow-text">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                    </div>
                    <div className="testimonial-name">
                      <h3 className="h3-title">Mathew A. Stephenson</h3>
                      <p className="rated">Rated by travelers on Twitter</p>
                    </div>
                  </div>
                  <div className="testimonial-slide">
                    <div className="testimonial-stars">
                      <i>
                        <FaStar />
                      </i>
                      <i>
                        <FaStar />
                      </i>
                      <i>
                        <FaStar />
                      </i>
                      <i>
                        <FaStar />
                      </i>
                      <i>
                        <FaStar />
                      </i>
                    </div>
                    <div className="overflow-text">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                    </div>
                    <div className="testimonial-name">
                      <h3 className="h3-title">John Doe</h3>
                      <p className="rated">Rated by travelers on Facebook</p>
                    </div>
                  </div>
                  <div className="testimonial-slide">
                    <div className="testimonial-stars">
                      <i>
                        <FaStar />
                      </i>
                      <i>
                        <FaStar />
                      </i>
                      <i>
                        <FaStar />
                      </i>
                      <i>
                        <FaStar />
                      </i>
                      <i>
                        <FaStar />
                      </i>
                    </div>
                    <div className="overflow-text">
                      <p>
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </p>
                    </div>
                    <div className="testimonial-name">
                      <h3 className="h3-title">Minh Chau</h3>
                      <p className="rated">Rated by travelers on Instagram</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-blog pt-70 pb-70">
        <div className="container">
          <div className="row">
            <div className="col-8">
              <div className="sec-title wow">
                <div className="line-title">
                  <h4 className="h4-title">Latest News</h4>
                </div>
                <h2 className="h2-title">
                  Learn More <span>About Tours</span>
                </h2>
              </div>
            </div>
            <div className="col-4">
              <div className="blog-learn-btn for-des wow">
                <a href="/" className="btn">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>

          <div className="row blog-slider wow">
            <div className="col-4">
              <div className="blog-box">
                <div
                  className="blog-image back-image overlay"
                  style={blogStyle1}
                ></div>
                <div className="blog-box-content">
                  <h3 className="h3-title">
                    <a href="/">Things to See and Do When Visiting Japan</a>
                  </h3>
                  <p className="date">
                    <a href="/">June 18, 2023</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="blog-box">
                <div
                  className="blog-image back-image overlay"
                  style={blogStyle2}
                ></div>
                <div className="blog-box-content">
                  <h3 className="h3-title">
                    <a href="/">
                      Travel the Most Beautiful Places in the World
                    </a>
                  </h3>
                  <p className="date">
                    <a href="/">October 18, 2023</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-4">
              <div className="blog-box">
                <div
                  className="blog-image back-image overlay"
                  style={blogStyle3}
                ></div>
                <div className="blog-box-content">
                  <h3 className="h3-title">
                    <a href="/">Journeys are Best Measured in New Friends</a>
                  </h3>
                  <p className="date">
                    <a href="/">May 18, 2023</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="blog-learn-btn for-mob wow">
                <a href="/" className="btn">
                  <span>Learn More</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="main-instagram bg-f6 common-sec">
        <div className="instagram-icon">
          <i>
            <FaInstagram />
          </i>
        </div>
        <div className="sec-wp">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-title wow">
                  <div className="line-title">
                    <h4 className="h4-title">Instagram</h4>
                  </div>
                  <h2 className="h2-title">
                    <span>
                      <a href="/">@Holidayplanners</a>
                    </span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row instagram-slider wow">
              <div className="col-2">
                <div className="instagram-slide-box">
                  <div
                    className="instagram-slide-image back-image"
                    style={instagramStyle1}
                  ></div>
                </div>
              </div>
              <div className="col-2">
                <div className="instagram-slide-box">
                  <div
                    className="instagram-slide-image back-image"
                    style={instagramStyle2}
                  ></div>
                </div>
              </div>
              <div className="col-2">
                <div className="instagram-slide-box">
                  <div
                    className="instagram-slide-image back-image"
                    style={instagramStyle3}
                  ></div>
                </div>
              </div>
              <div className="col-2">
                <div className="instagram-slide-box">
                  <div
                    className="instagram-slide-image back-image"
                    style={instagramStyle4}
                  ></div>
                </div>
              </div>
              <div className="col-2">
                <div className="instagram-slide-box">
                  <div
                    className="instagram-slide-image back-image"
                    style={instagramStyle5}
                  ></div>
                </div>
              </div>
              <div className="col-2">
                <div className="instagram-slide-box">
                  <div
                    className="instagram-slide-image back-image"
                    style={instagramStyle6}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="main-partners common-sec">
        <div className="sec-wp">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="sec-title wow">
                  <div className="line-title">
                    <h4 className="h4-title">Partners</h4>
                  </div>
                  <h2 className="h2-title">
                    Our <span>Members</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row partners-slider wow">
              <div className="col-3">
                <div className="partners-logo-box">
                  <img src={partnerLogo1} alt="partners" />
                </div>
              </div>
              <div className="col-3">
                <div className="partners-logo-box">
                  <img src={partnerLogo2} alt="partners" />
                </div>
              </div>
              <div className="col-3">
                <div className="partners-logo-box">
                  <img src={partnerLogo3} alt="partners" />
                </div>
              </div>
              <div className="col-3">
                <div className="partners-logo-box">
                  <img src={partnerLogo4} alt="partners" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default home;
