import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorite movies</NavLink>
      </nav>
    </header>
  );
};
export default Navigation;
