import {
  countProducts,
  sumComment,
  CountLike,
} from '../modules/displayItems.js';

describe('Comments and items count Test', () => {
  test('Count Items', () => {
    const array = ['item1', 'item2', 'item3'];
    countProducts(array);
    expect(countProducts(array)).toEqual(3);
  });

  test('Count Comments', () => {
    const array = ['item1', 'item2', 'item3'];
    sumComment(array);
    expect(sumComment(array)).toEqual('Total Comments(3)');
  });
  test('Count likes', () => {
    document.body.innerHTML = '\'<div>\'  \'<b id="1" class="likes-counter">2</b>\'  \'</div>\'';
    CountLike([{ likes: 5, item_id: '1' }]);
    const item = document.querySelector('.likes-counter').innerHTML;
    expect(+item).toEqual(5);
  });
});
