import { countProducts, sumComment } from "../modules/displayItems.js";

describe("Comments and items count Test", () => {
  test("Count Items", () => {
    const array = ["item1", "item2", "item3"];
    countProducts(array);
    expect(countProducts(array)).toEqual(3);
  });

  test("Count Comments", () => {
    const array = ["item1", "item2", "item3"];
    sumComment(array);
    expect(sumComment(array)).toEqual("Total Comments(3)");
  });
});
