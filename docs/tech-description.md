# Features
--------

Все UI компоненты должны быть адаптивными, т.е. подстраиватсья под размер экрана настольного или мобильного браузера. 

* **footer** (подвал)
    Отображает навигационные элементы, общую информацию, карту

* **topnav** (навиация)
    Верхняя навигационная панель. Отображает главные места, куда пользователь может перейти. При скроле вниз должна плавно масштабироваться и менять визуальное оформление.

* **showcase** (витрина)
    По сути, карусель из картинок. Администратор может загружать новые, дизейблить картинки и менять их порядок. Блоки с картинками могут содержать кликабельный материал, либо быть целиком кликабельными.

* **events** (события, акции)
    В данном блоке должа быть предусмотрена возможность для описания действующих акций или календаря событий (ананосов)

* **Instagram поток**
    Должен подтягивать данные с инстаграмм аккаунта, либо по хештегу. На главной странице фотки должны отображаться как сетка (таблица) 4х2, например, но должна быть динамическая подгрузка, или переход на страницу, где есть больше фоток.

* **Insta comments**
    Иногда клиенты отставляют отзывы о работе бренда в Инстаграмме или ВК. Требуется создать можуль в который можно помещать некоторые из таких комментов и перейти к ссылке на оригинал по требованию.

* **Календарь**
    Бизнес-кейс -- клиентке требуется сделать прическу и макияж. Соответветстенно, клиенту требоуется записаться на данное мероприятие, или как минимум увидеть доступные временные слоты и позвонив, занять один из них.

* **shop**
    Возможно достаточено сложный модуль, и будет состоять из под-компонент. На главной странице магазина должен быть грид с моделями и счетчиком наличия. Также должна быть  функции заказа и покупки изделия не будет, однако это очень скоро.

* **login**
    Как минимум должен быть возможен логин для администратора. Возможно будет требоваться логин для пользователей (например для покупки, или написания коммента, или записи на примерку или макияж). Тогда может потребоваться аутентификация через OAuth.

* **lang**
    Сайт должен поддерживать много языковой интерфейс. Как минимум русский и английский. При этом смена языка не должна приводить к переходу на главную страницу, а пользовательский контекст должен сохраняться. Перегрузка страницы допускается.

# REST API
--------

## Collections

**GET /collections**
Возвращает данные о коллекциях 

**GET /collection/{collection_id}**
Возвращает данные о коллекции с номером collection_id

**GET /collection/{collection_id}/items**
Возвращает все модели для данной коллекции


## Comments

**GET /comments**
Возвращает комменты из модуля _Insta comments_

**POST /comments**
Добавляет коммент в модуль _Insta comments_
