import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
 
const Sidebar = () => {
  const pages = useSelector((state) => state.pages?.items);
  return (
    <aside className='sidebar padding'>
      <Navigation pages={pages} />
    </aside>
  );
};

export default Sidebar;
