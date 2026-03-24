import { describe, it, expect } from "vitest";
import { reverseWords } from "./solution";

describe("151. Reverse Words in a String", () => {
  it("reverses simple sentence", () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the");
  });

  it("strips leading and trailing spaces", () => {
    expect(reverseWords("  hello world  ")).toBe("world hello");
  });

  it("collapses multiple spaces between words", () => {
    expect(reverseWords("a good   example")).toBe("example good a");
  });

  it("single word unchanged", () => {
    expect(reverseWords("singleword")).toBe("singleword");
  });
});
