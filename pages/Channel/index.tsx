"use client";
import useChannel from "@Hooks/useChannel";
import Card from "@UI/Card";
import Overlay from "@UI/Overlay";
import Player from "@UI/Player";
import React from "react";

type Props = {
  channel: string;
};

const Channel = ({ channel }: Props) => {
  const { data, loadMore, isLoading } = useChannel(channel);
  const [selectedVideo, setSelectedVideo] = React.useState<string | null>(null);

  const isOverlayOpen = !!selectedVideo;

  const gotVideos = data?.[0].list?.length > 0;

  const onSelectedVideo = (videoId: string) => () => {
    setSelectedVideo(videoId);
  };

  const resetSelectedVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="px-4 flex flex-col">
      {isOverlayOpen && (
        <Overlay onClose={resetSelectedVideo}>
          <Player
            videoId={selectedVideo}
            playerId="xu25c"
            onVideoEnd={resetSelectedVideo}
          />
        </Overlay>
      )}
      <div className="h-[150px] w-full content-center sticky top-0 z-10 bg-[--background]">
        <h1 className="text-4xl font-bold capitalize">{channel}</h1>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-4">
        {gotVideos ? (
          data?.map((page) =>
            page.list.map(
              (video: { id: string; title: string; thumbnail_url: string }) => (
                <Card
                  key={video.id}
                  title={video.title}
                  thumbnail={video.thumbnail_url}
                  onClick={onSelectedVideo(video.id)}
                />
              )
            )
          )
        ) : (
          <p>No videos found</p>
        )}
      </div>
      {gotVideos && (
        <button
          className="px-6 py-3 text-xl"
          onClick={loadMore}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Load More"}
        </button>
      )}
    </div>
  );
};

export default Channel;
