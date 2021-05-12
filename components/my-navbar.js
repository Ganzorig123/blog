import { Navbar, Nav } from "react-bootstrap";
import Toggle from "react-toggle";
import { useTheme } from "hooks/use-theme";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar className="fj-navbar fj-nav-base" bg="transparent" expand="lg">
      <Navbar.Brand className="fj-navbar-brand">
        <Link href="/">
          <a style={{ color: theme.fontColor }}>1234 БЛОГ</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <label style={{ paddingTop: 7 }}>
            <Toggle
              className="day-night-toggle"
              icons={{
                checked: (
                  <FontAwesomeIcon
                    inverse
                    icon={theme.type === "dark" ? faMoon : faSun}
                  />
                ),
                unchecked: (
                  <FontAwesomeIcon
                    inverse
                    icon={theme.type === "dark" ? faMoon : faSun}
                  />
                ),
              }}
              onChange={toggleTheme}
            />
          </label>
          <Nav.Link className="fj-navbar-item fj-navbar-link" href="/">
            HYYP
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
