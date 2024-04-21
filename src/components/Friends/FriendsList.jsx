import friends from '@/data/friends.json';
import FriendItem from '@/components/Friends/FriendItem.jsx';

const FriendsList = () => {
  console.log(friends);
  return (
      <ul>
        {friends.map((friend, index) => (<FriendItem key={index}
                                                     friend={friend}>
          {friend.name}
        </FriendItem>))}
      </ul>
  );
};
export default FriendsList;

