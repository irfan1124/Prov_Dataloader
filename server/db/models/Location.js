/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Location', {
    LocationID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Latitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    Longitude: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    OwnerCompanyID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'CompanyID'
      }
    }
  }, {
    tableName: 'Location'
  });
};
