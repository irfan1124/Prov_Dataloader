/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Boundary', {
    BoundaryID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    LocationID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Location',
        key: 'LocationID'
      }
    },
    Latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Sequence: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'Boundary'
  });
};
