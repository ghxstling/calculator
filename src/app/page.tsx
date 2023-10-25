'use client'

import { Box, Button, Container, Grid, Paper, ThemeProvider, Typography, createTheme } from '@mui/material'
import { teal, red } from '@mui/material/colors'
import { useState, useEffect } from 'react'

const boxPadding = 2
const boxBorderRadius = 5
const buttonSx = {
	borderRadius: 50,
	minWidth: 0,
	minHeight: 0,
	width: 60,
	height: 60,
	fontSize: 20,
}

export default function Home() {
	const [isClient, setIsClient] = useState(false)
	const [input, setInput] = useState<string>('0')
	const [inputHistory, setInputHistory] = useState<string>('')
	const [calculation, setCalculation] = useState<string>('')

	const operators = ['+', '-', '*', '/', '%']

	const theme = createTheme({
		palette: {
			primary: {
				main: teal[50],
			},
			secondary: {
				main: red[800],
			},
		},
	})

	useEffect(() => {
		setIsClient(true)
	}, [])

	function addNumber(number: string) {
		if (input === '0') {
			console.log(true)
			if (input.length < 10) {
				setInput(input + number)
			}
		}
	}

	function clearInputs() {
		setInput('0')
		setInputHistory('')
		setCalculation('')
	}

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
				Made by ghxstling
			</Typography>
			<Container fixed maxWidth="xs" sx={{ paddingBottom: 5 }}>
				{isClient ? (
					<Paper
						elevation={12}
						sx={{
							backgroundColor: 'transparent',
							borderRadius: boxBorderRadius,
						}}
					>
						<Box
							padding={boxPadding}
							borderRadius={boxBorderRadius}
							sx={{
								backgroundColor: 'gray',
							}}
						>
							<Paper
								elevation={6}
								sx={{
									backgroundColor: 'transparent',
									borderRadius: boxBorderRadius,
								}}
							>
								<Box
									padding={boxPadding + 2}
									borderRadius={boxBorderRadius}
									sx={{
										backgroundColor: 'white',
									}}
								>
									<Paper
										elevation={8}
										sx={{
											backgroundColor: 'transparent',
											borderRadius: boxBorderRadius,
										}}
									>
										<Box
											padding={boxPadding}
											borderRadius={boxBorderRadius}
											sx={{
												border: 1,
												backgroundColor: 'lightgray',
											}}
										>
											<Box
												sx={{
													height: 26,
												}}
											>
												<Typography variant="subtitle1" align="right" sx={{ color: 'gray' }}>
													{inputHistory}
												</Typography>
											</Box>
											<Box
												sx={{
													height: 50,
												}}
											>
												<Typography variant="h3" align="right">
													{input}
												</Typography>
											</Box>
										</Box>
									</Paper>
								</Box>
							</Paper>
							<br />
							<Paper
								elevation={6}
								sx={{
									backgroundColor: 'transparent',
									borderRadius: boxBorderRadius,
								}}
							>
								<Box
									borderRadius={boxBorderRadius}
									padding={boxPadding}
									sx={{
										backgroundColor: 'lightgray',
									}}
								>
									<Grid container spacing={3.8} columns={4} gridRow={5}>
										<Grid item>
											<Button
												onClick={clearInputs}
												variant="contained"
												size="large"
												color="secondary"
												sx={buttonSx}
											>
												C
											</Button>
										</Grid>
										<Grid item>
											<Button variant="contained" size="large" color="secondary" sx={buttonSx}>
												%
											</Button>
										</Grid>
										<Grid item>
											<Button
												variant="contained"
												size="large"
												color="secondary"
												sx={{ ...buttonSx, fontSize: 24 }}
											>
												&#247;
											</Button>
										</Grid>
										<Grid item>
											<Button
												variant="contained"
												size="large"
												color="secondary"
												sx={{ ...buttonSx, fontWeight: 'bold' }}
											>
												&#8592;
											</Button>
										</Grid>
										<Grid item>
											<Button
												onClick={() => addNumber('7')}
												variant="contained"
												size="large"
												color="primary"
												sx={buttonSx}
											>
												7
											</Button>
										</Grid>
										<Grid item>
											<Button
												onClick={() => addNumber('8')}
												variant="contained"
												size="large"
												color="primary"
												sx={buttonSx}
											>
												8
											</Button>
										</Grid>
										<Grid item>
											<Button
												onClick={() => addNumber('9')}
												variant="contained"
												size="large"
												color="primary"
												sx={buttonSx}
											>
												9
											</Button>
										</Grid>
										<Grid item>
											<Button
												variant="contained"
												size="large"
												color="secondary"
												sx={{ ...buttonSx, fontSize: 24 }}
											>
												&#215;
											</Button>
										</Grid>
										<Grid item>
											<Button
												onClick={() => addNumber('4')}
												variant="contained"
												size="large"
												color="primary"
												sx={buttonSx}
											>
												4
											</Button>
										</Grid>
										<Grid item>
											<Button
												onClick={() => addNumber('5')}
												variant="contained"
												size="large"
												color="primary"
												sx={buttonSx}
											>
												5
											</Button>
										</Grid>
										<Grid item>
											<Button
												onClick={() => addNumber('6')}
												variant="contained"
												size="large"
												color="primary"
												sx={buttonSx}
											>
												6
											</Button>
										</Grid>
										<Grid item>
											<Button
												variant="contained"
												size="large"
												color="secondary"
												sx={{ ...buttonSx, fontSize: 24 }}
											>
												&#8722;
											</Button>
										</Grid>
										<Grid item>
											<Button
												onClick={() => addNumber('1')}
												variant="contained"
												size="large"
												color="primary"
												sx={buttonSx}
											>
												1
											</Button>
										</Grid>
										<Grid item>
											<Button
												onClick={() => addNumber('2')}
												variant="contained"
												size="large"
												color="primary"
												sx={buttonSx}
											>
												2
											</Button>
										</Grid>
										<Grid item>
											<Button
												onClick={() => addNumber('3')}
												variant="contained"
												size="large"
												color="primary"
												sx={buttonSx}
											>
												3
											</Button>
										</Grid>
										<Grid item>
											<Button
												variant="contained"
												size="large"
												color="secondary"
												sx={{ ...buttonSx, fontSize: 24 }}
											>
												+
											</Button>
										</Grid>
										<Grid item>
											<Button
												onClick={() => addNumber('0')}
												variant="contained"
												size="large"
												color="primary"
												sx={buttonSx}
											>
												0
											</Button>
										</Grid>
										<Grid item>
											<Button variant="contained" size="large" color="primary" sx={buttonSx}>
												.
											</Button>
										</Grid>
										<Grid item>
											<Button
												variant="contained"
												size="large"
												color="primary"
												sx={{ ...buttonSx, fontSize: 15 }}
											>
												( )
											</Button>
										</Grid>
										<Grid item>
											<Button
												variant="contained"
												size="large"
												color="secondary"
												sx={{ ...buttonSx, fontSize: 24 }}
											>
												=
											</Button>
										</Grid>
									</Grid>
								</Box>
							</Paper>
						</Box>
					</Paper>
				) : (
					<Typography variant="h4">Loading page...</Typography>
				)}
			</Container>
		</ThemeProvider>
	)
}
