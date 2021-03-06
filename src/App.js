import React from 'react';
import Header from './components/Header';
import TodosContainer from './containers/TodosContainer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons';

import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, far, faEdit, faTrashAlt, faPlusCircle)

function App() {
  return (
    <div className="container">
      <Header />
      <TodosContainer />
    </div>
  );
}

export default App;
