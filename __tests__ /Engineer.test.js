const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Zaw");
});

test("set github account with constructor", () => {
  const testValue = "Github";
  const newEng = new Engineer("Sue", 1, "engineer@gmail.com", testValue);
  expect(newEng.github).toBe(testValue);
});

test("get github account with getGithub() method", () => {
  const testValue = "Github";
  const newEng = new Engineer("Sue", 1, "engineer@gmail.com", testValue);
  expect(newEng.getGitHub()).toBe(testValue);
});

// Test if the getRole() value is Engineer
test("getRole() return Engineer", () => {
  const testValue = "Engineer";
  const newEng = new Engineer("Sue", 1, "engineer@gmail.com", "Github");
  expect(newEng.getRole()).toBe(testValue);
});
