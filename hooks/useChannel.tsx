"use client";
import { API_URL } from "@Utils/constants";
import fetcher from "@Utils/fetcher";
import useSWRInfinite from "swr/infinite";

const getKey = (channelId: string) => (pageIndex: number) => {
  return `${API_URL}/user/${channelId}/videos?fields=id,title,thumbnail_url&limit=40&page=${
    pageIndex + 1
  }`;
};

const useChannel = (channelId: string) => {
  const { data, error, isLoading, size, setSize, isValidating } =
    useSWRInfinite(getKey(channelId), fetcher);

  const loadMore = () => {
    setSize(size + 1);
  };

  return {
    data,
    isLoading: isLoading || isValidating,
    isError: error,
    loadMore,
    isValidating,
  };
};

export default useChannel;
