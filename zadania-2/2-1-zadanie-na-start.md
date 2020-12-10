> INTRO:  
> A więc... stało się, to co zawsze. 🤦‍♂️  
> Ku zaskoczeniu wszystkich: _Klient zmienił wymagania !_  
> ...  
> Okazuje się, że tylko autoryzowany użytkownik może dodawać aukcje!  
> Musimy wprowadzić obsługę użytkowników

# Zadanie na start #2-1

Wykorzystując w pełni wiedzę z wczoraj. Zastanów się i podejmij samodzielne decyzje o przygotowaniu sposobu logowania użytkownika. Wiedząc, że potrzebne będą nam 2 strony (które już są dla Ciebie przygotowane): 

- Logowanie
- Użytkownik

### a) obsługa w `main-menu`
Trzeba dodać buttony, tuż za `</a>` z Koszyk:
```html
<a class="btn btn-secondary ml-2" routerLink="/login">
  <fa-icon icon="sign-in-alt"></fa-icon> Zaloguj
</a>
<a class="btn btn-success ml-2" routerLink="/user">
  <fa-icon icon="user"></fa-icon> Użytkownik
</a>
```

### b) Wstaw komponenty stron + routing:
- [login-page](./2-1-zadanie-materialy/login-page)
- [user-page](./2-1-zadanie-materialy/user-page)
- Potrzebne są dodatkowe ikony (FontAwesome):
```
faEnvelope, faSignInAlt, faKey
```
- Trzeba zaimportować odpowiedni moduł obsługi formularzy
```javascript
import { ReactiveFormsModule } from '@angular/forms';
```

### c) Informacje na temat User'a.
Zastanów się gdzie i jak powinniśmy trzymać informacje na temat Usera. Zwłaszcza o jego zalogowaniu i danych. Wnioski, przy projektowaniu, możesz wyciągnąć patrząc również na to jak działa _authorisation back-end_ poniżej.

---

### d) Instalacja autoryzacyjnego serwera back-end'owego:
Serwer autoryzacyjny będzie wystawiony na innym adresie niż dotychczasowy serwer z danymi o aukcjach.  

Na początek zainstaluj zależności:
```
npm i -D express body-parser jsonwebtoken cors
```
- Przekopiuj folder [auth-backend](2-1-zadanie-materialy/auth-backend) na szczyt katalogu głównego (auction-portal/auth-backend)

- Wtedy dodaj skrypt do [package.json](../package.json):
```
"auth-backend":"node auth-backend/server.js"
```

- uruchom serwer z komendy:
```
npm run auth-backend
```

Aby poprawnie się zalogować i otrzymać token:

- Wykonaj POST na adres: [http://localhost:5000/login](http://localhost:5000/login)
```json
{
  "email":"test",
  "password":"432!"
}
```
- Otrzymasz zwrot w postaci, np.:
```json
{
    "name": "John",
    "lastName": "Doe",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSm9obiIsImxhc3ROYW1lIjoiRG9lIiwiaWF0IjoxNjA3NTQxOTcxLCJleHAiOjE2MDc1NDIyNzF9.jN4ht5FM5UuZLyIaSnJniq3zsRhdO0eGziVUUFrkp8U"
}
```
- Jeśli wyślesz prawidłowe zapytanie GET na adres: [http://localhost:5000/user](http://localhost:5000/user) razem z tokenem jako `authorization` Header.
- Otrzymasz odpowiedź:
```json
{
    "name": "John",
    "lastName": "Doe",
    "iat": 1607542205,
    "exp": 1607542505
}
```
