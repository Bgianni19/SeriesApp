import { useStylesML } from "./styles";

const MainLayout = ({ children }) => {
  const classes = useStylesML();

  return <div className={classes.root}>{children}</div>;
};

export default MainLayout;
