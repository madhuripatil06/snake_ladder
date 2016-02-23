var tile = require('./generateTiles');

var lib = {}


lib.generateTiles = function(){
	tiles = new tile;
	var Tiles = tiles.tileGenerator();
	return Tiles;
};



module.exports = lib;