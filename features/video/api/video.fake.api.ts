import { VideoPort } from "@/features/video/video.port";
import { ElixResponse } from "@/features/video/types/elix-response.type";
import { mockElixReponseForFoundWord } from "@/features/video/mocks/elix-response-for-found-word.mock";
import { mockElixReponseForUnfoundWord } from "@/features/video/mocks/elix-response-for-unfound-word.mock";

export class VideoFakeAPI implements VideoPort {
  async getVideosForWord(word: string): Promise<ElixResponse> {
    if (word === "NO_VIDEO_FOUND") {
      return Promise.resolve(mockElixReponseForUnfoundWord);
    } else return Promise.resolve(mockElixReponseForFoundWord);
  }
}
