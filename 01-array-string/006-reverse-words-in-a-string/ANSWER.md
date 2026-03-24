# Solution

## Intuition

Trim the string, split on any whitespace (handles multiple spaces), reverse the word array, then join with a single space.

## Approach

```ts
function solution(s: string): string {
  return s.trim().split(/\s+/).reverse().join(" ");
}
```

**Time:** O(n)
**Space:** O(n)
