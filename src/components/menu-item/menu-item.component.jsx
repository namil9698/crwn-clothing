import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({title, imageUrl, size}) => ( //props의  title을 가져옴.
  <div 
  className={`${size} menu-item`}>
    <div className='background-image'style={{
    backgroundImage: `url(${imageUrl})`
  }} />
    <div className='content'>
      <div className='title'>{title.toUpperCase()}</div>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);


export default MenuItem;