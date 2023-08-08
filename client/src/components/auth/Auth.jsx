/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import * as actions from '../../redux/actions'
import { signIn, signUp } from '../../redux/actions/auth.action'
import { height } from '../../styles/dimensions'
import Notify from '../dialogs/Notify'
import AuthInput from './AuthInput'

const styles = css`
	height: calc(100vh - ${height.bar}px);
	padding: 15px;
	overflow-y: auto;

	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-height: ${height.min}px) {
		justify-content: center;
	}

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

const initialFormData = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
}

export default function Auth() {
	const [formData, setFormData] = useState(initialFormData)
	const [isSignup, setIsSignup] = useState(false)
	const [showPassword, setShowPassword] = useState(false)
	const { errors } = useSelector((store) => store.auth)

	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleShowPassword = () => {
		setShowPassword((prevShowPassword) => !prevShowPassword)
	}

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		if (isSignup) {
			dispatch(signUp(formData, navigate))
		} else {
			dispatch(signIn(formData, navigate))
		}
	}

	const handleSwitchMode = () => {
		setIsSignup((prevIsSignup) => !prevIsSignup)
		setShowPassword(false)
	}

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
			{ errors != null && (
				<Notify
					title="Authorization error"
					text={errors?.response.data.message}
					close={()=>dispatch({ type: actions.AUTH_CLEAR})}
					open={errors != null}
				/>
			)}
		</Container>
	)
}
