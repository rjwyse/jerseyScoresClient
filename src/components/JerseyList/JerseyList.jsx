import './JerseyList.css';
import JerseyListItem from '../JerseyListItem/JerseyListItem';

export default function JerseyList({ jerseyItems, handleAddToOrder }) {
  const items = jerseyItems.map(item =>
    <JerseyListItem
      key={item._id}
      jerseyItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="JerseyList">
      {items}
    </main>
  );
}