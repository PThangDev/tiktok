import HeaderOnly from '~/layouts/HeaderOnly';
import FollowingPage from '~/pages/following';
import HomePage from '~/pages/home';
import NotFoundPage from '~/pages/notfound';
import ProfilePage from '~/pages/profile';
import UploadPage from '~/pages/upload';

export const publicRoutes = [
  { path: '/', component: HomePage },
  { path: '/following', component: FollowingPage },
  { path: '/profile', component: ProfilePage },
  { path: '/@:nickname', component: ProfilePage },
  { path: '/upload', component: UploadPage, layout: HeaderOnly },
  { path: '*', component: NotFoundPage, layout: null },
];
export const privateRoutes = [];
