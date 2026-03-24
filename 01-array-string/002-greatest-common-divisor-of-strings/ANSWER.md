# Solution

## Intuition

If a GCD string `x` exists, then both `str1` and `str2` are made by repeating `x`. This means `str1 + str2 === str2 + str1` must hold. If not, return `""`.

If they are compatible, the GCD string has length equal to `gcd(str1.length, str2.length)` — the same logic as finding the GCD of two numbers.

## Approach

1. Check if `str1 + str2 === str2 + str1`. If not, return `""`.
2. Compute `gcd(str1.length, str2.length)` using Euclidean algorithm.
3. Return `str1.substring(0, gcd_length)`.

**Time:** O(n) — string concatenation check
**Space:** O(n) — for the concatenated strings

```ts
function solution(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";

  function gcd(a: number, b: number): number {
    while (b) {
      [a, b] = [b, a % b];
    }
    return a;
  }

  return str1.substring(0, gcd(str1.length, str2.length));
}
```
