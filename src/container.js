import margin from "./margin";

export default function() {
  var width = 0,
      height = 0,
      m = margin(),
      selection = null,
      content = null;
            
      function container(context) {
          selection = context.selection ? context.selection() : context; 
          content = selection.append("g")
                             .attr("class", "content")
                             .attr("transform", "translate(" + m.left() + "," + m.top() + ")");                
      }
      
      container.height = function (_) {
        if (!arguments.length) return height;
        height = +_;
        return container;
      };
      
      container.width = function (_) {
        if (!arguments.length) return width;
        width = +_;
        return container;
      };
      
      container.margin = function(top, right, bottom, left) {
        if (arguments.length) {
            m.apply(m, arguments);
            return container;
        } else {
            return m;
        }   
      };
      
      container.content = function(_) {
          if (!arguments.length) return content;
          content = _;
          return container;
      };
            
      return container;
}
