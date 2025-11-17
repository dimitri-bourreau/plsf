import { describe, expect, it } from "@jest/globals";
import { getVideoDataForWord } from "@/features/video/services/get-video-data-for-word.service";
import { VideoFakeAPI } from "@/features/video/api/video.fake.api";

describe("getVideoDataForWord()", () => {
  const adapter = new VideoFakeAPI();

  it("should return empty array if no videos are found", async () => {
    const videoData = await getVideoDataForWord(adapter, "NO_VIDEO_FOUND");
    expect(videoData.length).toEqual(0);
  });

  it("should map video data", async () => {
    const videoData = await getVideoDataForWord(adapter, "");
    const mappedData = {
      contributor: "Signes de sens",
      id: 189154,
      source: "http://dictionnaire.sensagent.com/SOLEIL/fr-fr/",
      videoUrl:
        "https://elix-lsf.s3.rbx.io.cloud.ovh.net/spip_videos/92_soleil_1__nm_2td001-encoded.mp4",
      word: "soleil",
    };
    expect(videoData[1]).toEqual(mappedData);
  });
});
