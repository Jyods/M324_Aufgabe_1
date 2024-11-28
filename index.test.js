import { strict as assert } from "assert";
import { sum } from "./index.js";

describe("sum", () => {
  it("should return 3 for 1 + 2", () => {
    // Korrigieren Sie den Test
    assert.equal(sum(1, 2), 4);
  });
});

describe("decimals", () => {
    it("should return 0.3 for 0.1 + 0.2", () => {
        // Korrigieren Sie den Test
        assert.equal(0.1 + 0.2, 0.3);
    });
});