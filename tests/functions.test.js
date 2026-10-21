const { sum, multiply, divide, isEven } = require("../functions");

describe("sum", () => {
  test("sum: возвращает корректную сумму двух чисел", () => {
    expect(sum(3, 5)).toBe(8);
  });

  test("sum: корректно работает с отрицательными числами", () => {
    expect(sum(-3, -5)).toBe(-8);
  });
});

describe("multiply", () => {
  test("multiply: возвращает корректное произведение", () => {
    expect(multiply(4, 3)).toBe(12);
  });

  test("multiply: возвращает 0 при умножении на 0", () => {
    expect(multiply(7, 0)).toBe(0);
  });
});

describe("divide", () => {
  test("divide: возвращает корректный результат деления", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide: выбрасывает ошибку при делении на 0", () => {
    expect(() => divide(10, 0)).toThrow("Деление на ноль");
  });
});

describe("isEven", () => {
  test("isEven: возвращает true для чётных чисел", () => {
    expect(isEven(8)).toBe(true);
  });

  test("isEven: возвращает false для нечётных чисел", () => {
    expect(isEven(7)).toBe(false);
  });
});