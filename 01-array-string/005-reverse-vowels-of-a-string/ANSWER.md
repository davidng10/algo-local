# Solution

## Intuition

Two pointers from both ends. Skip non-vowels, then swap the vowels they land on.

## Approach

1. Convert string to char array.
2. `left` pointer from start, `right` from end.
3. Advance `left` right until a vowel is found; advance `right` left until a vowel.
4. Swap, then move both pointers inward.
5. Repeat until `left >= right`.

**Time:** O(n)
**Space:** O(n) for char array

```ts
function solution(s: string): string {
  const vowels = new Set("aeiouAEIOU");
  const chars = s.split("");
  let left = 0;
  let right = chars.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(chars[left])) left++;
    while (left < right && !vowels.has(chars[right])) right--;
    if (left < right) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left++;
      right--;
    }
  }

  return chars.join("");
}
```
