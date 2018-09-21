/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('PermissionRole', {
    PermissionID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Permission',
        key: 'PermissionID'
      }
    },
    RoleID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Role',
        key: 'RoleID'
      }
    }
  }, {
    tableName: 'PermissionRole'
  });
};
