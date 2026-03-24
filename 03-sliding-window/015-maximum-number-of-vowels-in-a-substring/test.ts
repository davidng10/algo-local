import { describe, it, expect } from "vitest";
import { maxVowels } from "./solution";

describe("1456. Maximum Number of Vowels in a Substring of Given Length", () => {
  it("finds 3 consecutive vowels", () => {
    expect(maxVowels("abciiidef", 3)).toBe(3);
  });

  it("all vowels, k=2", () => {
    expect(maxVowels("aeiou", 2)).toBe(2);
  });

  it("max 2 vowels in leetcode", () => {
    expect(maxVowels("leetcode", 3)).toBe(2);
  });

  it("no vowels returns 0", () => {
    expect(maxVowels("rhythm", 2)).toBe(0);
  });
});
