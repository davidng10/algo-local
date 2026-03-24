# 443. String Compression
**Difficulty:** Medium
**Link:** https://leetcode.com/problems/string-compression

## Description

Given an array of characters `chars`, compress it using the following algorithm:

For each group of consecutive repeating characters:
- If the group's length is 1, append the character to the result.
- Otherwise, append the character followed by the group's length.

The compressed result must be stored **in-place** in `chars`. Group lengths ≥ 10 are split into multiple characters (e.g., `12` → `'1'`, `'2'`).

Return the new length of the array after compression.

You must use only **constant extra space**.

## Examples

**Example 1:**
```
Input: chars = ["a","a","b","b","c","c","c"]
Output: 6
chars becomes: ["a","2","b","2","c","3"]
```

**Example 2:**
```
Input: chars = ["a"]
Output: 1
chars becomes: ["a"]
```

**Example 3:**
```
Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output: 4
chars becomes: ["a","b","1","2"]
```

## Constraints

- `1 <= chars.length <= 2000`
- `chars[i]` is a lowercase/uppercase letter, digit, or symbol.
