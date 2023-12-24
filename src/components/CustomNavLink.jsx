/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

function CustomNavLink({ children, onClick = null, to, className }) {
  const isString = typeof children === "string";
  const activeClasses = isString
    ? " text-primary-600 underline underline-offset-2 hover:text-primary-300"
    : "";
  const inActiveClasses = isString
    ? " text-secondary-600 hover:text-secondary-400"
    : "";
  return (
    <li className="list-none">
      <NavLink
        onClick={onClick}
        to={to}
        className={({ isActive }) =>
          [
            "flex items-center gap-2",
            isActive ? activeClasses : inActiveClasses,
          ].join(" " + className)
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default CustomNavLink;
