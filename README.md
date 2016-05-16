# d3-container

Graphic container 
 
A D3 plugin for the margin convention. See https://bl.ocks.org/mbostock/3019563.

## API Reference

<a name="_container" href="#_container">#</a> <i>container</i>(<i>context</i>)

Create container content, a g element appended to the given *context*, a D3 [selection](https://github.com/d3/d3-selection). 
Content is offset from context according to the container's left and top [margin](#container_margin) specification.

<a name="container_contentHeight" href="#container_contentHeight">#</a> <i>container</i>.<b>contentHeight</b>()

If content has been created, returns the content height. Otherwise, returns 0.

<a name="container_contentWidth" href="#container_contentWidth">#</a> <i>container</i>.<b>contentWidth</b>()

If content has been created, returns the content width. Otherwise, returns 0.

<a name="container_height" href="#container_height">#</a> <i>container</i>.<b>height</b>(<i>size</i>)

If *size* is specified, sets the container height to the specified value and returns the container. If *size* is not specified, returns the current height, which defaults to 0.

<a name="container_margin" href="#container_margin">#</a> <i>container</i>.<b>margin</b>(<i>top</i>,<i>right</i>,<i>bottom</i>, <i>left</i>)

If arguments are specified, updates container margin sizes as specified and returns the container. 
Margin sizes default to 0 and are specified as in CSS.
- If only *top* is specified, then top, right, bottom and left margin sizes are set to *top*.
- If *top* and *right* are specified, then top and bottom margins are set to *top*, and
right and left margins are set to *right*.
- If only *top*, *right* and *left* are specified, then top and bottom margins are set to *top*, 
right margin is set to *right* and left margins is set to *left*.

If arguments are not specified, returns the container's margin object which has getter/setter functions for top, right,
bottom, and left sizes.

<a name="container_width" href="#container_width">#</a> <i>container</i>.<b>width</b>(<i>size</i>)

If *size* is specified, sets the container width to the specified value and returns the container. If *size* is not specified, returns the current width, which defaults to 0.



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
       .attr("height", container.contentHeight())
       .attr("width", container.contentWidth())
       .attr("stroke", "green")
       .attr("stroke-width",5);

```

