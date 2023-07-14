const Address = require("../models/Address");
const User = require("../models/User");

module.exports = {
  async allAddresses(req, res) {
    return res.json(
      await Address.findAll({ include: { association: "usuario" } })
    );
  },

  async storeAddress(req, res) {
    let { user_id } = req.params;
    let { zipcode, street, number } = req.body;

    let user = await User.findAll({
      where: { id: user_id },
      include: { association: "addresses" },
    });
    if (user == "") {
      return res.json("Usuario inexistente");
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id,
    });
    return res.json(
      await User.findAll({
        where: { id: user_id },
        include: { association: "addresses" },
      })
    );
  },
  async endereco(req, res) {
    let { user_id } = req.params;
    let enderecos = await Address.findAll({
      where: { user_id },
      include: { association: "usuario" },
    });
    if (enderecos == "") {
      return res.json(`Usuario ${user_id} inexistente`);
    }
    return res.json(enderecos);
  },
};
