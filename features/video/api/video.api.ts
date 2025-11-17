import { VideoPort } from "@/features/video/video.port";
import { ElixResponse } from "@/features/video/types/elix-response.type";

export class VideoAPI implements VideoPort {
  async getVideosForWord(word: string): Promise<ElixResponse> {
    const apiKey = process.env.ELIX_API_KEY || "";
    const url = `https://elix-api-preprod.cleverapps.io/meanings/${word}?apikey=${apiKey}&size=10`;
    const elixRawResponse = await fetch(url);
    return await elixRawResponse.json();
  }
}
