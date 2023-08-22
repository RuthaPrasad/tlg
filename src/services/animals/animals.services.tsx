import { GET, PUT } from '../api/hooks';
import { DOMAIN_BASE_URL, USER_ENDPOINT } from '../../constants/api-constants';

import { IAnimalsResponse } from '../data-models/animals.models';
import { IAnimalInfo } from '../../constants/data-constants';

const ANIMALS_BASE_URL = DOMAIN_BASE_URL.animal + USER_ENDPOINT.name;

const getAnimalsInfo = (data: IAnimalsResponse): Array<IAnimalInfo> => {
  const dataList = data.map((animal, index) => {
    return {
      id: String(index),
      name: animal.name,
      taxonomy: animal.taxonomy,
      locations: animal.locations,
      characteristics: animal.characteristics,
    };
  });
  return dataList;
};

const getAnimalsInfoByName = (name: string) => {
  const URL = `${ANIMALS_BASE_URL}${name}`;
  return GET(['name'], URL);
};

const getUserPreferenceByAnimalId = (id: string) => {
  // TODO: ideal
  // const URL = `${ANIMALS_BASE_URL}/userPref/${id}`;
  // return GET(['id'], URL);

  const item = 'userPreferences';
  const preferences = JSON.parse(String(localStorage.getItem(item)));
  const metrics = preferences ? preferences[id] : [];
  return metrics;
};

const updateUserPreferenceByAnimalId = () => {
  //TODO: ideal
  // let URL = `${ANIMALS_BASE_URL}/userPref/${id}`;
  return PUT(['id']);
};

const updateUserPreferenceByAnimalNameLocalStorage = (id: string, metric: string) => {
  //TODO: elaborate structure
  const item = 'userPreferences';
  const preferences: { [key: string]: string[] } = JSON.parse(String(localStorage.getItem(item)));
  const metrics: string[] = preferences ? (Object.values(preferences)[0] ? Object.values(preferences)[0] : []) : [];
  //TODO: bug: only one animal
  if (metrics.includes(metric)) {
    metrics.splice(metrics.indexOf(metric), 1);
  } else {
    metrics.push(metric);
  }
  const userPref: { [key: string]: string[] } = { [id]: metrics };
  return localStorage.setItem(item, JSON.stringify(userPref));
};

const AnimalsInfoService = {
  getAnimalsInfo,
  getAnimalsInfoByName,
  getUserPreferenceByAnimalName: getUserPreferenceByAnimalId,
  updateUserPreferenceByAnimalName: updateUserPreferenceByAnimalId,
  updateUserPreferenceByAnimalNameLocalStorage,
};

export default AnimalsInfoService;
