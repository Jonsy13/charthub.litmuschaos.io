import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		display: "flex",
		backgroundColor: theme.palette.primary.light,
	},
	usefulLinks: {
		textAlign: "left",
	},
	heading: {
		fontSize: 18,
		marginBottom: 9,
		fontWeight: "bold",
		color: theme.palette.common.black,
	},
	linkType: {
		fontSize: 14,
		marginBottom: 10,
		color: theme.palette.text.primary,
	},
	linkListBox: {
		display: "flex",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	staticType: {
		fontSize: 14,
		marginBottom: 10,
		color: theme.palette.primary.contrastText,
	},
	mainDiv: {
		padding: 30,
		justifyContent: "space-around",
		borderRadius: 10,
		borderLeft: "1px solid rgba(0, 0, 0, 0.2)",
		paddingBottom: 20,
		[theme.breakpoints.down("xs")]: {
			padding: 10,
			borderLeft: "none",
			borderRadius: 0,
			borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
		},
	},
	maintainerField: {
		borderRadius: 10,
	},
	maintainerlinkName: {
		fontSize: 14,
		marginBottom: 7,
		color: theme.palette.text.primary,
	},
	maintainerlinkEmail: {
		fontSize: 14,
		marginBottom: 7,
		color: theme.palette.text.primary,
	},
}));
