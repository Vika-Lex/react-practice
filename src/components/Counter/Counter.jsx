import {useState} from 'react';
import style from './Counter.module.css'
import Button from '@/components/Button/Button.jsx';

const Counter = () => {

  const [count,setCount] = useState(0)
  return (
      <div className="__container">
        {/*<Button className={style.button} onClick={() => setCount(prevState => prevState + 1)}>increment</Button>*/}
        {/*<h1>{count}</h1>*/}
        {/*<Button onClick={() => setCount(prevState => prevState - 1)}>decrement</Button>*/}
      </div>
  );
};

export default Counter;



