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












