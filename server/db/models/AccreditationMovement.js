/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AccreditationMovement', {
    AccreditationID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Accreditation',
        key: 'AccreditationID'
      }
    },
    MovementID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Movement',
        key: 'MovementID'
      }
    }
  }, {
    tableName: 'AccreditationMovement'
  });
};
