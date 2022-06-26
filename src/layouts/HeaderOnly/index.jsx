import React from 'react';
import Header from '../components/Header';
import classNames from 'classnames/bind';
import styles from './HeaderOnly.module.scss';
const cx = classNames.bind(styles);

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <Header />
      <div className={cx('container')}>{children}</div>
    </div>
  );
};

export default HeaderOnly;
