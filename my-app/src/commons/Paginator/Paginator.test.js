import Paginator from "./Paginator";
import React from "react";
import { create } from "react-test-renderer";
describe("Paginator component", () => {

   test("pages count is 11 but should be only 10", () => {
      const component = create(<Paginator totalItemsPage={11} pageSize={1} portionSize={10} />);
      const root = component.root;
      let spans = root.findAllByType("span");
      expect(spans.length).toBe(10);
   });

   test("if pages count more than 10, button next should be displayed", () => {
      const component = create(<Paginator totalItemsPage={11} pageSize={1} portionSize={10} />);
      const root = component.root;
      let button = root.findAllByType("button");
      expect(button.length).toBe(1);
   });
});