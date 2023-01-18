import classNames from '../../utils/classnames';

const Button = ({ icon: Icon, title, className, ...rest }) => {
  return (
    <button
      className={classNames(
        'flex justify-center items-center rounded-md py-1 px-2',
        'text-white font-oxigen ',
        'bg-gradient-to-b from-transparent to-secondary',
      )}
      {...rest}>
      {Icon && <Icon className="mr-2" />}
      <span>{title || 'Save'}</span>
    </button>
  );
};

export default Button;
