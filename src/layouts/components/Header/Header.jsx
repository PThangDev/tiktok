import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import { useState } from 'react';
import { useEffect } from 'react';

import images from '~/assets/images';
import styles from './Header.module.scss';
import searchResults from './searchResults';
import { PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Header = () => {
  const [dataSearch, setDataSearch] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setDataSearch(searchResults);
    }, 3000);
  }, []);

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="" />
        </div>
        <Tippy
          interactive
          // visible={dataSearch.length > 0}
          visible
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
            <button className={cx('btn-clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
              {/* Icon */}
            </button>
            {/* Loading */}
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('btn-search')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('actions')}>
          <Button variant="anchor">Upload</Button>
          <Button variant="contained" color="primary" icon={<FontAwesomeIcon icon={faSignIn} />} positionIcon="start">
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
