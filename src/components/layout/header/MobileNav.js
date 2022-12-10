import { NAV_LINKS } from "../../../pageData/data";
import NavLink from "../../ui/NavLink";
import classes from "./MobileNav.module.css";
import LinkedIn from "../../svgs/LinkedIn";
import Mail from "../../svgs/Mail";

const MobileNav = ({ setOpen, isOpen }) => {
  return (
    <div className={`${classes.MobileNav} ${isOpen ? classes.Open : ""}`}>
      <nav className={classes.Nav}>
        <ul className={classes.NavList}>
          {NAV_LINKS.map(({ name, id, href }) => (
            <NavLink href={`#${href}`} key={id} setOpen={setOpen}>
              {name}
            </NavLink>
          ))}
        </ul>
      </nav>
      <div className={classes.LinksWrapper}>
        <a
          href="https://www.linkedin.com/company/toros-advisory/"
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
        </a>
        <a href="mailto:info@torosadvisory.com">
          <Mail />
        </a>
      </div>
    </div>
  );
};

export default MobileNav;
