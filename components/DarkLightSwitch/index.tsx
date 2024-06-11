"use client";
import React from "react";

type Mode = "dark" | "light";

type Props = {
  className?: string;
};

const DarkLightSwitch = ({ className }: Props) => {
  const defaultMode: Mode =
    typeof localStorage !== "undefined"
      ? (localStorage.getItem("mode") as Mode)
      : "dark";
  const [mode, setMode] = React.useState<Mode>(defaultMode);

  const onClick = (mode: Mode) => () => {
    setMode(mode);
  };

  React.useEffect(() => {
    const mode = localStorage.getItem("mode");
    if (mode) {
      setMode(mode as Mode);
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem("mode", mode);
    // TODO: retreive default CSS var instead of hardcoding (--defailt-...)
    document.documentElement.style.setProperty(
      "--background-rgb",
      mode === "dark" ? "11, 11, 11" : "255, 255, 255"
    );
    document.documentElement.style.setProperty(
      "--foreground-rgb",
      mode === "dark" ? "255, 255, 255" : "11, 11, 11"
    );
  }, [mode]);

  return (
    <div
      className={`flex items-center px-2 py-2 rounded-full border-solid border-2 border-[--foreground] ${
        className ?? ""
      }`}
    >
      <button
        className={`w-6 h-6 rounded-full ${
          mode === "light" && "bg-[--foreground] text-[--background]"
        }`}
        onClick={onClick("light")}
      >
        🌝
      </button>
      <button
        className={`w-6 h-6 rounded-full ${
          mode === "dark" && "bg-[--foreground] text-[--background]"
        }`}
        onClick={onClick("dark")}
      >
        🌚
      </button>
    </div>
  );
};

export default DarkLightSwitch;
