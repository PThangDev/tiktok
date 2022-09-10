import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

const Button = ({
  to,
  href,
  children,
  size = 'medium',
  variant = 'contained',
  color = 'primary',
  rounded = false,
  disabled = false,
  icon,
  positionIcon = 'start',
  className,

  onClick,
  ...passProps
}) => {
  let Component = 'button';

  const props = {
    onClick,
    disabled,
  };

  // Remove event listener when disable
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Component = Link;
  } else if (href) {
    props.href = href;
    Component = 'a';
  }

  const classes = cx('wrapper', {
    [color]: color,
    [variant]: variant,
    [size]: size,
    [className]: className,
    disabled,
    rounded,
  });

  return (
    <Component className={classes} {...props} {...passProps}>
      {positionIcon === 'start' && icon && (
        <p className={cx('icon', { [`icon-${positionIcon}`]: positionIcon })}>{icon}</p>
      )}

      <span>{children}</span>

      {positionIcon === 'end' && icon && (
        <p className={cx('icon', { [`icon-${positionIcon}`]: positionIcon })}>{icon}</p>
      )}
    </Component>
  );
};

export default Button;
