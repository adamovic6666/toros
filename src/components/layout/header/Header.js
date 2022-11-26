import { useState } from "react";
import NavLink from "../../ui/NavLink";
import Hamburger from "hamburger-react";
import Logo from "../../ui/Logo";
import classes from "./Header.module.css";
import MobileNav from "./MobileNav";
import { NAV_LINKS } from "../../../pageData/data";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className={classes.Header}>
      <div className={`${classes.NavWrapper} container`}>
        <Logo />
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
  );
};

export default Header;
