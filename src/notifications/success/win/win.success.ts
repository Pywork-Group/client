import { EnumLanguage } from '@/shared/enums/language/language.enum'
import toast from 'react-hot-toast'

export const WIN_SUCCESS = {
	SELL: (language: EnumLanguage) => {
		const messages = {
			[EnumLanguage.RU]: 'Предмет успешно продан.',
			[EnumLanguage.EN]: 'Item successfully sold.',
			[EnumLanguage.PT]: 'Item vendido com sucesso.',
			[EnumLanguage.PL]: 'Przedmiot sprzedany pomyślnie.',
			[EnumLanguage.SE]: 'Föremål sålt framgångsrikt.',
			[EnumLanguage.DE]: 'Artikel erfolgreich verkauft.',
			[EnumLanguage.ES]: 'Artículo vendido con éxito.',
			[EnumLanguage.FR]: 'Objet vendu avec succès.',
			[EnumLanguage.TR]: 'Öğe başarıyla satıldı.',
		}
		toast.success(messages[language])
	},
	SELL_ALL: (language: EnumLanguage, price: string) => {
		const messages = {
			[EnumLanguage.RU]: `Продано на сумму ${price}.`,
			[EnumLanguage.EN]: `Sold for the amount of ${price}.`,
			[EnumLanguage.PT]: `Vendido por ${price}.`,
			[EnumLanguage.PL]: `Sprzedano za kwotę ${price}.`,
			[EnumLanguage.SE]: `Såld för ${price}.`,
			[EnumLanguage.DE]: `Verkauft für ${price}.`,
			[EnumLanguage.ES]: `Vendido por ${price}.`,
			[EnumLanguage.FR]: `Vendu pour ${price}.`,
			[EnumLanguage.TR]: `${price} tutarına satıldı.`,
		}
		toast.success(messages[language])
	},
	REQUEST: (language: EnumLanguage) => {
		const messages = {
			[EnumLanguage.RU]: `Запрос на вывод успешно отправлен! Мы отправим вам трейд-запрос в Steam в течение 6 часов. Ожидайте, скоро всё будет у вас.`,
			[EnumLanguage.EN]: `Your withdrawal request has been successfully sent! We'll send you a trade offer on Steam within 6 hours. Stay tuned, it will be with you soon.`,
			[EnumLanguage.PT]: `Seu pedido de retirada foi enviado com sucesso! Enviaremos uma oferta de troca no Steam dentro de 6 horas. Fique atento, logo estará com você.`,
			[EnumLanguage.PL]: `Twoje żądanie wypłaty zostało pomyślnie wysłane! Wyślemy Ci ofertę wymiany na Steamie w ciągu 6 godzin. Czekaj, wkrótce będzie u Ciebie.`,
			[EnumLanguage.SE]: `Din uttagsbegäran har skickats framgångsrikt! Vi kommer att skicka dig ett trade-erbjudande på Steam inom 6 timmar. Håll utkik, det kommer snart vara hos dig.`,
			[EnumLanguage.DE]: `Ihre Auszahlungsanforderung wurde erfolgreich gesendet! Wir werden Ihnen innerhalb von 6 Stunden ein Handelsangebot auf Steam senden. Bleiben Sie dran, es wird bald bei Ihnen sein.`,
			[EnumLanguage.ES]: `¡Su solicitud de retiro se ha enviado correctamente! Enviaremos una oferta de intercambio en Steam en un plazo de 6 horas. Esté atento, pronto estará con usted.`,
			[EnumLanguage.FR]: `Votre demande de retrait a été envoyée avec succès ! Nous vous enverrons une offre d'échange sur Steam dans les 6 heures. Restez à l'écoute, cela arrivera bientôt chez vous.`,
			[EnumLanguage.TR]: `Çekim talebiniz başarıyla gönderildi! Steam üzerinde 6 saat içinde bir takas teklifi göndereceğiz. Takipte kalın, yakında sizde olacak.`,
		}
		toast.success(messages[language])
	},
}
