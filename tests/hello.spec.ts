import { test } from "vitest";
import HelloWorld from "../src/components/HelloWorld.vue";
import Hello from "@/components/Hello";
import { mount } from "@vue/test-utils";

test("hello", () => {
  console.log(HelloWorld);
  const wrapper = mount(HelloWorld);
  expect(wrapper.text()).toContain("hello");
});

test("hello jsx/tsx", () => {
  console.log(Hello.setup?.toString());

  const wrapper = mount(Hello);
  expect(wrapper.text()).toContain("hello");
});
