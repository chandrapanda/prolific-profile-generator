// const { expect } = require("@jest/globals");
// const Employee = require("../employees/Employee");

// describe("printInfo", () => {
//     it("should console log the employee's name, ID number, and email", () => {
//         const Employee = [
//             { name: 'ASDF', id: '8', email: 'you@you.com'}
//             expect()
//         ]
//     })
// }





// const axios = require("axios");
// const MovieSearch = require("../movieSearch");

// jest.mock("axios");

// describe("MovieSearch", () => {
//   describe("buildUrl", () => {
//     it("should return an OMDB movie search URL using a movie name", () => {
//       const movie = new MovieSearch();
//       const name = "Rocky";

//       const url = movie.buildUrl(name);

//       expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`);
//     });
//   });

//   describe("search", () => {
//     it("should search the OMDB API for a given movie", () => {
//       const movie = new MovieSearch();
//       const name = "Rocky";

//       axios.get.mockReturnValue(
//         new Promise(function(resolve) {
//           resolve({ data: {} });
//         })
//       );

//       expect(movie.search(name)).resolves.toEqual({ data: {} });
//       expect(axios.get).lastCalledWith(movie.buildUrl(name));
//     });
//   });
// });
