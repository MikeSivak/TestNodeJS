import { DataTypes, Model, Optional, Sequelize } from "sequelize";
import sequelizeConnection from "../dbconfig/db.config";

interface UserAttributes {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    image?: string,
    pdf?: DataTypes.BlobDataType,
}

export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOutput extends Required<UserAttributes> { }

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number;
    public email!: string;
    public firstName!: string;
    public lastName!: string;
    public image!: string;
    public pdf!: DataTypes.BlobDataType;
}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    pdf: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
}, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
});

export default User;

// const User = sequelizeConnection.define('User', {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true,
//         allowNull: false,
//         field: 'id'
//     },
//     email: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         field: 'email',
//     },
//     firstName: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         field: 'firstName',
//     },
//     lastName: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         field: 'lastName',
//     },
//     image: {
//         type: Sequelize.STRING,
//         allowNull: true,
//         field: 'image',
//     },
//     pdf: {
//         type: Sequelize.BLOB,
//         allowNull: true,
//         field: 'pdf',
//     },
// }, {
//     modelName: 'User',
//     tableName: 'User',
//     timestamps: false,
// });

// sequelizeConnection.sync();

// export default User;