import React from 'react';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const AccountItem = ({ data, onHideResult = () => {} }) => {
  return (
    <Link to={`/@${data.nickname}`} className={cx('wrapper')} onClick={onHideResult}>
      <Image className={cx('avatar')} src={data.avatar} alt="" />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>{data.full_name}</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
        </h4>
        <span className={cx('username')}>{data.nickname}</span>
      </div>
    </Link>
  );
};

export default AccountItem;
