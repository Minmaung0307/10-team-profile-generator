const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Leong');
});

test('set office number with constructor', () => {
    const testValue = 99;
    const e = new Manager('Sue', 1, 'manager@gmail.com', testValue);
    expect(e.officeNumber).toBe(testValue);
});

test('get office number with getOfficeNumber() method', () => {
    const testValue = 99;
    const e = new Manager('Sue', 1, 'manager@gmail.com', testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});

// Test if the getRole() value is Manager
test('getRole() return Manager', () => {
    const testValue = 'Manager';
    const e = new Manager('Sue', 1, 'manager@gmail.com', 100);
    expect(e.getRole()).toBe(testValue);
});