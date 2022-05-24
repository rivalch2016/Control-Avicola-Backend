import User from '../models/user.model'

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json(users)
};

export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id)
    
    if (!user) return res.status(404).json({message: 'User does not exists'})

    return res.json(user)
};

export const createUser = async (req, res) => {
    const {email, password, gastos_total, ingreso_total} = req.body;
    
    const user = new User({
        email,
        password,
        gastos_total,
        ingreso_total
    })

    await user.save()

    res.json('received');
};

export const updatedUser = async (req, res) => {
    const {id} = req.params;
    const userUpdated = await User.findByIdAndUpdate(id,req.body, { new: true})
    return res.json(userUpdated);
};

export const deleteUser = async (req, res) => {

    const user = await User.findByIdAndDelete(req.params.id)

    if (!user) return res.status(404).json({message: 'User does not exists'})

    return res.send(user)
}