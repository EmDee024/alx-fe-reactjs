function UserCard({ user }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0' }}>
      <img src={user.avatar_url} alt={user.login} width="50" />
      <div>
        <h3>{user.login}</h3>
        <a href={user.html_url} target="_blank" rel="noreferrer">
          View Profile
        </a>
      </div>
    </div>
  );
}

export default UserCard;
