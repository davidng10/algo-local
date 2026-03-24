# Solution

## Intuition

Two pointers: one on `s`, one on `t`. Advance the `s` pointer only when chars match. If we exhaust `s`, it's a subsequence.

## Approach

```ts
function solution(s: string, t: string): boolean {
  let si = 0;
  let ti = 0;
  while (si < s.length && ti < t.length) {
    if (s[si] === t[ti]) si++;
    ti++;
  }
  return si === s.length;
}
```

**Time:** O(n) where n = t.length
**Space:** O(1)

## Follow-up hint

For many `s` strings against the same `t`, preprocess `t` into a map of `char → sorted list of indices`. For each char in `s`, binary search for the next valid index in `t`.
