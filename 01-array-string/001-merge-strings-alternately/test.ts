import { describe, it, expect } from "vitest";
import { mergeAlternately } from "./solution";

describe("1768. Merge Strings Alternately", () => {
  it("alternates chars evenly", () => {
    expect(mergeAlternately("abc", "pqr")).toBe("apbqcr");
  });

  it("appends remaining from longer second string", () => {
    expect(mergeAlternately("ab", "pqrs")).toBe("apbqrs");
  });

  it("appends remaining from longer first string", () => {
    expect(mergeAlternately("abcd", "pq")).toBe("apbqcd");
  });

  it("single chars each", () => {
    expect(mergeAlternately("a", "b")).toBe("ab");
  });

  it("empty second string", () => {
    expect(mergeAlternately("abc", "")).toBe("abc");
  });
});
