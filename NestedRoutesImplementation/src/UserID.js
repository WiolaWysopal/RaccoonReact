import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserID = () => {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId.trim()) {
      navigate(`/ProfilePage/${userId}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Enter User ID:
        <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </label>
      <button type="submit"> Go to Profile </button>
    </form>
  );
};

export default UserID;
