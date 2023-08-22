import React from 'react';
import { AnimalInfo } from '../../components/organisms/animal-info';
import { IAnimalInfo } from '../../constants/data-constants';

interface IAnimalBrowserProps {
  animals: IAnimalInfo[];
  callback: () => void;
}

export const AnimalBrowser = ({ animals, callback }: IAnimalBrowserProps) => {
  return (
    <div className="bg-offwhite">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {animals.map((animal) => (
            <AnimalInfo
              key={animal.id}
              name={animal.name}
              scientificName={animal.taxonomy.scientific_name}
              imageUrl={
                'https://cdn.vox-cdn.com/uploads/chorus_image/image/47805395/wildlife-animals-in-norway-5.0.0.jpg'
              }
              callback={callback}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
