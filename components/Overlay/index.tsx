import React from "react";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const Overlay = ({ children, onClose }: Props) => {
  return (
    <div className="fixed z-30 inset-0 bg-black/50 flex justify-center items-center">
      <div className="max-w-[500px] h-full max-h-[350px] aspect-video relative">
        <button className="absolute top-0 -right-4 text-xl" onClick={onClose}>
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
