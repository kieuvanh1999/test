import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import $ from "jquery";
import api from "../../api/axiosConfig";

import "./nav.scss";

export default function Navs() {
  const [navs, setNav] = useState([]);

  useEffect(() => {
    api
      .get(`menu/list`)
      .then((res) => {
        console.log(res);
        setNav(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    document.addEventListener("scroll", checkScroll);
    return () => document.removeEventListener("scroll", checkScroll);
  }, []);

  const checkScroll = (e) => {
    const bar = document.getElementById("bar");
    if (window.scrollY >= bar.offsetTop) {
      $("#VCFUFYOYUZ").addClass("posFixed");
    } else {
      $("#VCFUFYOYUZ").removeClass("posFixed");
    }
  };

  return (
    <>
      <div className="QQCGJWXQHJ">
        <nav className="LARSGEXGDJ" id="VCFUFYOYUZ">
          <Navbar expand="lg" className="BLUPFEPWZM bg-body-tertiary ">
            <Container>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="LZNJDIWQNG me-auto ">
                  {navs.map((item, i) => {
                    return (
                      <>
                        <NavDropdown
                          className="MSOADDWGHA"
                          title={item.title}
                          id="basic-nav-dropdown"
                          to={item.link}
                          key={i}
                        >
                          <div className="OATEDHUOJP">
                            {item.menu_info.map((items, is) => {
                              return (
                                <NavDropdown.Item
                                  className="CIXRGLHEHM"
                                  href={items.link}
                                  key={is}
                                >
                                  {items.title}
                                </NavDropdown.Item>
                              );
                            })}
                          </div>
                        </NavDropdown>
                      </>
                    );
                  })}
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
      </div>
       {/* <div className="dropdown">
        {navs.map((item, i) => {
          return (
            <>
              <button
                type="button"
                className="btn dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                key={i}
              >
                {item.title}
              </button>
            </>
          );
        })}

        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        {navs.map((item, i) => {
          return (
            <>
              {item.menu_info.map((item, i) => {
                return(
                  <>
                  
                  </>
                )
              })}
            </>
          );
        })}
        </div>
      </div> */}

    </>
  );
}
