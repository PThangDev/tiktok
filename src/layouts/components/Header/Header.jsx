import {
  faCircleQuestion,
  faCircleXmark,
  faCloudUpload,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGear,
  faKeyboard,
  faMagnifyingGlass,
  faSignOut,
  faSpinner,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import LogoIcon from '~/components/Icons/LogoIcon';
import Image from '~/components/Image';
import { PopperWrapper } from '~/components/Popper';
import Menu from '~/components/Popper/Menu';
import styles from './Header.module.scss';
import searchResults from './searchResults';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        { type: 'language', code: 'vn', title: 'Tiếng Việt' },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feedback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

const USER_MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faUser} />,
    title: 'View profile',
    to: '/@hoaa',
  },
  {
    icon: <FontAwesomeIcon icon={faCoins} />,
    title: 'Get coins',
    to: '/coin',
  },
  {
    icon: <FontAwesomeIcon icon={faGear} />,
    title: 'Settings',
    to: '/settings',
  },
  ...MENU_ITEMS,
  {
    icon: <FontAwesomeIcon icon={faSignOut} />,
    title: 'Log out',
    to: '/logout',
    separate: true,
  },
];

const IS_AUTHENTICATE = true;

const Header = () => {
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setDataSearch(searchResults);
    }, 3000);
  }, []);

  const handleChangeMenuItem = (data) => {
    console.log(data);
  };

  const renderRightHeader = () => {
    if (IS_AUTHENTICATE) {
      return (
        <Tippy delay={[0, 200]} content="Upload Video">
          <button className={cx('action-btn')}>
            <FontAwesomeIcon icon={faCloudUpload} />
          </button>
        </Tippy>
      );
    } else {
      return (
        <>
          <Button variant="anchor">Upload</Button>
          <Button
            variant="contained"
            color="primary"
            icon={<FontAwesomeIcon icon={faCloudUpload} />}
            positionIcon="start"
          >
            Login
          </Button>
        </>
      );
    }
  };
  const renderOptionMenu = () => {
    if (IS_AUTHENTICATE) {
      return (
        <Image
          className={cx('user-avatar')}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlnFOSmJwiqpYy85b5cGj2bgeKvNcBrmuDg&usqp=CAU"
          alt="avatar"
        />
      );
    } else {
      return (
        <button className={cx('more-btn')}>
          <FontAwesomeIcon icon={faEllipsisVertical} />
        </button>
      );
    }
  };

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <LogoIcon />
        </div>
        <HeadlessTippy
          interactive
          // visible={dataSearch.length > 0}
          // visible
          render={(attrs) => (
            <div className={cx('search-result')} {...attrs} tabIndex={-1}>
              <PopperWrapper>
                <h3 className={cx('search-title')}>Accounts</h3>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input type="text" placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear-btn')}>
              <FontAwesomeIcon icon={faCircleXmark} />
              {/* Icon */}
            </button>
            {/* Loading */}
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </HeadlessTippy>

        {/* Actions */}
        <div className={cx('actions')}>
          {renderRightHeader()}

          <Menu items={IS_AUTHENTICATE ? USER_MENU_ITEMS : MENU_ITEMS} onChange={handleChangeMenuItem}>
            {renderOptionMenu()}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
