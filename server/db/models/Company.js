/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Company', {
    CompanyID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ParentCompanyID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'CompanyID'
      }
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'Company'
  });
};
