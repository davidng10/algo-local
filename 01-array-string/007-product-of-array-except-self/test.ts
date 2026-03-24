import { describe, it, expect } from "vitest";
import { productExceptSelf } from "./solution";

describe("238. Product of Array Except Self", () => {
  it("basic product example", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it("handles zeros correctly", () => {
    expect(productExceptSelf([-1, 1, 0, -3, 3])).toEqual([0, 0, 9, 0, 0]);
  });

  it("two element array", () => {
    expect(productExceptSelf([2, 3])).toEqual([3, 2]);
  });

  it("all ones", () => {
    expect(productExceptSelf([1, 1, 1, 1])).toEqual([1, 1, 1, 1]);
  });
});
