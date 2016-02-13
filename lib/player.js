var Player = function(name){
	this.name = name;
	this.id = name +(''+ Math.random());
	this.myturn = false;
}

module.exports = Player;