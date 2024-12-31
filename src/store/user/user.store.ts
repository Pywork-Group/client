import type { IUserStore } from '@/shared/interfaces/store/user/user-store.interface'
import { createContext, useContext } from 'react'

export const UserContext = createContext<IUserStore>({
	user: null,
	setUser: () => {},
	isLoading: false,
})

export const useUser = () => useContext(UserContext)
export const useCurrency = () => useContext(UserContext).user?.currency
