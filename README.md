Приложение создано с помощью Expo

Сначала нужно установить зависимости - yarn или npm install
Запуск приложения через expo start

Сервис https://snack.expo.dev не устанавливает некоторые зависимости, поэтому через него не получится запустить демо проекта. 
Я запускал локально с пк и в приложении на IOS Expo go тестировал

Касаемо приложения. Действовал согласно ТЗ, заменив вид данных. 
Вместо JSON файла с видами категорий ТС сделал сортировку по цвету.
Причиной этого послужило имеющееся у меня API т/с вместе с их геолокацией.
Вручную составлять json файл не стал, так как тратит время а логика реализации никак не меняется. И как правило приходится работать либо с имеющимися локальными JSON, либо с полученными через отправку запросов.
Номер WhatsApp и на кнопке Позвонить мой.

Как стейт менеджер использовал redux.
Api запросы - redux saga + axios

Api карт реализовать не получилось, так как Google api платный, а официального Yandex Api под react native как я понял нет.
Есть только https://github.com/volga-volga/react-native-yamap - но на этапе инициализации ключа пояявлялась ошибка по библиотеке, которую решить у меня не получилось.
Приложение написал за 1 день, остальное время пытался интегрировать метки на карту.

react-native-maps тоже подвязываются к google Api, поэтому получилось только отобразить карту.

На reactJs с этим никаких проблем не испытывал, есть рабочие приложения, на которых есть отображение на карте.

По функционалу работает также изменение языка. Работает исправно. 
