const supertest = require("supertest");
const app = require("../app");

describe("All route", () => {
  it("get states", async () => {
    await supertest(app)
      .get("/api/v1/state")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              state: expect.any(String),
              description: expect.any(String),
              population: expect.any(String),
              capital: expect.any(String),
              major_dialect: expect.any(Array),
              landmass: expect.any(String),
              region: expect.any(String),
              economic_activities: expect.any(Array),
              local_government_areas: expect.any(Array),
              average_rainfall: expect.any(String),
              average_temperature: expect.any(String),
            }),
          ])
        );
      });
  }, 15000);
  it("get Lga", async () => {
    await supertest(app)
      .get("/api/v1/lga")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              state: expect.any(String),
              description: expect.any(String),

              statRegion: expect.any(String),
              economic_activities: expect.any(Array),
            }),
          ])
        );
      });
  }, 15000);
  it("get Rrgions", async () => {
    await supertest(app)
      .get("/api/v1/lga")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              region: expect.any(String),
              states: expect.any(Array),
              description: expect.any(String),
              statRegion: expect.any(String),
              economic_activities: expect.any(Array),
            }),
          ])
        );
      });
  }, 15000);
});
