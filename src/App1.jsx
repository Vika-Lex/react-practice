import { useState} from 'react';
import Counter from '@/components/Counter/Counter.jsx';
import FriendsList from '@/components/Friends/FriendsList.jsx';

export function App1({cars}) {
  return (
      <>
        <div>
          <h1>Cars</h1>
          <CarsList />
        </div>
      </>
  );
}


export default App1;





