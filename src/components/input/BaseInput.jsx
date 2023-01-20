import classNames from '../../utils/classnames';

const BaseInput = ({ type, className, ...rest }) => {
  return (
    <input
      className={classNames(
        'rounded-default p-2 border-none text-center w-full min-w-max bg-white focus:border-none',
        className,
      )}
      type={type}
      {...rest}
    />
  );
};

export default BaseInput;
