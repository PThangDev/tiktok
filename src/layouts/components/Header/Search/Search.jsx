import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';

import AccountItem from '~/components/AccountItem';
import { PopperWrapper } from '~/components/Popper';
import styles from './Search.module.scss';
import searchResults from './searchResults';

const cx = classNames.bind(styles);

const Search = () => {
  const [dataSearch, setDataSearch] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      setDataSearch(searchResults);
    }, 3000);
  }, []);

  return (
    <HeadlessTippy
      interactive
      visible={dataSearch.length > 0}
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
  );
};

export default Search;
