import Image from "next/image";
import React from "react";

type Props = {
  title: string;
  thumbnail: string;
} & React.HTMLProps<HTMLDivElement>;

const Card = ({ title, thumbnail, ...rest }: Props) => {
  return (
    <div
      className="relative aspect-video group cursor-pointer overflow-hidden"
      {...rest}
    >
      <Image
        className="absolute inset-0"
        src={thumbnail}
        alt={title}
        fill
        objectFit="cover"
      />
      <p className="absolute inset-0 p-2 text-sm w-full h-full overflow-hidden text-ellipsis bg-gradientThumbnail group-hover:bg-black/70 text-white">
        {title}
      </p>
    </div>
  );
};

export default Card;
