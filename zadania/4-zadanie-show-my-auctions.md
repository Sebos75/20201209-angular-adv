# Zadanie #4
### a) połączenie z Back-endem.

Nasza drużyna przygotowała już 2 elementy:
- fake'owy serwer back-endowy uruchamiany komendą: `npm run backend`
- zmienne środowiskowe w plikach [environment.ts](../src/environments/environment.ts)

Twoim zadaniem jest przygotowanie połączenia z serwerem za pomocą `HttpClient`'a z `@angular/common/http`.  
Potrzebny jest nam zasób: [/auctions](http://localhost:3000/auctions)  

Zastanów się z którego miejsca i jak wykonać połączenie, co będzie nam potrzebne?

### b) Asynchronicznie uzupełniona tablica `auctions[]`

Zatroszcz się o odpowiednie załadowanie aukcji do `auctions-page`.
- pokazanie preloader'a w momencie ładowania
- pokazanie błędu - jeśli wystąpi
- pokazanie wszystkich aukcji
