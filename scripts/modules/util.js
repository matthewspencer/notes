/**
 * Does the current browser support touch?
 *
 * Looking for browsers without hover.
 *
 * @return boolean
 */
function isTouch() {

  return 'ontouchstart' in window || navigator.msMaxTouchPoints > 0;

}

module.exports = {
  isTouch: isTouch
}
