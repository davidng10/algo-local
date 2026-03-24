import { describe, it, expect } from "vitest";
import { gcdOfStrings } from "./solution";

describe("1071. Greatest Common Divisor of Strings", () => {
  it("returns the common divisor string", () => {
    expect(gcdOfStrings("ABCABC", "ABC")).toBe("ABC");
  });

  it("returns shorter divisor", () => {
    expect(gcdOfStrings("ABABAB", "ABAB")).toBe("AB");
  });

  it("returns empty string when no divisor exists", () => {
    expect(gcdOfStrings("LEET", "CODE")).toBe("");
  });

  it("same strings return the string itself", () => {
    expect(gcdOfStrings("ABAB", "ABAB")).toBe("ABAB");
  });

  it("single char divisor", () => {
    expect(gcdOfStrings("AA", "A")).toBe("A");
  });
});
