import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import Navs from "../Navs";
import logo from "../../assets/prudential-logo-181x32.png";
import search from "../../assets/magnifying-glass-solid.svg";
import phone from "../../assets/phone-solid.svg";
import bag from "../../assets/bag-shopping-solid.svg";

import "./header.scss";
import $ from "jquery";

function Header() {
  const [show, setShow] = useState(false);

  useEffect(() => {
  }, []);
  return (
    <>
      <header className="FSFSLISEYX" id="RVHKIKZEQT">
        <div className="AXLNFKTHIK ">
          <div className="EZLIFAURXH">
            <div className="DTXHJCTGBN container">
              <Link className="DMVONWOQZB" to="/" title="Logo">
                <img className=" lazyloaded" src={logo} />
              </Link>
              <div className="MOQOZDYZAZ d-none d-md-flex">
                <div
                  className="MTJABTOJYV header__search-bar"
                  data-header-popup="search"
                >
                  <div className="VVZHBJNIDN">
                    <img src={search} alt="" />
                  </div>
                </div>
                <a
                  className="MOGYQAOHWY header__contact"
                  href="javascript:;"
                  title="Contact"
                  data-header-popup="contact"
                >
                  <div className="WQCDPKWIWU">
                    <img src={phone} alt="" />
                  </div>
                </a>
                <a
                  title="Mua bảo hiểm trên ePru"
                  className="LFIIQGTJJQ header__prueshop"
                  target="_blank"
                >
                  <div className="MJGTCNSIIL">
                    <img src={bag} alt="" />
                  </div>
                  <span>Mua bảo hiểm trên ePru</span>
                </a>
                <div className="OAODGOZMIL">
                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <span className="NGQRTRIQQL">Cá Nhân</span>
                  </NavLink>
                  <NavLink
                    to="/doanh-nghiep"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "active" : ""
                    }
                  >
                    <span className="LPVJNREHYA">Doanh Nghiệp</span>
                  </NavLink>
                </div>
                <a
                  className="TJZIFBLZQV"
                  href="javascript:;"
                  title="Đăng nhập"
                  data-header-popup="login"
                >
                  Đăng nhập
                </a>
              </div>
              <div className="QVDKTNEEOS d-md-none d-sm-flex">
                <div className="ARSPLBIXNG" data-header-popup="search">
                  <div className="PZZLZXUMVW"></div>
                </div>
                <a
                  className="BTQHIQIMNT"
                  href="javascript:;"
                  title="Contact"
                  data-header-popup="contact"
                >
                  <div className="CERNVMORLC"></div>
                </a>
                <div className="MAUVZPAVDT" data-toggle-mobile-nav="">
                  <div className="DTZNWWHQKG"></div>
                  <div className="YZPZURSUDP"></div>
                </div>
              </div>
            </div>
            <div className={`DBLCIGAMRJ ${show ? 'RBBOOAIYKV' : ''}`}></div>
          </div>
          <div id="bar"  className="GVFQDRSWEY" onClick={() => setShow(!show)}>
            <Navs />
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
