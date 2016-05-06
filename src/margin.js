export default function() {
  var m = {
            t: 0,
            r: 0,
            b: 0,
            l: 0
          };
      
      /**
         * margin
         * @constructor
         * @description
         * Use to configure a plot margin
         * Like CSS margin, arguments after the first are optional
         * @param {number} top      If last argument, all sides set to top
         * @param {number=} right    If last argument, bottom = top and left = right
         * @param {number=} bottom   If last argument, left = right
         * @param {number=} left     Left side of margin
       */
      function margin(top, right, bottom, left) {
        if (arguments.length) {
            m.t = top;
            if (arguments.length > 1) {
                m.r = right;
                if (arguments.length > 2) {
                    m.b = bottom;
                    if (arguments.length > 3) {
                        m.l = left;
                    }
                    else {
                        m.l = right;
                    }
                }
                else {
                    m.b = top;
                    m.l = right;
                }
            }
            else {
                //noinspection JSSuspiciousNameCombination
                m.r = m.b = m.l = top;
            }
         }
         return m;
      }
     
      function numericProperty(obj, name, value) {
          if (!value) return m[name];
          m[name] = parseInt(value);
          return obj;
      }
      
      margin.top = function (_) {
        return numericProperty(margin, "t", _);
      };
     
      margin.right = function (_) {
        return numericProperty(margin, "r", _);
      };
      
      margin.bottom = function (_) {
        return numericProperty(margin, "b", _);
      };
      
      margin.left = function (_) {
        return numericProperty(margin, "l", _);
      };
      
      return margin;    
}
