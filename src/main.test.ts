import { describe, expect, it } from 'vitest';
import { mathFunc } from './main.ts';

describe('mathFunc', () => {
  it('two sum positive', () => {
    expect(mathFunc(5, 10)).toBe(15);
  });
});
