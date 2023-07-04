import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import api from "../../api/axiosConfig";

import "./nav.scss";

export default function Navs() {
  const [navs, setNav] = useState([]);

  let scrollpos = window.scrollY;
  const header = document.querySelector("DUPARJWAQA");
  const header_height = header.offsetHeight;

  const add_class_on_scroll = () => header.classList.add("fade-in");
  const remove_class_on_scroll = () => header.classList.remove("fade-in");

  useEffect(() => {
    window.addEventListener("scroll", function () {
      scrollpos = window.scrollY;

      if (scrollpos >= header_height) {
        add_class_on_scroll();
      } else {
        remove_class_on_scroll();
      }
    });

    api
      .get(`menu/list`)
      .then((res) => {
        console.log(res);
        setNav(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <nav className="DUPARJWAQA">
        <Navbar expand="lg" className="BLUPFEPWZM bg-body-tertiary ">
          <Container>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="LZNJDIWQNG me-auto ">
                {navs.map((item, i) => {
                  return (
                    <NavDropdown
                      className="MSOADDWGHA"
                      title={item.title}
                      id="basic-nav-dropdown"
                      to={item.link}
                      key={i}
                    >
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
                    </NavDropdown>
                  );
                })}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </>
  );
}
