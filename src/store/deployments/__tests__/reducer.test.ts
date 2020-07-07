import { deploymentsReducer } from "../reducer";
import { setDeployments, appendDeployment } from "../actions";

describe("store/deployments", () => {
  it("should return deployments list", () => {
    expect(
      deploymentsReducer(
        undefined,
        setDeployments(
          [
            {
              _id: "id1",
              templateName: "temp1",
              version: "1.0.2",
              deployedAt: "time",
              url: "someUrl"
            },
            {
              _id: "id2",
              templateName: "temp2",
              version: "1.4.9",
              deployedAt: "time",
              url: "someUrl"
            }
          ],
          10,
          20,
          100
        )
      )
    ).toEqual({
      deployments: [
        {
          _id: "id1",
          deployedAt: "time",
          templateName: "temp1",
          url: "someUrl",
          version: "1.0.2"
        },
        {
          _id: "id2",
          deployedAt: "time",
          templateName: "temp2",
          url: "someUrl",
          version: "1.4.9"
        }
      ],
      limit: 10,
      offset: 20,
      pendingList: {},
      totalCount: 100
    });
  });
});
