import { templatesReducer } from "../reducer";
import { setTemplates } from "../actions";

describe("store/deployments", () => {
  it("should return deployments list", () => {
    expect(
      templatesReducer(
        undefined,
        setTemplates(
          [
            {
              _id: "id1",
              name: "name1",
              versions: ["v1", "v2"]
            },
            {
              _id: "id2",
              name: "name2",
              versions: ["v1", "v2"]
            }
          ],
          10,
          10,
          100
        )
      )
    ).toEqual({
      deployments: [
        {
          _id: "id1",
          pending: true,
          templateName: "temp1",
          version: "1.0.2"
        },
        {
          _id: "id2",
          pending: false,
          templateName: "temp2",
          version: "1.4.9"
        }
      ]
    });
  });
});
