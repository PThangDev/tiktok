import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import HeadlessTippy from '@tippyjs/react/headless';
import { PopperWrapper } from '..';
import MenuHeader from './MenuHeader';
import MenuItem from './MenuItem';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Menu = ({ children, items = [], hideOnClick = false, onChange = () => {} }) => {
  const [history, setHistory] = useState([{ data: items, title: '' }]);

  const currentMenu = history[history.length - 1];

  const handleBackMenu = () => {
    setHistory((prevHistory) => prevHistory.slice(0, prevHistory.length - 1));
  };
  const handleShowChildrenMenu = (isParent, item) => {
    if (!isParent) {
      onChange(item);
    } else {
      setHistory((prevHistory) => [...prevHistory, item.children]);
    }
  };

  const handleResetMenu = () => {
    setHistory((prevHistory) => prevHistory.slice(0, 1));
  };

  const renderItems = () => {
    return currentMenu.data.map((item, index) => {
      const isParent = !!item.children;
      return <MenuItem key={index} data={item} onClick={() => handleShowChildrenMenu(isParent, item)} />;
    });
  };

  return (
    <HeadlessTippy
      interactive
      // visible
      hideOnClick={hideOnClick}
      offset={[12, 8]}
      delay={[0, 700]}
      placement="bottom-end"
      onHide={handleResetMenu}
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {history.length > 1 && <MenuHeader title={currentMenu.title} onBack={handleBackMenu} />}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
    >
      {children}
    </HeadlessTippy>
  );
};

export default Menu;
