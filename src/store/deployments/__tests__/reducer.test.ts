import { deploymentsReducer } from "../reducer";
import {
  setDeployments,
  appendDeployment,
  updateDeploymentState
} from "../actions";

describe("store/deployments", () => {
  it("should return deployments list", () => {
    expect(
      deploymentsReducer(
        undefined,
        setDeployments([
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
        ])
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

  it("should append deployment to the list", () => {
    expect(
      deploymentsReducer(
        {
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
        },
        appendDeployment({
          _id: "id3",
          pending: true,
          templateName: "temp5",
          version: "0.0.2"
        })
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
        },
        {
          _id: "id3",
          pending: true,
          templateName: "temp5",
          version: "0.0.2"
        }
      ]
    });
  });

  it("should update deployment state", () => {
    expect(
      deploymentsReducer(
        {
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
        },
        updateDeploymentState({ id: "id2", isPending: true })
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
          pending: true,
          templateName: "temp2",
          version: "1.4.9"
        }
      ]
    });
  });
});
