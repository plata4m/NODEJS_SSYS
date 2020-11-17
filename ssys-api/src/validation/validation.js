// Token fake como se o usuário ja estivesse logado passando o token de validacao
const tokenValidation = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsb2dnZWRJbkFzIjoiYWRtaW4iLCJpYXQiOjE0MjI3Nzk2Mzh9.gzSraSYS8EXBxLN_oWnFSRgCzcmJmMjLiuyu5CSpyHI";

module.exports = {
    getToken(){
        return tokenValidation;
    },

    validateToken(token){
        if(token != this.getToken()){
            return { error: 1, message: "Invalid token!" };
        }
        return { error: 0, message: "Token autorized!" };
    }
}
