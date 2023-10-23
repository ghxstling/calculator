'use client'

import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { useState, useEffect } from 'react'

const boxPadding = 2
const boxBorderRadius = 5
const buttonSx = {
	borderRadius: 50,
	width: 60,
	height: 60,
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
			<Container maxWidth="xs">
				{isClient ? (
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
								backgroundColor: 'white',
							}}
						>
							<Typography>Hello!</Typography>
							<Grid></Grid>
							<Paper
								elevation={3}
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
									<Grid container spacing={3} columns={4} gridRow={5}>
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
											<Button variant="contained" size="large" color="primary" sx={buttonSx}>
												4
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
