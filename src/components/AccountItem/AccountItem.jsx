import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://imgt.taimienphi.vn/cf/Images/np/2021/11/26/hinh-anh-avatar-dep-5.jpg"
        alt=""
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Pham Thang Jr</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>nguyenvana</span>
      </div>
    </div>
  );
};

export default AccountItem;
