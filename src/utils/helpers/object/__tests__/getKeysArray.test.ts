import { getKeysArray } from "../getKeysArray";

describe("utils/helpers/object", () => {
  describe("getKeysArray", () => {
    it("should return array with keys of given object", () => {
      const object = {
        key1: "test1",
        key2: "test2",
        key3: "test3",
        key4: "test4"
      };

      expect(getKeysArray(object)).toEqual(["key1", "key2", "key3", "key4"]);
    });
  });
});
