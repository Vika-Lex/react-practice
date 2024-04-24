import { useState} from 'react';
import CarsList from '@/components/Cars/CarsList.jsx';

export function App1({brand}) {
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





