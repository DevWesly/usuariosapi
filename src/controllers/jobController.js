const User = require("../models/User");
const Job = require("../models/Job");

module.exports = {
  async index(req, res) {
    let jobs = await Job.findAll();
    return res.json(jobs);
  },

  async store(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.json("Usuario não existente");
    }

    const [job] = await Job.findOrCreate({ where: { name } });

    await user.addJob(job);

    return res.json(
      await User.findAll({
        where: { id: user_id },
        include: { association: "jobs" },
      })
    );
  },
  async del(req, res) {
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);
    if (!user) {
      return res.json("Usuario não existente");
    }
    const userJob = await Job.findAll({ where: { name } });
    if (userJob == "") {
      return res.json("Trabalho não existente");
    }
    await user.removeJob(userJob);
    return res.json(
      await User.findAll({
        where: { id: user_id },
        include: { association: "jobs" },
      })
    );
  },
  async destroy(req, res) {



    const { name } = req.body;
    const job = await Job.findOne({ where: { name } });

    if (!job) {
      return res.json("Esse trabalho não consta no nosso banco de dados");
    }
    await job.destroy(); 
    
    let jobs = await Job.findAll();
    return res.json(jobs);
  },

  async jobUsers(req, res) {
    let { id } = req.params;
    let job = await Job.findByPk(id)
    if (!job) {
      return res.json("Esse trabalho não consta no nosso banco de dados");
    }

    let user =await Job.findAll({
      where:{id},
      include: { association: "users" },
    })
    

    return res.json(user);
  },
};
