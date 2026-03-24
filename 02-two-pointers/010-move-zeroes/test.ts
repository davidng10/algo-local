import { describe, it, expect } from "vitest";
import { moveZeroes } from "./solution";

describe("283. Move Zeroes", () => {
  it("moves zeroes to the end preserving order", () => {
    const nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    expect(nums).toEqual([1, 3, 12, 0, 0]);
  });

  it("single zero stays", () => {
    const nums = [0];
    moveZeroes(nums);
    expect(nums).toEqual([0]);
  });

  it("no zeroes, array unchanged", () => {
    const nums = [1, 2, 3];
    moveZeroes(nums);
    expect(nums).toEqual([1, 2, 3]);
  });

  it("leading zero", () => {
    const nums = [0, 0, 1];
    moveZeroes(nums);
    expect(nums).toEqual([1, 0, 0]);
  });

  it("mixed array", () => {
    const nums = [4, 2, 4, 0, 0, 3, 0, 5, 1, 0];
    moveZeroes(nums);
    expect(nums).toEqual([4, 2, 4, 3, 5, 1, 0, 0, 0, 0]);
  });
});
