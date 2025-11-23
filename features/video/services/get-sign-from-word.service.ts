"use server";

import { VideoPort } from "@/features/video/video.port";
import {
  DefinitionOrSignBase,
  ElixDataItem,
  ElixResponse,
} from "@/features/video/types/elix-response.type";
import { Sign } from "@/features/video/types/sign.type";

export const getSignFromWord = async (
  adapter: VideoPort,
  inputQuery: string,
): Promise<Sign | undefined> => {
  const elixResponse: ElixResponse = await adapter.getVideosForWord(inputQuery);
  if (elixResponse.total === 0) return undefined;
  const sign = getMoreRecentSignVideo(elixResponse.data);
  if (!sign) return undefined;
  const mappedSignData = mapObject(sign);
  return hasVideoLink(mappedSignData) ? mappedSignData : undefined;
};

function getMoreRecentSignVideo(
  data: ElixResponse["data"],
): DefinitionOrSignBase | undefined {
  return data.reverse().filter(removeDefinitions)[0]?.signs[0];
}

function hasVideoLink(video: signMaybeWithoutVideo): video is Sign {
  return !!video.videoUrl;
}

function removeDefinitions(video: ElixDataItem): boolean {
  return 0 < video.signs.length;
}

function mapObject(signData: DefinitionOrSignBase): signMaybeWithoutVideo {
  return {
    videoUrl: signData.path,
    videoPosterUrl: signData.image,
  };
}

type signMaybeWithoutVideo = Omit<Sign, "videoUrl"> & {
  videoUrl: string | null;
};
