> INTRO:  
> Sposób ładowania się aukcji - nie do końca nam odpowiada...  
> Teraz każda ze stron musiałaby w jakiś sposób obsługiwać ten sam powtarzalny schemat  
> _loading -> error or success_  
> W każdej trzeba by było zadbać o użycie `async pipe` albo pamiętać o `.unsubscribe()`    
> Uprościć mogą nam to przygotowane re-używalne komponenty... ale może dałoby się inaczej?!

# Zadanie #5
### a) Używanie `resolvers`

Chcemy aby aplikacja łączyła się z back-endem jednak w inny sposób. Po kliknięciu na link, chcemy pobrać dane, a potem dopiero aktywować widok - kiedy wszystkie dane będą gotowe.

### b) Zachowanie _User Experience_

Trzeba wprowadzić jakąś obsługę błędów - może za pomocą "Toast" message? Chcemy zachować dotychczasowe informowanie użytkownika - jeśli coś poszło nie tak...

### c) Loading...

To też warto zostawić. Może globalny preloader?! U góry strony, teraz wiele stron w sieci ma takie coś.
