import { describe, it, expect } from "vitest";
import { findMaxAverage } from "./solution";

const EPSILON = 1e-5;

describe("643. Maximum Average Subarray I", () => {
  it("returns 12.75 for example 1", () => {
    expect(findMaxAverage([1, 12, -5, -6, 50, 3], 4)).toBeCloseTo(12.75, 5);
  });

  it("single element array", () => {
    expect(findMaxAverage([5], 1)).toBeCloseTo(5.0, 5);
  });

  it("k=1, returns max element", () => {
    expect(findMaxAverage([0, 4, 0, 3, 2], 1)).toBeCloseTo(4.0, 5);
  });

  it("k equals array length", () => {
    expect(Math.abs(findMaxAverage([1, 2, 3], 3) - 2.0)).toBeLessThan(EPSILON);
  });
});
