/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Treatment', {
    TreatmentID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    TreatmentDefinitionID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'TreatmentDefinition',
        key: 'TreatmentDefinitionID'
      }
    },
    Commenced: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Completed: {
      type: DataTypes.DATE,
      allowNull: true
    },
    Reference: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CreatorUserID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'User',
        key: 'UserID'
      }
    },
    Created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'Treatment'
  });
};
