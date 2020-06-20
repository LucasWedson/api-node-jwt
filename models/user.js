const mongoose = require('../database');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({ //esquema de usuário 
    name:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password :{
        type: String,
        required: true,
        select: false,  //funcaoo para que nao traga a senha ao selecionar o usuario
    },
    createdAt:{ //anotar a  data que o registro foi critado
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
