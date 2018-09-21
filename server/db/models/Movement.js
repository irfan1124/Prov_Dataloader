/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Movement', {
    MovementID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    SourceLocationID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Location',
        key: 'LocationID'
      }
    },
    DestinationLocationID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Location',
        key: 'LocationID'
      }
    },
    Commenced: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Completed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    CreatorUserID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'User',
        key: 'UserID'
      }
    },
    Created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Movement'
  });
};
