const BuggyComponent = () => {
  throw new Error("TEST ERROR");
  // return <h3> Hello in BuggyComponent</h3>
};

export default BuggyComponent;
