import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'tippy.js/dist/tippy.css';

import GlobalStyles from './components/GlobalStyles';
import DefaultLayout from './layouts/DefaultLayout';
import { publicRoutes } from './routes';

const App = () => {
  return (
    <Router>
      <GlobalStyles>
        <div className="app">
          <Routes>
            {publicRoutes.map((route) => {
              const Component = route.component;
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              } else if (route.layout === null) {
                Layout = Fragment;
              }
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <Layout>
                      <Component />
                    </Layout>
                  }
                />
              );
            })}
          </Routes>
        </div>
      </GlobalStyles>
    </Router>
  );
};

export default App;
