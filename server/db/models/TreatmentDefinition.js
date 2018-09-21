/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TreatmentDefinition', {
    TreatmentDefinitionID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    ManufacturerCompanyID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'CompanyID'
      }
    },
    WithholdingPeriodHoursLocal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    WithholdingPeriodHoursExport: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'TreatmentDefinition'
  });
};
