import { useQuery } from "@tanstack/react-query";

const SimpleQuery = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["example"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) =>
        res.json(),
      ),
  });

  if (isLoading) return <p> Data Loading </p>;
  if (error) return <p> ERROR </p>;

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export default SimpleQuery;
