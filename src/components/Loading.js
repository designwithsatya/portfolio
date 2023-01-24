import React from 'react';
import './loading.css';

const Loading = () => (
  <>
    <div className="maincontainer">
      <div className="container">
        <div className="ring" />
        <div className="ring" />
        <div className="ring" />
        <span className="loading">Loading...</span>
      </div>
    </div>
  </>
);

export default Loading;
