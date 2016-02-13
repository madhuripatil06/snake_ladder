var Game = function(){
	var players = [];
	this.isStarted = function(){
		return players.length >= 2;
	};
	this.addPlayer = function(player){
		if(players.length < 2)
			players.push(player);
	};
	this.hasPlayer = function(player){
		return players.indexOf(player) >= 0;
	};
	this.id = 'gameNo'+Math.random();
}

module.exports = Game;