const Employee = require("../lib/Employee");

test("create employee object", () => {
  const employee = new Employee("Min");
});

test("set id with constructor", () => {
  const testValue = 99;
  const newEmp = new Employee("Min", testValue);
  expect(newEmp.id).toBe(testValue);
});

test("set email with constructor", () => {
  const testValue = "employee@gmail.com";
  const newEmp = new Employee("Zaw", 1, testValue);
  expect(newEmp.email).toBe(testValue);
});

// Test if the getRole() value is Employee
test("getRole() return Employee", () => {
  const testValue = "Employee";
  const newEmp = new Employee("Zaw", 1, "employee@gmail.com");
  expect(newEmp.getRole()).toBe(testValue);
});
