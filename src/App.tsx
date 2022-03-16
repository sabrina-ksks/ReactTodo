import React from 'react';

import { RecoilRoot } from 'recoil';

import TodoAppBar from './components/TodoAppBar';
import TodoBody from './components/TodoBody';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <TodoAppBar />
      <TodoBody />
    </RecoilRoot>
  );
}

export default App;