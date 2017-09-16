// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
		name: {
	      type: Sequelize.STRING,
	      allowNull: false,
	      validate: {
	        isEmail: true
		  }
		},
	    devour: {
	      type: Sequelize.BOOLEAN,
	      allowNull: false,
	      validate: {
	        isEmail: true
	      }
	    }
	});
	return Burger;
};
//Burger.sync(); 