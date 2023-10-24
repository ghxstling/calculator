'use client'

import { Box, Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
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

	useEffect(() => {
		setIsClient(true)
	}, [])

	return (
		<>
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
			<Container fixed maxWidth="xs">
				{isClient ? (
					<Paper
						elevation={10}
						sx={{
							backgroundColor: 'transparent',
							borderRadius: boxBorderRadius,
						}}
					>
						<Box
							padding={boxPadding}
							borderRadius={boxBorderRadius}
							sx={{
								backgroundColor: 'white',
							}}
						>
							<Paper
								elevation={4}
								sx={{
									backgroundColor: 'transparent',
									borderRadius: boxBorderRadius,
								}}
							>
								<Box padding={10}>
									<Grid container>
										<Grid item>
											<Typography></Typography>
										</Grid>
									</Grid>
								</Box>
							</Paper>
							<br />
							<Paper
								elevation={4}
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
											<Button variant="contained" size="large" color="secondary" sx={buttonSx}>
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
											<Button variant="contained" size="large" color="primary" sx={buttonSx}>
												7
											</Button>
										</Grid>
										<Grid item>
											<Button variant="contained" size="large" color="primary" sx={buttonSx}>
												8
											</Button>
										</Grid>
										<Grid item>
											<Button variant="contained" size="large" color="primary" sx={buttonSx}>
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
											<Button variant="contained" size="large" color="primary" sx={buttonSx}>
												4
											</Button>
										</Grid>
										<Grid item>
											<Button variant="contained" size="large" color="primary" sx={buttonSx}>
												5
											</Button>
										</Grid>
										<Grid item>
											<Button variant="contained" size="large" color="primary" sx={buttonSx}>
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
											<Button variant="contained" size="large" color="primary" sx={buttonSx}>
												1
											</Button>
										</Grid>
										<Grid item>
											<Button variant="contained" size="large" color="primary" sx={buttonSx}>
												2
											</Button>
										</Grid>
										<Grid item>
											<Button variant="contained" size="large" color="primary" sx={buttonSx}>
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
											<Button variant="contained" size="large" color="primary" sx={buttonSx}>
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
		</>
	)
}
