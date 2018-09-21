/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AccreditationCommodity', {
    AccreditationID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Accreditation',
        key: 'AccreditationID'
      }
    },
    CommodityID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Commodity',
        key: 'CommodityID'
      }
    }
  }, {
    tableName: 'AccreditationCommodity'
  });
};
