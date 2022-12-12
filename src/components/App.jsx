import user from '../data/user';
import data from '../data/data.json';
import friends from '../data/friends'
import history from '../data/transactions';
import { User } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendsList } from './Friends/Friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        padding: '15px',
        display: 'flex',
        flexDirection: "column",
        gap: '20px',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >      
      <User
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
        
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory history={history} />
      </div>      
  );
};
