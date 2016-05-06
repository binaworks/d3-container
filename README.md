# d3-container

Graphic container.
 
A D3 plugin implementing the [Margin Convention](https://bl.ocks.org/mbostock/3019563).

## API Reference

### Sample Usage

```js
var container = d3_container.container();

container
    .height(1000)
    .width(650)
    .margin(30, 10, 10);
    
svg.call(container);

var content = container.content();

content.append("rect")
       .attr("height", 100)
       .attr("width", 200)
       .attr("stroke", "green")
       .attr("stroke-width",5);
```
