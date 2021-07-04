import React from 'react';
import './TopicPill.css';

function TopicPill({name, title}) {
  return (
      <span className={`topic topic-${name}`}>{title}</span>
    );
}

export default TopicPill;
