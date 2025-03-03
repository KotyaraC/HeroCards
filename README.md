Архітектура застосунку

Застосунок HeroCards побудований на React Native з використанням компонентного підходу та розподілення коду на логічні модулі:

/components/ – містить повторно використовувані UI-компоненти (HeroCard, LoadingIndicator, ErrorMessage).

/screens/ – основні екрани застосунку (HomeScreen, HeroDetailScreen).

/navigation/ – логіка навігації (AppNavigator), реалізована через React Navigation.

/services/ – модуль для виконання API-запитів до OpenDota API.

/context/ – управління глобальним станом через React Context API.

/utils/ – допоміжні функції для фільтрації, сортування тощо.



Використані бібліотеки

React Native – основний фреймворк для розробки мобільного застосунку.

React Navigation – використовується для навігації між екранами.

Context API – для управління станом списку героїв.

NativeWind (Tailwind CSS for React Native) – для спрощення написання стилів.

OpenDota API – джерело даних про героїв.



Можливі напрями подальшого розвитку

Кешування та офлайн-режим – збереження даних локально за допомогою AsyncStorage.

Динамічне завантаження зображень – оптимізація відображення картинок через кешування.

Додавання додаткових фільтрів – покращення пошуку за атрибутами та ролями героїв.

Інтеграція з Firebase – авторизація користувачів, збереження налаштувань.

Темна/світла тема – реалізація перемикання теми.
