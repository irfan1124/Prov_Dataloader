/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Permission', {
    PermissionID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Code: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'Permission'
  });
};
