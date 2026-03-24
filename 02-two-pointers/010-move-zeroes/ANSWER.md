# Solution

## Intuition

Use a `write` pointer that only advances when we write a non-zero element. After all non-zeros are moved to the front, fill the rest with zeros.

## Approach

1. `insertPos = 0`
2. Iterate: whenever `nums[i] !== 0`, write it to `nums[insertPos++]`.
3. Fill `nums[insertPos..end]` with `0`.

**Time:** O(n)
**Space:** O(1)

```ts
function solution(nums: number[]): void {
  let insertPos = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[insertPos++] = nums[i];
    }
  }

  while (insertPos < nums.length) {
    nums[insertPos++] = 0;
  }
}
```
