var tape = require("tape"),
    container_module = require("../");

tape("container returns configured values", function(test) {
    var c = container_module.container();

  test.equal(c.height(600).height(),600); 
  test.equal(c.width(1200).width(),1200); 

  test.end();
});

tape("margin has 0 values by default", function(test) {
    var margin = container_module.margin();

  test.equal(margin.top(),0); 
  test.equal(margin.right(),0); 
  test.equal(margin.bottom(),0); 
  test.equal(margin.left(),0); 

  test.end();
});

tape("margin with 1 value", function(test) {
    var val = 10;
    var margin = container_module.margin();
    
    margin(val);

    test.equal(margin.top(),val); 
    test.equal(margin.right(),val); 
    test.equal(margin.bottom(),val); 
    test.equal(margin.left(),val); 

    test.end();
});

tape("margin with 2 value", function(test) {
    var val1 = 10, val2 = 20;
    var margin = container_module.margin();
    
    margin(val1, val2);

    test.equal(margin.top(),val1); 
    test.equal(margin.right(),val2); 
    test.equal(margin.bottom(),val1); 
    test.equal(margin.left(),val2); 

    test.end();
});

tape("margin with 3 value", function(test) {
    var val1 = 10, val2 = 20, val3 = 3;
    var margin = container_module.margin();
    
    margin(val1, val2, val3);

    test.equal(margin.top(),val1); 
    test.equal(margin.right(),val2); 
    test.equal(margin.bottom(),val3); 
    test.equal(margin.left(),val2); 

    test.end();
});

tape("margin with 4 values", function(test) {
    var values = [1,2,3,4];
    var margin = container_module.margin();
    
    margin(values[0], values[1], values[2], values[3]);

    test.equal(margin.top(),values[0]); 
    test.equal(margin.right(),values[1]); 
    test.equal(margin.bottom(),values[2]); 
    test.equal(margin.left(),values[3]); 

    test.end();
});

tape("container margin with 4 values", function(test) {
    var values = [1,2,3,4];
    var c = container_module.container();    
    var m = c.margin(values[0], values[1], values[2], values[3]).margin();

    test.equal(m.top(),values[0]); 
    test.equal(m.right(),values[1]); 
    test.equal(m.bottom(),values[2]); 
    test.equal(m.left(),values[3]); 

    test.end();
});
