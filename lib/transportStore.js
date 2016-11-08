// Used to transfer data from app.js to and back from various libs
// Returning seems to be a bit unreliable

var TransportStore = function() {
  this._transportData = 0;
}
TransportStore.prototype.setData = function(transportData) {
  this._transportData = transportData;
  // console.log(`[TransportStore] Value of Argument: ${transportData}`);
  // console.log(`[TransportStore] Value of Object var: ${this._transportData}`);
}
TransportStore.prototype.getData = function() {
  return this._transportData;
}
module.exports = TransportStore;
