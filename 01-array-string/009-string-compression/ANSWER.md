# Solution

## Intuition

Two pointers: `read` scans through groups, `write` tracks where to write the compressed output back into `chars`.

## Approach

1. `read` scans forward counting consecutive identical chars.
2. Write the char at `write`, advance `write`.
3. If count > 1, write each digit of the count string, advancing `write` for each.
4. Return `write` as the new length.

**Time:** O(n)
**Space:** O(1)

```ts
function solution(chars: string[]): number {
  let write = 0;
  let read = 0;

  while (read < chars.length) {
    const char = chars[read];
    let count = 0;

    while (read < chars.length && chars[read] === char) {
      read++;
      count++;
    }

    chars[write++] = char;

    if (count > 1) {
      for (const digit of count.toString()) {
        chars[write++] = digit;
      }
    }
  }

  return write;
}
```
