import { useState} from 'react';
import Counter from '@/components/Counter/Counter.jsx';
import FriendsList from '@/components/Friends/FriendsList.jsx';

export function App({name}) {


return (
      <>
      <h1>Hello</h1>
        <Counter/>
        <FriendsList />
      </>
  );
}

export default App;




