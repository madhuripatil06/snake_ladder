var croupier = require('../lib/croupier');
var chai = require('chai')
var assert = chai.assert;
var expect = chai.expect;

describe('generate tiles',function(){
	var tiles = croupier.generateTiles();
	it('should genearte 100 tiles',function(){
		expect(tiles).to.have.length(100);
	});
	it('should genearte 5 snake tiles',function(){
		var snakeTiles = tiles.filter(function(tile){
			return tile.status == 'snake';
		})
		expect(snakeTiles).to.have.length(5);
	});
	it('should genearte 5 Ladder tiles',function(){
		var LadderTiles = tiles.filter(function(tile){
			return tile.status == 'ladder';
		})
		expect(LadderTiles).to.have.length(5);
	});
	it('sample',function(){
		croupier.rollDice();
	});
});


describe('move the coin',function(){
	it('the move coin should move the coin when y is less than 4',function(){
		var currLocation = {x:2, y:3};
		var location = croupier.moveCoin(currLocation,3);
		var expectedLocation = {x:2,y:6};
		expect(location.x).to.equal(expectedLocation.x);
		expect(location.y).to.equal(expectedLocation.y);
	});

	it('the move coin should move the coin when y is greater than 4 and value is 6 ',function(){
		var currLocation = {x:2, y:5};
		var location = croupier.moveCoin(currLocation,6);
		var expectedLocation = {x:3,y:1};
		expect(location.x).to.equal(expectedLocation.x);
		expect(location.y).to.equal(expectedLocation.y);
	});
});











