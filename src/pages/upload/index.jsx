import React from 'react';
import classNames from 'classnames/bind';
import styles from './Upload.module.scss';
const cx = classNames.bind(styles);

const UploadPage = () => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>Upload page</div>
    </div>
  );
};

export default UploadPage;
