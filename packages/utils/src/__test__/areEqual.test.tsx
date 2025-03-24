import { areEqual } from '../areEqual';

describe('areEqual', () => {
  it('should return true for identical primitive values', () => {
    expect(areEqual(1, 1)).toBe(true);
    expect(areEqual('test', 'test')).toBe(true);
    expect(areEqual(true, true)).toBe(true);
  });

  it('should return false for different primitive values', () => {
    expect(areEqual(1, 2)).toBe(false);
    expect(areEqual('test', 'different')).toBe(false);
    expect(areEqual(true, false)).toBe(false);
  });

  it('should return true for identical simple objects', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John', age: 30 };
    expect(areEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for objects with different values', () => {
    const obj1 = { name: 'John', age: 30 };
    const obj2 = { name: 'John', age: 31 };
    expect(areEqual(obj1, obj2)).toBe(false);
  });

  it('should return true for identical nested objects', () => {
    const obj1 = {
      person: {
        name: 'John',
        address: {
          city: 'New York',
          zip: 10001,
        },
      },
    };
    const obj2 = {
      person: {
        name: 'John',
        address: {
          city: 'New York',
          zip: 10001,
        },
      },
    };
    expect(areEqual(obj1, obj2)).toBe(true);
  });

  it('should return false for nested objects with different values', () => {
    const obj1 = {
      person: {
        name: 'John',
        address: {
          city: 'New York',
          zip: 10001,
        },
      },
    };
    const obj2 = {
      person: {
        name: 'John',
        address: {
          city: 'Boston',
          zip: 10001,
        },
      },
    };
    expect(areEqual(obj1, obj2)).toBe(false);
  });

  it('should return true for identical arrays', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(areEqual(arr1, arr2)).toBe(true);
  });

  it('should return false for arrays with different values', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 4];
    expect(areEqual(arr1, arr2)).toBe(false);
  });

  it('should return false for arrays with different lengths', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2];
    expect(areEqual(arr1, arr2)).toBe(false);
  });

  it('should return true for identical arrays of objects', () => {
    const arr1 = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    const arr2 = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    expect(areEqual(arr1, arr2)).toBe(true);
  });

  it('should return false for arrays of objects with different values', () => {
    const arr1 = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    const arr2 = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Sarah' },
    ];
    expect(areEqual(arr1, arr2)).toBe(false);
  });

  it('should handle Date objects properly', () => {
    const date1 = new Date('2023-01-01');
    const date2 = new Date('2023-01-01');
    const date3 = new Date('2023-01-02');

    expect(areEqual(date1, date2)).toBe(true);
    expect(areEqual(date1, date3)).toBe(false);
  });

  it('should handle objects with functions (note: functions will be ignored by JSON.stringify)', () => {
    const fn1 = () => console.log('Hello');
    const fn2 = () => console.log('Hello');

    // Functions are ignored by JSON.stringify, so these objects will be equal
    const obj1 = { id: 1, callback: fn1 };
    const obj2 = { id: 1, callback: fn2 };

    expect(areEqual(obj1, obj2)).toBe(true);
  });

  it('should handle circular references appropriately (by causing an error)', () => {
    const obj1: any = { name: 'John' };
    const obj2: any = { name: 'John' };

    // Create circular references
    obj1.self = obj1;
    obj2.self = obj2;

    // This should throw an error due to circular references
    expect(() => areEqual(obj1, obj2)).toThrow();
  });

  // Testing edge cases with special types
  it('should handle special values', () => {
    // NaN values
    expect(areEqual(NaN, NaN)).toBe(true); // In JSON, NaN becomes null

    // Infinity values
    expect(areEqual(Infinity, Infinity)).toBe(true); // In JSON, Infinity becomes null

    // Symbol values (they get lost in JSON stringification)
    const sym1 = Symbol('test');
    const sym2 = Symbol('test');
    const objWithSym1 = { id: 1, sym: sym1 };
    const objWithSym2 = { id: 1, sym: sym2 };
    expect(areEqual(objWithSym1, objWithSym2)).toBe(true);
  });
});
