import { useTheme } from "../context/ThemeContext";

const Box = () => {
  const { val } = useTheme();

  return (
    <div className={`box ${val ? `dark` : `light`}`}>
      <p>Show {val ? "Dark" : "Light"} Theme!</p>
    </div>
  );
};
export default Box;
