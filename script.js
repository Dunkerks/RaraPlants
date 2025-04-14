﻿const plants = [
  
 {
    id: 9,
    title: "Баранець звичайний (Huperzia_selago)",
    category: "kvitky",
    image: "images/Huperzia.jpg",
    description: "Багаторічна вічнозелена трав’яниста рослина. Заввишки до 20 см. Стебло висхідне,вилчасто розгалужене. Формує більш-менш щільні куртини. Листки дрібні, густо вкривають стебло. У піхвах листочків наверху пагонів розташовані одиничні жовтого кольору спорангії. На верхівках пагонів на кінчиках листочків іноді утворюються трикутні плескаті вивідкові бруньки. Спори остаточно формуються у серпні-вересні, але спорангії розкриваються часто лише навесні наступного року. Рослина розмножується спорами та вегетативно. Зростає у хвойних та мішаних лісах. Вид занесено до Червоної книги України. Загрози: порушення умов місцезростання, лісові пожежі.Рекомендації по охороні: охороняти всі відомі рослини.."
  }, {
    id: 10,
    title: "Діфазіаструм сплюснутий ( Diphasiastrum complanatum)",
    category: "kvitky",
    image: "images/Diphasiastrum.jpg",
    description: "Зелени́ця сплю́щена (Diphasiastrum complanatum, Lycopodium complanatum (L.) Holub) — багаторічна трав'яниста рослина заввишки до 40 см з родини плаунових. Має циркумполярне, субарктичне та альпійське поширення по всій Північній півкулі. Рідкісний вид, занесений до Червоної книги України. Лікарська, декоративна, технічна рослина."
  }, {
    id: 11,
    title: "Страусове перо звичайне  (Matteuccia struthiopteris або Onoclea struthiopteris)",
    category: "kvitky",
    image: "images/Matteuccia.jpg",
    description: "Багаторічна  трав’яниста  рослина  заввишки  60-130  см  із  вельми  довгим  кореневищем. Спорангії формуються на окремих більш коротких бурих листках-вайях, що скупчені всере- дині розетки із зелених вай. Спори дозрівають в серпні-вересні. Зростає у сирих заплавних лісах, по днищах ярів. Декоративна рослина, легко розмножується вегетативно. Охороняється на обласному рівні.Загрози: зміна місць зростання, вирубування лісів.рекомендації по охороні: збереження в місцях зростання, реінтродукція. охороняється  у  Гетьманському  НПП,  НПП  «Деснянсько-Старогутський»,  заказниках «Банний яр», «Битицький», «Ворожбянський», «Лунарієвий», «Середньосеймський."
  }, {
    id: 12,
    title: "Гронянка багатороздільна ( Botrychium multifidum)",
    category: "kvitky",
    image: "images/Botrychium.jpg",
    description: "Гронянка багатороздільна (Botrychium multifidum — багаторічна трав'яниста рослина родини вужачкові Вид занесено до Червоної книги україни, європейського Червоного списку та включено до резолюції №6 бернської конвенції. Загрози: порушення умов місцезростань, вирубки лісу. Рекомендації по охороні: збереження умов місцезростань, світлих дубових лісів, обме- ження використання інтродуцентів при створенні лісових культур. Охороняється у ПЗ «Михайлівська цілина», НПП «Деснянсько-Старогутський», заказнику «Верхньоесманський»."
  },  {
    id: 14,
    title: "Цибуля ведмежа (Allium ursinum)",
    category: "kvitky",
    image: "images/Allium.jpg",
    description: "Зростає на багатих вологих грунтах у широколистяних лісах, по днищах ярів та балок, у за- плавах річок, біля боліт. В сприятливих умовах домінує у складі синузії весняних ефемероїдів. Має алелопатичні властивості. Харчова та вітамінна рослина. Вид занесено до Червоної книги україни. Загрози: зміна умов місцезростань, вирубування лісів, надмірна заготівля. Рекомендації по охороні: збереження в місцях зростання та реінтродукція. Охороняється   у   заказниках   «Банний   яр»,   «Лунарієвий»,   «Монастирський   ліс»   та РЛП «Сеймський»."
  }, {
    id: 15,
    title: "Осока піхвиста (Carex vaginata)",
    category: "kvitky",
    image: "images/Carex.jpg",
    description: "Багаторічна трав’яниста рослина з довгим підземним кореневищем. Заввишки 30-50 см. Листки пласкі, світло-зелені. Нижні лускоподібні листки бурі, розпадаються на волокна. Рилець 3. Суцвіття висотою 10-20 см складається з 3-4 колосків, верхній з яких чоловічий. Жіночі колоски – 2,5 см завдовшки, рідкоквіткові на довгих ніжках. Плід – голий яйцеподібний мішечок, зеленкувато-жовтий із коротким зігнутим двозубчасто-вищербленим носиком. Цвіте у травні-червні. Квіти запилюються вітром. Самопідтримання популяцій відбувається вегетативно та насінням.Вид занесено до Червоної книги України.Загрози: порушення умов місцезростань, особливо при суцільних рубках лісів.Рекомендації по охороні: збереження в місцях зростання. Охороняється у НПП «Деснянсько-Старогутський»."
  }, {
    id: 16,
    title: "Проліска дволиста (Scilla bifolia)",
    category: "kvitky",
    image: "images/Scilla.jpg",
    description: "Багаторічна трав’яниста рослина з еліптично-шароподібною цибулиною в діаметрі близько 2 см. Заввишки 10-20 см. Стебло прямостояче, тонке, після утворення плодів рослина полягає. Листків два, широколінійні, з «ковпачком» на верхівці. У китиці може бути від 2 до 12 квітів, які запилюються комахами. Плід – трьохгніздна коробочка з світло-коричневим насінням. Цвіте з другої половини квітня до початку травня. Плоди дозрівають за 3-4 тижні. Насіння поширюється мурахами. Самопідтримання популяцій відбувається за допомогою насіння.Зростає у широколистяних лісах.Охороняється на обласному рівні. Загрози: вирубування лісів, збирання в букети. Рекомендації по охороні: створення заповідних територій, збереження в місцях зростання, заборона збору рослин.Охорняється в заказнику «Борозенківський»."
  }, {
    id: 17,
    title: "Косарики тонкі (Gladiolus tenuis)",
    category: "kvitky",
    image: "images/Gladiolus.jpg",
    description: "Багаторічна  трав’яниста  рослина  з  підземною  яйцеподібною  бульбою.  Заввишки  30- 90  см.  Стебло  пряме,  голе,  не  розгалужене.  Листки  довгі,  лінійні.  Квіти  рожеві  чи  рожево-червоні, зібрані в однобічну 4-12 квіткову китицю. Плід – видовжена коробочка. Цвіте у  травні-червні.  Плоди  дозрівають  у  серпні.  Насіння  поширюється  водою  та  за  рахунок полягання  високого  стебла.  Популяції  самовідновлюються  за  допомогою  вегетативного (бульбоцибулини) та статевого розмноження.Зростає на солонцюватих луках по заплавах річок та інших вологих місцях.Вид занесено до Червоної книги України.Загрози:  розорювання  лук,  надмірне  випасання,  збирання  рослин  та  викопування бульбоцибулин.Рекомендації по охороні: викошування трави у пізні сроки.Охороняється в ПЗ «Михайлівська цілина», Гетьманському НПП, заказниках «Миропільський», та РЛП Сеймський»."
  }, {
    id: 18,
    title: "Півники угорські (Iris hungarica)",
    category: "kvitky",
    image: "images/Iris.jpg",
    description: "Багаторічна трав’яниста рослина з коротким кореневищем завтовшки до 2 см. Заввишки 30-50 см. Генеративні пагони малоквіткові, біля їх основи 2-3 серпоподібно-мечолисті листки до 20-30 см завдовшки. Квітконосні стебла перевищують довжину листків. Квіти на коротких квітконіжках з синьо-фіолетовими пелюстками. Плід – коробочка. Цвіте у травні – на початку червня. Плоди дозрівають у липні-серпні. Самопідтримання популяцій за рахунок вегетативного та насіннєвого розмноження.Зростає у світлих дубових лісах, на узліссях та лісових галявинах.Вид занесено до Червоної книги України та охороняється резолюцією №6 бернської конвенції.Загрози: зміна умов місцезростань, створення лісових культур хвойних на місці вирубаних широколистяних лісів.Рекомендації по охороні: створення заповідних територій.Охороняється  у  заказниках  «Верхньо- есманський», «Вовківці» та РЛП «Сеймський».."
  }, {
    id: 19,
    title: "Лілія лісова (Lilium martagon)",
    category: "kvitky",
    image: "images/Lilium.jpg",
    description: "Багаторічна трав’яниста рослина, заввишки 60-150 см. Листя на стеблі зібране в декілька кілець. Квіти великі темно-пурпурові у кількості від 2 до 7-8 у китицеподібному суцвітті, пониклі. Плід – обернено-яйцеподібна коробочка з насінням неправильнотрикутної форми. Цвіте у червні-липні. Плоди дозрівають у серпні-вересні. Квіти здатні до самозапилення. Насіння поширюється тваринами. Самопідтримання популяцій здійснюється насінням та вегетативно.Зростає  у  світлих  дібровах,  на  узліссях,  по  березняках,  трапляється  у  старих  лісових культурах сосни на місці широколистяних лісів.Вид занесено до Червоної книги України.Загрози: вирубка широколистяних лісів і створення насаджень хвойних, збір рослин і викопування цибулин.Рекомендації по охороні: збереження світлих дубових лісів, а також створення охоронних зон у відомих місцезростаннях.Охороняється у багатьох заказниках."
  }, {
    id: 20,
    title: "Тюльпан дібровний (Tulipa quercetorum)",
    category: "kvitky",
    image: "images/Tulipa.jpg",
    description: "Багаторічна  трав’яниста  рослина.  Заввишки  30-50  см.  Листки  лінійні,  на  верхівці  тупуваті, направлені косо вгору, завдовшки 10-25 см. Квіти великі (завдовшки до 3-3,5 см) яскраво  жовті,  іноді  рожевуваті  або  білі.  Плід  –  видовжена  коробочка  до  2,5  см  завдовшки. Цибулини зі світло-бурими зовнішніми лусками. Цвіте у травні, плодоносить у червні.  Самовідновлення  популяцій  відбувається  за  рахунок  насіннєвого  та  вегетативного розмноження.Зростає у широколистяних лісах зазвичай на верхніх частинах схилів південної експозиції. Декоративна рослина.Вид занесено до Червоної книги України.Загрози:  збирання  рослин,  викопування цибулин, суцільні вирубки лісів.Рекомендації по охороні: створення в місцях зростання природоохоронних територій. На територіях природно-заповідного фонду не виявлено."
  }, {
    id: 22,
    title: "Гніздівка звичайна (Orchidaceae)",
    category: "kvitky",
    image: "images/Orchidaceae.jpg",
    description: "Багаторічна трав’яниста рослина заввишки 15-35 см. Назву рослина отримала через загальний вигляд підземних запасаючих органів у формі пташиного гнізда із короткими вузенькими відгалуженнями. Стебло безлисте, прямостояче не розгалужене. Рослина позбавлена хлорофілу, через що має жовтуватий колір. Вступає у симбіоз з грибами, за рахунок чого отримує всі необхідні поживні речовини. Жовтуваті квіти в густому колосоподібному суцвіттімають медовий аромат і активно запилюються комахами. Цвіте у червні-липні. Плоди – коробочки з численним пилоподібним насінням, що дозрівають у серпні-вересні. Насіння поширюється вітром. Відновлення популяцій вегетативно та насінням.Вид занесено до Червоної книги України.Загрози: порушення умов місцезростання, зривання рослин.Рекомендації по охороні: не допускати надмірне рекреаційне навантаження у лісах.Охороняється на обласному рівні."
  }, {
    id: 23,
    title: "Любки дволиста (Platanthera bifolia)",
    category: "kvitky",
    image: "images/Platanthera.jpg",
    description: "Багаторічна бульбокоренева трав’янисті рослина. Заввишки 30-70 см. Стебло прямостояче, не розгалужене. Два великі овально-яйцеподібні листки знаходяться біля стебла.У любки дволистої вони зазвичай вужчі. Квіти білі, до 3-4 см завдовжки . У любки зеленоквіткової розширений кінчик шпорця і пиляки розташовані під кутом один до одного. Квіти л. дволистої мають більш сильний запах.Запилюються нічними метеликами: совками та бражниками. Цвіте у червні – липні. Плоди: видовжені коробочки, що дозрівають у серпні–вересні. Насіння поширюється вітром.Зростають у широколистяних та мішаних лісах, по узліссях.Вид занесено до Червоної книги України.Загрози: порушення умов місцезростань, заготівля рослин.Рекомендації по охороні: обмеження щодо створення монодомінантних лісових культур хвойних порід, збереження світлих дубових лісів.Охороняється на обласному рівні."
  }, {
    id: 24,
    title: "Маточник болотний (Angelica palustris)",
    category: "kvitky",
    image: "images/Angelica.jpg",
    description: "Багаторічна трав’яниста рослина. Заввишки 50-120 см. Стебло порожнисте, розгалужене,гранчасто-борозенчасте. Листки в прикореневій розетці великі (до 30-50 см завдовшки), довгочерешкові, в обрисі широкотрикутні з колінчасто відігнутою листковою пластинкою, двічі-тричі перисто-розсіченою. Стеблові листки поступово до верхівки зменшуються в розмірах,донизу відхилені. Квіти зібрані у складний зонтик 5-7 см в діаметрі на верхівці основного стебла та гілок, запилюються комахами. Пелюстки білі довжиною 1-1,5 мм. Цвіте у липні – серпні.Плоди овально видовжені завдовжки 3-4 мм, по краю з крилом близько 1 мм, дозрівають у серпні – жовтні. Поширюються за допомогою вітру та води.Зростає по низинних болотах, у заплавах річок, на сирих луках.Вид включено до Резолюції №6 Бернської конвенції.Загрози: осушення боліт, заліснення та розорювання лук, надмірний випас худоби."
  }, {
    id: 25,
    title: "Волошка сумська (Psephellus sumensis)",
    category: "kvitky",
    image: "images/Psephellus.jpg",
    description: "Багаторічна трав’яниста рослина. На кореневищі,окрім простертих та висхідних біля верхівки квітконосних стебел, рослина формує ще кілька вкорочених надземних пагонів з пучком листків. Квітконосні стебла мало розгалужені, густо вкриті волосками і тому білуваті. Прикореневі листки сизуваті, перистороздільні та цілісні.Кошики поодинокі на кінцях висхідних гілок. Обгортка кошиків яйцеподібна до 2 см у діаметрі. Квіти воронкоподібні світло-пурпурові. Цвіте у травні-червні. Плід – сім’янка, трохи сплюснута, з обох кінців звужена, має чубок 1-2 мм завдовжки. Поширюється за допомогою мурах.Зростає на галявинах. Індикатор свіжих борів і суборів.Медоносна, декоративна рослина, використовується у народній медицині.Охороняється на обласному рівні.Загрози: суцільні вирубки лісу, надмірний випас худоби та рекреаційне навантаження,зміна умов місцезростань."
  }, {
    id: 26,
    title: "Кринітарія волохата (Galatella villosa)",
    category: "kvitky",
    image: "images/Galatella.jpg",
    description: "Багаторічна трав’яниста рослина з товстим коротким кореневищем. Заввишки 30-40 см. Стебел багато, всі вони прямостоячі, вгорі розгалужені, у верхній частині шерстисто-повстисті та густо улистяні. Листки довгасто-ланцетні до 3 см завдовшки, цілокраї, коротко загострені або тупуваті, з обох боків шерстисто-повстисті. Кошики вузькоконічні до 10-20 мм завдовжки, зібрані у щитоподібні суцвіття. Всі квіти в кошиках трубчасті, жовті.Цвіте у липні-вересні. Плоди-сім’янки довгасті до 4 мм завдовшки, сплюснуті, ребристі з дворядним чубком.Зростає на остепнених схилах по ярах та балках.Охороняється на обласному рівні.Загрози: заліснення остепнених схилів, надмірний випас худоби.Рекомендації по охороні: виявлення нових місцезнаходжень, збереження умов місцезростань від заліснення, створення заповідних об’єктів."
  },{
    id: 27,
    title: "Оман високий (Inula helenium)",
    category: "kvitky",
    image: "images/Inula.jpg",
    description: "Багаторічна трав’яниста рослина з товстим підземним кореневищем. Заввишки 100-200 см.Стебло прямостояче, гілки спрямовані вгору, рослина має пірамідальну форму. Листки великі у прикореневій розетці, а по стеблу – видовжено-еліптичні. Кошики діаметром до 6-7 см зібрані у волотеподібне облистяне верхівкове суцвіття. Квіти запилюються комахами. Цвіте у липні-вересні. Плід – сім’янка. Плоди дозрівають у вересні-жовтні. Поширюється птахами.Зростає на заплавних заболочених луках, біля низинних боліт.Декоративна та лікарська рослина. Легко розмножується. Відвар коренів використовують як відхаркувальний засіб.Загрози: осушення боліт, заростання сирих лук лісом.Рекомендації по охороні: моніторинг популяцій та в разі необхідності обмеження збору рослин.Охороняється на обласному рівні."
  },{
    id: 28,
    title: "Юринея волошкова (Jurinea cyanoides)",
    category: "kvitky",
    image: "images/Jurinea.jpg",
    description: "Багаторічна трав’яниста рослина. Заввишки 20-80 см. Кореневище товсте, часто здерев’яніле.Стебло прямостояче, розгалужене, павутинисто опушене. Листки пірчастороздільні з продовгувато-ланцетними частками, краї загорнуті донизу. Квіти у кошиках, які розташовані на верхівках довгих майже безлистих пагонів. Віночок блідо-рожевий,пурпуровий. Цвіте у липні-вересні. Плід – оберненопірамідальна або овальна сім’янка з багаторядним чубчиком. Плоди дозрівають у серпні-вересні. Насіння поширюються за допомогою мурах та вітру. Квіти запилюються комахами.Зростає по узліссях сухих соснових лісів, на галявинах та пісках.Вид включено до Резолюції №6 Бернської конвенції.Загрози: заліснення борових пісків.Рекомендації по охороні: зберігати умови місцезростань, упередження лісових пожеж та надмірного випасу худоби, створення природно-аповідних об’єктів."
  },{
    id: 29,
    title: "Маруна щиткова (Pyrethrum corymbosum)",
    category: "kvitky",
    image: "images/Pyrethrum.jpg",
    description: "Багаторічна короткокореневищна трав’яниста рослина. Заввишки 30-120 см. Стебло одиничне, прямостояче, олистяне. Листки перистолопатеві. Суцвіття – кошик, діаметром до 2 см.Зовнішні квіти в кошиках язичкові, а внутрішні – трубчаті. Окремі кошики зібрані у щиткоподібне суцвіття, де їх налічується від 3 до 20. Цвіте у червні-липні. Плід – сім’янка, до 2 мм завдовшки. Квіти запилюються комахами.Зростає у світлих дубових лісах, на узліссях, у заростях степових чагарників. Індикатор свіжих сугрудів та грудів.Декоративна рослина, використовується у народній медицині та ветеринарії.Охороняється на обласному рівні.Загрози: суцільні вирубки світлих дубових лісів та створення культур хвойних на місці широколистяних лісів, заростання степових схилів лісом.Рекомендації по охороні: проводити моніторинг стану ізольованих популяцій та збереження світлих дубових лісів."
  }, {
    id: 30,
    title: "Дзвоники оленячі (Campanula cervicaria)",
    category: "kvitky",
    image: "images/Campanula.jpg",
    description: "розгалужене, опушене жорсткими волосками. Листки вузькі ланцетні. Квіти яскраво-сині діаметром 1-2 см, лійкоподібні, по краю війчасті, зібрані в густе суцвіття на верхівці стебла. Цвіте у червні-липні. Плід – коробочка з дрібним насінням. Квіти запилюютьсякомахами.Зростає у світлих дубових лісах, на узліссях.Охороняється на обласному рівні.Загрози: суцільні вирубки світлих дубових лісів та створення культур хвойних на місці широколистяних лісів.Рекомендації по охороні: проводити моніторинг стану ізольованих популяцій та зберігати світлі дубові ліси.Охороняється у заказнику «Шалигінський», у НПП «Деснянсько-Старогутський» було відо-мо одне місцезростання, яке на сьогоднішній день вже втрачено."
  }, {
    id: 31,
    title: "Гвоздика стиснуточашечна (Dianthus stenocalyx)",
    category: "kvitky",
    image: "images/Dianthus.jpg",
    description: "Багаторічна трав’яниста рослина. Заввишки 30-50 см. Стебло голе, висхідне, що полягає.Листки лінійні. Квіти діаметром 2-3 см з глибоко виїмчастими білими або рожевуватими пелюстками. Цвіте з червня по вересень. Плід – коробочка з численним дрібним насінням.Плоди дозрівають у серпні-жовтні. Квіти запилюються комахами.Зростає на сирих та помірно зволожених луках, у світлих дубових лісах. Охороняється на обласному рівні.Загрози: заростання лук чагарниками та лісом, вирубування світлих дубових лісів.Рекомендації по охороні: моніторинг популяцій, запобігання зміні умов місцезростань.Охороняється в Гетьманському НПП, заказнику «Куликівський» та РЛП «Сеймський».."
  }, {
    id: 32,
    title: "Молодило пагононосне (Jovibarba globifera)",
    category: "kvitky",
    image: "images/Jovibarba.jpg",
    description: "Багаторічна трав’яниста рослина, листовий сукулент. Квітконосне стебло заввишки 20-40 см.Прикореневі листки голі формують щільні розетки діаметром до 8-15 см. У піхвах листків формуються тоненькі столони, на яких розвиваються кулеподібні бруньки-розетки, що скоро відділяються від материнської розетки і слугують органами вегетативного розмноження. Квіти зібрані у суцвіття у вигляді кількох завитків на товстому стеблі. Цвіте у червні-серпні. Пелюстки зеленувато-жовтого забарвлення. Плід – листянка, що дозріває у серпні-вересні. Самовідновлення популяцій відбувається за рахунок вегетативного розмноження (бруньки-розетки),рідко – насінням.Зростає у розріджених соснових лісах на пісках.Культивується на кладовищах у багатьох поліських селах.Вид занесено до Червоної книги України.Загрози: надмірний випас худоби, рекреаційне навантаження."
  }, {
    id: 33,
    title: "Росичка круглолиста (Drosera rotundifolia)",
    category: "kvitky",
    image: "images/Drosera.jpg",
    description: "Багаторічна розеткова трав’яниста рослина. Листки круглі до 2-3 см завбільшки на довгих черешках, м’ясисті із залозками, на яких добре помітні крапельки рідини. Квітконосне стебло з рідким суцвіттям до 25-30 см заввишки з дрібними білими квітами. Цвіте у червні-серпні.Плід – гладенька яйцеподібна коробочка з дрібним насінням, що дозріває у серпні- жовтні.Зростає на сфагнових болотах.Лікарська рослина, раніше використовувалася для отримання фарби.Охороняється на обласному рівні.Загрози: осушення боліт, зміна гідроло-гічного режиму, пожежі.Рекомендації по охороні: збереження умов місцезростань та їх гідрологічного режиму, створення заповідних територій.Охороняється в пам’ятці природи «Озеро Журавлине»."
  },
 {
    id: 34,
    title: "Астрагал шерстистоквітковий (Astragalus dasyanthus)",
    category: "kvitky",
    image: "images/Astragalus.jpg",  description: "Багаторічна, густо опушена трав’яниста рослина. Стебло висхідне, заввишки 10-40 см.Листки непарнопірчасті з 21-37 довгасто-яйцеподібних листочків. Квітки яскраво-жовті, зібрані в щільні головчасті суцвіття. Квітконоси не перевищують листки. Квіти запилюються комахами. Цвіте у червні-серпні. Плід – біб до 1 см завдовшки, волохатий, яйцеподібний. Плоди дозрівають у липні-серпні. Відтворення популяцій насіннєве.Зростає на верхніх частинах схилів південної та південно-західної експозиції, зайнятих остепненими луками.Вид занесено до Червоної книги України.Загрози: розорювання степів, заліснення схилів, заготівля рослини як лікарської сировини.Рекомендації по охороні: заборона розорювання, терасування ділянок, надмірний випас худоби, заготівля рослини в якості лікарської сировини.Охороняється в багатьох заказниках."
  }, {
    id: 35,
    title: "Дрік германський (Genista germanica)",
    category: "kvitky",
    image: "images/Genista.jpg",
    description: "Кущик із зимуючими листками. Заввишки 25-70 см. Стебло прямостояче або висхідне, вкритекоротенькими розгалуженими безлистими колючими гілочками. Верхні гілочки здебільшого закінчуються гронами квіток. Листки ланцетно-еліптичні або широколанцетні до 2 см завдовшки з коротеньким вістрячком на верхівці та коротеньким черешком. Листки і молоді пагони м’яковолосисті. Суцвіття короткі, 2-8 см завдовжки, густі, віночок жовтий 6-10 мм завдовжки.Квіти запилюються комахами. Цвіте у червні. Біб видовжений, опушений, 10-12 мм завдовжки з коротким носиком з 2-5 насінинами. Насінини сплюснуто-яйцеподібні, коричнюваті.Розмножується насінням та вегетативно.Зростає у світлих дубових лісах, по узліссях дубово-соснових лісів.Охороняється на обласному рівні.Рекомендації по охороні: збереження світлих дубових лісів, моніторинг стану популяцій."
  },{
    id: 36,
    title: "Горошок гороховидний (Vicia pisiformis)",
    category: "kvitky",
    image: "images/Vicia.jpg",
    description: "Багаторічна трав’яниста рослина. Стебло чіпке, завдовжки до 2 м, розгалужене, гранчасте. Прилистки великі, напівстрілоподібні, зубчасті. Листки закінчуються розгалуженим вусиком, мають 6-10 пар бічних яйцеподібних тупих листочків, завдовшки до 4 см. Квітконоси не перевищують листків, грона не густі, 10-15 квіткові. Квіти звислі, 15-18 мм завдовжки, білувато-жовті. Зубці чашечки лінійні, неоднакові за формою, коротші за трубку чашечки. Цвіте у червні-липні. Боби довгасті або довгасто-лінійні, 3-3,5 см завдовжки, стиснуті з боків, бурі у стиглому стані. Насінини кулясті, рубчик охоплює ½ насінини. Квіти запилюються комахами.Плоди дозрівають у липні-серпні.Зростає у світлих дубових лісах, на узліссях.Охороняється на обласному рівні.Загрози: зміна умов місцезростані, заміна широколистяних лісів культурами хвойних порід."
  }, {
    id: 37,
    title: "Ряст проміжний (Corydalis intermedia)",
    category: "kvitky",
    image: "images/Corydalis.jpg",
    description: "Багаторічна трав’яниста бульбокоренева рослина. Заввишки 5-20 см. Стебло простерте,часто ще з однією гілочкою з піхви лускоподібного листка. Листків по два на кожній гілочці,сизуваті в обрисі широкояйцеподібні розсічені на овальні сегменти. Суцвіття малоквіткове,щільне, майже головчасте, поникле. Приквітки еліптичні, цілокраї, тупуваті. Квіти світлопурпурові 15-17 мм завдовшки. Цвіте у квітні-травні. Плід – довгастоланцетна коробочка. Квіти запилюються джмелями та іншими комахами. Плоди дозрівають наприкінці квітня – на початку травня. Насіння поширюється за допомогою мурах.Зростає у помірно вологих широколистяних та дрібнолистяних лісах. Іноді виступає домінантом у складі синузії весняних ефемероїдів.Охороняється на обласному рівні.Загрози: вирубування лісів, створення хвойних насаджень на місці широколистяних лісів."
  }, {
    id: 38,
    title: "Тирлич хрещатий (Gentiana cruciata)",
    category: "kvitky",
    image: "images/Gentiana.jpg",
    description: "Багаторічна трав’яниста рослина. Заввишки 20-60 см. Стебло висхідне, нерозгалужене.Листки у прикореневій розетці та на стеблі, супротивні, продовгувато-ланцетні, майже шкірясті. Квіти одиничні або в пучках у піхвах листків, 4-х членні, синьо-зелені, всередині голубі.Цвіте у липні–серпні. Плід – коробочка. Насіння дрібне, проростанню сприяє симбіоз з грибами. Сходи розвиваються повільно.Зростає на остепнених схилах.Отруйна, домашньою худобою не поїдається.Охороняється на обласному рівні.Загрози: заліснення степових схилів деревами та чагарниками.Рекомендації по охороні: створення заповідних територій з режимом, де дозволено випасання худоби або косовиця, моніторинг популяцій.Охороняється в заказнику «Боромлянський».."
  }, {
    id: 39,
    title: "Змієголовник  Рюйша (Dracocephalum ruyschiana)",
    category: "kvitky",
    image: "images/Dracocephalum.jpg",
    description: "Багаторічна трав’яниста рослина. Заввишки 20-65 см. Стебла численні, виростають із короткого кореневища. Листки ланцетні, ланцетно-лінійні голі. Квіти зібрані у мутовки по 6 у вигляді доволі щільного колосоподібного суцвіття, сині, рідше рожеві. Цвіте у травні-червні. Плоди – яйцеподібні чорні горішки, що дозрівають у серпні-вересні. Поновлюється насінням, рідше – вегетативно.Зростає у світлих дубових лісах.Декоративна рослина, медонос.Вид занесено до Червоної книги України та включено до Резолюції №6 Бернської конвенції.Загрози: зміна умов місцезростань, створення культур хвойних порід на місці світлих дібров.Рекомендації по охороні: збереження умов місцезростань, створення заповідних територій.Охороняється у ПЗ «Михайлівська цілина», РЛП «Сеймський» та заказнику «Верхньоесманський»."
  },{
    id: 40,
    title: "Льон жовтий (Linum flavum)",
    category: "kvitky",
    image: "images/Linum.jpg",
    description: "Багаторічна трав’яниста рослина з коротким здерев’янілим кореневищем. Заввишки 20-60 см. Стебло прямостояче, голе, вгорі вилчасто розгалужене, гострогранчасте. Листки довгастооберненояйцеподібні (нижні) та довгасто-ланцетні (верхні), до 2-5 см завдовшки.Квіти жовті до 3 см у діаметрі у малоулистяних густих завийках, зібраних у щиткоподібне або волотеве складне суцвіття. Цвіте у червні-липні. Плід – широкояйцеподібна або майже кругла коробочка. Насінини близько 8 мм завдовшки, довгасті, сплюснуті, гладенькі, коричневі. Розмножується насінням.Зростає на остепнених луках по виходах крейди.Охороняється на обласному рівні.Загрози: заліснення схилів, надмірний випас.Рекомендації по охороні: запобігати зміні умов місцезростань.Охороняється в пам’ятці природи «Дівоча гора», заказнику «Могрицький».."
  }, {
    id: 41,
    title: "Льон австрійський (Linum austriacum)",
    category: "kvitky",
    image: "images/Linuma.jpg",
    description: "Багаторічна трав’яниста рослина з розгалуженим дерев’янистим кореневищем. Заввишки 10-60 см. Стебло голе, слаборозгалужене, рясно облистяне. Листки «дрібні», лінійні або лінійно-ланцетні. Квіти у несиметричних вилчастоподібних суцвіттях, світло-голубі із білуватими жилками. Цвіте у травні–липні. Плід – 5- гніздна коробочка, що дозріває у серпні-вересні. Розмножується насінням.Зростає на остепнених схилах, здебільшого там, де крейда залягає близько до поверхні.Охороняється на обласному рівні.Загрози: заліснення остепнених схилів, добування крейди.Рекомендації по охороні: створення заповідних територій, моніторинг умов місцезростань.Охороняється у пам’ятці природи «Дівоча гора» та заказниках «Лисиця», «Могрицький».."
  }, {
    id: 42,
    title: "Плавун щитолистий (Nymphoides peltata)",
    category: "kvitky",
    image: "images/Nymphoides.jpg",
    description: "Багаторічна водна рослина. Кореневище довге, повзуче, на дні водойми. Довге стебло розгалужується біля поверхні води. Листки округло-серцеподібні на довгих черешках, скупчені,ледь здіймаються над поверхнею води. Квіти яскраво жовті діаметром близько 3 см, зібрані у зонтикоподібний пучок. Цвіте у червні-серпні. Плід – яйцеподібна коробочка, з плескатим,війчастим по краю, насінням еліптичної форми, що дозріває у серпні-жовтні. Насіння переноситься водою. Самопідтримання популяцій відбувається вегетативно та насінням.Зростає у слабопроточних та замкнутих водоймах.Рослина декоративна, кормова, має водоохоронне та берегозахисне значення.Вид занесено до Червоної книги України та включено до Резолюції №6 Бернської конвенції.Загрози: руйнування та забудова прибережних ділянок, штучне регулювання рівня води її забруднення."
  }, {
    id: 43,
    title: "Горицвіт весняний (Adonis vernalis)",
    category: "kvitky",
    image: "images/Adonis.jpg",
    description: "Багаторічна трав’яниста рослина. Заввишки 15-50 см. Стебла численні, висхідні або пря-мостоячі. Листки глибоко розсічені на лінійні долі. Квіти великі 2-6 см у діаметрі, яскраво жовтого кольору. Цвіте у квітні–на початку травня, запилюється різноманітними комахами.Плід – листянка, що дозріває у червні–на початку липня.Зростає по крутих схилах серед остепнених лук.Лікарська рослина, на основі якої виготовляються препарати для лікування хвороб серця,безсоння, епілепсії.Вид занесено до Червоної книги України.Загрози: розорювання степів, заліснення схилів, заготівля рослини як лікарської сировини.Рекомендації по охороні: заборона розорювання та терасування ділянок остепнених лук,надмірний випас худоби, заготівля рослини в якості лікарської сировини.Охороняється у ПЗ «Михайлівська цілина», пам’ятці природи «Дівоча гора», «Дубинський».."
  }, {
    id: 44,
    title: "Ломиніс прямий (Clematis recta)",
    category: "kvitky",
    image: "images/Clematis.jpg",
    description: Багаторічна трав’яниста рослина. Заввишки 60-150 см. Стебло висхідне або витке. Листки супротивні непарноперисті з 2-4 парами листочків. Квітки білі з чотирма пелюстками завдовшки до 1,5 см. Цвіте у червні–липні. Плоди – багатогорішок. Горішки зберігають пірчасто-волосисті стовпчики. Плоди дозрівають у липні–серпні. Квіти запилюються різноманітними комахами. Насіння поширюється тваринами (екзозоохорія) та вітром.Зростає у світлих лісах, по узліссях. Індикатор свіжих сугрудів та грудів.Медоносна, декоративна, отруйна рослина. Використовується у народній медицині.Охороняється на обласному рівні.Загрози: зміна умов місцезростань, створення культур хвойних порід на місці світлих дібров.   
  }, ];

const catalog = document.getElementById("catalog");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.getElementById("close");

function renderPlants(category = "all") {
  catalog.innerHTML = "";
  const filtered = category === "all" ? plants : plants.filter(p => p.category === category);
  filtered.forEach(plant => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${plant.image}" alt="${plant.title}" />
      <h3>${plant.title}</h3>
    `;
    card.addEventListener("click", () => showModal(plant));
    catalog.appendChild(card);
  });
}

function showModal(plant) {
  modalTitle.textContent = plant.title;
  modalImage.src = plant.image;
  modalImage.alt = plant.title;
  modalDescription.textContent = plant.description;
  modal.classList.remove("hidden");
}

closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
window.addEventListener("click", e => {
  if (e.target === modal) modal.classList.add("hidden");
});

document.querySelectorAll("nav button").forEach(btn => {
  btn.addEventListener("click", () => {
    renderPlants(btn.dataset.category);
  });
});

renderPlants();
