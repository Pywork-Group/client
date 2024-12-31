import { EnumLanguage } from '@/shared/enums/language/language.enum'

export const TRANSLATES = {
	[EnumLanguage.RU]: {
		HEADER: {
			steam: 'Войти',
			contract: 'Контракт',
		},
		FOOTER: {
			slogan: 'Лучшие кейсы CS2 (CS:GO)',
			social: 'Мы в соц. сетях:',
			cooperation: 'Сотрудничество',
			description:
				'Открывай кейсы CS:GO по самым выгодным ценам от KUPIDROP! Здесь ты найдешь лучшие кейсы с обновлением каждую неделю! Мы предлагаем уникальную коллекцию кейсов, чтобы ты мог испытать удачу и получить ценные скины для CS:GO.',
			stats: {
				wins: 'Выиграно предметов',
				cases: 'Открыто кейсов',
				contracts: 'Контрактов',
			},
		},
		CASE: {
			back: 'Назад',
			unauthorized: {
				heading: 'Вы не авторизованы!',
				text: 'Для открытия кейсов необходимо пройти авторизацию',
				button: 'Войти через Steam',
			},
			enough: {
				heading: '{price} - не хватает {balance}',
				text: 'Недостаточно средств для открытия кейса',
				button: 'Пополнить баланс',
			},
			slots: {
				sold: 'Продано',
			},
			controllers: {
				opening: 'Открывается',
				again: 'Попробовать еще раз',
				sell: 'Продать за {price}',
				contract: 'Добавить в контракт',
				open: 'Открыть за {price}',
			},
			skins: {
				heading: 'Содержимое кейса',
			},
		},
		CONTRACT: {
			informer: {
				heading: 'Отсутствуют предметы для контракта!',
				description: 'вернитесь на эту страницу и Вы сможете создать контракт!',
				link: 'Откройте несколько кейсов',
			},
			reel: {
				heading: 'Контракт',
				delete: 'Удалить из контракта',
				contract: 'Создать контракт',
				count: '{count} предмет{suffix}  | ',
				informer: {
					heading: 'Получите предмет стоимостью',
					from: 'от',
					to: 'до',
				},
				add: 'Добавьте минимум 3 предмета',
			},
			skins: {
				heading: 'Доступные для контракта предметы',
				add: 'Добавить в контракт',
			},
			win: {
				again: 'Попробовать еще раз',
				sell: 'Продать за',
			},
		},
		SKIN: {
			labels: {
				quality: 'Качество',
				regular: 'Обычный',
			},
			cases: {
				heading: 'Кейсы с этим предметом',
			},
			similar: {
				heading: 'Похожие предметы',
			},
		},
		USER: {
			info: {
				balance: 'Пополнить',
				logout: 'Выйти',
			},
			trade: {
				link: 'Трейд-ссылка',
				find: 'Где получить?',
				scammer: 'Остерегайтесь мошенников',
				info: 'Внимание! Мы никогда не добавляемся в Steam и не просим отдать вещи по двойной цене/перейти по ссылке и т.п. Будьте бдительны!',
				save: 'Сохранить',
			},
			wins: {
				heading: 'Предметы',
				sell: 'Продать все',
				filters: {
					all: 'Все предметы',
					available: 'Доступно',
					sold: 'Продано',
					contracted: 'Контракт',
					requested: 'Запрошено',
					received: 'Выведен',
				},
				messages: {
					sell: 'Продать',
					request: 'Запросить с маркета',
					sold: 'Продано',
					contracted: 'Использован в контракте',
					requested: 'Запрошено с маркета',
					received: 'Предмет выведен',
				},
				alert: {
					question: 'Вы уверены что хотите продать все предметы?',
					accept: 'Да',
					cancel: 'Отмена',
				},
			},
		},
		NOT_FOUND: {
			heading: 'Упс, все в дыму!',
			description: 'Страница не найдена',
			button: 'На главную',
		},
	},
	[EnumLanguage.EN]: {
		HEADER: {
			steam: 'Log in',
			contract: 'Contract',
		},
		FOOTER: {
			slogan: 'Best CS2 (CS:GO) cases',
			social: 'Our social media:',
			cooperation: 'Cooperation',
			description:
				"Open CS:GO cases at the best prices with KUPIDROP! Here, you'll find the best cases with weekly updates! We offer a unique collection of cases so you can test your luck and get valuable CS:GO skins.",
			stats: {
				wins: 'Items won',
				cases: 'Open cases',
				contracts: 'Contracts',
			},
		},
		CASE: {
			back: 'Back',
			unauthorized: {
				heading: 'You are not authorized!',
				text: 'Log in to open cases',
				button: 'Login through Steam',
			},
			enough: {
				heading: '{price} - not enough {balance}',
				text: 'Insufficient funds to open the case',
				button: 'Refill balance',
			},
			slots: {
				sold: 'Sold',
			},
			controllers: {
				opening: 'Opening',
				again: 'Try again',
				sell: 'Sell for {price}',
				contract: 'Add to contract',
				open: 'Open for {price}',
			},
			skins: {
				heading: 'Case content',
			},
		},
		CONTRACT: {
			informer: {
				heading: 'No items for the contract available!',
				description: 'return to this page to create a contract!',
				link: 'Open several cases',
			},
			reel: {
				heading: 'Contract',
				delete: 'Remove from contract',
				contract: 'Create contract',
				count: '{count} item{suffix}  | ',
				informer: {
					heading: 'Get item worth',
					from: 'from',
					to: 'to',
				},
				add: 'Add at least 3 items',
			},
			skins: {
				heading: 'Available items for contract',
				add: 'Add to contract',
			},
			win: {
				again: 'Try again',
				sell: 'Sell for',
			},
		},
		SKIN: {
			labels: {
				quality: 'Quality',
				regular: 'Regular',
			},
			cases: {
				heading: 'Cases with this item',
			},
			similar: {
				heading: 'Similar items',
			},
		},
		USER: {
			info: {
				balance: 'Refill',
				logout: 'Log out',
			},
			trade: {
				link: 'Trade URL',
				find: 'Where to get?',
				scammer: 'Beware of scammers',
				info: 'Attention! We never add to Steam and do not ask for double price items / click on a link, etc. Be carefull!',
				save: 'Save',
			},
			wins: {
				heading: 'Items',
				sell: 'Sell all',
				filters: {
					all: 'All items',
					available: 'Available',
					sold: 'Sold',
					contracted: 'Contract',
					requested: 'Requested',
					received: 'Withdrawn',
				},
				messages: {
					sell: 'Sell',
					request: 'Request from the market',
					sold: 'Sold',
					contracted: 'Used in contract',
					requested: 'Requested from market',
					received: 'Item withdrawn',
				},
				alert: {
					question: 'Are you sure you want to sell all items?',
					accept: 'Yes',
					cancel: 'Cancel',
				},
			},
		},
		NOT_FOUND: {
			heading: 'Oops, all up in smoke!',
			description: 'Page not found',
			button: 'To Home Page',
		},
	},
	[EnumLanguage.PT]: {
		HEADER: {
			steam: 'Log in',
			contract: 'Contrato',
		},
		FOOTER: {
			slogan: 'Melhores Caixas de CS2 (CS:GO)',
			social: 'Nossas Redes:',
			cooperation: 'Parcerias',
			description:
				'Abra caixas de CS:GO pelos melhores preços com a KUPIDROP! Aqui, você encontrará as melhores caixas com atualizações semanais! Oferecemos uma coleção única de caixas para você testar sua sorte e conseguir skins valiosas para CS:GO.',
			stats: {
				wins: 'Itens ganhos',
				cases: 'Abrir caixas',
				contracts: 'Contratos',
			},
		},
		CASE: {
			back: 'Voltar',
			unauthorized: {
				heading: 'Você não está autorizado!',
				text: 'Faça o login para abrir cofres',
				button: 'Login via Steam',
			},
			enough: {
				heading: '{price} - insuficiente {balance}',
				text: 'Fundos insuficientes para abrir a caixa',
				button: 'Reabasteça o saldo',
			},
			slots: {
				sold: 'Vendido',
			},
			controllers: {
				opening: 'Abertura',
				again: 'Tente novamente',
				sell: 'Vender por {price}',
				contract: 'Adicionar ao contrato',
				open: 'Aberto para {price}',
			},
			skins: {
				heading: 'Conteúdo do cofre',
			},
		},
		CONTRACT: {
			informer: {
				heading: 'Não há itens para o contrato!',
				description: 'volte para esta página e você pode criar um contrato!',
				link: 'Abra vários cofres',
			},
			reel: {
				heading: 'Contrato',
				delete: 'Remover do contrato',
				contract: 'Criar um contrato',
				count: '{count} item{suffix}  | ',
				informer: {
					heading: 'Obtenha um item do valor',
					from: 'de',
					to: 'até',
				},
				add: 'Adicione pelo menos 3 itens',
			},
			skins: {
				heading: 'itens disponíveis para contrato',
				add: 'Adicionar ao contrato',
			},
			win: {
				again: 'Tente novamente',
				sell: 'Vender por',
			},
		},
		SKIN: {
			labels: {
				quality: 'Qualidade',
				regular: 'Comum',
			},
			cases: {
				heading: 'Casos com este item',
			},
			similar: {
				heading: 'Itens similares',
			},
		},
		USER: {
			info: {
				balance: 'Recarregar',
				logout: 'Log out',
			},
			trade: {
				link: 'Link comercial',
				find: 'Onde eu consigo isso?',
				scammer: 'Cuidado com os golpistas',
				info: 'Atenção! Nós nunca te adicionaremos a Steam e não pedimos o dobro do preço dos itens / clique em um link, etc. Cuidado!',
				save: 'Salve',
			},
			wins: {
				heading: 'Itens',
				sell: 'Vender tudo',
				filters: {
					all: 'Todos os itens',
					available: 'Disponível',
					sold: 'Vendido',
					contracted: 'Contrato',
					requested: 'Solicitado',
					received: 'Retirado',
				},
				messages: {
					sell: 'Vender',
					request: 'Pedido do mercado',
					sold: 'Vendido',
					contracted: 'Usado em contrato',
					requested: 'Solicitado ao mercado',
					received: 'Retirado',
				},
				alert: {
					question: 'Tem certeza de que deseja vender todos os itens?',
					accept: 'Sim',
					cancel: 'Cancelar',
				},
			},
		},
		NOT_FOUND: {
			heading: 'Oops, tudo virou fumaça!',
			description: 'Página não encontrada',
			button: 'Para a página inicial',
		},
	},
	[EnumLanguage.PL]: {
		HEADER: {
			steam: 'Zaloguj się',
			contract: 'Kontrakt',
		},
		FOOTER: {
			slogan: 'Najlepsze kejsy CS2 (CS:GO)',
			social: 'My w sieciach społecznościowych:',
			cooperation: 'Współpraca',
			description:
				'Otwieraj skrzynki CS:GO w najlepszych cenach z KUPIDROP! Tutaj znajdziesz najlepsze skrzynki z cotygodniowymi aktualizacjami! Oferujemy unikalną kolekcję skrzynek, abyś mógł spróbować szczęścia i zdobyć cenne skiny do CS:GO.',
			stats: {
				wins: 'Przedmioty wygrane',
				cases: 'Otwarto kejsów',
				contracts: 'Kontraktów',
			},
		},
		CASE: {
			back: 'Wróć',
			unauthorized: {
				heading: 'Nie jesteś zalogowany!',
				text: 'Żeby otwierać skrzynie, należy się zalogować',
				button: 'Zaloguj się wykorzystując Steam',
			},
			enough: {
				heading: '{price} - brakuje {balance}',
				text: 'Brak środków na saldzie do otwarcia skrzyni.',
				button: 'Doładuj saldo',
			},
			slots: {
				sold: 'Sprzedane',
			},
			controllers: {
				opening: 'Otwiera się',
				again: 'Spróbuj jeszcze raz',
				sell: 'Sprzedaj za {price}',
				contract: 'Dodaj do kontraktu',
				open: 'Otwórz za {price}',
			},
			skins: {
				heading: 'Zawartość skrzyni',
			},
		},
		CONTRACT: {
			informer: {
				heading: 'Brak przedmiotów do kontraktu!',
				description: 'wróć na tę stronę, będzie można utworzyć kontrakt!',
				link: 'Otwórz kilka skrzyń',
			},
			reel: {
				heading: 'Kontrakt',
				delete: 'Usuń z umowy',
				contract: 'Utwórz kontrakt',
				count: '{count} przedmiot{suffix}  | ',
				informer: {
					heading: 'Otrzymaj przedmiot o cenie',
					from: 'od',
					to: 'do',
				},
				add: 'Dodaj minimum 3 przedmioty',
			},
			skins: {
				heading: 'Przedmioty dostępne do kontraktu',
				add: 'Dodaj do kontraktu',
			},
			win: {
				again: 'Spróbuj jeszcze raz',
				sell: 'Sprzedaj za',
			},
		},
		SKIN: {
			labels: {
				quality: 'Jakość',
				regular: 'Zwykły',
			},
			cases: {
				heading: 'Etui z tym przedmiotem',
			},
			similar: {
				heading: 'Podobne przedmioty',
			},
		},
		USER: {
			info: {
				balance: 'Doładuj',
				logout: 'Wyloguj się',
			},
			trade: {
				link: 'Trade link',
				find: 'Gdzie uzyskać?',
				scammer: 'Wystrzegaj się oszustów',
				info: 'Uwaga! Nigdy nie dodajemy się do Steam i nie prosimy o sprzedaż rzeczy w podwójnej cenie/przejście pod link itp. Bądź ostrożny!',
				save: 'Zapisz',
			},
			wins: {
				heading: 'Przedmioty',
				sell: 'Sprzedaj wszystko',
				filters: {
					all: 'Wszystkie przedmioty',
					available: 'Dostępny',
					sold: 'Sprzedano',
					contracted: 'Kontrakt',
					requested: 'Zażądano',
					received: 'Wycofany',
				},
				messages: {
					sell: 'Sprzedaj',
					request: 'Zarządzaj z marketu',
					sold: 'Sprzedano',
					contracted: 'Wykorzystano w kontrakcie',
					requested: 'Zażądano od rynku',
					received: 'Wycofany',
				},
				alert: {
					question:
						'Czy jesteś pewien, że chcesz sprzedać wszystkie przedmioty?',
					accept: 'Tak',
					cancel: 'Anuluj',
				},
			},
		},
		NOT_FOUND: {
			heading: 'Ups, wszystko poszło z dymem!',
			description: 'Nie odnaleziono strony',
			button: 'Strona główna',
		},
	},
	[EnumLanguage.SE]: {
		HEADER: {
			steam: 'Logga in',
			contract: 'Avtal',
		},
		FOOTER: {
			slogan: 'Bästa CS2 (CS:GO)-case',
			social: 'Våra sociala medier:',
			cooperation: 'Samarbete',
			description:
				'Öppna CS:GO-lådor till bästa pris med KUPIDROP! Här hittar du de bästa lådorna med veckovisa uppdateringar! Vi erbjuder en unik samling lådor så att du kan testa din tur och få värdefulla skins till CS:GO.',
			stats: {
				wins: 'Objekt vann',
				cases: 'Öppna cases',
				contracts: 'Avtal',
			},
		},
		CASE: {
			back: 'Tillbaka',
			unauthorized: {
				heading: 'Du är inte behörig!',
				text: 'Logga in för att öppna ärenden',
				button: 'Logga in via Steam',
			},
			enough: {
				heading: '{price} - inte tillräckligt {balance}',
				text: 'Otillräckliga medel för att inleda fallet',
				button: 'Påfyllningssaldo',
			},
			slots: {
				sold: 'Säljs',
			},
			controllers: {
				opening: 'Öppning',
				again: 'Försök igen',
				sell: 'Sälj för {price}',
				contract: 'Lägg till i kontraktet',
				open: 'Öppet för {price}',
			},
			skins: {
				heading: 'Innehållet av cases',
			},
		},
		CONTRACT: {
			informer: {
				heading: 'Inga föremål för kontraktet finns tillgängliga!',
				description: 'återgå till den här sidan för att skapa ett kontrakt!',
				link: 'Öppna flera cases',
			},
			reel: {
				heading: 'Avtal',
				delete: 'Ta bort från kontraktet',
				contract: 'Skapa kontrakt',
				count: '{count} föremål{suffix}  | ',
				informer: {
					heading: 'Få ett föremålsvärde',
					from: 'från',
					to: 'till',
				},
				add: 'Lägg till minst 3 objekt',
			},
			skins: {
				heading: 'tillgängliga poster för kontrakt',
				add: 'Lägg till i kontraktet',
			},
			win: {
				again: 'Försök igen',
				sell: 'Sälj för',
			},
		},
		SKIN: {
			labels: {
				quality: 'Kvalitet',
				regular: 'Vanlig',
			},
			cases: {
				heading: 'Кейсы с этим предметом',
			},
			similar: {
				heading: 'Похожие предметы',
			},
		},
		USER: {
			info: {
				balance: 'Påfyllning',
				logout: 'Logga ut',
			},
			trade: {
				link: 'Handels-URL',
				find: 'Var kan man köpa?',
				scammer: 'Akta dig för bedragare',
				info: 'Uppmärksamhet! Vi lägger aldrig till Steam och ber inte om dubbla priser / klicka på en länk osv. Var försiktig!',
				save: 'Spara',
			},
			wins: {
				heading: 'Föremål',
				sell: 'Sälj alla',
				filters: {
					all: 'Alla föremål',
					available: 'Tillgänglig',
					sold: 'Säljs',
					contracted: 'Avtal',
					requested: 'Begärd',
					received: 'Tillbakadragen',
				},
				messages: {
					sell: 'Sälj',
					request: 'Begäran från marknaden',
					sold: 'Säljs',
					contracted: 'Används i kontraktet',
					requested: 'Begärd från marknaden',
					received: 'Tillbakadragen',
				},
				alert: {
					question: 'Är du säker på att du vill sälja alla föremål?',
					accept: 'Ja',
					cancel: 'Avbryt',
				},
			},
		},
		NOT_FOUND: {
			heading: 'Oj, allt är i rök!',
			description: 'Sidan hittades inte',
			button: 'Till startsidan',
		},
	},
	[EnumLanguage.DE]: {
		HEADER: {
			steam: 'Einloggen',
			contract: 'Verträge',
		},
		FOOTER: {
			slogan: 'Die besten CS2 (CS:GO)-Lootboxen',
			social: 'Wir in den sozialen Netzwerken:',
			cooperation: 'Zusammenarbeit',
			description:
				'Öffne CS:GO-Cases zu den besten Preisen mit KUPIDROP! Hier findest du die besten Cases mit wöchentlichen Updates! Wir bieten eine einzigartige Sammlung von Cases, damit du dein Glück versuchen und wertvolle Skins für CS:GO erhalten kannst.',
			stats: {
				wins: 'Artikel gewonnen',
				cases: 'Geöffnene Lootboxen',
				contracts: 'Verträge',
			},
		},
		CASE: {
			back: 'Zurück',
			unauthorized: {
				heading: 'Sie sind niht autorisiert!',
				text: 'Um eine Lootbox zu öffnen, müssen Sie sich autorisieren lassen',
				button: 'Mit Steam-Account anmelden',
			},
			enough: {
				heading: '{price} - {balance} fehlen Ihnen noch',
				text: 'Nicht genug Guthaben, um die Lootbox zu öffnen',
				button: 'Guthaben aufladen',
			},
			slots: {
				sold: 'Verkauft',
			},
			controllers: {
				opening: 'Wird geöffnet',
				again: 'Nochmal probieren',
				sell: 'Verkaufen für {price}',
				contract: 'Zum Vertrag hinzufügen',
				open: 'Öffnen für {price}',
			},
			skins: {
				heading: 'Lootbox-Inhalt',
			},
		},
		CONTRACT: {
			informer: {
				heading: 'Keine Gegenstände für den Vertrag verfügbar!',
				description: 'zurück zur Seite gehen und einen Vertrag erstellen!',
				link: 'Mehrere Lootboxen öffnen',
			},
			reel: {
				heading: 'Verträge',
				delete: 'Vom Vertrag entfernen',
				contract: 'Vertrag erstellen',
				count: '{count} Artikel{suffix}  | ',
				informer: {
					heading: 'Erhalten Sie einen Gegenstand im Wert',
					from: 'von',
					to: 'bis',
				},
				add: 'Mindestens 3 Gegenstände hinzufügen',
			},
			skins: {
				heading: 'Gegenstände, die für den Vertrag verfügbar sind',
				add: 'Zum Vertrag hinzufügen',
			},
			win: {
				again: 'Nochmal probieren',
				sell: 'Verkaufen für',
			},
		},
		SKIN: {
			labels: {
				quality: 'Qualität',
				regular: 'Normal',
			},
			cases: {
				heading: 'Fälle mit diesem Artikel',
			},
			similar: {
				heading: 'Ähnliche Gegenstände',
			},
		},
		USER: {
			info: {
				balance: 'Nachfüllen',
				logout: 'Ausloggen',
			},
			trade: {
				link: 'Trade-Link',
				find: 'Wo kann man es erhalten?',
				scammer: 'Vorsicht, Betrüger',
				info: 'Achtung! Wir schreiben Sie nie bei Steam an und fragen nie nach Gegenständen zum doppelten Preis/zur doppelten Referenz. Seien Sie vorsichtig!',
				save: 'Speichern',
			},
			wins: {
				heading: 'Gegenstände',
				sell: 'Alles verkaufen',
				filters: {
					all: 'Alle Gegenstände',
					available: 'Bereit',
					sold: 'Verkauft',
					contracted: 'Verträge',
					requested: 'Angefordert',
					received: 'Erhalten',
				},
				messages: {
					sell: 'Verkaufen',
					request: 'Markt-Anfrage',
					sold: 'Verkauft',
					contracted: 'Wird im Vertrag verwendet',
					requested: 'Vom Markt angefordert',
					received: 'Erhalten',
				},
				alert: {
					question:
						'Sind Sie sicher, dass Sie alle Gegenstände verkaufen wollen?',
					accept: 'Ja',
					cancel: 'Stornierung',
				},
			},
		},
		NOT_FOUND: {
			heading: 'Ups, etwas ist schiefgegangen',
			description: 'Diese Seite wurde nicht gefunden',
			button: 'Zur Startseite',
		},
	},
	[EnumLanguage.ES]: {
		HEADER: {
			steam: 'Iniciar sesión',
			contract: 'Contrato',
		},
		FOOTER: {
			slogan: 'Mejores cajas de CS2 (CS:GO)',
			social: 'Nuestras redes sociales:',
			cooperation: 'Cooperación',
			description:
				'¡Abre cajas de CS:GO al mejor precio con KUPIDROP! Aquí encontrarás las mejores cajas con actualizaciones semanales. Ofrecemos una colección única de cajas para que pruebes tu suerte y consigas skins valiosos para CS:GO.',
			stats: {
				wins: 'Artículos ganados',
				cases: 'Cajas abiertas',
				contracts: 'Contratos',
			},
		},
		CASE: {
			back: 'Atrás',
			unauthorized: {
				heading: '¡Usted no está autorizado!',
				text: 'Inicie sesión en la página, para abrir las cajas',
				button: 'Entrar a través de Steam',
			},
			enough: {
				heading: '{price} - insuficiente {balance}',
				text: 'Fondos insuficientes para abrir el caso',
				button: 'Recargar saldo',
			},
			slots: {
				sold: 'Vendido',
			},
			controllers: {
				opening: 'Abriendo',
				again: 'Probar otra vez',
				sell: 'Vender por {price}',
				contract: 'Agregar al contrato',
				open: 'Abrir para {price}',
			},
			skins: {
				heading: 'Contenido de caja',
			},
		},
		CONTRACT: {
			informer: {
				heading: '¡Faltan objetos para contrato!',
				description: 'vuelva a esta página y podrá crear el contrato!',
				link: 'Abra varias cajas',
			},
			reel: {
				heading: 'Contrato',
				delete: 'Quitar del contrato',
				contract: 'Crear contrato',
				count: '{count} artículo{suffix}  | ',
				informer: {
					heading: 'Reciba objeto con precio',
					from: 'desde',
					to: 'hasta',
				},
				add: 'Agregue como mínimo 3 objetos',
			},
			skins: {
				heading: 'objetos accesibles para contratos',
				add: 'Agregar al contrato',
			},
			win: {
				again: 'Probar otra vez',
				sell: 'Vender por',
			},
		},
		SKIN: {
			labels: {
				quality: 'Calidad',
				regular: 'Regular',
			},
			cases: {
				heading: 'Casos con este artículo',
			},
			similar: {
				heading: 'Artículos similares',
			},
		},
		USER: {
			info: {
				balance: 'Recargar',
				logout: 'Cerrar sesión',
			},
			trade: {
				link: 'Enlace trade',
				find: '¿Dónde puedo conseguirlo?',
				scammer: 'Cuidado con los estafadores',
				info: '¡Atención! Nunca agregamos a Steam y no pedimos artículos de doble precio / haga clic en un enlace, etc. ¡Ten cuidado!',
				save: 'Ahorrar',
			},
			wins: {
				heading: 'Artículos',
				sell: 'Vender todo',
				filters: {
					all: 'Todos los artículos',
					available: 'Disponible',
					sold: 'Vendido',
					contracted: 'Contrato',
					requested: 'Solicitado',
					received: 'Retirado',
				},
				messages: {
					sell: 'Vender',
					request: 'Solicitar bel mercado',
					sold: 'Vendido',
					contracted: 'Usado en contracto',
					requested: 'Solicitado del mercado',
					received: 'Retirado',
				},
				alert: {
					question: '¿Está seguro de que quiere vender todos los artículos?',
					accept: 'Sí',
					cancel: 'Cancelar',
				},
			},
		},
		NOT_FOUND: {
			heading: 'Ups, todo está lleno de humo!',
			description: 'Página no encontrada',
			button: 'A la página principal',
		},
	},
	[EnumLanguage.FR]: {
		HEADER: {
			steam: 'Enter',
			contract: 'Contrat',
		},
		FOOTER: {
			slogan: 'Meilleurs attaché-cases CS2 (CS:GO)',
			social: 'Nous sommes sur les réseaux sociaux:',
			cooperation: 'Coopération',
			description:
				'Ouvrez des caisses CS:GO aux meilleurs prix avec KUPIDROP ! Ici, vous trouverez les meilleures caisses avec des mises à jour hebdomadaires. Nous offrons une collection unique de caisses pour tenter votre chance et obtenir des skins précieux pour CS:GO.',
			stats: {
				wins: 'Objets gagnés',
				cases: 'Les attaché-cases ouverts',
				contracts: 'Contrats',
			},
		},
		CASE: {
			back: 'Retour',
			unauthorized: {
				heading: 'Vous n’êtes pas autorisé!',
				text: "Pour ouvrir ces attaché-cases il faut passer l'authentification",
				button: 'Entrer par Steam',
			},
			enough: {
				heading: '{price} - il manque {balance}',
				text: 'Demi-mesure pour ouvrir un attaché-case',
				button: "ajouter de l'argent",
			},
			slots: {
				sold: 'Vendu',
			},
			controllers: {
				opening: "S'ouvre",
				again: 'Réessayer',
				sell: 'Vendre pour {price}',
				contract: 'Ajouter au contrat',
				open: 'Ouvrir pour {price}',
			},
			skins: {
				heading: "Le contenu de l'attaché-case",
			},
		},
		CONTRACT: {
			informer: {
				heading: 'Il n’y a pas d’objets pour le contrat!',
				description: 'retournez à cette page et vous pourrez créer un contrat!',
				link: 'Appuyez pour ouvrir quelques attaché-cases',
			},
			reel: {
				heading: 'Contrat',
				delete: 'Supprimer du contrat',
				contract: 'Créer un contrat',
				count: '{count} article{suffix}  | ',
				informer: {
					heading: "Obtenez un objet d'une valeur",
					from: 'de',
					to: 'à',
				},
				add: 'Ajouter au moins trois objets',
			},
			skins: {
				heading: 'Éléments disponibles pour le contrat',
				add: 'Ajouter au contrat',
			},
			win: {
				again: 'Réessayer',
				sell: 'Vendre pour',
			},
		},
		SKIN: {
			labels: {
				quality: 'La qualité',
				regular: 'Simple',
			},
			cases: {
				heading: 'Cas avec cet article',
			},
			similar: {
				heading: 'Articles similaires',
			},
		},
		USER: {
			info: {
				balance: 'Compléter',
				logout: 'Sortir',
			},
			trade: {
				link: 'Le lien trade',
				find: 'Où puis-je la trouver?',
				scammer: 'Méfiez-vous des fraudeurs',
				info: 'Attention! Nous ne nous ajoutons jamais à Steam et nous ne demandons pas de donner des choses à double prix/suivre le lien etc. Soyez prudent!',
				save: 'Enregistrer',
			},
			wins: {
				heading: 'Les objets',
				sell: 'Vendre tout',
				filters: {
					all: 'Tous les objets',
					available: 'Disponible',
					sold: 'Vendu',
					contracted: 'Contrat',
					requested: 'Demandé',
					received: 'Retiré',
				},
				messages: {
					sell: 'Vendre',
					request: 'Demandez au marché',
					sold: 'Vendu',
					contracted: 'Utilisé dans le contrat',
					requested: 'Demandé au marché',
					received: 'Retiré',
				},
				alert: {
					question: 'Êtes-vous sûr de vouloir vendre tous les articles?',
					accept: 'Oui',
					cancel: 'Annulation',
				},
			},
		},
		NOT_FOUND: {
			heading: 'Oups, tout est parti en fumée!',
			description: 'Page introuvable',
			button: "Aller à la page d'accueil",
		},
	},
	[EnumLanguage.TR]: {
		HEADER: {
			steam: 'Giriş',
			contract: 'Sözleşmeler',
		},
		FOOTER: {
			slogan: 'En iyi CS2 (CS:GO) kasaları',
			social: 'Sosyal Medya:',
			cooperation: 'İşbirliği',
			description:
				'KUPIDROP ile en iyi fiyatlarla CS:GO kutuları açın! Burada, haftalık güncellemelerle en iyi kutuları bulacaksınız! Şansınızı deneyip CS:GO için değerli skinler kazanabileceğiniz eşsiz bir kutu koleksiyonu sunuyoruz.',
			stats: {
				wins: 'Kazanılan öğeler',
				cases: 'AÇILAN KASA SAYISI',
				contracts: 'Sözleşmeler',
			},
		},
		CASE: {
			back: 'Geri',
			unauthorized: {
				heading: 'Oturum açmadınız!',
				text: 'Kutuları açmak için kullanıcı hesabınıza giriş yapınız',
				button: 'Steam üzerinden gir',
			},
			enough: {
				heading: '{price} - {balance} yeterli değil',
				text: 'Kasayı açmak için yeterli bakiyeniz yok',
				button: 'Hesaba para yüklemek',
			},
			slots: {
				sold: 'Satıldı',
			},
			controllers: {
				opening: 'Açılıyor',
				again: 'Tekrar deneyin',
				sell: 'Satış fiyatı {price}',
				contract: 'Sözleşmeye ekle',
				open: "{price}'a ac",
			},
			skins: {
				heading: 'Kutunun içindekiler',
			},
		},
		CONTRACT: {
			informer: {
				heading: 'Sözleşme için uygun eşyanız yok!',
				description:
					've daha sonra bu sayfaya geri döndüğünüzde sözleşme yapabilirsiniz!',
				link: 'Birkaç kutu açın',
			},
			reel: {
				heading: 'Sözleşmeler',
				delete: 'Sözleşmeden kaldır',
				contract: 'Sözleşme oluştur',
				count: '{count} öğe{suffix}  | ',
				informer: {
					heading: 'değerinde eşya alınız',
					from: '’den',
					to: '’e kadar',
				},
				add: 'En az 3 eşya ekleyiniz',
			},
			skins: {
				heading: 'Sözleşme için uygun eşyalar',
				add: 'Sözleşmeye ekle',
			},
			win: {
				again: 'Tekrar deneyin',
				sell: 'Satış fiyatı',
			},
		},
		SKIN: {
			labels: {
				quality: 'Kalite',
				regular: 'Normal',
			},
			cases: {
				heading: 'Bu öğenin olduğu durumlar',
			},
			similar: {
				heading: 'Benzer ürünler',
			},
		},
		USER: {
			info: {
				balance: 'Doldurmak',
				logout: 'Çıkış',
			},
			trade: {
				link: 'Alışveriş linki',
				find: 'Nereden temin edebilirim?',
				scammer: 'Dolandırıcılara karşı dikkatli olun',
				info: 'Dikkat! Steam den asla arkadaş olarak ekleme yapmıyoruz ve ürünleri iki kat fiyatla bize vermenizi talep etmiyoruz / herhangi bir linkten geçmenizi istemiyoruz vb. Uyanık Durun!',
				save: 'Kaydet',
			},
			wins: {
				heading: 'Eşyalar',
				sell: 'Hepsini sat',
				filters: {
					all: 'Tüm eşyalar',
					available: 'Mevcut',
					sold: 'Verkauft',
					contracted: 'Sözleşmeler',
					requested: 'Talep edildi',
					received: 'Zurückgezogen',
				},
				messages: {
					sell: 'Satmak',
					request: "Market'ten talep etmek",
					sold: 'Verkauft',
					contracted: 'Wird im Vertrag verwendet',
					requested: "Market'ten talep edildi",
					received: 'Zurückgezogen',
				},
				alert: {
					question: 'Tüm eşyaları satmak istediğinizden emin misiniz?',
					accept: 'Evet',
					cancel: 'İptal',
				},
			},
		},
		NOT_FOUND: {
			heading: 'Aman, herşey duman içinde!',
			description: 'Sayfa bulunamadı',
			button: 'ana sayfaya',
		},
	},
}
