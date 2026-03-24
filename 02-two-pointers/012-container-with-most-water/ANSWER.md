# Solution

## Intuition

Start with the widest container (outermost lines). The area is limited by the shorter line. Moving the taller line inward can never increase the area (width shrinks, height stays the same or less). So always move the shorter line inward — it's the only move that could find a better height to compensate for the lost width.

## Approach

1. `left = 0`, `right = n - 1`
2. While `left < right`:
   - `area = min(height[left], height[right]) * (right - left)`
   - Update `maxArea`
   - Move the pointer with the shorter line inward

**Time:** O(n)
**Space:** O(1)

```ts
function solution(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);
    maxWater = Math.max(maxWater, area);
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxWater;
}
```
