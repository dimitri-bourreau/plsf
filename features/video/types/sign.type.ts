import { DefinitionOrSignBase } from "@/features/video/types/elix-response.type";

export interface Sign {
  videoUrl: string;
  videoPosterUrl: DefinitionOrSignBase["image"];
}
