import jwt from 'jsonwebtoken'
import { Context } from '../index'
import { User } from '@prisma/client'

export const generateJWT = (user: User, ctx: Context) => {
	// generate a JWT token
	const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET)
	// set the JWT as a cookie on the response
	ctx.res.cookie('token', token, {
		httpOnly: true,
		maxAge: 1000 * 60 * 60 * 24 * 30, // 30 days
		sameSite: 'none',
		secure: true,
	})
}
