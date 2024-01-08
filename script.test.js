const tddCalculator = require("./script");


test("addition of 4 and 6 to equal 10", () => {
    expect(tddCalculator.add("4,6")).toEqual(" the summ is 10 ");
});

test("empty string ", () => {
    expect(tddCalculator.add("")).toEqual("the summ is 0");
});

test("throw exception negative number", () => {
    expect(() => tddCalculator.add("4, -6")).toThrow(/Negativi non sono consentiti: -6/);
});


test("custom delimiter", () => {
    expect(tddCalculator.add("//[***]//1***2***3")).toEqual(" the summ is 6 ");
});


test("double custom delimiter", () => {
    expect(tddCalculator.add("//[***][as]//1***2***3as12")).toEqual(" the summ is 18 ");
});


test("noise string", () => {
    expect(tddCalculator.add("1,2,as12")).toEqual(" the summ is 15 ");
});