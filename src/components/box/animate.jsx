import classNames from '../../utils/classnames';

import './animate.scss';

const BoxAnimate = ({ children, className, ...rest }) => {
  return (
    <div className={classNames('bg-animate', className)} {...rest}>
      {children}
    </div>
  );
};

export default BoxAnimate;
