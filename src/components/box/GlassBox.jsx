import classNames from '../../utils/classnames';

const GlassBox = ({ children, className, ...rest }) => {
  return (
    <div
      className={classNames(
        className,
        'min-h-[300px]',
        'rounded-10 bg-secondary-50 bg-opacity-25',
        'flex flex-col col-span-full sm:col-span-6 xl:col-span-4',
        'px-5 pt-5',
      )}
      {...rest}>
      {children}
    </div>
  );
};

export default GlassBox;
