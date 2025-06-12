import React, { useState, useMemo } from "react";

const UserStatsAnalyzer = () => {
  const [users, setUsers] = useState([
    { name: "Anna", age: 22, active: true },
    { name: "Peter", age: 35, active: false },
    { name: "Martha", age: 28, active: true },
  ]);

  const [filters, setFilters] = useState({
    onlyActive: false,
    minAge: 0,
  });

  // useMemo do kosztownej operacji
  const averageAge = useMemo(() => {
    console.log("Average age calculating...");

    const filtered = users.filter((user) => {
      return (!filters.onlyActive || user.active) && user.age >= filters.minAge;
    });

    if (filtered.length === 0) return 0;

    const sum = filtered.reduce((acc, user) => acc + user.age, 0);
    return (sum / filtered.length).toFixed(2);
  }, [users, filters.onlyActive, filters.minAge]);

  // Zmiana danych wejściowych
  const toggleUserActivity = (index) => {
    const updated = users.map((user, i) =>
      i === index ? { ...user, active: !user.active } : user,
    );
    setUsers(updated);
  };

  const addUser = () => {
    const newUser = {
      name: "New",
      age: Math.floor(Math.random() * 40) + 20,
      active: Math.random() > 0.5,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="p-4 max-w-lg mx-auto">
      <h2 className="text-xl font-bold mb-4">Users Analysis</h2>

      <div className="mb-2">
        <label>
          <input
            type="checkbox"
            checked={filters.onlyActive}
            onChange={(e) =>
              setFilters({ ...filters, onlyActive: e.target.checked })
            }
          />{" "}
          Active only
        </label>
      </div>

      <div className="mb-2">
        <label>
          Minimum age:{" "}
          <input
            type="number"
            value={filters.minAge}
            onChange={(e) =>
              setFilters({ ...filters, minAge: parseInt(e.target.value) || 0 })
            }
          />
        </label>
      </div>

      <div className="mb-4">
        <button onClick={addUser}>Add users</button>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Users:</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name}, {user.age} lat –{" "}
              {user.active ? "active" : "unactive"}{" "}
              <button onClick={() => toggleUserActivity(index)}>
                Toggle activity
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <strong>average age (after filter):</strong> {averageAge}
      </div>
    </div>
  );
};

export default UserStatsAnalyzer;
