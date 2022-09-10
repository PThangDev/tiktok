import classNames from 'classnames/bind';

import Button from '~/components/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

const MenuItem = ({ data, onClick }) => {
  return (
    <Button
      className={cx('menu-item', { separate: data?.separate })}
      variant="default"
      icon={data.icon}
      to={data.to}
      onClick={onClick}
    >
      {data.title}
    </Button>
  );
};

export default MenuItem;
