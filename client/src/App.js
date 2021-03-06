import React, { useState } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import { Route } from 'react-router-dom';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
          <SavedList exact path='/' list={savedList} />
          <Route exact path='/' component={MovieList} />
          <Route path='/movies/:id' component={Movie} />
    </div>
  );
};

export default App;
