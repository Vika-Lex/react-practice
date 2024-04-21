import style from './Friends.module.css'
import {startTransition, useEffect, useState} from 'react';
import Button from '@/components/Button/Button.jsx';
const FriendItem = (props) => {
  const [state, setState] = useState(false);

  const {friend} = props
  return (
      <li>
<div>
  <img src={friend.avatar}
       width={50}
       alt=""/>
</div>

   <div className={style.cardBody}>

     <span className={`${style.status} ${friend.isOnline?style.online:style.offline}`}></span>
     <p>
       {props.children}
     </p>
    <Button>Delete</Button>
   </div>

      </li>
  );
};

export default FriendItem;
