import React from "react";
import Widget from "./Widget";

const Dashboard = () => {
  const widgetsData = [
    { title: "Users", description: "Number of active users", value: 128 },
    { title: "Income", description: "Today's income (PLN)", value: "3 240" },
    { title: "Orders", description: "Pending orders", value: 17 },
  ];

  return (
    <div>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {widgetsData.map((widget, index) => (
          <Widget
            key={index}
            title={widget.title}
            description={widget.description}
            value={widget.value}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
