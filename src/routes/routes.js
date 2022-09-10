const { DefaultLayout } = require('~/layouts');
const HomePage = require('~/pages/home');
const { PublicRoute } = require('./OuterRoutes');

const routes = [
  {
    path: '/',
    component: HomePage,
    layout: DefaultLayout,
    outer: PublicRoute,
  },
];
