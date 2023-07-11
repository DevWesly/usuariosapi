const User = require("../models/User");

module.exports = {
    async index(req, res) {
        return res.json(await User.findAll());
    },

    async store(req, res) {
        const { name, email } = req.body;
        const user = await User.create({ name, email });

        return res.json(user);
    },

    async user(req, res) {
        let usuario = await User.findAll({ where: { id: req.params.id } });
        if (usuario == "") {
            return res.json(`Usuario ${req.params.id} inexistente ou não encontrado`);
        } else {
            return res.json(usuario);
        }
    },

    async att(req, res) {
        let idDoParams = req.params.id;
        let novoEmail = req.body.email;
        let novoNome = req.body.name;
        if (novoEmail === "") {
        } else {
            await User.update({ email: novoEmail }, { where: { id: idDoParams } });
        }
        if (novoNome === "") {
        } else {
            await User.update({ name: novoNome }, { where: { id: idDoParams } });
        }

        return res.json(await User.findAll({ where: { id: idDoParams } }));
    },

    async del(req, res) {
        let id = req.params.id;
        let usuario = await User.findAll({ where: { id: id } });
        if (usuario =='') {
           return res.json([`Usuario com id ${id} inexistente não encontrado`,await User.findAll()]); 
            
        
        } else {
            await User.destroy({where:{id:id}});
        } 
        return res.json(await User.findAll())
       
    },
};
