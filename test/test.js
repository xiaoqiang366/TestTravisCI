const assert = require('assert');

const add = require('../src/add');

describe('基础方法测试', () => {
  describe('#add()', () => {
    it('12 + 10 = 22', () => {
      assert.equal(add(12, 10), 22);
    })

    it('-10 + 10 = 0', () => {
      assert.equal(add(-10, 10), 0);
    })
  })
})