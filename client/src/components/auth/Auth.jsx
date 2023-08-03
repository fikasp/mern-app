/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import {
	Avatar,
	Button,
	Paper,
	Grid,
	Typography,
	Container,
	TextField,
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { useState } from 'react'

import { appHeight, headerHeight } from '../../styles/variables'
import AuthInput from './AuthInput'

const styles = css`
	min-height: calc(${appHeight}vh - ${headerHeight * 2}px);
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	
	.paper {
		padding: 15px;
		max-width: 600px;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.avatar {
		background-color: #444;
		margin-bottom: 5px;
		color: white;
	}
	.title {
		margin-bottom: 20px;
	}
`

export default function Auth() {
	const isSignup = true

	const [showPassword, setShowPassword] = useState(false)

	const handleShowPassword = () => setShowPassword(!showPassword)

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
							type={showPassword ? 'text' : 'password'}
							handleShowPassword={handleShowPassword}
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
				</form>
			</Paper>
		</Container>
	)
}
