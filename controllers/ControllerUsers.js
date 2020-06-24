const db = require('../config/db.js')

module.exports = {
    async insert (req,res){
        let datas = {
            'nome': req.body.nome,
            'cor': req.body.cor,
            'imagem': req.body.imagem

        }
        try{
            let response = await db.query('INSERT INTO personagens SET ?', [datas])
            res.json(response)
        }catch (error){
            console.log(error)
        }
    },
    async update (req,res){
        let id = req.params.id

        let datas = {
            'nome': req.body.nome,
            'cor': req.body.cor,
            'imagem': req.body.imagem
    }

    try{

        let response = await db.query('UPDATE personagens SET ? WHERE id = ?', [datas,id])
        res.json(response)
    } catch(error){
        console.log(error)
    }
    },
    async findAll(req, res){
        try {
            let response = await db.query('SELECT * FROM personagens');
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    async findById(req, res){
        let id = req.params.id;
        try {
            let response = await db.query(`SELECT * FROM personagens WHERE id = ${id}`);
            res.json(response[0]);
        } catch (error) {
            console.log(error);
        }
    },
    async delete(req, res){
        let id = req.params.id;

        try {
            let response = await db.query(`DELETE FROM personagens WHERE id = ${id}`);
            res.json(response);
        } catch (error) {
            console.log(error);
        }
    }

}