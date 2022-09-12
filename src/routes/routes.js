import configs from '~/configs';
import HeaderOnly from '~/layouts/HeaderOnly';
import FollowingPage from '~/pages/following';
import HomePage from '~/pages/home';
import NotFoundPage from '~/pages/notfound';
import ProfilePage from '~/pages/profile';
import UploadPage from '~/pages/upload';

export const publicRoutes = [
  { path: configs.routes.home, component: HomePage },
  { path: configs.routes.following, component: FollowingPage },
  { path: configs.routes.profile, component: ProfilePage },
  { path: configs.routes.profile, component: ProfilePage },
  { path: configs.routes.upload, component: UploadPage, layout: HeaderOnly },
  { path: '*', component: NotFoundPage, layout: null },
];

export const privateRoutes = [];
