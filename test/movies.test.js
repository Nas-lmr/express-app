const request = require("supertest");
const app = require("../app");

describe("GET/api/movies", () => {
    it("should return all movies", async () =>{
        const response = await request(app).get("/api/movies");

        expect(response.headers["content-type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
    });
});

describe("GET/api/movies/:id", () =>{
    it("should return id 1", async () =>{
        const responseId = await request(app).get("/api/movies/1");

        expect(responseId.headers["content-type"]).toMatch(/json/);
        expect(responseId.status).toEqual(200);
    });
});

describe("GET/api/movies/:id", () =>{
    it("should return id 0", async () =>{
        const responseId = await request(app).get("/api/movies/0");

        expect(responseId.status).toEqual(404);
    });
});