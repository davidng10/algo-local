import { describe, it, expect } from "vitest";
import { maxArea } from "./solution";

describe("11. Container With Most Water", () => {
  it("classic example returns 49", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  it("two equal lines", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  it("symmetric array", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });

  it("increasing heights", () => {
    expect(maxArea([1, 2, 3, 4, 5])).toBe(6);
  });
});
