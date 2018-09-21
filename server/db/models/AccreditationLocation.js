/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AccreditationLocation', {
    AccreditationID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Accreditation',
        key: 'AccreditationID'
      }
    },
    LocationID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Location',
        key: 'LocationID'
      }
    }
  }, {
    tableName: 'AccreditationLocation'
  });
};
