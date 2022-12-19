import Profile from '../Profile/Profile';
import user from '../Profile/user.json';
import Statistics from '../Statistics/Statistics';
import data from '../Statistics/data.json';
import {Container} from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="UPLOAD STATS" stats={data} />
   </Container>


    
  );
};