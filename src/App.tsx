import React from 'react';

import { RecoilRoot } from 'recoil';

import Todo from './components/Todo';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <Todo />
    </RecoilRoot>
  );
}

export default App;