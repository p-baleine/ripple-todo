var ripple = require('ripple');
var events = require('events');
var refs = require('refs');
var enterEvent = require('enter-event');
var template = require('./template');
var ItemView = ripple(template);

ItemView
  .use(events)
  .use(refs)
  .use(enterEvent);

ItemView.prototype.edit = function() {
  this.set('editing', true);
};

ItemView.prototype.update = function() {
  this.set('title', this.refs.edit.value);
  this.set('editing', false);
};

ItemView.prototype.toggle = function() {
  this.set('done', this.refs.done.checked);
};

ItemView.prototype.removeItem = function(index) {
  this.root.data.items.splice(index, 1);
};

module.exports = ItemView;
