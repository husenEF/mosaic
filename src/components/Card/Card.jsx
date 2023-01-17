import React from 'react';
import classNames from '../../utils/classnames';
import GlassBox from '../box/GlassBox';

function Card({ title, children, titleClass, className, ...rest }) {
  return (
    <GlassBox className={classNames(className)} {...rest}>
      {title && (
        <header
          className={classNames(
            'flex justify-between items-start mb-2 text-white font-bold text-lg',
            titleClass,
          )}>
          {title}
        </header>
      )}
      {children && children}
    </GlassBox>
  );
}

export default Card;
