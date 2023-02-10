import React from 'react';
import classNames from '../../utils/classnames';
import GlassBox from '../box/GlassBox';

function Card({
  title,
  children,
  titleClass,
  className,
  prevIcon: PrevIcon,
  ...rest
}) {
  return (
    <GlassBox className={classNames(className)} {...rest}>
      {title && (
        <header
          className={classNames(
            'flex items-center mb-2 text-white font-bold text-lg',
            titleClass,
          )}>
          {PrevIcon && <PrevIcon className="mr-2" />}
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
  return (
    <div
      className={classNames(
        'card-footer rounded-b-10 overflow-hidden',
        className,
      )}>
      {children}
    </div>
  );
};
