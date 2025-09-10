import Home from "../pages/Home/Home";
import Detail from "../pages/Detail/Detail";
import Empty from "../layout/Empty/Empty";
const routes = {
  home: "/",
  detail: "/detail/:project",
};

const publicRoutes = [
  { path: routes.home, component: Home },
  { path: routes.detail, component: Detail, layout: Empty },
];
export { routes, publicRoutes };
