"use server";

import { getVideoDataForWord } from "@/features/video/services/get-video-data-for-word.service";
import { adapters } from "@/app-adapters/adapters.config";
import { VideoData } from "@/features/video/types/video-data.type";

export const searchWord = async (word: string): Promise<VideoData[]> => {
  if (!word) return [];
  return await getVideoDataForWord(adapters.videoData, word);
};
