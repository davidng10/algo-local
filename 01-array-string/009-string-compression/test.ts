import { describe, it, expect } from "vitest";
import { compress } from "./solution";

describe("443. String Compression", () => {
  it("compresses pairs and triple", () => {
    const chars = ["a", "a", "b", "b", "c", "c", "c"];
    expect(compress(chars)).toBe(6);
    expect(chars.slice(0, 6)).toEqual(["a", "2", "b", "2", "c", "3"]);
  });

  it("single character stays as-is", () => {
    const chars = ["a"];
    expect(compress(chars)).toBe(1);
    expect(chars.slice(0, 1)).toEqual(["a"]);
  });

  it("count >= 10 is split into digits", () => {
    const chars = ["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"];
    expect(compress(chars)).toBe(4);
    expect(chars.slice(0, 4)).toEqual(["a", "b", "1", "2"]);
  });

  it("count of 10 writes two digit chars", () => {
    const chars = Array(10).fill("a");
    expect(compress(chars)).toBe(3);
    expect(chars.slice(0, 3)).toEqual(["a", "1", "0"]);
  });
});
