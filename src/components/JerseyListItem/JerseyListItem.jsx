import './JerseyListItem.css';

export default function JerseyListItem({ jerseyItem, handleAddToOrder }) {
  return (
    <div className="JerseyListItem">
      <div className="emoji flex-ctr-ctr">{jerseyItem.emoji}</div>
      <div className="name">{jerseyItem.name}</div>
      <div className="buy">
        <span>${jerseyItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(jerseyItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}