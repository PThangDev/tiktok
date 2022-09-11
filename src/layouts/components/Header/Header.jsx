import { faCloudUpload, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';

import Button from '~/components/Button';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import LogoIcon from '~/components/Icons/LogoIcon';
import Image from '~/components/Image';
import Menu from '~/components/Popper/Menu';
import { routeConfigs } from '~/configs';
import styles from './Header.module.scss';
import { menuItems, userMenuItems } from './menuItems';
import Search from './Search';

const cx = classNames.bind(styles);

const IS_AUTHENTICATE = true;

const Header = () => {
  const handleChangeMenuItem = (menuItem) => {
    console.log(menuItem);
  };

  const renderRightHeader = () => {
    if (IS_AUTHENTICATE) {
      return (
        <>
          <Tippy delay={[0, 50]} content="Upload Video">
            <button className={cx('action-btn')}>
              <UploadIcon />
            </button>
          </Tippy>
          <Tippy delay={[0, 50]} content="Message">
            <button className={cx('action-btn')}>
              <MessageIcon />
            </button>
          </Tippy>
          <Tippy delay={[0, 50]} content="Inbox">
            <button className={cx('action-btn')}>
              <InboxIcon />
              <span className={cx('badge')}>12</span>
            </button>
          </Tippy>
        </>
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
        <a href={routeConfigs.home} className={cx('logo')}>
          <LogoIcon />
        </a>
        {/* Search */}
        <Search />
        {/* Actions */}
        <div className={cx('actions')}>
          {renderRightHeader()}

          <Menu items={IS_AUTHENTICATE ? userMenuItems : menuItems} onChange={handleChangeMenuItem}>
            {renderOptionMenu()}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
