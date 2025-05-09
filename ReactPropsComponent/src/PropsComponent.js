const PropsComponent = (props) => {
  return (
    <h2>
      Hello, I'm {props.name} {props.surname}! I'm {props.age} years old!
    </h2>
  );
};

export default PropsComponent;
