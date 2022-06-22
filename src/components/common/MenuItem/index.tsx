import React from 'react';

type MenuItemType = {
  onClick: any;
  children: string;
  className: string;
  id: string;
}

const MenuItem:React.FC<MenuItemType> = ({ children, onClick, className, id }) => (
  <button
    className={className}
    type="button"
    id={id}
    onClick={onClick}>
    {children}
  </button>
);

export default MenuItem;
