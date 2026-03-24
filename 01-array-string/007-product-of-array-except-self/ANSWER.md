# Solution

## Intuition

`answer[i]` = (product of everything to the left of i) × (product of everything to the right of i).

We can compute both in two passes without division.

## Approach

**Pass 1 (left to right):** Store prefix products in `result`. `result[i]` = product of all elements before index `i`.

**Pass 2 (right to left):** Multiply each `result[i]` by the running suffix product.

**Time:** O(n)
**Space:** O(1) extra (output array excluded)

```ts
function solution(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n).fill(1);

  // Left pass: result[i] = product of nums[0..i-1]
  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    result[i] = leftProduct;
    leftProduct *= nums[i];
  }

  // Right pass: multiply by product of nums[i+1..n-1]
  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return result;
}
```
