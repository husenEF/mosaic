import classNames from '../../utils/classnames';

const Button = ({ icon: Icon, title, className, children, ...rest }) => {
  return (
    <button
      className={classNames(
        'flex justify-center items-center rounded-default py-1 px-2',
        'text-white font-oxigens ',
        'bg-gradient-to-b from-transparent to-secondary',
        className,
      )}
      {...rest}>
      {Icon && <Icon className="mr-2" />}
      {title && <span>{title}</span>}
      {children && children}
    </button>
  );
};

export default Button;
