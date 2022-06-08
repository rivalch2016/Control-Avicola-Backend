import User from '../models/user.model'

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        
        if (!user) return res.status(404).json({message: 'User does not exists'})
    
        return res.json(user)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const createUser = async (req, res) => {
    try {
        const {email, password, gastos_total, ingreso_total} = req.body;
        
        const user = new User({
            email,
            password,
            gastos_total,
            ingreso_total
        })
    
        await user.save()
    
        res.json('received');
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const updatedUser = async (req, res) => {
    try {
        const {id} = req.params;
        const userUpdated = await User.findByIdAndUpdate(id,req.body, { new: true})
        return res.json(userUpdated);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

export const deleteUser = async (req, res) => {
    try {
    
        const user = await User.findByIdAndDelete(req.params.id)
    
        if (!user) return res.status(404).json({message: 'User does not exists'})
    
        return res.send(user)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
}