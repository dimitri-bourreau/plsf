"use server";

import { getSignFromWord } from "@/features/video/services/get-sign-from-word.service";
import { adapters } from "@/app-adapters/adapters.config";
import { Sign } from "@/features/video/types/sign.type";

export const searchSign = async (word: string): Promise<Sign | undefined> => {
  if (!word) return undefined;
  return await getSignFromWord(adapters.videoData, word);
};
