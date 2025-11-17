"use server";

import { VideoData } from "@/features/video/types/video-data.type";
import { VideoPort } from "@/features/video/video.port";

export const getVideoDataForWord = async (
  adapter: VideoPort,
  inputQuery: string,
): Promise<VideoData[]> => {
  const elixVideoData = await adapter.getVideosForWord(inputQuery);
  if (elixVideoData.total === 0) return [];
  return elixVideoData.data.map((videoData) => ({
    contributor: videoData.definition.contributor,
    id: videoData.definition.id,
    source: videoData.definition.source,
    videoUrl: videoData.definition.path,
    word: videoData.definition.word,
  }));
};
