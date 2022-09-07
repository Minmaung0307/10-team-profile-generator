const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Zaw');
});

test('set github account with constructor', () => {
    const testValue = 'GithubAccount';
    const emp = new Engineer('Sue', 1, 'engineer@gmail.com', testValue);
    expect(emp.github).toBe(testValue);
})

test('get github account with getGithub() method', () => {
    const testValue = 'GithubAccount';
    const emp = new Engineer('Sue', 1, 'engineer@gmail.com', testValue);
    expect(emp.getGitHub()).toBe(testValue);
});

// Test if the getRole() value is Engineer
test('getRole() return Engineer', () => {
    const testValue = 'Engineer';
    const emp = new Engineer('Sue', 1, 'engineer@gmail.com', 'GithubAccount');
    expect(emp.getRole()).toBe(testValue);
});