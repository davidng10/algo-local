# 392. Is Subsequence
**Difficulty:** Easy
**Link:** https://leetcode.com/problems/is-subsequence

## Description

Given two strings `s` and `t`, return `true` if `s` is a **subsequence** of `t`, or `false` otherwise.

A **subsequence** of a string is a new string formed by deleting some (or no) characters from the original string without disturbing the relative positions of the remaining characters. (e.g., `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

## Examples

**Example 1:**
```
Input: s = "abc", t = "ahbgdc"
Output: true
```

**Example 2:**
```
Input: s = "axc", t = "ahbgdc"
Output: false
```

## Constraints

- `0 <= s.length <= 100`
- `0 <= t.length <= 10^4`
- `s` and `t` consist only of lowercase English letters.

## Follow-up

Suppose there are lots of incoming `s` strings (`s1, s2, ..., sk`) and you want to check each against `t`. How would you change your code?
