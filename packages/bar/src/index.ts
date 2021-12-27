import { Foo } from "typescript-composite-lerna-foo";
const { Test } = require("js-test");

export function Foobar() {
  return Foo() + "bar" + Test() + 'test';
}
