import { describe, expect, it } from "@jest/globals";
import { getSignFromWord } from "@/features/video/services/get-sign-from-word.service";
import { VideoFakeAPI } from "@/features/video/api/video.fake.api";
import { mockSign } from "@/features/video/mocks/sign.mock";

describe("getSignFromWord()", () => {
  const adapter = new VideoFakeAPI();

  it("should return undefined if no videos are found", async () => {
    const videoData = await getSignFromWord(adapter, "NO_VIDEO_FOUND");
    expect(videoData).toBeUndefined();
  });

  it("should map video data", async () => {
    const videoData = await getSignFromWord(adapter, "");
    expect(videoData).toEqual(mockSign);
  });
});
