//.test/.spec files are designated test files.
const { succeed, fail, repair } = require('./enhancer.js');

// Test: Repair
it("Should repair item durability to 100", () => {
    expect(repair(25).durability).toBe(100);
    expect(repair(50).durability).toBe(100);
    expect(repair(75).durability).toBe(100);
});

// Test: Succeed
it("Should return enhancement level + 1, unless level is already 20, if so return 20.", () => {
    expect(succeed(0).enhancement).toEqual(1);
    expect(succeed(10).enhancement).toEqual(11);
    expect(succeed(20).enhancement).toEqual(20)
})

// Test: Fail
it("Should return item's durability -5 if enhancement level is less than 15, -10 if enhancement level is equal to 15, and -10 as well as -1 from enhancement level if enhancement level is 16 or greater.", () => {
    expect(fail({ enhancement: 1, durability: 75 })).toEqual({ enhancement: 1, durability: 70 });
    expect(fail({ enhancement: 15, durability: 75 })).toEqual({ enhancement: 15, durability: 65 });
    expect(fail({ enhancement: 20, durability: 75 })).toEqual({ enhancement: 19, durability: 65 });
});