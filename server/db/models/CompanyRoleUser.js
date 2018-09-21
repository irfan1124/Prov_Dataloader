/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CompanyRoleUser', {
    CompanyID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Company',
        key: 'CompanyID'
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
    },
    UserID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'User',
        key: 'UserID'
      }
    }
  }, {
    tableName: 'CompanyRoleUser'
  });
};
