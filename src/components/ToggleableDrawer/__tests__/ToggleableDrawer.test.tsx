/* eslint-disable react/display-name */
import React, { useContext, useEffect } from "react";
import enzyme from "enzyme";
import TestRenderer from "react-test-renderer";

import { ToggleableDrawer } from "../ToggleableDrawer";
import { ToggleableDrawerContext } from "../ToggleableDrawerContext";

describe("components", () => {
  describe("ToggleableDrawer", () => {
    it("should render ToggleableDrawerView component with children", () => {
      const tree = TestRenderer.create(
        <ToggleableDrawer renderButton={() => <button />}>
          child
        </ToggleableDrawer>
      );
      expect(tree).toMatchSnapshot();
    });

    it("should open drawer on button click", () => {
      const component = enzyme.mount(
        <ToggleableDrawer
          drawerAnchor="bottom"
          renderButton={({ setDrawerState }) => (
            <button onClick={() => setDrawerState(true)} />
          )}
        >
          child
        </ToggleableDrawer>
      );

      component.find("button").simulate("click");
      expect(component).toMatchSnapshot();
    });

    it("should open drawer via context", () => {
      const InternalComponent = () => {
        const { setDrawerState } = useContext(ToggleableDrawerContext);

        useEffect(() => {
          setDrawerState(true);
        }, [setDrawerState]);

        return <p>Internal Component</p>;
      };

      const component = enzyme.mount(
        <ToggleableDrawer
          drawerAnchor="bottom"
          renderButton={({ setDrawerState }) => (
            <button onClick={() => setDrawerState(true)} />
          )}
        >
          <InternalComponent />
        </ToggleableDrawer>
      );

      expect(component).toMatchSnapshot();
    });
  });
});
