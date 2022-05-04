import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "../Profile/ProfileStatus"
describe("ProfileStatus component", () => {
  test("status from props have to be in the state", () => {
    const component = create(<ProfileStatus status="I am status from Global State" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("I am status from Global State");
  });

  test("after render span should be dispalyed", () => {
   const component = create(<ProfileStatus status="I am status from Global State" />);
   const instance = component.root;
   const span = instance.findByType('span')
   expect(span).not.toBeNull();
 });
 test("after render input should be disabled", () => {
   const component = create(<ProfileStatus status="I am status from Global State" />);
   const instance = component.root;
  
   expect(()=>{
      const input = instance.findByType("input")
   }).toThrow();
 });
 test("span should be have text from state status", () => {
   const component = create(<ProfileStatus status="I am status from Global State" />);
   const instance = component.root;
   const span = instance.findByType('span')
   expect(span.children[0]).toBe("I am status from Global State");
 });
 test("callback should be called", () => {
   const mockFn = jest.fn();
   const component = create(<ProfileStatus status="I am status from Global State" updateProfileStatus = { mockFn } />);
   const instance = component.getInstance();
   instance.deActivateEditMode();
   expect(mockFn.mock.calls.length).toBe(1);
 });

});