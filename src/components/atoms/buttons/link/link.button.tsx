import React from 'react';
import { Link } from 'react-router-dom';

interface ILinkButtonProps {
  url: string;
  title: string;
}
export const LinkButton = ({ url, title }: ILinkButtonProps) => {
  return (
    <Link to={url}>
      <p className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
        {title}
      </p>
    </Link>
  );
};
