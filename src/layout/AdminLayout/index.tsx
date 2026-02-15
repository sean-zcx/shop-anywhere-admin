import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./AdminLayout.css";

const navItems = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/products", label: "Products" },
  { to: "/orders", label: "Orders" },
  { to: "/customers", label: "Customers" },
  { to: "/employees", label: "Employees" },
  { to: "/settings", label: "Settings" },
  { to: "/logs", label: "Logs" },
];

export default function AdminLayout() {
  return (
    <div className="admin">
      {/* Top header */}
      <header className="admin__header">
        <div className="admin__headerInner">
          <div className="admin__brand">Ecommerce Admin</div>
          <div className="admin__user">Admin</div>
        </div>
      </header>

      {/* Body */}
      <div className="admin__body">
        {/* Sidebar */}
        <aside className="admin__sidebar" aria-label="Sidebar navigation">
          {/* <div className="admin__sidebarTop">
            <div className="admin__sidebarTitle">Navigation</div>
            <div className="admin__sidebarSub">Menu</div>
          </div> */}

          <nav className="admin__nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? "admin__navItem is-active" : "admin__navItem"
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <main className="admin__content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
