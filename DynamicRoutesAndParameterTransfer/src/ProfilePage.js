import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h3>Profile of User with {id} ID</h3>
      <Link to="/"> Main Page </Link>
    </div>
  );
};
export default ProfilePage;
