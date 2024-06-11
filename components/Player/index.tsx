import { useEffect } from "react";
import Script from "next/script";

type Props = {
  playerId: string;
  videoId?: string;
  playlistId?: string;
  onVideoEnd?: () => void;
};

declare global {
  interface Window {
    dailymotion: any;
  }
}

const Player = ({ playerId, videoId, onVideoEnd }: Props) => {
  useEffect(() => {
    if (window.dailymotion === undefined) {
      window.dailymotion = {
        onScriptLoaded: () => {
          window.dailymotion.createPlayer("dailymotion-player", {
            video: videoId,
            params: {
              autoplay: true,
              mute: false,
              controls: false,
              origin: window.location.origin,
            },
          });

          window.dailymotion
            .getPlayer("dailymotion-player")
            .then((player: any) => {
              player.on(window.dailymotion.events.PLAYER_END, () => {
                onVideoEnd?.();
              });
            });
        },
      };
    } else {
      if (window.dailymotion.getPlayer) {
        window.dailymotion.createPlayer("dailymotion-player", {
          video: videoId,
          params: {
            autoplay: true,
            mute: false,
            controls: false,
            origin: window.location.origin,
          },
        });
      }
    }
  }, []);

  const getPlayerScriptSrc = () => {
    let src = `https://geo.dailymotion.com/libs/player/${playerId}.js`;
    if (videoId) src += `?video=${videoId}`;
    return src;
  };

  return (
    <>
      <Script src={getPlayerScriptSrc()} strategy="lazyOnload" />
      <div id="dailymotion-player"></div>
    </>
  );
};

export default Player;
