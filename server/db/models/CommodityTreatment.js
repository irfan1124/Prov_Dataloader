/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CommodityTreatment', {
    CommodityID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Commodity',
        key: 'CommodityID'
      }
    },
    TreatmentID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Treatment',
        key: 'TreatmentID'
      }
    }
  }, {
    tableName: 'CommodityTreatment'
  });
};
