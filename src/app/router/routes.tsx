import React from "react";
import { Navigate } from "react-router-dom";
import AdminLayout from "@/layout/AdminLayout";
import DashboardPage from "@/features/dashboard/pages/DashboardPage";
import ProductPage from "@/features/products/pages/ProductPage";

// 你也可以把这些 meta 用于：菜单、面包屑、document.title
export type AppRouteMeta = {
  title?: string;
  icon?: React.ReactNode;
};

export type AppRouteObject = {
  path: string;
  element: React.ReactNode;
  children?: AppRouteObject[];
  meta?: AppRouteMeta;
};

export const routes: AppRouteObject[] = [
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      // ✅ 默认先去 dashboard
      { path: "/", element: <Navigate to="/dashboard" replace /> },

      {
        path: "/dashboard",
        element: <DashboardPage />,
        meta: { title: "Dashboard" },
      },
      {
        path: "/products",
        element: <ProductPage />,
        meta: { title: "Products" },
      },

      // 可选：兜底 404
      { path: "*", element: <Navigate to="/dashboard" replace /> },
    ],
  },
];
