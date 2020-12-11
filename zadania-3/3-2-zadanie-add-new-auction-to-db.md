# Zadanie #3-2
### a) Dodawanie nowej aukcji do bazy danych

- dodaj i reeksportuj: `FormsModule` w `SharedModule`
```javascript
import { FormsModule } from '@angular/forms';
```
- inaczej kod formularza nie będzie działał
- przeklej kod template + logikę do `add-auction-page` komponentu:
- z folderu: [./3-2-zadanie-materialy/podmien-add-auction-page](./3-2-zadanie-materialy/podmien-add-auction-page)


### b) Dodawanie nowej aukcji na serwer
Przygotuj odpowiedni kod aby możliwe było wysłanie aukcji na serwer:
```
POST na 'http://localhost:3000/auctions'
```
- wykorzystaj fakt, że sama aukcja jest już dla Ciebie przygotowana w `handleFormSubmit(...)` logiki `add-auction-page`:
```javascript

//.......

    const auction: AuctionItem = form.value as AuctionItem;
    auction.imgUrl = 'https://picsum.photos/id/' + auction.imgUrl + '/200/200';

    // Tutaj masz gotową złożoną aukcje jako `auction` !!!
```
