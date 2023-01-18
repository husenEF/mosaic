import React from 'react';

function MouseIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15"
      height="15"
      fill="none"
      viewBox="0 0 15 15"
      {...props}>
      <path
        stroke="#fff"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M3.125 6.75c0-.232 0-.348.005-.446a4 4 0 013.799-3.8c.098-.004.214-.004.446-.004h.25c.232 0 .348 0 .446.005a4 4 0 013.8 3.799c.004.098.004.214.004.446v2A4.375 4.375 0 017.5 13.125v0A4.375 4.375 0 013.125 8.75v-2z"></path>
      <path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M7.5 2.5v3.125"></path>
    </svg>
  );
}

export default React.memo(MouseIcon);
