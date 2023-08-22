import React from 'react';

//TODO
interface IIconButtonProps {
  icon: string;
  styles: string;
  callback: () => void;
}

//TODO : customizable with props
export const IconButton = ({ styles, icon, callback }: IIconButtonProps) => {
  return (
    <button onClick={callback}>
      <svg className={styles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d={icon} />
      </svg>
    </button>
  );
};
