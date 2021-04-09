import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import {
	Container,
	Grid,
	Paper,
	TextField,
	Button,
	Switch,
	FormGroup,
	FormControlLabel,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
		textAlign: "center",
		color: theme.palette.text.secondary,
		display: "flex",
		flexWrap: "wrap",
		alignItems: "center",
	},
	input: {
		flex: "1 0 100%",
	},
}))

export default function App() {
	const classes = useStyles()
	const [items, setItems] = useState([])
	const [name, setName] = useState("")
	const [student, setStudent] = useState(false)

	const updateName = (event) => {
		setName(event.target.value)
	}
	const handleChange = (event, selected) => {
		setStudent(selected)
	}
	const add = (event) => {
		setItems(items.concat([{ name: name, student: student }]))
	}
	return (
		<div className={classes.root}>
			<Container maxWidth='sm'>
				<Grid container>
					<Grid item xs={2}></Grid>
					<Grid item xs={8}>
						<Paper elevation={2} className={classes.paper}>
							<FormGroup>
								<TextField
									id={"name"}
									value={name}
									onChange={updateName}
									label='Name: '
								/>
								<FormControlLabel
									control={
										<Switch
											checked={student}
											onChange={handleChange}
											value='student'
										/>
									}
									label='Student'
								/>
							</FormGroup>
							<Button
								variant='contained'
								id={"addButton"}
								onClick={add}>
								Add
							</Button>
							<TableContainer component={Paper}>
								<Table>
									<TableHead>
										<TableRow>
											<TableCell>Name</TableCell>
											<TableCell>Student</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{items.map((row, index) => (
											<TableRow
												key={row.name + "_" + index}>
												<TableCell
													component='th'
													scope='row'>
													{row.name}
												</TableCell>
												<TableCell>
													{row.student
														? "Student"
														: "Not a student"}
												</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Paper>
					</Grid>
					<Grid item xs={2}></Grid>
				</Grid>
			</Container>
		</div>
	)
}
