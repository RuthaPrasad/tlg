import React, { useState } from 'react';
import { LikeButton } from '../../molecules/buttons/like-button/like.button';

interface IAnimalInfoProps {
  name: string;
  scientificName: string;
  imageUrl: string;
  callback: (name: string) => void;
}

export const AnimalInfo = ({ name, scientificName, imageUrl, callback }: IAnimalInfoProps) => {
  //TODO: random liked condition
  const [liked, setLiked] = useState(name.includes('t'));

  return (
    <a href={'#'} className="group" onClick={() => callback(name)}>
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <img src={imageUrl} className="h-full w-full object-cover object-center group-hover:opacity-75" />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{scientificName ? scientificName : 'Yet to be named'}</h3>
      <div className="flex justify-between">
        <p className="mt-1 text-lg font-medium text-gray-900">{name}</p>
        <LikeButton callback={() => setLiked(!liked)} liked={liked} />
      </div>
    </a>
  );
};
