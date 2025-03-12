const request = require("supertest");
const express = require("express");
const fs = require("fs");
const path = require("path");
const pageRoutes = require("../routes/pageRoutes");

const app = express();
app.use("/", pageRoutes);

const TEST_DIR = path.join(__dirname, "../content/test-page");
const TEST_MD_FILE = path.join(TEST_DIR, "index.md");

beforeAll(() => {
  if (!fs.existsSync(TEST_DIR)) {
    fs.mkdirSync(TEST_DIR, { recursive: true });
  }

  fs.writeFileSync(TEST_MD_FILE, "# Test page\n\nThis is a test.");
});

afterAll(() => {
  if (fs.existsSync(TEST_MD_FILE)) {
    fs.unlinkSync(TEST_MD_FILE);
  }
  if (fs.existsSync(TEST_DIR)) {
    fs.rmSync(TEST_DIR, { recursive: true });
  }
});

describe("Pruebas de las rutas del CMS", () => {
  test("Should return 200 for a valid URL", async () => {
    const res = await request(app).get("/test-page");
    expect(res.status).toBe(200);
  });

  test("Should have the content rendered", async () => {
    const res = await request(app).get("/test-page");
    expect(res.text).toContain("<p>This is a test.</p>");
  });

  test("Should return 404 for an invalid URL", async () => {
    const res = await request(app).get("/page-not-found");
    expect(res.status).toBe(404);
  });
});
