import React, { useContext } from 'react'
import { useCurrentUserQuery } from '../../graphql-queries'
import { Helmet } from 'react-helmet'
import { SignIn, SignOut, UserContext } from '@/components/Admin'
import { hasPermission } from '../../utils'
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

const NavigationLinks: React.FC = () => {
	const currentUser = useContext(UserContext)
	const path = window.location.pathname ? window.location.pathname : ''

	const link = (route: string, label: string, Icon: JSX.Element) => (
		<ListItem button component={Link} to={route} selected={route === path}>
			<ListItemIcon>{Icon}</ListItemIcon>
			<ListItemText primary={label} />
		</ListItem>
	)

	return (
		<div>
			<Toolbar />
			<Divider />
			<List>
				{link('/admin', 'Dashboard', <InboxIcon />)}
				{link('/admin/orders', 'Orders', <InboxIcon />)}
				<Divider />
				{link('/admin/categories', 'Categories', <InboxIcon />)}
				{link('/admin/products', 'Products', <InboxIcon />)}
				{link('/admin/markets', 'Markets', <InboxIcon />)}
				{link('/admin/reviews', 'Reviews', <InboxIcon />)}
				{hasPermission(currentUser, 'ADMIN') && (
					<>
						<Divider />
						{link('/admin/users', 'Users', <InboxIcon />)}
						{link('/admin/variations', 'Variations', <InboxIcon />)}
					</>
				)}
			</List>
		</div>
	)
}

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

const drawerWidth = 240

const PageAdmin: React.FC = props => {
	const [mobileOpen, setMobileOpen] = React.useState(false)

	const isBrowser = typeof window !== 'undefined'
	if (!isBrowser) {
		return null
	}

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen)
	}

	const container = window?.document.body

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
								<NavigationLinks />
							</Drawer>
							<Drawer
								variant="permanent"
								sx={{
									display: { xs: 'none', sm: 'block' },
									'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
								}}
								open>
								<NavigationLinks />
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
