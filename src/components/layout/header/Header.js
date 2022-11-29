import { useState, useEffect } from "react";
import NavLink from "../../ui/NavLink";
import Hamburger from "hamburger-react";
import Logo from "../../ui/Logo";
import classes from "./Header.module.css";
import MobileNav from "./MobileNav";
import { NAV_LINKS } from "../../../pageData/data";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [headerIsVisible, setHeaderIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderIsVisible(window.pageYOffset > 1);

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`${classes.Header} ${classes.Initial} ${
          headerIsVisible ? classes.Close : ""
        }`}
      >
        <div className={`${classes.NavWrapper} container`}>
          <Logo headerIsVisible={headerIsVisible} />
          <nav className={classes.Nav}>
            <ul className={classes.NavList}>
              {NAV_LINKS.map(({ name, id, href }) => (
                <NavLink href={`#${href}`} key={id} setOpen={setOpen}>
                  {name}
                </NavLink>
              ))}
            </ul>
          </nav>
          <MobileNav
            isOpen={isOpen}
            setOpen={() => {
              setOpen(false);
            }}
          />
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </header>
      <header
        className={`${classes.Header} ${classes.OnScroll} ${
          headerIsVisible ? classes.Open : ""
        }`}
      >
        <div className={`${classes.NavWrapper} container`}>
          <Logo headerIsVisible={headerIsVisible} />
          <nav className={classes.Nav}>
            <ul className={classes.NavList}>
              {NAV_LINKS.map(({ name, id, href }) => (
                <NavLink href={`#${href}`} key={id} setOpen={setOpen}>
                  {name}
                </NavLink>
              ))}
            </ul>
          </nav>
          <MobileNav
            isOpen={isOpen}
            setOpen={() => {
              setOpen(false);
            }}
          />
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
      </header>
    </>
  );
};

export default Header;
