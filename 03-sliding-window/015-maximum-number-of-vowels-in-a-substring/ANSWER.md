# Solution

## Intuition

Fixed-size sliding window of size `k`. Count vowels in the initial window, then slide: add `1` if the incoming char is a vowel, subtract `1` if the outgoing char is a vowel.

## Approach

```ts
function solution(s: string, k: number): number {
  const vowels = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let i = 0; i < k; i++) {
    if (vowels.has(s[i])) count++;
  }
  let maxCount = count;
  for (let i = k; i < s.length; i++) {
    if (vowels.has(s[i])) count++;
    if (vowels.has(s[i - k])) count--;
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
}
```

**Time:** O(n)
**Space:** O(1)
