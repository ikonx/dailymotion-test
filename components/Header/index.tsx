import DarkLightSwitch from "@UI/DarkLightSwitch";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="absolute">
      <DarkLightSwitch />
    </div>
  );
};

export default Header;
