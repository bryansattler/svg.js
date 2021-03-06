
SVG.BBox = function(element) {
  /* actual, native bounding box */
  var box = element.node.getBBox()
  
  /* include translations on x an y */
  this.x = box.x + element.trans.x
  this.y = box.y + element.trans.y
  
  /* plain width and height */
  this.width  = box.width * element.trans.scaleX
  this.height = box.height * element.trans.scaleY
  
  /* add the center */
  this.cx = this.x + this.width / 2
  this.cy = this.y + this.height / 2
  
}