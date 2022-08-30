import React, { useContext, useEffect } from "react";
import Menu from "./Menu";
import { Link, useNavigate, Navigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.svg";
import cart from "../../assets/shopping_cart.svg";
import { AppContext } from "../../context/App-context";
import PageSearch from "../../pages/search/Page-search";
import Search from "../Search";
interface NavBarProps {}

type Item = {
  text: string;
  link: string;
};
interface IMenu {
  menu: Array<Item>;
}

const NavBar: React.FunctionComponent<NavBarProps> = () => {
  const { userLogged, logout } = useContext(AppContext);
  const user = userLogged.userLogged;
  const location = useLocation();
  const navigate = useNavigate();
  console.log(userLogged);

  function handlerCart() {
    user
      ? navigate("/carrito")
      : navigate("/login", {
          state: {
            from: {
              ...location,
              pathname: "/carrito",
            },
          },
        });
  }
  useEffect(() => {}, [userLogged]);
  const menu: IMenu["menu"] = [
    {
      text: "home",
      link: "/",
    },

    {
      text: "Juguetes",
      link: "/juguetes",
    },
  ];

  return (
    <section className="sticky-top bg-white" style={{ backgroundColor: "#EAEBF3" }} id="navBar">
      <nav className="navbar navbar-expand-lg p-3 border-bottom container_navbar ">
        <div className="container-fluid ">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bi bi-list"></span>
          </button>

          <Link to={"/"} className="container-logo-nav-bar">
            <img src={logo} alt="Logo ong" height={"40px"} className="m-auto none" />
          </Link>
          <div className="containerCartNavBar">
            <img src={cart} alt="Logo ong" height={"40px"} style={{ transform: "scale(0.6)" }} onClick={handlerCart} />
            {user && <h6 style={user.shoppingCart.length < 10 ? { right: "-0.3rem" } : { right: "-1rem" }}>{user.shoppingCart.length}</h6>}
          </div>
          <div className="collapse navbar-collapse  " id="navbarSupportedContent">
            <div className="container-menu">
              <ul className="navbar-nav me-auto">
                {menu.map((item: Item) => (
                  <Menu key={item.text} text={item.text} link={item.link} />
                ))}
              </ul>
            </div>
            <div className="cont-search-user-nav-bar">
              <div className="active-serarch-top">
                <Search />
              </div>
              <div className="container-logo-user">
                {user ? (
                  <button
                    className="btn btn-danger mx-3  rounded-pill"
                    type="submit"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Log Out
                  </button>
                ) : (
                  <div className="">
                    <button
                      className="btn text-dark rounded-pill border border-dark mx-3"
                      type="submit"
                      onClick={() => {
                        navigate("/login");
                      }}
                    >
                      <i className="bi bi-person"></i>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default NavBar;
