const assert = require("assert");
const index = require("../index");

describe("Index", function () {
  it("Should retun -1", function () {
    assert.strictEqual(index(""), -1);
  });
  it("should retun 3724", () => {
    assert.strictEqual(index("MMMDCCXXIV"), 3724);
  });
  it("should retun -1", () => {
    assert.strictEqual(index("MMM1CCXXIV"), -1);
  });
});
