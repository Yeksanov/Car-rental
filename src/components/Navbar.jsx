import { Link } from "react-router-dom";
import Logo from "../images/logo/logo-2.jpg";
import { useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile */}
        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <IconX width={30} height={30} />
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link onClick={openNav} to="/">
                Басты бет
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/about">
                Компания туралы
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/models">
              Автокөлік модельдері
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/testimonials">
              Пікірлер
              </Link>
            </li>
            <li>
              <Link onClick={openNav} to="/contact">
                Байланыс телефоны
              </Link>
            </li>
          </ul>
        </div>

        {/* desktop */}

        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Басты бет
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
              Компания туралы
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
              Автокөлік модельдері
              </Link>
            </li>
            <li>
              {" "}
              <Link className="testi-link" to="/testimonials">
              Пікірлер
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
              Байланыс телефоны
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/">
              Кіру
            </Link>
            <Link className="navbar__buttons__register" to="/">
              Тіркелу
            </Link>
          </div>

          {/* mobile */}
          <div className="mobile-hamb" onClick={openNav}>
            <IconMenu2 width={30} height={30} />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
