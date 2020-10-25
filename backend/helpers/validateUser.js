const validateUser = function validateUser(req, res, next) {
    jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), (err, decoded) => {
        if (err)
            res.json({status: "error", message: err.message, data:null})
        else{
            req.body.userId = decoded.id;
            next();
        }
    });
}

module.exports = validateUser