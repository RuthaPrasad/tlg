import AnimalsInfoService from '../../../../../src/services/animals/animals.services';
import { IAnimalsResponse } from '../../../../../src/services/data-models/animals.models';
import * as mockTanstackQuery from '@tanstack/react-query';

const mockPayload: IAnimalsResponse = [
  {
    name: 'dummy1',
    taxonomy: {
      kingdom: 'dummy1',
      phylum: 'dummy1',
      class: 'dummy1',
      order: 'dummy1',
      family: 'dummy1',
      genus: 'dummy1',
      scientific_name: 'dummy1',
    },
    locations: ['dummy1', 'dummy1'],
    characteristics: { dummy: 'dummy1' },
  },
  {
    name: 'dummy2',
    taxonomy: {
      kingdom: 'dummy2',
      phylum: 'dummy2',
      class: 'dummy2',
      order: 'dummy2',
      family: 'dummy2',
      genus: 'dummy2',
      scientific_name: 'dummy2',
    },
    locations: ['dummy2', 'dummy2'],
    characteristics: { dummy: 'dummy2' },
  },
];
const mockResponse = [
  {
    id: '0',
    name: 'dummy1',
    taxonomy: {
      kingdom: 'dummy1',
      phylum: 'dummy1',
      class: 'dummy1',
      order: 'dummy1',
      family: 'dummy1',
      genus: 'dummy1',
      scientific_name: 'dummy1',
    },
    locations: ['dummy1', 'dummy1'],
    characteristics: { dummy: 'dummy1' },
  },
  {
    id: '1',
    name: 'dummy2',
    taxonomy: {
      kingdom: 'dummy2',
      phylum: 'dummy2',
      class: 'dummy2',
      order: 'dummy2',
      family: 'dummy2',
      genus: 'dummy2',
      scientific_name: 'dummy2',
    },
    locations: ['dummy2', 'dummy2'],
    characteristics: { dummy: 'dummy2' },
  },
];

describe('AnimalsInfoService uutils/helpers/transformers', () => {
  test('getAnimalsInfo should return transformed data properly for non null data', () => {
    // given mocks
    // when
    const actualResponse = AnimalsInfoService.getAnimalsInfo(mockPayload);
    // then
    expect(actualResponse).toEqual(mockResponse);
  });
});

describe('AnimalsInfoService API calls', () => {
  jest
    .spyOn(mockTanstackQuery, 'useQuery')
    .mockImplementation(
      jest.fn().mockReturnValue({ data: mockResponse, isLoading: false, isFetching: false, error: undefined }),
    );

  test('getAnimalsInfoByName should return correctly for non null query', () => {
    const animals = AnimalsInfoService.getAnimalsInfoByName('dummy');
    expect(animals.data.length).toEqual(2);
    expect(animals.data[0].name).toEqual('dummy1');
  });
});
