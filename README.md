# d3-container

Graphic container.
 
Most d3 examples start some code to define height, width, margins, etc. 
This plugin is intended to reduce code clutter and mistakes associated with this common task.

## API Reference

YOUR API DOCUMENTATION HERE. Use bold for symbols (such as constructor and method names) and italics for instances. 
See the other D3 modules for examples.

<a href="#container" name="container">#</a> <b>d3-container</b>()

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
