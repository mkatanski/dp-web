import { omit } from "../omit";

describe("utils/helpers/object", () => {
  describe("omit", () => {
    it("should omit selected key-value from object", () => {
      const object = {
        key1: "test1",
        key2: "test2",
        key3: "test3"
      };

      expect(omit(object, "key2")).toEqual({
        key1: "test1",
        key3: "test3"
      });
    });
  });
});
