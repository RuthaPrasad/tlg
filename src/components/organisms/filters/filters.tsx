import React from 'react';
import { LinkButton } from '../../atoms/buttons/link/link.button';

interface IFilterProps {
  //TODO
  todo: string;
}
export const Filters = ({}: IFilterProps) => {
  return (
    <div className="flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
        <div className="space-y-2 py-6">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
            <LinkButton url="/" title="Reptiles" />
            <LinkButton url="/" title="Birds" />
            <LinkButton url="/" title="Mammals" />
            <LinkButton url="/" title="Amphibians" />
            <LinkButton url="/" title="Fish" />
            <LinkButton url="/" title="A-Z" />
            <LinkButton url="/" title="Your Favourites!" />
          </nav>
        </div>
      </div>
    </div>
  );
};
