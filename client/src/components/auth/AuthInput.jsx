/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material'

import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

const styles = css`

`

export default function AuthInput({
	autoFocus,
	half,
	handleChange,
	handleShowPassword,
	label,
	name,
	type,
}) {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				css={styles}
				autoFocus={autoFocus}
				fullWidth
				label={label}
				name={name}
				onChange={handleChange}
				required
				type={type}
				variant="outlined"
				InputProps={
					name === 'password'
						? {
								endAdornment: (
									<InputAdornment position="end">
										<IconButton onClick={handleShowPassword}>
											{type === 'password' ? <Visibility /> : <VisibilityOff />}
										</IconButton>
									</InputAdornment>
								),
						  }
						: null
				}
			/>
		</Grid>
	)
}
