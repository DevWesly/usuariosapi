const Address = require("../models/Address");
const User = require("../models/User");
const Job = require("../models/Job");

module.exports = {
    async index(req,res){
        res.json("vai")
    },

    async create(req,res){
        res.json('loading')
    }

}