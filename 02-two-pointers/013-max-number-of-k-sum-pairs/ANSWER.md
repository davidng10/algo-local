# Solution

## Approach 1: Sort + Two Pointers

Sort the array. Use two pointers from both ends:
- If `nums[left] + nums[right] === k`: count++, move both inward.
- If sum < k: move `left` right (need larger value).
- If sum > k: move `right` left (need smaller value).

**Time:** O(n log n) — sort dominates
**Space:** O(1)

```ts
function solution(nums: number[], k: number): number {
  nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let count = 0;

  while (left < right) {
    const sum = nums[left] + nums[right];
    if (sum === k) {
      count++;
      left++;
      right--;
    } else if (sum < k) {
      left++;
    } else {
      right--;
    }
  }

  return count;
}
```

## Approach 2: Hash Map (O(n))

Count frequencies. For each number, check if `k - num` exists.

```ts
function solution2(nums: number[], k: number): number {
  const freq = new Map<number, number>();
  let count = 0;
  for (const num of nums) {
    const complement = k - num;
    if ((freq.get(complement) ?? 0) > 0) {
      count++;
      freq.set(complement, freq.get(complement)! - 1);
    } else {
      freq.set(num, (freq.get(num) ?? 0) + 1);
    }
  }
  return count;
}
```
