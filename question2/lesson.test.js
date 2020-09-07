const Lesson = require('./lesson.js');

describe('Basic test', () => {
  test('Test 1', () => {
    let start = new Date(2020, 7, 5);
    let end = new Date(2020, 7, 8);
    let now = new Date();
    let l1 = new Lesson(start, end);

    expect(l1.isOngoing(now)).toBe(false);
  });

  test('Test 2', () => {
    let start = new Date(2020, 7, 5);
    let end = new Date(2020, 7, 8);
    let day = new Date(2020, 7, 7);
    let l1 = new Lesson(start, end);

    expect(l1.isOngoing(day)).toBe(true);
  });
});

