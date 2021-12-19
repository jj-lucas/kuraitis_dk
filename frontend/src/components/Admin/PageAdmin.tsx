import React from 'react'
import { useCurrentUserQuery } from '../../graphql-queries'
import { Helmet } from 'react-helmet'
import { SignIn, SignOut, UserContext } from '..'
import {
	Alert,
	AppBar,
	Box,
	CircularProgress,
	Container,
	Divider,
	Drawer,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Toolbar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import InboxIcon from '@mui/icons-material/Inbox'
import { Link } from 'gatsby'

const AuthenticateUser: React.FC = props => {
	const { data, loading, error } = useCurrentUserQuery()

	if (error) return <Alert severity="error">{error.message}</Alert>

	if (loading) return <CircularProgress />

	if (!data?.currentUser) {
		// display a login form
		return <SignIn />
	}

	// you are authenticated, show the actual page, providing the user in the context
	return <UserContext.Provider value={data.currentUser}>{props.children}</UserContext.Provider>
}

const navigationLinks = (
	<div>
		<Toolbar />
		<Divider />
		<List>
			<ListItem button component={Link} to="/admin">
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary={'Dashboard'} />
			</ListItem>
			<ListItem button component={Link} to="/admin/orders">
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary={'Orders'} />
			</ListItem>
			<Divider />
			<ListItem button component={Link} to="/admin/categories">
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary={'Categories'} />
			</ListItem>
			<ListItem button component={Link} to="/admin/products">
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary={'Prodcts'} />
			</ListItem>
			<ListItem button component={Link} to="/admin/markets">
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary={'Markets'} />
			</ListItem>
			<ListItem button component={Link} to="/admin/reviews">
				<ListItemIcon>
					<InboxIcon />
				</ListItemIcon>
				<ListItemText primary={'Reviews'} />
			</ListItem>
		</List>
	</div>
)

const drawerWidth = 240

const PageAdmin: React.FC = props => {
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const container = window.document.body

	return (
		<div>
			<Helmet>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			</Helmet>
			<Container maxWidth="xl">
				<AuthenticateUser>
					<Box sx={{ display: 'flex' }}>
						<AppBar
							position="fixed"
							sx={{
								width: { sm: `calc(100% - ${drawerWidth}px)` },
								ml: { sm: `${drawerWidth}px` },
							}}>
							<Toolbar>
								<IconButton
									color="inherit"
									aria-label="open drawer"
									edge="start"
									onClick={handleDrawerToggle}
									sx={{ mr: 2, display: { sm: 'none' } }}>
									<MenuIcon />
								</IconButton>
								<div style={{ flexGrow: 1 }}></div>
								<SignOut />
							</Toolbar>
						</AppBar>
						<Box
							component="nav"
							sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
							aria-label="mailbox folders">
							<Drawer
								container={container}
								variant="temporary"
								open={mobileOpen}
								onClose={handleDrawerToggle}
								ModalProps={{
									keepMounted: true, // Better open performance on mobile.
								}}
								sx={{
									display: { xs: 'block', sm: 'none' },
									'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
								}}>
								{navigationLinks}
							</Drawer>
							<Drawer
								variant="permanent"
								sx={{
									display: { xs: 'none', sm: 'block' },
									'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
								}}
								open>
								{navigationLinks}
							</Drawer>
						</Box>
						<Box component="main" sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
							<Toolbar />
							{props.children}
						</Box>
					</Box>
				</AuthenticateUser>
			</Container>
		</div>
	)
}

export { PageAdmin }
