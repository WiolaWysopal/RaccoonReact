export default function Greeting({ isLoggedIn, username }) {
  if (isLoggedIn) {
    return <h1>Welcome, {username}!</h1>;
  }
  return <h1>Please log in</h1>;
}
