/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MovementShipment', {
    MovementID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Movement',
        key: 'MovementID'
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
    tableName: 'MovementShipment'
  });
};
