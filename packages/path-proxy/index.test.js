// const fs = require("fs");
// const read = require("./read");
const axios = require("axios");
const mockfs = require("mock-fs");
const pathProxy = require("./index");

describe("path-proxy", () => {
  beforeEach(() => {
    mockfs({
      "/var/www/spaship": {
        foo: {
          "spaship.yaml": "name: Foo\npath: /foo\nref: v1.0.1\nsingle: true\ndeploykey: sehvgqrnyre",
          "index.html": "I AM FOO"
        }
      }
    });
  });
  afterEach(() => {
    mockfs.restore();
  });
  test("should respond to requests", async () => {
    await pathProxy.start();
    let response;
    try {
      response = await axios.get("http://localhost:3000/foo/");
    } catch (e) {
      // errors are fine; this test is only looking for a response
      response = e.response;
    }
    expect(response.status).toBeGreaterThan(1);
    expect(response.status).toBeLessThan(599);
    await pathProxy.stop();
  });
});