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

export const CardBody = ({ children, className }) => {
  return (
    <div className={classNames('card-body px-5', className)}>{children}</div>
  );
};
export const CardFooter = ({ children, className }) => {
  if (!children) return null;
  return <div class={classNames('card-footer rounded-b-lg overflow-hidden', className)}>{children}</div>;
};
