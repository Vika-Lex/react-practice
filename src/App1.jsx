import { useState} from 'react';
import CarsList from '@/components/Cars/CarsList.jsx';
import style from './components/Cars/Cars.module.css';

export function App1({brand}) {
  return (
      <>
        <div>
          <h1 className={style.title}>Cars</h1>
          <CarsList />
        </div>
      </>
  );
}


export default App1;





