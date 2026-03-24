import { describe, it, expect } from "vitest";
import { canPlaceFlowers } from "./solution";

describe("605. Can Place Flowers", () => {
  it("can place 1 flower in [1,0,0,0,1]", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
  });

  it("cannot place 2 flowers in [1,0,0,0,1]", () => {
    expect(canPlaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
  });

  it("can place in middle of [0,0,1,0,0]", () => {
    expect(canPlaceFlowers([0, 0, 1, 0, 0], 1)).toBe(true);
  });

  it("single empty plot can hold one flower", () => {
    expect(canPlaceFlowers([0], 1)).toBe(true);
  });

  it("n=0 always returns true", () => {
    expect(canPlaceFlowers([1, 0, 1], 0)).toBe(true);
  });
});
