import React from 'react';

import TodoAppBar from './components/TodoAppBar';
import TodoBody from './components/TodoBody';

const App: React.FC = () => {
  return (
    <>
      <TodoAppBar />
      <TodoBody />
    </>
  );
}

export default App;