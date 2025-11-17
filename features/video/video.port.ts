import { ElixResponse } from "@/features/video/types/elix-response.type";

export interface VideoPort {
  getVideosForWord(word: string): Promise<ElixResponse>;
}
