import { describe, it, expect } from "vitest";
import { reverseVowels } from "./solution";

describe("345. Reverse Vowels of a String", () => {
  it("reverses mixed-case vowels", () => {
    expect(reverseVowels("IcesCreAm")).toBe("AcesCreIm");
  });

  it("reverses vowels in leetcode", () => {
    expect(reverseVowels("leetcode")).toBe("leotcede");
  });

  it("swaps two vowels", () => {
    expect(reverseVowels("aA")).toBe("Aa");
  });

  it("reverses vowels in hello", () => {
    expect(reverseVowels("hello")).toBe("holle");
  });

  it("no vowels, string unchanged", () => {
    expect(reverseVowels("bcd")).toBe("bcd");
  });
});
