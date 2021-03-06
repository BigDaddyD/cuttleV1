/**
* Player.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
  	socketId: {
  		type: 'string',
  	},
  	currentGame: {
  		model: 'game',
  	},
    pNum: {
      type: 'integer'
    },
  	hand: {
  		collection: 'card',
  		via: 'hand',
  	},
  	points: {
  		collection: 'card',
  		via: 'points',
  	},
  	runes: {
  		collection: 'card',
  		via: 'runes',
  	},
    frozenId: {
      type: 'integer',
      defaultsTo: null
    },
    tempString: {
      type: 'string',
      defaultsTo: ''
    },
  }
};

