export default function ItemCard({ item }) {
  return (
    <div className="item-card">
      <div className="item-header">
        <h3>{item.name}</h3>
        <p>{item.date}</p>
      </div>
      <p>{item.description}</p>
    </div>
  );
}