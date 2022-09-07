const Employee = require("../lib/Employee");

test("create employee object", () => {
  expect(employee.name).toBe("name");
  expect(employee.id).toBe("id");
  expect(employee.email).toBe("email");
  expect(employee.role).toBe("role");
});

test("create employee getName()", () => {
  expect(employee.getName()).toBe("name");
});

test("test the name from getId()", () => {
  expect(employee.getId()).toBe("id");
});

test("test the name from getEmail()", () => {
  expect(employee.getEmail()).toBe("email");
});

test("test the name from getRole()", () => {
  expect(employee.getRole()).toBe("Employee");
});
