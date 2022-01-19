const Intern = require("../../employees/Intern");

const employee = new Intern(9, "Rory", "rory@icloud.com", "Harvard");

describe("Intern class", () => {
    describe("getSchool method", () => {
        it("returns the name of the intern's school", () => {
            expect(employee.getSchool()).toBe("Harvard");
        });
    });
});