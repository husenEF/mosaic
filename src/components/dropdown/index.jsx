import React, { useState, useRef, useEffect } from 'react';

import Transition from '../../utils/Transition';
import classNames from '../../utils/classnames';

function Dropdown({ align, title, children, btnClass, className, ...rest }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const trigger = useRef(null);
  const dropdown = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <div className={classNames('relative inline-flex', className)}>
      <button
        ref={trigger}
        className={classNames(
          'inline-flex justify-center items-center group',
          btnClass,
        )}
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}>
        <span className="truncate mr-3 font-oxigen text-white">
          {title || 'Dropdown'}
        </span>
      </button>

      <Transition
        className={`origin-top-right z-10 absolute top-full min-w-44 bg-primary  py-1.5 rounded shadow-lg overflow-hidden mt-1 ${
          align === 'right' ? 'right-0' : 'left-0'
        }`}
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0">
        <div
          ref={dropdown}
          onFocus={() => setDropdownOpen(true)}
          onBlur={() => setDropdownOpen(false)}>
          {children || (
            <div className="pt-0.5 pb-2 px-3 mb-1 ">Default Content</div>
          )}
          {/* <div className="pt-0.5 pb-2 px-3 mb-1 ">
            <div className="font-medium text-white">AdminSelvi.</div>
            <div className="text-xs text-white italic">Administrator</div>
          </div>
          <ul>
            <li>
              <Link
                className="font-medium text-sm text-white flex items-center py-1 px-3"
                to="/settings"
                onClick={() => setDropdownOpen(!dropdownOpen)}>
                Settings
              </Link>
            </li>
            <li>
              <Link
                className="font-medium text-sm text-white flex items-center py-1 px-3"
                to="/signin"
                onClick={() => setDropdownOpen(!dropdownOpen)}>
                Sign Out
              </Link>
            </li>
          </ul> */}
        </div>
      </Transition>
    </div>
  );
}

export default Dropdown;
