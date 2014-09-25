describe("Bean Counter", function () {
  var beanCountFormatter;
  beforeEach(function () {
    beanCountFormatter = new BeanCountFormatter();
  });

  var countSampleData = [
    {
      inventory: 10,
      found: 5,
      output: "Inventory: 10, Found: 5, Missing: 5"
    },
    {
      inventory: 15,
      found: 5,
      output: "Inventory: 15, Found: 5, Missing: 10"
    }
  ];

  countSampleData.forEach(function(sample) {
    it('formats inventory log message: ('+ sample.inventory + "," + sample.found + ')', function () {
        expect(beanCountFormatter.formatOutput(sample.inventory, sample.found)).toEqual(sample.output);
    });
  });
});