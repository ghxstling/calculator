'use client'

import { Box, CircularProgress, Container, Grid, Paper, Skeleton, Typography } from '@mui/material'
import { boxPadding, boxBorderRadius, buttonSx } from './css/styles'

export default function Loading() {
	const box: any[] = []
	for (let i = 1; i <= 20; i++) {
		box.push(
			<Grid item key={i}>
				<Paper
					elevation={1}
					sx={{
						backgroundColor: 'transparent',
						borderRadius: 50,
					}}
				>
					<Skeleton variant="circular" width={buttonSx.width} height={buttonSx.height} />
				</Paper>
			</Grid>
		)
	}

	return (
		<Container
			fixed
			maxWidth="xs"
			sx={{
				position: 'relative',
				float: 'center',
			}}
		>
			{' '}
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
										width: 270,
										height: 78,
										backgroundColor: 'lightgray',
									}}
								>
									<br />
									<Typography variant="h4" align="center">
										<CircularProgress color="secondary" size={50} thickness={5} disableShrink />
									</Typography>
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
								{box}
							</Grid>
						</Box>
					</Paper>
				</Box>
			</Paper>
		</Container>
	)
}
