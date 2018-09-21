/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UnitOfMeasure', {
    UnitOfMeasureID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'UnitOfMeasure'
  });
};
