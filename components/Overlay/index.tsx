import React from "react";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

const Overlay = ({ children, onClose }: Props) => {
  return (
    <div className="fixed z-30 inset-0 bg-black/80 flex justify-center items-center">
      <div className="max-w-[500px] h-full max-h-[350px] aspect-video relative">
        <button
          className="absolute -top-8 right-0 text-xl text-white sm:top-0 sm:-right-4"
          onClick={onClose}
        >
          x
        </button>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
