//react class component, rcc
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  render() {
    //Phương thức render: Chứa giao diện html của component
    //Nội dung component phải được bao phủ bởi 1 thẻ
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="/baitapgamexucxac">
            Cybersoft
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/baitapgamexucxac"
                  // style={({ isActive }) => (isActive ? { fontSize: 30 } : {})}
                  aria-current="page"
                >
                  Baitapxucxac
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/"
                  style={({ isActive }) => (isActive ? { fontSize: 30 } : {})}
                >
                  Redux
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/"
                  style={({ isActive }) => (isActive ? { fontSize: 30 } : {})}
                >
                  register
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-link active bg-dark text-white" : "nav-link"
                  }
                  to="/"
                  style={({ isActive }) => (isActive ? { fontSize: 30 } : {})}
                >
                  Form
                </NavLink>
              </li> */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hook
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/hook-use-state">
                    UseState
                  </NavLink>
                  <NavLink className="dropdown-item" to="/hook-use-effect">
                    UseEffect
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/hook-use-effect-update"
                  >
                    UseEffectUp
                  </NavLink>
                  <NavLink className="dropdown-item" to="/hook-use-callback">
                    UseCallback
                  </NavLink>
                  <NavLink className="dropdown-item" to="/hook-use-memo">
                    UseMemo
                  </NavLink>
                  <NavLink className="dropdown-item" to="/hook-use-ref">
                    UseRef
                  </NavLink>
                  <NavLink className="dropdown-item" to="/hook-use-redux">
                    UseRedux
                  </NavLink>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Hooks Router
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/hook-use-navigate">
                    UseNavigate
                  </NavLink>
                  <NavLink className="dropdown-item" to="/detail">
                    UseParam
                  </NavLink>
                  <NavLink
                    className="dropdown-item"
                    to="/hook-use-search-params"
                  >
                    UseSearchParams
                  </NavLink>
                  <NavLink className="dropdown-item" to="/demo-custom">
                    CustomHook
                  </NavLink>
                </div>
              </li>
            </ul>
            {/* <div className="d-flex my-2 my-lg-0">
              <NavLink to={"/btgiohang"}>
                <i className="fa fa-cart-plus" style={{ fontSize: 20 }}></i>
              </NavLink>
            </div> */}
          </div>
        </div>
      </nav>
    );
  }
}
