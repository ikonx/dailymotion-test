import DarkLightSwitch from "@UI/DarkLightSwitch";

const Header = () => {
  return (
    <div className="relative">
      <DarkLightSwitch className="absolute top-6 right-6" />
    </div>
  );
};

export default Header;
