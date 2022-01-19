const Manager = require("../../employees/Manager");

const employee = new Manager(4, "Mohammed", "m@icloud.com", 104);

describe("Manager class", () => {
    describe("getOffice method", () => {
        it("returns the manager's office number", () => {
            expect(employee.getOffice()).toBe(104);
        });
    });
});