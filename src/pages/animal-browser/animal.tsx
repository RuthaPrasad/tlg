import React, { useReducer } from 'react';
import { AnimalInfo } from '../../components/organisms/animal-info';
import { IAnimalInfo } from '../../constants/data-constants';
import { AnimalMetrics } from '../../components/organisms/animal-info/animal-metrics';
import { RatingButton } from '../../components/molecules/buttons/rating-button/rating.button';

import AnimalsInfoService from '../../services/animals/animals.services';

interface IAnimalProps {
  animal: IAnimalInfo;
}

export const Animal = ({ animal }: IAnimalProps) => {
  const [ignored, forceUpdate] = useReducer((x) => x + 1, 0);
  const mutation = AnimalsInfoService.updateUserPreferenceByAnimalName();

  const getUserPreference = () => {
    //TODO: ideally call per animal, instead using localStorage
    const userPref = AnimalsInfoService.getUserPreferenceByAnimalName(animal.id);
    return userPref ? userPref : [];
  };

  const updateUserPreference = (metric: string) => {
    //TODO: ideally use mutation, instead using localStorage
    // mutation.mutate({
    //   name: 'url',
    //   metric: metric,
    // });
    AnimalsInfoService.updateUserPreferenceByAnimalNameLocalStorage(animal.id, metric);
    forceUpdate();
  };

  return (
    <div className="bg-offwhite">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"> */}
        <div className="float-right">
          <RatingButton userRating={0} callback={() => console.log('')} />
        </div>
        <AnimalInfo
          key={animal.id}
          name={animal.name}
          scientificName={animal.characteristics.slogan}
          imageUrl={'https://cdn.vox-cdn.com/uploads/chorus_image/image/47805395/wildlife-animals-in-norway-5.0.0.jpg'}
          callback={() => console.log('')}
        />
        <AnimalMetrics metrics={animal} callback={updateUserPreference} userPreferences={getUserPreference()} />
      </div>
    </div>
  );
};
