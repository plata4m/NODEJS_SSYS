
module.exports = {

    async error(message){
        return res.json({ error: 0, message: message });
    },

}