const User = require('../model/userModel');

const fetch = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)    
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'})
    }
}

const create =  async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'})
    }
}

const update =  async (req, res) => {
    try {
        const {id} = req.params 
        const user = await User.findByIdAndUpdate(id, req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'})
    }
}

const remove =  async (req, res) => {
    try {
        const {id} = req.params; 
        const user = await User.findByIdAndDelete(id);
        res.status(200).json("user deleted");
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'})
    }
}

const search =  async (req, res) => {
    try {
        const {id} = req.params; 
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error:'Internal Server Error'})
    }
}
module.exports = [fetch, create, update, remove, search]