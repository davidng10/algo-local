# 1493. Longest Subarray of 1's After Deleting One Element
**Difficulty:** Medium
**Link:** https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element

## Description

Given a binary array `nums`, you should **delete one element** from it.

Return the size of the longest non-empty subarray containing only `1`'s in the resulting array. Return `0` if there is no such subarray.

## Examples

**Example 1:**
```
Input: nums = [1,1,0,1,1,1,0,1]
Output: 5
Explanation: Delete index 2 → [1,1,1,1,1] (length 5)
```

**Example 2:**
```
Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: Delete index 4 → [0,1,1,1,1,1,0,1]
The longest subarray of 1's has length 5.
```

**Example 3:**
```
Input: nums = [1,1,1]
Output: 2
Explanation: Must delete one element. Longest is 2.
```

## Constraints

- `1 <= nums.length <= 10^5`
- `nums[i]` is either `0` or `1`.
