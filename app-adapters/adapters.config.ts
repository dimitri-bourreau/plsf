import { VideoPort } from "@/features/video/video.port";
import { VideoAPI } from "@/features/video/api/video.api";

interface Adapters {
  videoData: VideoPort;
}

export const adapters: Adapters = {
  videoData: new VideoAPI(),
};
