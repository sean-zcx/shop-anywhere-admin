import {
  createBrowserRouter,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import type { AppRouteObject } from "./routes";
import { routes } from "./routes";

function toRRRouteObject(rs: AppRouteObject[]): RouteObject[] {
  return rs.map((r): RouteObject => ({
    path: r.path,
    element: r.element,
    children: r.children ? toRRRouteObject(r.children) : undefined,
  }));
}

const router = createBrowserRouter(toRRRouteObject(routes));

export default function AppRouter() {
  return <RouterProvider router={router} />;
}