import { useTheme } from "../context/ThemeContext";
import Box from "./Box";
import Button from "./Button";

const Container = () => {
  const { val } = useTheme();
  return (
    <div className={`container ${val ? `dark` : `light`}`}>
      <Box />
      <Button />
    </div>
  );
};

export default Container;
