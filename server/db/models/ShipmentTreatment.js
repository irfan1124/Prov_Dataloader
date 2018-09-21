/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ShipmentTreatment', {
    ShipmentID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Shipment',
        key: 'ShipmentID'
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
    tableName: 'ShipmentTreatment'
  });
};
