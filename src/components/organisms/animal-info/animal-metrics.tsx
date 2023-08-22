import React from 'react';
import { LikeButton } from '../../molecules/buttons/like-button/like.button';
import { IAnimalInfo } from '../../../constants/data-constants';

interface IAnimalMetricsProps {
  metrics: IAnimalInfo;
  callback: (metric: string) => void;
  // TODO: random object for now
  userPreferences: string[];
}

//TODO: make generic with props & map
export const AnimalMetrics = ({ metrics, callback, userPreferences }: IAnimalMetricsProps) => {
  const isLiked = (metric: string) => {
    return userPreferences.includes(metric);
  };

  return (
    <div className="bg-white py-16">
      <div className="mx-auto max-w-7xl">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
          {/* TODO: move to @molecules/text/metrics/numerical */}
          <div
            key={metrics.characteristics.estimated_population_size}
            className="mx-auto flex max-w-xs flex-col gap-y-4"
          >
            <dt className="text-base leading-7 text-gray-600">
              {'Population Size'}
              <LikeButton
                callback={() => {
                  callback('estimated_population_size');
                }}
                liked={isLiked('estimated_population_size')}
              />
            </dt>
            <dd className="order-first text-base font-semibold tracking-tight text-gray-900 sm:text-lg">
              {metrics.characteristics.estimated_population_size}
            </dd>
          </div>
          <div key={metrics.characteristics.lifespan} className="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt className="text-base leading-7 text-gray-600">
              {'Lifespan'}
              <LikeButton
                callback={() => {
                  callback('lifespan');
                }}
                liked={isLiked('lifespan')}
              />
            </dt>
            <dd className="order-first text-base font-semibold tracking-tight text-gray-900 sm:text-lg">
              {metrics.characteristics.lifespan}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};
