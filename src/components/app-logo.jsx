import config from "../config";

const AppLogo = ({ className, color = "white" }) => {
  const isDark = color === "black";
  return (
    <img
      src={isDark ? config.APP_LOGO_PATH_DARK : config.APP_LOGO_PATH_LIGHT}
      alt="App Logo"
      className={className}
    />
  );
};

export default AppLogo;
