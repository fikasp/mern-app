import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function signin(req, res) {
	try {
		res.status(200).json('Signin works')
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}

export async function signup(req, res) {
	try {
		res.status(200).json('Signup works')
	} catch (err) {
		res.status(404).json({ message: err.message })
	}
}
