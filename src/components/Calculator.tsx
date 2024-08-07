import { Box, Button, Container, Grid, Paper, Typography } from '@mui/material'
import { boxPadding, boxBorderRadius, buttonSx } from '../css/styles'
import { useState } from 'react'
import { create, all } from 'mathjs'

export default function Calculator() {
	const [input, setInput] = useState<string>('0')
	const [prevInput, setPrevInput] = useState<string>('')
	const [result, setResult] = useState<string>('')
	const [isResult, setIsResult] = useState<boolean>(false)
	const [hasDecimal, setHasDecimal] = useState<boolean>(false)

	const config = {}
	const math = create(all, config)
	const operators = ['+', '-', '\u00F7', '\u00D7']
	const brackets = ['(', ')']
	const inputHistory = []

	function isValidLength(result?: string) {
		if (result) return result.length < 10
		return input.length < 10
	}

	function addNumber(number: string) {
		if (input === '0' || input === 'Error' || isResult) {
			setIsResult(false)
			setInput(number)
		} else {
			if (isValidLength()) {
				if (!isPercent()) {
					setInput((input) => input + number)
				}
			}
		}
	}

	function removeNumber() {
		if (input.length === 1 || input === '0') {
			setInput('0')
		} else {
			if (isDecimal()) {
				setHasDecimal(false)
			}
			setInput(input.slice(0, input.length - 1))
		}
	}

	function isNumber() {
		const result = parseInt(input.slice(-1))
		if (!isNaN(result)) {
			return true
		} else {
			return false
		}
	}

	function addOperator(operator: string) {
		if (isResult) {
			setIsResult(false)
		}
		if (isNumber() || isPercent()) {
			setInput((input) => input + operator)
		} else if (isOperator()) {
			setInput((input) => input.slice(0, input.length - 1) + operator)
		}
		setHasDecimal(() => false)
	}

	function isOperator() {
		const char = input.slice(input.length - 1, input.length)
		for (const op of operators) {
			if (char === op) return true
		}
		return false
	}

	function addPercent() {
		if (isResult) {
			setIsResult(false)
		}
		if (isNumber()) {
			setInput((input) => input + '%')
		}
	}

	function isPercent() {
		return input.slice(-1) === '%'
	}

	function addDecimal() {
		if (isResult) {
			setIsResult(false)
		}
		if (isNumber() && !hasDecimal) {
			setInput((input) => input + '.')
			setHasDecimal(() => true)
		}
	}

	function isDecimal() {
		return input.slice(-1) === '.'
	}

	function clearInputs() {
		setInput('0')
		setPrevInput('')
		setResult('')
		setIsResult(false)
		setHasDecimal(false)
	}

	function convertInputText(prev = false, reverse = false) {
		let result = ''
		let chars = input
		if (prev == true) chars = prevInput

		for (const char of chars) {
			if (char === '\u00F7') result += '/'
			else if (char === '\u00D7') result += '*'
			else result += char
		}

		if (reverse == true) {
			let newResult = ''
			for (const char of result) {
				if (char === '/') newResult += '\u00F7'
				else if (char === '*') newResult += '\u00D7'
				else newResult += char
			}
			result = newResult
		}

		return result
	}

	function calculateInput() {
		try {
			let expression: any
			if (isResult) {
				console.log('isResult ' + true)
				expression = convertInputText(true)
				let opIndex: number = 0
				for (let i = expression.length - 1; i > -1; i--) {
					if (
						expression[i] === '+' ||
						expression[i] === '-' ||
						expression[i] === '/' ||
						expression[i] === '*'
					)
						opIndex = i
				}
				const newPrevInput = result + convertInputText(true, true).slice(opIndex)

				expression = ''
				for (const char of newPrevInput) {
					if (char === '\u00F7') expression += '/'
					else if (char === '\u00D7') expression += '*'
					else expression += char
				}

				setPrevInput(() => newPrevInput)
			} else {
				console.log('isResult ' + false)
				expression = convertInputText()
				setPrevInput(() => input)
			}
			console.log('expression ' + expression)
			const res = math.evaluate(expression)
			if (!isValidLength(res.toString())) {
				let newResult: any
				if (hasDecimal) {
					const decimalPlace = 9 - res.toString().split('.')[0].length
					newResult = math.round(res, decimalPlace)
				} else {
					newResult = math.round(res)
				}
				setInput(() => newResult.toString())
				setResult(() => newResult.toString())
				setIsResult(true)
			} else {
				setInput(() => res.toString())
				setResult(() => res.toString())
				setIsResult(true)
			}
		} catch (err) {
			setPrevInput('')
			setInput('Error')
			setIsResult(false)
			console.log(err)
		}
	}
	return (
		<>
			<Container
				maxWidth="xs"
				sx={{
					position: 'relative',
					float: 'center',
					width: '50%',
				}}
			>
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
												{prevInput}
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
											onClick={() => clearInputs()}
											variant="contained"
											size="large"
											color="secondary"
											sx={buttonSx}
										>
											C
										</Button>
									</Grid>
									<Grid item>
										<Button
											onClick={() => addPercent()}
											onKeyDown={(e) => {
												console.log(e)
												if (e.key === '%') {
													console.log(true)
													addPercent()
												}
											}}
											variant="contained"
											size="large"
											color="secondary"
											sx={buttonSx}
										>
											%
										</Button>
									</Grid>
									<Grid item>
										<Button
											onClick={() => addOperator('\u00F7')}
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
											onClick={() => removeNumber()}
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
											onClick={() => addOperator('\u00D7')}
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
											onClick={() => addOperator('-')}
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
											onClick={() => addOperator('+')}
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
										<Button
											onClick={() => addDecimal()}
											variant="contained"
											size="large"
											color="primary"
											sx={buttonSx}
										>
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
											onClick={() => calculateInput()}
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
			</Container>
			<Button
				variant="contained"
				color="secondary"
				sx={{
					position: 'absolute',
					float: 'right',
					right: '5%',
					bottom: '8%',
				}}
			>
				History
			</Button>
		</>
	)
}
