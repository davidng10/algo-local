import { describe, it, expect } from "vitest";
import { increasingTriplet } from "./solution";

describe("334. Increasing Triplet Subsequence", () => {
  it("ascending array returns true", () => {
    expect(increasingTriplet([1, 2, 3, 4, 5])).toBe(true);
  });

  it("descending array returns false", () => {
    expect(increasingTriplet([5, 4, 3, 2, 1])).toBe(false);
  });

  it("triplet exists in mixed array", () => {
    expect(increasingTriplet([2, 1, 5, 0, 4, 6])).toBe(true);
  });

  it("all same values returns false", () => {
    expect(increasingTriplet([1, 1, 1, 1, 1])).toBe(false);
  });

  it("tricky case where first resets but triplet still exists", () => {
    expect(increasingTriplet([20, 100, 10, 12, 5, 13])).toBe(true);
  });

  it("only two elements returns false", () => {
    expect(increasingTriplet([1, 2])).toBe(false);
  });
});
