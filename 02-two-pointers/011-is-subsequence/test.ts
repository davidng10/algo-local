import { describe, it, expect } from "vitest";
import { isSubsequence } from "./solution";

describe("392. Is Subsequence", () => {
  it("abc is a subsequence of ahbgdc", () => {
    expect(isSubsequence("abc", "ahbgdc")).toBe(true);
  });

  it("axc is not a subsequence", () => {
    expect(isSubsequence("axc", "ahbgdc")).toBe(false);
  });

  it("empty string is always a subsequence", () => {
    expect(isSubsequence("", "ahbgdc")).toBe(true);
  });

  it("s longer than t returns false", () => {
    expect(isSubsequence("abcdef", "abc")).toBe(false);
  });

  it("s equals t returns true", () => {
    expect(isSubsequence("abc", "abc")).toBe(true);
  });
});
