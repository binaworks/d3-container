import margin from "./margin";

export default function() {
  var width = 0,
      height = 0,
      m = margin(),
      selection = null,
      content = null;
      
      function contentHeight() {
          return height > 0 ? height - m.top() - m.bottom() : 0 ;
      }
      
      function contentWidth() {
          return width > 0 ? width - m.left() - m.right() : 0 ;
      }
            
      function container(context) {
          selection = context.selection ? context.selection() : context; 
          if (width > 0) {
              selection.attr("width", width);
          }
          else {
              width = selection.attr("width") || selection.width;
          }
          if (height > 0) {
              selection.attr("height", height);
          }
          else {
              height = selection.attr("height") || selection.height;
          }
          content = selection.append("g")
                             .attr("class", "content")
                             .attr("transform", "translate(" + m.left() + "," + m.top() + ")");  
          content.width = contentWidth();   
          content.height = contentHeight();                
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
      
      container.contentHeight = contentHeight;
      
      container.contentWidth = contentWidth;
            
      return container;
}
