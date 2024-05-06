import {useState} from 'react';
import style from './Counter.module.css'
import Button from '@/components/Button/Button.jsx';

const Counter = ({plusNumber, number, minusNumber}) => {

  return (
      <div className="__container">
        <Button onClick={plusNumber}  className={style.button} >increment</Button>
        <h1>{number}</h1>
        <Button onClick={minusNumber} >decrement</Button>
      </div>
  );
};

export default Counter;



