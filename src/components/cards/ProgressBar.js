import React from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div className="progress_bar">
      <div className="filler" style={{ width: `${percentage}%` }} />
    </div>
  )
}

export default ProgressBar