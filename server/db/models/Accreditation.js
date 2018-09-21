/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Accreditation', {
    AccreditationID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    AccreditationDefinitionID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'AccreditationDefinition',
        key: 'AccreditationDefinitionID'
      }
    },
    Issued: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Expires: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'Accreditation'
  });
};
