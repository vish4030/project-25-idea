import React from 'react';

import { sideMenu } from '../../constant';
import MenuList from './MenuList';

const TreeView = () => {
  return (
    <div className=" text-gray-800 pt-16 w-3/6 h-screen m-auto bg-orange-200">
      <MenuList list={sideMenu} />
    </div>
    
  )
}

export default TreeView;