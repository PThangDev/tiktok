import classNames from 'classnames/bind';
import React, { forwardRef } from 'react';
import { useState } from 'react';
import images from '~/assets/images';

import styles from './Image.module.scss';

const cx = classNames.bind(styles);

const Image = ({ src = '', alt = '', fallback: customFallback = images.noImage, className = '', ...props }, ref) => {
  const [fallback, setFallback] = useState('');

  const handleError = () => {
    setFallback(customFallback);
  };

  return (
    <img
      className={cx('wrapper', className)}
      ref={ref}
      src={fallback || src}
      alt={alt || src}
      {...props}
      onError={handleError}
    />
  );
};

export default forwardRef(Image);
