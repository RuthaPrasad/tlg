import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { AnimalBrowserPage } from '../pages/animal-browser';
import { Filters } from '../components/organisms/filters/filters';

export const App = (): JSX.Element => (
  <div>
    <BrowserRouter>
      <Filters todo={'todo'} />
      <Routes>
        <Route path="/" element={<AnimalBrowserPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);
