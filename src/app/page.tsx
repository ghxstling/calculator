'use client'

import { ThemeProvider, Typography, createTheme } from '@mui/material'
import { grey, red } from '@mui/material/colors'
import Link from 'next/link'
import Calculator from './components/Calculator'
import Loading from './loading'
import { useEffect, useState } from 'react'

export default function Home() {
	const [isLoading, setIsLoading] = useState(false)

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

	useEffect(() => {
		setIsLoading(true)
	}, [])

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
				Made by <Link href="https://github.com/ghxstling">ghxstling</Link>
			</Typography>
			{isLoading ? <Calculator /> : <Loading />}
		</ThemeProvider>
	)
}
