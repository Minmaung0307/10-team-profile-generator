const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("Leong");
});

test("set office number with constructor", () => {
  const testValue = 99;
  const newMan = new Manager("Sue", 1, "manager@gmail.com", testValue);
  expect(newMan.officeNumber).toBe(testValue);
});

test("get office number with getOfficeNumber() method", () => {
  const testValue = 99;
  const newMan = new Manager("Sue", 1, "manager@gmail.com", testValue);
  expect(newMan.getOfficeNumber()).toBe(testValue);
});

// Test if the getRole() value is Manager
test("getRole() return Manager", () => {
  const testValue = "Manager";
  const newMan = new Manager("Sue", 1, "manager@gmail.com", 100);
  expect(newMan.getRole()).toBe(testValue);
});
