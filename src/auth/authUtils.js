'use strict'
const JWT = require('jsonwebtoken')

const createTokenPair = async (payload, publickKey,privateKey) => {
    try {
    //access token
    const accessToken = await JWT.sign(payload, privateKey,{
        algorithm: 'RS256',
        expiresIn: '2days'
    })
    const refreshToken = await JWT.sign(payload, privateKey,{
        algorithm: 'RS256',
        expiresIn: '7 days'
    })
    JWT.verify(accessToken,publickKey,privateKey, (err, decode) => {
        if(err){
            console.error(`error verify::`, err)
        }else{
            console.log(`decode verify::`, decode)
        }
    })
    return {accessToken, refreshToken}
} catch(error){

}
}

module.exports = {
    createTokenPair
}