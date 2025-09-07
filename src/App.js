// import logo from './logo.svg';
// import "./App.css";
import { publicRoutes } from "./routes/routes";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import { Fragment } from "react/jsx-runtime";
function App() {
  return (
    <div className="App">
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
          <Layout>
            <Page />
          </Layout>
        );
      })}
    </div>
  );
}

export default App;
