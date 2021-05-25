
import React, { useState } from "react";

const Nav = () => {
    //state
    const [sidebar, sidebarHandler] = useState(false);
    //function
    const sideBarShowing = () => sidebarHandler(!sidebar) 
    
    return (
        <div className="nav">
            <nav>
                <h1 id="logo">Digitally</h1>
                <ul className={sidebar ? "nav-links active" : "nav-links"}>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                <div className={sidebar ? "burger active" : "burger"}
                onClick={sideBarShowing}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </nav>
        </div>
    )
}

export default Nav;


// SIDEBAR VANILLA JAVASCRIPT

/* const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});*/
