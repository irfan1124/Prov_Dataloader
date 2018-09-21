/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Role', {
    RoleID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'Role'
  });
};
