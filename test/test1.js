/**
 * Created by Kobi on 19/06/2016.
 */
var assert = require('assert');
var Math = require('../lib/math');

describe("math", function () {

    it("add", function (done) {
        var math = new Math();
        var res = math.add(10, 5);

        assert.equal(res, 15);
        done();
    });
});