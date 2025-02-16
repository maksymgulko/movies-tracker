import { NavLink } from "react-router";
// import { Tabs } from "@chakra-ui/react";

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorite movies</NavLink>
        <NavLink to="/search">Search Page</NavLink>
      </nav>
    </header>
  );
};
export default Navigation;
