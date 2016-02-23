var ld = require('lodash');
var generateSnakeTiles = function(tiles){
	var snakeDestinations = [{x:0,y:3},{x:2,y:5},{x:0,y:1},{x:1,y:1},{x:4,y:0}];
	var snakeLocations = [{x:9,y:9},{x:5,y:1},{x:1,y:3},{x:4,y:4},{x:7,y:7}];
	tiles.forEach(function(tile){
		var indexOfTile = ld.findIndex(snakeLocations,tile.location); 
		if( indexOfTile != -1){
			tile.destination = snakeDestinations[indexOfTile];
			tile.status = 'snake';
		}
		else
			tile.destination = null;
	});
	return generateLadderTiles(tiles);
};

var generateLadderTiles = function(tiles){
	var LadderDestinations = [{x:2,y:2},{x:6,y:7},{x:5,y:9},{x:8,y:5},{x:1,y:7}];
	var LadderLocations = [{x:1,y:0},{x:2,y:7},{x:4,y:9},{x:7,y:4},{x:1,y:7}];
	tiles.forEach(function(tile){
		var indexOfTile = ld.findIndex(LadderLocations,tile.location); 
		if( indexOfTile != -1){
			tile.destination = LadderDestinations[indexOfTile];
			tile.status = 'ladder';
		}
	});
	return tiles;
};




var generateTiles = function(){
	var tiles = []; 
	for(var i = 0 ;i < 10 ; i++){
		for(var j = 0; j < 10 ;  j++){
			var tile = {};
			tile.location = {x:i , y:j};
			tile.status = 'safe';
			tiles.push(tile);
		}
	};
	return generateSnakeTiles(tiles);
};

var Tiles = function(){
	this.tileGenerator = generateTiles;
}

module.exports = Tiles;