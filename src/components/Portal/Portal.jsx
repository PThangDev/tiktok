import React from 'react';
import classNames from 'classnames/bind';

import styles from './Portal.module.scss';

const cx = classNames.bind(styles);

const Portal = () => {
  return <div className={cx('wrapper')}>Portal</div>;
};

export default Portal;
