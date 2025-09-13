// import logo from './logo.svg';
// import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes/routes";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import { Fragment } from "react/jsx-runtime";
function App() {
  return (
    <Router basename="/portfolio">
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            //  nếu ko chỉ định layout => undefine => sẽ lấy cái DefaultLayout
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              >
                {" "}
              </Route>
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
