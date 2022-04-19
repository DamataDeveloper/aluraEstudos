//const blacklist = require('./blacklist');

const {promisify} = require('util')
//const existsAsync = promisify(blacklist.exists).bind(blacklist)
//const setAsync = promisify(blacklist.set).bind(blacklist)

const jwt = require('jsonwebtoken');
const {createHash} = require('crypto')


function geraTokenHash(token){
    createHash('sha256').update(token)

    module.exports = {

        /*
        adiciona: async token =>{
            const dataExpiracao = jwt.decode(token).exp;
            await setAsync(token, '');
            backlist.expireat(token, dataExpiracao);

        },
        contemToken: async token =>{
            const resultado = await existsAsync(token);
            return resultadi === 1;
        }
        */
    }
}