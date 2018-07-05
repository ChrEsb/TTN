import { h } from 'preact';

import RestaurantCard from '../components/RestaurantCard';

const restaurants = [
  '1',
  '2',
  '3',
  '4',
];

const FeedContainer = () => (
  <div>
    {restaurants.map(restaurant => <RestaurantCard />)}
  </div>
);

export default FeedContainer;
