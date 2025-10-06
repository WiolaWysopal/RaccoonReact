const InterestPicker = ({ input }) => (
  <select {...input}>
    <option value=""> Pick Interest </option>
    <option value="music"> Music </option>
    <option value="sports"> Sport </option>
    <option value="coding"> Programming </option>
  </select>
);

export default InterestPicker;
