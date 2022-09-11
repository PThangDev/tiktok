import { routeConfigs } from '~/configs';
import HeaderOnly from '~/layouts/HeaderOnly';
import FollowingPage from '~/pages/following';
import HomePage from '~/pages/home';
import NotFoundPage from '~/pages/notfound';
import ProfilePage from '~/pages/profile';
import UploadPage from '~/pages/upload';

export const publicRoutes = [
  { path: routeConfigs.home, component: HomePage },
  { path: routeConfigs.following, component: FollowingPage },
  { path: routeConfigs.profile, component: ProfilePage },
  { path: routeConfigs.profile, component: ProfilePage },
  { path: routeConfigs.upload, component: UploadPage, layout: HeaderOnly },
  { path: '*', component: NotFoundPage, layout: null },
];

export const privateRoutes = [];
