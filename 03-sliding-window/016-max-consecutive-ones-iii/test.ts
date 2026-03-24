import { describe, it, expect } from "vitest";
import { longestOnes } from "./solution";

describe("1004. Max Consecutive Ones III", () => {
  it("k=2 flips give length 6", () => {
    expect(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2)).toBe(6);
  });

  it("k=3 gives length 10", () => {
    expect(longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3)).toBe(10);
  });

  it("k=0, returns longest run of natural 1s", () => {
    expect(longestOnes([1, 1, 0, 1, 1, 1], 0)).toBe(3);
  });

  it("all zeros with k=2", () => {
    expect(longestOnes([0, 0, 0, 0], 2)).toBe(2);
  });
});
