import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import { ListItem, ListItemIcon, ListItemText, MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { CssBaseline } from "@mui/material";
import Home from "./Home"
import { Article, House } from "@mui/icons-material";
import { ReactElement } from "react";
import CV from "./CV";

function LinkListItem(props: {
	to: string,
	Icon: ReactElement<any, any>,
	text: string
}) {
	const renderLink = React.useMemo(
		() => (
				<MenuItem to={props.to} component={Link}>
					<ListItemIcon>
						{props.Icon}
					</ListItemIcon>
					<ListItemText primary={props.text} />
				</MenuItem>
		),
		[props.to, props.Icon, props.text]
	)

	return (
		<ListItem
			disablePadding
			button
			component={() => renderLink}
		/>
	)
}

function App() {
	return (
		<div>
			<Box
				sx={{ display: 'flex' }}
			>
				<CssBaseline />
				<Drawer
					sx={{
						width: 240,
						flexShrink: 0,
						'& .MuiDrawer-paper': {
							width: 240,
							boxSizing: 'border-box',
						},
					}}
					variant="permanent"
					anchor="left"
				>
					<List>
						<LinkListItem to="/" Icon={<House />} text="Home" />
						<LinkListItem to="/cv" Icon={<Article />} text="CV" />
					</List>

				</Drawer>
				<Box
					component="main"
					sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
				>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/cv" element={<CV />} />
					</Routes>
				</Box>
			</Box>
		</div>

	);
}

export default App;