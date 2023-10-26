import './JerseyList.css';
import JerseyListItem from '../JerseyListItem/JerseyListItem';

export default function JerseyList({ menuItems, handleAddToOrder }) {
  const items = menuItems.map(item =>
    <JerseyListItem
      key={item._id}
      menuItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="JerseyList">
      {items}
    </main>
  );
}