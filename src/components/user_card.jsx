export default function UserCard({ user }) {
  return (
    <div className="user-card">
        <h2>{user.first_name} {user.first_name}</h2>
        <p>{user.position}</p>
        <p>{user.email}</p>
    </div>
  );
}