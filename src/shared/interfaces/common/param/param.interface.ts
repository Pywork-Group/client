import type {
	TypeIdParam,
	TypeSlugParam,
} from '@/shared/types/common/param/param.type'

export interface ISlugParam {
	params: Promise<TypeSlugParam>
}

export interface IIdParam {
	params: Promise<TypeIdParam>
}

export interface IId {
	id: number
}
