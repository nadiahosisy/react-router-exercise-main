import { Outlet, NavLink } from "react-router-dom";

const SharedLayout = ({ user }) => {
  return (
    <div className="container">
      <header>
        <h1>Welcome to Our WebApp</h1>
        <div className="header-right">
          {user && <span>Hello, {user.name}</span>}
        </div>
      </header>
      <nav>
        <ul className="nav-links">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            />
          </li>
          <li>
            <NavLink
              to={"/add"}
              className={({ isActive }) => (isActive ? "active" : undefined)}
            />
          </li>
        </ul>
      </nav>
      {/* Your code here */}
      <footer>
        <p>All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default SharedLayout;
