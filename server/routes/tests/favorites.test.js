const request = require("supertest");
const { app, server } = require("../../server"); // Import both app and server
const {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
} = require("../favoritesManager");

describe("Favorites API", () => {
  // Add an afterAll hook to close the Express server after all tests are done
  afterAll((done) => {
    server.close(done); // Close the server
  });

  beforeEach(() => {
    // Reset favorites before each test
    while (getFavorites().length > 0) {
      removeFromFavorites(getFavorites()[0].id);
    }
  });

  it("should get empty favorites", async () => {
    const response = await request(app).get("/favorites");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([]);
  });

  it("should add an item to favorites", async () => {
    const newItem = { id: 1, title: "Test Item" };
    const response = await request(app).post("/favorites/add").send(newItem);
    expect(response.status).toBe(200);
    expect(getFavorites()).toContainEqual(newItem);
  });

  it("should remove an item from favorites", async () => {
    const newItem = { id: 1, title: "Test Item" };
    addToFavorites(newItem);

    const response = await request(app).delete(
      `/favorites/remove/${newItem.id}`
    );
    expect(response.status).toBe(200);
    expect(getFavorites()).not.toContainEqual(newItem);
  });
});
