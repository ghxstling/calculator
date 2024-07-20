import { ThemeProvider, Typography, createTheme } from '@mui/material'
import { grey, red } from '@mui/material/colors'
import Calculator from './components/Calculator'
import { useEffect, useState } from 'react'

export default function Home() {
	const theme = createTheme({
		palette: {
			primary: {
				main: grey['A100'],
			},
			secondary: {
				main: red[800],
			},
		},
	})

	return (
		<ThemeProvider theme={theme}>
			<Typography
				variant="h3"
				sx={{
					fontWeight: 'bold',
					textAlign: 'center',
					paddingTop: 5,
				}}
			>
				Calculator
			</Typography>
			<Typography
				variant="subtitle1"
				sx={{
					textAlign: 'center',
					paddingBottom: 5,
				}}
			>
				Made by <link href="https://github.com/ghxstling">ghxstling</link>
			</Typography>
			<Calculator />
		</ThemeProvider>
	)
}
