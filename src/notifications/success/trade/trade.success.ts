import { EnumLanguage } from '@/shared/enums/language/language.enum'
import toast from 'react-hot-toast'

export const TRADE_SUCCESS = {
	UPDATE: (language: EnumLanguage) => {
		const messages = {
			[EnumLanguage.RU]: `Трейд-ссылка успешно обновлена.`,
			[EnumLanguage.EN]: `The trade link has been successfully updated.`,
			[EnumLanguage.PT]: `O link de troca foi atualizado com sucesso.`,
			[EnumLanguage.PL]: `Link wymiany został pomyślnie zaktualizowany.`,
			[EnumLanguage.SE]: `Handelslänken har uppdaterats framgångsrikt.`,
			[EnumLanguage.DE]: `Der Handelslink wurde erfolgreich aktualisiert.`,
			[EnumLanguage.ES]: `El enlace de intercambio se ha actualizado correctamente.`,
			[EnumLanguage.FR]: `Le lien d'échange a été mis à jour avec succès.`,
			[EnumLanguage.TR]: `Takas linki başarıyla güncellendi.`,
		}
		toast.success(messages[language])
	},
}
