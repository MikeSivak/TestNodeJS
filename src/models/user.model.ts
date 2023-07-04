import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../dbconfig/db.config";

interface UserAttributes {
    id: number,
    email: string,
    firstName: string,
    lastName: string,
    image?: string,
    pdf?: Buffer,
}

export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOutput extends Required<UserAttributes> { }

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
    public id!: number;
    public email!: string;
    public firstName!: string;
    public lastName!: string;
    public image!: string;
    public pdf!: Buffer;
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
