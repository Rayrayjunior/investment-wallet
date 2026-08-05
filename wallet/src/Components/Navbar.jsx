import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Investment Wallet</h2>

      <NavLink to="/">Dashboard</NavLink>

      <NavLink to="/portfolio">Portfolio</NavLink>

      <NavLink to="/transactions">Transactions</NavLink>

      <NavLink to="/wallet">Wallet</NavLink>

      <NavLink to="/watchlist">Watchlist</NavLink>

      <NavLink to="/settings">Settings</NavLink>
    </nav>
  );
}

export default Navbar;