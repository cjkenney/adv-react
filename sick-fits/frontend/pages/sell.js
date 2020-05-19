import CreateItem from '../components/CreateItem';
import PleaseSignIn from '../components/PleaseSignIn';
import Link from 'next/link';

const Home = (props) => (
  <div>
    <p>Sell Page</p>
    <PleaseSignIn>
      <CreateItem />
    </PleaseSignIn>
  </div>
);

export default Home;
