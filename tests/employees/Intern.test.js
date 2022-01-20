const Intern = require("../../employees/Intern");

const employee = new Intern(9, "Rory", "rory@icloud.com", "Harvard");

describe("Intern class", () => {
    describe("getName method", () => {
        it("returns the name of the employee", () => {
            expect(employee.getName()).toBe("Rory");
        });
    });
    describe("getSchool method", () => {
        it("returns the name of the intern's school", () => {
            expect(employee.getSchool()).toBe("Harvard");
        });
    });
    describe("getId method", () => {
        it("returns the ID number of the employee", () => {
            expect(employee.getId()).toBe(9);
        });
    });
      describe("getEmail method", () => {
        it("returns the email of the employee", () => {
            expect(employee.getEmail()).toBe("rory@icloud.com");
        });
    });
      describe("getRole method", () => {
        it("returns the role of the employee", () => {
            expect(employee.getRole()).toBe("Intern");
        });
    });
});