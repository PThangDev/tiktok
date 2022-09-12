import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';

import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
import { PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import searchService from '~/services/searchService';
import httpRequest from '~/utils/httpRequest';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

const Search = () => {
  const inputRef = useRef(null);

  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedSearchValue = useDebounce(searchValue);

  useEffect(() => {
    if (!debouncedSearchValue.trim()) {
      setSearchResult([]);
      setIsLoading(false);
      return;
    }

    const fetchSearch = async () => {
      try {
        setIsLoading(true);

        const result = await searchService.search(debouncedSearchValue);

        setSearchResult(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    fetchSearch();
  }, [debouncedSearchValue]);

  const handleChangeInput = (e) => {
    const searchValue = e.target.value;

    if (searchValue.startsWith(' ')) return;

    setSearchValue(searchValue);
  };

  const handleClearInputSearch = () => {
    setSearchValue('');
    setShowResult(false);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleShowResult = () => {
    setShowResult(true);
  };

  const handleSubmitFormSearch = async (e) => {
    e.preventDefault();
  };

  return (
    // Using a wrapper <div> or <span> tag around the reference element solves this by creating a new parentNode context
    <div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        onClickOutside={handleHideResult}
        // visible
        render={(attrs) => (
          <div className={cx('search-result')} {...attrs} tabIndex={-1}>
            <PopperWrapper>
              <h3 className={cx('search-title')}>Accounts</h3>
              {searchResult.map((item) => (
                <AccountItem key={item.id} data={item} onHideResult={handleHideResult} />
              ))}
            </PopperWrapper>
          </div>
        )}
      >
        <form className={cx('search')} onSubmit={handleSubmitFormSearch}>
          <input
            type="text"
            placeholder="Search accounts and videos"
            spellCheck={false}
            ref={inputRef}
            value={searchValue}
            onChange={handleChangeInput}
            onFocus={handleShowResult}
          />

          {!!searchValue && !isLoading && (
            <button className={cx('clear-btn')} onClick={handleClearInputSearch}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {/* Loading */}
          {isLoading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
          <button
            type="submit"
            className={cx('search-btn', { active: !!searchValue })}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </form>
      </HeadlessTippy>
    </div>
  );
};

export default Search;
