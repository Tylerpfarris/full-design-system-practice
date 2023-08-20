import {
  colors as _colors,
  radius,
  spacings,
  animations,
  shadows,
} from './tokens/js/tokens';
/**
 * Tailwind requires the values:
 *{
 *  "boxShadow": {
 *    "level-1": "value",
 *    "level-2": "...",
 *     ....
 *   },
 *  "colors": {
 *    ...
 *  },
 *  ....
 * }
 */
var flattenValue = function (obj) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    // If value property does not exist
    if (!obj[key].value) {
      // Should go one level deeper
      result[key] = flattenValue(obj[key]);
    } else {
      result[key] = obj[key].value;
    }
  });
  return result;
};
export var prefix = 'newline-';
export var theme = {
  colors: flattenValue(_colors),
  borderRadius: flattenValue(radius),
  spacing: flattenValue(spacings),
  animation: flattenValue(animations),
  boxShadow: flattenValue(shadows),
  fontFamily: {
    sans: ['"Inter"'],
  },
};
export var plugins = [];
//# sourceMappingURL=tailwindDesignPreset.config.js.map
