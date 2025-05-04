import React, { useState } from "react";

const logoUrl = "https://www.uengage.in/images/addo/logos/logo-59827-1744889459.jpeg";

const navLinks = [
  { label: "Home", href: "https://kakedihatti.com/" },
  { label: "Store Locator", href: "https://kakedihatti.com/store-locator" },
  { label: "Order Now", href: "https://kakedihatti.com/online-order" },
  { label: "Franchise Enquiry", href: "https://kakedihatti.com/franchise-enquiry" },
];

const Header: React.FC = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [sideNavOpen, setSideNavOpen] = useState(false);

  // Dummy user info for sidebar
  const userName = ""; // Replace with actual user name
  const userEmail = ""; // Replace with actual user email

  // Handlers
  const handleNavToggle = () => setNavOpen((prev) => !prev);
  const handleSideNavOpen = () => setSideNavOpen(true);
  const handleSideNavClose = () => setSideNavOpen(false);

  // Logout handler (replace with your logic)
  const handleLogout = (e: React.MouseEvent) => {
    e.preventDefault();
    // logout logic here
    setSideNavOpen(false);
  };

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg fixed-top main-navigation site-nav"
        id="site-navigation"
        aria-label="Primary Navigation"
        style={{ background: "#fff", color: "#fa8708" }}
      >
        <div
          className="container"
          style={{
            background: "#fff",
            color: "#fa8708",
            minHeight: "4.5em",
          }}
        >
          {/* Logo Desktop */}
          <a
            href="https://kakedihatti.com/"
            className="custom-logo-link d-none d-md-flex"
            rel="home"
          >
            <img src={logoUrl} width={500} height={170} alt="Logo" />
          </a>
          {/* Logo Mobile */}
          <a
            href="https://kakedihatti.com/"
            className="custom-logo-link d-block d-md-none"
            rel="home"
          >
            <img src={logoUrl} width={500} height={170} alt="Logo" />
          </a>

          {/* Hamburger */}
          <button
            className="navbar-toggler wrapper-menu p-0"
            type="button"
            aria-controls="navbarToggle"
            aria-expanded={navOpen}
            aria-label="Toggle navigation"
            id="menu-showhide"
            onClick={handleNavToggle}
          >
            <div className="burger-on-yellow">
              <div className="line1" style={{ backgroundColor: "#fa8708" }} />
              <div className="line2" style={{ backgroundColor: "#fa8708" }} />
              <div className="line3" style={{ backgroundColor: "#fa8708" }} />
            </div>
          </button>

          {/* Nav Links */}
          <div
            className={`navbar-collapse collapse p-0${navOpen ? " show" : ""}`}
            id="navbarToggle"
            style={{
              justifyContent: "right",
              background: "#fff",
            }}
          >
            <ul className="navbar-nav">
              {navLinks.map((link) => (
                <li className="nav-item active" key={link.label}>
                  <a className="nav-link page-scroll" href={link.href}>
                    <span>{link.label}</span>
                    <i className="las la-angle-right" />
                  </a>
                </li>
              ))}
              <li className="nav-item active" key="login">
                <span className="nav-link page-scroll"  style={{ cursor: "pointer", color: "#fa8708" }}>
                  <i className="fa fa-user"></i>
                </span>
              </li>
              <li className="nav-item login-outer active">
                <div className="row">
                  <div className="col-12">
                    <a
                      className="nav-link page-scroll btn btn-primary border-only"
                      href="https://kakedihatti.com/online-order"
                    >
                      Order Online
                    </a>
                  </div>
                </div>
              </li>
            </ul>
            {/* Bottom Side Nav (Mobile Only) */}
            <div className="bottomsidenav d-inline d-md-none pt-0">
              <div className="social-sidenav d-none">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://kakedihatti.com/assets/wla_new/img/facebook.svg"
                    alt="Facebook"
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://kakedihatti.com/assets/wla_new/img/instagram.svg"
                    alt="Instagram"
                  />
                </a>
              </div>
              <div
                className="uenagage-intro mt-0 pt-0 d-none"
                style={{ background: "#fff" }}
              >
                <div className="uenagage-intro-left" style={{ display: "contents" }}>
                  Powered By{" "}
                  <a
                    href="https://www.uengage.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="https://www.uengage.in/assets/uen/img/ue-logo-2022.jpg"
                      alt="Uengage Logo New"
                      width={500}
                      height={129}
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Top Icons */}
          <ul className="navbar-nav top-icon ml-auto">
            {/* These buttons are hidden by default, add logic to show/hide as needed */}
            <li className="nav-item" id="welLgBTN" style={{ display: "none" }}>
              <span
                className="nav-link myDiv newbtnspant"
                style={{
                  background: "#fff",
                  color: "#fa8708",
                  cursor: "pointer",
                }}
              >
                <i className="la la-user" />
              </span>
            </li>
            <li className="nav-item" id="lgBtn" style={{ display: "none" }}>
              <span
                className="nav-link"
                style={{ color: "#fa8708", cursor: "pointer" }}
                // onClick={openLogin} // Implement your login logic
              >
                <i className="las la-sign-in-alt" />
              </span>
            </li>
          </ul>
        </div>
      </nav>

      {/* Overlay SideNav */}
      <div
        className="uengageoverlay"
        style={{
          display: sideNavOpen ? "block" : "none",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          background: "rgba(0,0,0,0.5)",
        }}
      >
        <div
          id="mySidenav"
          className="sidenav"
          style={{
            width: sideNavOpen ? 300 : 0,
            transition: "width 0.3s",
            background: "#fff",
            padding: "1em",
            height: "100%",
            overflowY: "auto",
          }}
        >
          <span
            className="overlayclose closebtn d-md-block d-none"
            onClick={handleSideNavClose}
            style={{ cursor: "pointer" }}
          >
            <i className="las la-times" />
          </span>
          <div className="height-mm">
            {/* Top SideNav */}
            <div className="topsidenav">
              <a href="#" className="top-main-a pb-0">
                <span className="profile-tb">
                  <div>
                    <div className="slidebar-img">
                      <img
                        src="https://kakedihatti.com/assets/wla_new/img/profile_new.png"
                        alt="Profile"
                        width={60}
                        height={60}
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <p className="user-sidebar-n">
                    <span className="sidebar-user-name">
                      <span id="namevalue">{userName}</span>
                    </span>
                    <span id="emailvalue">{userEmail}</span>
                  </p>
                </span>
              </a>
              <a href="/profile" className="top-main-a">
                <span>
                  <img
                    src="https://kakedihatti.com/assets/wla_new/img/personal_info_ic.png"
                    alt="Icon Feather User"
                    width={18}
                    height={20}
                  />
                  Personal Information
                </span>
              </a>
              <a href="/past-order" className="top-main-a">
                <span>
                  <img
                    src="https://kakedihatti.com/assets/wla_new/img/my_orders_ic.png"
                    alt="My orders ic"
                    width={18}
                    height={20}
                  />
                  My Orders
                </span>
              </a>
              <a href="/past-reservations" className="top-main-a">
                <span>
                  <img
                    src="https://kakedihatti.com/assets/wla_new/img/my_reservations_ic.png"
                    alt="My reservations ic"
                    width={18}
                    height={20}
                  />
                  My Reservations
                </span>
              </a>
              <a href="/manage-address" className="top-main-a">
                <span>
                  <img
                    src="https://kakedihatti.com/assets/wla_new/img/manage_address_ic.png"
                    alt="Manage address ic"
                    width={18}
                    height={20}
                  />
                  Manage Addresses
                </span>
              </a>
              <a
                href="#"
                className="top-main-a"
                // data-toggle="modal"
                // data-target="#faqsmodal"
                id="faqmodalneww"
              >
                <span>
                  <img
                    src="https://kakedihatti.com/assets/wla_new/img/faq_ic.png"
                    alt="faq ic"
                    width={18}
                    height={20}
                  />
                  FAQs
                </span>
              </a>
              <a href="/refund-policy" className="top-main-a">
                <span>
                  <img
                    src="https://kakedihatti.com/assets/wla_new/img/track_refund_ic.png"
                    alt="track refund ic"
                    width={18}
                    height={20}
                  />
                  How to track my Refund?
                </span>
              </a>
              <a
                href="#"
                className="top-main-a"
                id="showRaiseConcern"
                style={{ borderBottom: "none", display: "none" }}
                // data-toggle="modal"
                // data-target="#raseaconcern"
              >
                <span>
                  <img
                    src="https://kakedihatti.com/assets/wla_new/img/concern_ic.png"
                    alt="Raise a Concern"
                    width={18}
                    height={20}
                  />
                  Raise a Concern
                </span>
              </a>
              <a
                href=""
                target="_blank"
                className="top-main-a d-none"
                rel="noopener noreferrer"
              >
                <span>Download App</span>
                <span>
                  <img
                    src="https://kakedihatti.com/assets/wla_new/img/right-arrow-angle-black.png"
                    alt="Right Arrow Angle Black"
                    width={18}
                    height={18}
                  />
                </span>
              </a>
              <div className="nav-item login-outer d-block">
                <div className="row">
                  <div className="col-12">
                    <a
                      href="#"
                      id="logout"
                      className="nav-link page-scroll btn btn-primary border-only"
                      style={{
                        padding: "12px 0px",
                        display: "flex",
                        alignItems: "center",
                        background: "#fff",
                        borderRadius: 5,
                        border: "none",
                        justifyContent: "center",
                        color: "#000",
                      }}
                      onClick={handleLogout}
                    >
                      <i
                        className="las la-sign-out-alt"
                        style={{ marginRight: 5 }}
                      />
                      Logout
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom SideNav */}
            <div className="bottomsidenav">
              <div className="social-sidenav d-none">
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://kakedihatti.com/assets/wla_new/img/facebook.svg"
                    alt="Facebook"
                  />
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                  <img
                    src="https://kakedihatti.com/assets/wla_new/img/instagram.svg"
                    alt="Instagram"
                  />
                </a>
              </div>
              <div
                className="uenagage-intro"
                style={{ background: "none" }}
              >
                <div
                  className="uenagage-intro-left"
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    color: "#fa8708",
                  }}
                >
                  <span>Powered By</span>
                  <a
                    href="https://www.uengage.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: 4 }}
                  >
                    <span>
                      <img
                        src="https://kakedihatti.com/assets/wla_new/img/uengage-logo-green.svg"
                        alt="Uengage Logo Green"
                        width={120}
                        height={27}
                        style={{
                          width: "100%",
                          maxWidth: 90,
                          marginLeft: 5,
                        }}
                        loading="lazy"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Add a button to open the side nav */}
      {/* <button onClick={handleSideNavOpen}>Open SideNav</button> */}
    </header>
  );
};

export default Header;