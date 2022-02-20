const Employee = require("../lib/Employee");

// test for all use cases when initializing  a new employee: 
test("Can instantiate Employee instance", () => {
    const employee = new Employee();
    // varify that new employee is an object and and new object has correct properties:
     expect(typeof(employee)).toBe("object");
  });
  
  test("Can set name via constructor arguments", () => {
    const name = "Alice";
    const employee = new Employee(name);
    expect(employee.name).toBe(name);
  });
  
  test("Can set id via constructor argument", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.id).toBe(testValue);
  });
  
  test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.email).toBe(testValue);
  });
  
  test("Can get name via getName()", () => {
    const testValue = "Alice";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
  });
  
  test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Foo", testValue);
    expect(e.getId()).toBe(testValue);
  });
  
  test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Foo", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
  });
  
  test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Alice", 1, "test@test.com");
    expect(e.getRole()).toBe(testValue);
  });