import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faGear,
  faKeyboard,
  faSignOut,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { languages, routeConfigs } from '~/configs';

export const menuItems = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'Tiếng Việt',
    children: {
      title: 'Language',
      data: languages,
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: routeConfigs.feedback,
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

export const userMenuItems = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: routeConfigs.profile,
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: routeConfigs.coin,
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: routeConfigs.settings,
  },
  ...menuItems,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: routeConfigs.logout,
    separate: true,
  },
];
