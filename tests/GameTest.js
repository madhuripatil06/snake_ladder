var Game = require('../lib/game');
var Player =require('../lib/player');
var assert = require('chai').assert;

describe('Add players',function(){
	var game = new Game();
	it('should add the player to the game',function(){
		var player1 = new Player('madhu');
		game.addPlayer(player1);
		assert.ok(game.hasPlayer(player1));
		assert.ok(!game.isStarted());
	});
	it('should add the 2 player as the playerlimit is 2',function(){
		var player = new Player('madhuri');
		game.addPlayer(player);
		assert.ok(game.hasPlayer(player));
		assert.ok(game.isStarted());
	});
	it('should not add the 3 player as the playelimit is 2',function(){
		var player = new Player('mady');
		game.addPlayer(player);
		assert.ok(!game.hasPlayer(player))
		assert.ok(game.isStarted());
	});
})