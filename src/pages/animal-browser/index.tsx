import React, { useState } from 'react';

import { AnimalBrowser } from './animal-browser';
import { Animal } from './animal';
import AnimalsInfoService from '../../services/animals/animals.services';

// TODO : changes based on filters/alphabet/etc
const animalNames = 'el';

export const AnimalBrowserPage = () => {
  return renderAnimalsInfo();
};

const renderLoader = () => {
  // TODO : actual component
  return <h2>Loading</h2>;
};

const renderError = () => {
  // TODO : actual component
  return <h2>Error</h2>;
};

const renderAnimalsInfo = () => {
  const [animalName, setAnimalName] = useState('');
  const { isLoading, error, data, isFetching } = AnimalsInfoService.getAnimalsInfoByName(animalNames);

  if (isLoading) return renderLoader();
  if (isFetching) return renderLoader();
  if (error) return renderError();

  return (
    <div className="h-screen flex grid grid-cols-3 gap-4">
      <Animal animal={AnimalsInfoService.getAnimalsInfo(data)[0]} />
      <div className="col-span-2">
        <AnimalBrowser animals={AnimalsInfoService.getAnimalsInfo(data)} callback={() => setAnimalName} />
      </div>
    </div>
  );
};
