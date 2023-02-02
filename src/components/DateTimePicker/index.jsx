import Flatpicker from 'react-flatpickr';
import classNames from '../../utils/classnames';

const DateTimePicker = ({ handleChange }) => {
  const options = {
    enableTime: true,
    dateFormat: 'Y-m-d H:i',
    time_24hr: true,
    onChange: handleChange,
  };
  return (
    <div className="relative max-w-sm">
      <Flatpicker
        className={classNames(
          'rounded-default bg-transparent',
          'text-white font-oxigen ',
          'bg-gradient-to-b from-transparent to-secondary',
          'border-0 pr-9 mr-2',
          'hover:border-0 font-medium focus:border-0 w-full',
        )}
        options={options}
      />
      <div className="absolute inset-3 left-auto flex items-center pointer-events-none">
        <svg
          className="w-4 h-4 fill-current text-white ml-3"
          viewBox="0 0 16 16">
          <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
        </svg>
      </div>
    </div>
  );
};

export default DateTimePicker;
