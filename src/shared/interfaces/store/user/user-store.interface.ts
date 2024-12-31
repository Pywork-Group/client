import type {
	ICurrentUser,
	ICurrentUserLoading,
	ISetCurrentUser,
} from '../../api/user/user.interface'

export interface IUserStore
	extends ICurrentUser,
		ISetCurrentUser,
		ICurrentUserLoading {}
