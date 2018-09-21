/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CommodityShipment', {
    CommodityID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Commodity',
        key: 'CommodityID'
      }
    },
    ShipmentID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Shipment',
        key: 'ShipmentID'
      }
    }
  }, {
    tableName: 'CommodityShipment'
  });
};
