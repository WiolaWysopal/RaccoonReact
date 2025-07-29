import React from "react";
import { useSubscription } from "urql";

// Przykładowa subskrypcja
const NEW_DATA_SUBSCRIPTION = `
  subscription {
    newData {
      id
      value
    }
  }
`;

const handleSubscription = (prev, newData) => {
  if (!newData?.newData) return prev;
  return {
    data: [...(prev?.data || []), newData.newData],
  };
};

const LiveData = () => {
  const [res] = useSubscription(
    { query: NEW_DATA_SUBSCRIPTION },
    handleSubscription,
  );

  const { data, error } = res;

  if (error) return <p> Subscription Error: {error.message}</p>;
  if (!data) return <p> Data Loading ...</p>;

  return (
    <div>
      <h2>Live-passed Data:</h2>
      <ul>
        {data.data.map((item) => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <p>
        {/* Komentarz: dane są dodawane w czasie rzeczywistym dzięki GraphQL subskrypcjom */}
        {/* Dodatkowo, cacheExchange zapewnia, że zapytania do tych samych danych nie są ponawiane */}
      </p>
    </div>
  );
};

export default LiveData;
