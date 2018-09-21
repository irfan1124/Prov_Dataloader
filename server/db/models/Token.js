/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Token', {
    TokenID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'User',
        key: 'UserID'
      }
    },
    Token: {
      type: DataTypes.STRING(512),
      allowNull: false
    },
    RefreshToken: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    IsExpired: {
      type: "BINARY(1)",
      allowNull: true,
      defaultValue: '0'
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    UserAgent: {
      type: DataTypes.JSON,
      allowNull: true
    }
  }, {
    tableName: 'Token'
  });
};
