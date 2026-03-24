import { describe, it, expect } from "vitest";
import { maxOperations } from "./solution";

describe("1679. Max Number of K-Sum Pairs", () => {
  it("two pairs sum to 5", () => {
    expect(maxOperations([1, 2, 3, 4], 5)).toBe(2);
  });

  it("only one pair sums to 6", () => {
    expect(maxOperations([3, 1, 3, 4, 3], 6)).toBe(1);
  });

  it("no valid pairs", () => {
    expect(maxOperations([1, 2, 3], 10)).toBe(0);
  });

  it("all elements pair up", () => {
    expect(maxOperations([1, 5, 1, 5], 6)).toBe(2);
  });
});
