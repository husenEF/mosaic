import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function WyswygComponent({ value, onChange, ...rest }) {
  return (
    <ReactQuill theme="snow" value={value} onChange={onChange} {...rest} />
  );
}
export default WyswygComponent;
