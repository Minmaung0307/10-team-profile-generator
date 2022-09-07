const Employee = require("../lib/Employee");

test("create employee object", () => {
  const employee = new Employee("Min");
});

test("set id with constructor", () => {
  const testValue = 99;
  const emp = new Employee("Min", testValue);
  expect(emp.id).toBe(testValue);
});

test("set email with constructor", () => {
  const testValue = "employee@gmail.com";
  const emp = new Employee("Foo", 1, testValue);
  expect(emp.email).toBe(testValue);
});

// Test if the getRole() value is Employee
test("getRole() return Employee", () => {
  const testValue = "Employee";
  const emp = new Employee("Jason", 1, "employee@gmail.com");
  expect(emp.getRole()).toBe(testValue);
});

// test("create employee object", () => {
//   expect(employee.name).toBe("name");
//   expect(employee.id).toBe("id");
//   expect(employee.email).toBe("email");
//   expect(employee.role).toBe("role");
// });
