const Engineer = require("../../employees/Engineer");

const employee = new Engineer(12, "Fatima", "fatima@outlook.com", "gitHubExample");

describe("Engineer class", () => {
    describe("getGithub method", () => {
        it("returns the name of the engineer's github", () => {
            expect(employee.getGithub()).toBe("gitHubExample");
        });
    });
});