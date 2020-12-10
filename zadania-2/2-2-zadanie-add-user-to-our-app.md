# Zadanie #2-2
### a) Faktyczne logowanie użytkownika - Statefull Service
Nasz serwis udostępniający informacje na temat użytkownika, powinien pozwalać na:
- jego zalogowanie.
- przechowywać aktualny token dostępu
- determinować czy jest zalogowany czy nie

Wtedy mamy faktyczny stan danych na temat użytkownika w jednym miejscu

### b) zabezpieczenie ścieżki `/user`
Wykonaj tzw. `AuthGuard` dla komponentu `user-page` wykorzystując w tablicy routingu: `canActivate`. Na ten moment możemy zwracać strumień z jednym elementem `of(true)`. Docelowo będziemy korzystać z Serwisu udostępniającego informacje na temat użytkownika.

### c) Poprawki w `main-menu`
W menu głównym button "Zaloguj" powinien być widoczny jedynie wtedy, kiedy użytkownik nie jest zalogowany. Jeśli jest zalogowany powinien widzieć button: "Użytkownik" 

### d) Używając schematics wygeneruj `auth` interceptor 
Powinien on korzystać z Serwisu autoryzacyjnego - aby odczytywać `token` i dodawać go do `authorization` header dla każdego zapytania HTTP.


