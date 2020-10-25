import userModel from '../models/userModel';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

module.exports = {
    create: (req, res, next) => {
        userModel.create({ nickname: req.body.nickname, email: req.body.email, password: req.body.password }).then((result) => {
            res.json({status: "success", message: "Dodano użytkownika", data: null});
        }).catch((err) => {
            console.log(err);
            res.json({status: "error", message: "Wprowadzono złe dane, użytkownik o takim nicku już istnieje lub do tego emaila jest już przypisane konto.", data: null})
        });
    },
    authenticate: (req, res, next) => {
        userModel.findOne({email: req.body.email})
        .then((userInfo) => {
            
            if(bcrypt.compareSync(req.body.password, userInfo.password)) {
                const token = jwt.sign({id: userInfo._id}, req.app.get('secretKey'), {expiresIn: '2h'});
                res.json({status: "success", message: "Autentykacja przebiegła pomyślnie.", data:{user: userInfo, token:token}})
            }else{
                res.json({status:"error", message: "Niepoprawne hasło", data: null});
            }
            
        }).catch((err) => {
            console.log(err);
            res.json({status: "error", message: "Niepoprawny email", data: null})
        });
    }
}