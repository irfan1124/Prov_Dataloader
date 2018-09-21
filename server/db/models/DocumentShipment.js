/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DocumentShipment', {
    DocumentID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Document',
        key: 'DocumentID'
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
    tableName: 'DocumentShipment'
  });
};
