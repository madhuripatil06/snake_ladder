var tile = require('./generateTiles');

var lib = {}


lib.generateTiles = function(){
	tiles = new tile;
	var Tiles = tiles.tileGenerator();
	return Tiles;
};

lib.rollDice = function(){
	var diceValue = Math.floor(Math.random()*7);
	return diceValue;
}


lib.moveCoin = function(currLocation,value){
	var location = "" + currLocation.x + currLocation.y;
	var result = (+location) + value;
	result = (result+"").split("");
	resultedLocation = {x:(+result[0]) ,y:(+result[1])};
	return resultedLocation;
}


module.exports = lib;