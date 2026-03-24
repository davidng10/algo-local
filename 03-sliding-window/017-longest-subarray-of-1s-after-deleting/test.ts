import { describe, it, expect } from "vitest";
import { longestSubarray } from "./solution";

describe("1493. Longest Subarray of 1's After Deleting One Element", () => {
  it("deleting middle zero gives length 5", () => {
    expect(longestSubarray([1, 1, 0, 1, 1, 1, 0, 1])).toBe(5);
  });

  it("deleting optimal zero gives length 5", () => {
    expect(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])).toBe(5);
  });

  it("must delete one from all-ones array", () => {
    expect(longestSubarray([1, 1, 1])).toBe(2);
  });

  it("all zeros returns 0", () => {
    expect(longestSubarray([0, 0, 0])).toBe(0);
  });
});
