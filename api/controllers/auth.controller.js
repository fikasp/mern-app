import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/user.model.js'

const secret = 'test'

export async function readUsers(req, res) {
	try {
		const users = await User.find()
		res.status(200).json(users)
	} catch (err) {
		console.error(err)
	} 
}

export async function signin(req, res) {
	const { email, password } = req.body

	try {
		const existingUser = await User.findOne({ email })

		if (!existingUser)
			return res.status(404).json({ message: "User doesn't exist" })

		const isPasswordCorrect = await bcrypt.compare(
			password,
			existingUser.password
		)

		if (!isPasswordCorrect)
			return res.status(400).json({ message: 'Invalid password' })

		const token = jwt.sign(
			{ email: existingUser.email, id: existingUser._id },
			secret,
			{ expiresIn: '1h' }
		)

		res.status(200).json({ result: existingUser, token })
	} catch (err) {
		res.status(500).json({ message: 'Something went wrong' })
	}
}

export async function signup(req, res) {
	const { email, password, confirmPassword, firstName, lastName } = req.body

	try {
		const existingUser = await User.findOne({ email })

		if (existingUser)
			return res.status(400).json({ message: 'User already exists' })

		if (password !== confirmPassword)
			return res.status(400).json({ message: 'Passwords don\'t match' })

		const hashedPassword = await bcrypt.hash(password, 12)

		const result = await User.create({
			email,
			password: hashedPassword,
			firstName,
			lastName,
		})

		const token = jwt.sign({ email: result.email, id: result._id }, secret, {
			expiresIn: '1h',
		})

		console.log(result);
		res.status(201).json({ result, token })
	} catch (error) {
		res.status(500).json({ message: 'Something went wrong' })
	}
}
