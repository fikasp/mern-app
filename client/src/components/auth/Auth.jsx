/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import AuthInput from './AuthInput'

const styles = css`
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow-y: auto;
	padding: 15px;

	.paper {
		display: flex;
		flex-direction: column;
		align-items: center;
		max-width: 500px;
		padding: 15px;
	}
	.avatar {
		margin-bottom: 5px;
		background-color: #444;
		color: white;
	}
	.title {
		margin-bottom: 20px;
	}
	.button {
		margin-top: 15px;
	}
`

const initialState = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
}

export default function Auth() {
	// states
	const [form, setForm] = useState(initialState)
	const [isSignup, setIsSignup] = useState(false)
	const [showPassword, setShowPassword] = useState(false)

	const location = useLocation()
	const dispatch = useDispatch()

	// handlers
	const handleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword)
	}
	const handleSwitchMode = () => {
		setForm(initialState)
		setIsSignup((prevIsSignup) => !prevIsSignup)
		// setShowPassword(false)
	}

	const handleSubmit = (evt) => {
		console.log(evt.target)
	}

	const handleChange = () => {}

	return (
		<Container css={styles} component="main">
			<Paper className="paper" elevation={3}>
				<Avatar className="avatar">
					<LockOutlinedIcon />
				</Avatar>

				<Typography className="title" variant="h5">
					{isSignup ? 'Sign Up' : 'Sign In'}
				</Typography>

				<form onSubmit={handleSubmit}>
					<Grid container spacing={2}>
						{isSignup && (
							<>
								<AuthInput
									name="firstName"
									label="First Name"
									handleChange={handleChange}
									autoFocus
									half
								/>
								<AuthInput
									name="lastName"
									label="Last Name"
									handleChange={handleChange}
									half
								/>
							</>
						)}

						<AuthInput
							name="email"
							label="Email Address"
							handleChange={handleChange}
							type="email"
						/>
						<AuthInput
							name="password"
							label="Password"
							handleChange={handleChange}
							handleShowPassword={handleShowPassword}
							type={showPassword ? 'text' : 'password'}
						/>

						{isSignup && (
							<AuthInput
								name="confirmPassword"
								label="Repeat Password"
								handleChange={handleChange}
								type="password"
							/>
						)}
					</Grid>

					<Button
						type="submit"
						className="button"
						fullWidth
						variant="contained"
						color="primary"
					>
						{isSignup ? 'Sign Up' : 'Sign In'}
					</Button>

					<Button className="button" fullWidth onClick={handleSwitchMode}>
						{isSignup
							? 'Already have an account? Sign In'
							: "Don't have an account? Sign Up"}
					</Button>
				</form>
			</Paper>
		</Container>
	)
}
