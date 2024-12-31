import { EnumLanguage } from '@/shared/enums/language/language.enum'
import toast from 'react-hot-toast'

export const USER_ERROR = {
	NOT_ENOUGH_BALANCE: (language: EnumLanguage) => {
		const errors = {
			[EnumLanguage.RU]: 'Не хватает средств. Пополните баланс.',
			[EnumLanguage.EN]: 'Not enough funds. Please top up your balance.',
			[EnumLanguage.PT]: 'Saldo insuficiente. Por favor, recarregue seu saldo.',
			[EnumLanguage.PL]:
				'Brak wystarczających środków. Proszę doładować konto.',
			[EnumLanguage.SE]:
				'Inte tillräckligt med medel. Vänligen fyll på ditt saldo.',
			[EnumLanguage.DE]: 'Nicht genug Guthaben. Bitte laden Sie Ihr Konto auf.',
			[EnumLanguage.ES]: 'Fondos insuficientes. Por favor, recargue su saldo.',
			[EnumLanguage.FR]: 'Fonds insuffisants. Veuillez recharger votre solde.',
			[EnumLanguage.TR]: 'Yetersiz bakiye. Lütfen bakiyenizi yükleyin.',
		}
		toast.error(errors[language])
	},
	TRADE_NOT_VALID: (language: EnumLanguage) => {
		const errors = {
			[EnumLanguage.RU]: 'Неверный формат трейд-ссылки.',
			[EnumLanguage.EN]: 'Invalid trade link format.',
			[EnumLanguage.PT]: 'Formato de link de troca inválido.',
			[EnumLanguage.PL]: 'Nieprawidłowy format linku handlowego.',
			[EnumLanguage.SE]: 'Ogiltigt handelslänksformat.',
			[EnumLanguage.DE]: 'Ungültiges Handelslink-Format.',
			[EnumLanguage.ES]: 'Formato de enlace de intercambio inválido.',
			[EnumLanguage.FR]: 'Format de lien de trade invalide.',
			[EnumLanguage.TR]: 'Geçersiz ticaret linki formatı.',
		}
		toast.error(errors[language])
	},
}
