import React from 'react'
import MenuItem from './MenuItem';

const MenuList = ({list}) => {
  return (
    <ul className=" px-8">
        <MenuItem list={list} />
    </ul>
  )
}

export default MenuList;