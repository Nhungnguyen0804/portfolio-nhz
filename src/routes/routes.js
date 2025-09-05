import Home from "../pages/Home/Home";

const routes = {
  home: "/",
};

const publicRoutes = [{ path: routes.home, component: Home }];
export { routes, publicRoutes };
