const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Maung');
});

test('set school with constructor', () => {
    const testValue = 'Zaw';
    const e = new Intern('Sue', 1, 'intern@gmail.com', testValue);
    expect(e.school).toBe(testValue);
});

test('get school with getSchool() method', () => {
    const testValue = 'Harvard';
    const e = new Intern('Sue', 1, 'intern@gmail.com', testValue);
    expect(e.getSchool()).toBe(testValue);
});

// Test if the getRole() value is Intern
test('getRole() return Intern', () => {
    const testValue = 'Intern';
    const e = new Intern('Sue', 1, 'intern@gmail.com', 'Zaw');
    expect(e.getRole()).toBe(testValue);
});