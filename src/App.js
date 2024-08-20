import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  // Toggle overlay visibility and animate nav items
  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  const navItems = [
    { id: "nav-1", label: "Home", href: "#home" },
    { id: "nav-2", label: "About", href: "#about" },
    { id: "nav-3", label: "Skills", href: "#skills" },
    { id: "nav-4", label: "Projects", href: "#projects" },
    { id: "nav-5", label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* MENU OVERLAY */}
      <div
        className={`overlay ${
          isOverlayVisible ? "overlay-active overlay-slide-right" : "overlay-slide-left"
        }`}
        id="overlay"
      >
        {/* MENU ITEMS */}
        <nav>
          <ul>
            {navItems.map((navItem, index) => (
              <li
                key={navItem.id}
                id={navItem.id}
                className={`slide-${isOverlayVisible ? "in" : "out"}-${index + 1} center`}
              >
                <a href={navItem.href} className="center" onClick={toggleOverlay}>
                  {navItem.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* HAMBURGER MENU */}
      <div className="hamburger-menu" id="hamburger-menu" onClick={toggleOverlay}>
        <div className={`menu-bar1 ${isOverlayVisible ? "active" : ""}`}></div>
        <div className={`menu-bar2 ${isOverlayVisible ? "active" : ""}`}></div>
        <div className={`menu-bar3 ${isOverlayVisible ? "active" : ""}`}></div>
      </div>

      {/* SECTIONS */}
      <section id="home" className="center">
        <p className="logo" ></p>
        <div className="con1">
<h2><img 
  src="/SAE LOGO RED AND WHITE.png" 
  alt="Logo" 
  style={{ 
    width: '400px', 
    height: 'auto', 
    position: 'fixed', 
    top: '1rem', 
    left: '0rem' // Adjust this value to move the image further left
  }} />
</h2>
          <h1 class="typewriter">WE ARE SAE</h1>
  <h2 style={{ fontSize: '25px' }}>SOCIETY OF AUTOMOTIVE ENGINEERS</h2>
  <h2 style={{ fontSize: '25px' }}>NIT DURGAPUR</h2>
  {/* <h2 style={{ fontSize: '50px' ,marginTop:'50px' , color:'red'}}>ABOUT US</h2>
<h2 style={{ fontSize: '25px' ,lineHeight:'50px' }}>
  The SAE India collegiate club of NIT Durgapur successfully fosters a passion for automotive engineering among students through its annual innovative events, including webinars and workshops, creating a competitive environment that draws top talent.

  Being a vital part of Team Avishkar, the club contributes to the organization of NIT Durgapur's official technical fest. Furthermore, the club publishes Autopia, an annual magazine that offers a comprehensive overview of the latest automotive technologies, catering to automobile enthusiasts. The club's BAJA SAE team represents NIT Durgapur at the national level under the name NDORS in the BAJA competition hosted by SAE India.
</h2> */}

  </div>
      </section>
      <hr id="hr"></hr>
     <section id="about" className="center">
  <h1 style={{ fontSize: '50px',color:'red',font:'monospace' }}>OUR EVENTS</h1>
  <div className="gcard-container">
    <div className="gcard"><div class="card" id="card">
  <div class="content">
    <span>HOVER ME</span>
  </div>
</div>
</div>



    <div className="gcard"><div class="card" id="card">
  <div class="content">
    <span>HOVER ME</span>
  </div>
</div>
</div>



    <div className="gcard"><div class="card" id="card">
  <div class="content">
    <span>HOVER ME</span>
  </div>
</div>
</div>


 <div className="gcard"><div class="card" id="card">
  <div class="content">
    <span>HOVER ME</span>
  </div>
</div>
</div>

 <div className="gcard"><div class="card" id="card">
  <div class="content">
    <span>HOVER ME</span>
  </div>
</div>
</div>

 <div className="gcard"><div class="card" id="card">
  <div class="content">
    <span>HOVER ME</span>
  </div>
</div>
</div>
    
  </div>
</section>

      <hr id="hr"></hr>
      <section id="skills" className="center">
        <h1 style={{ fontSize: '50px',color:'red',font:'monospace' }}>OUR OFFICE BEARER</h1>





      </section>
<hr id="hr"></hr>
      <section id="projects" className="center">
        <h1>Here's stuff I made recently</h1>
      </section>
      <hr id="hr"></hr>
      <section id="contact" className="center">
        <h1>Have me make stuff for you</h1>
      </section>
    </>
  );
}

export default App;

