# Zadanie #1
### a) Podział projektu na _"feature modules"_

W naszym początkowym projekcie jesteśmy w stanie wskazać 2 obszary, które nie są ze sobą bezpośrednio powiązane. Każdy z nich powinien mieszkać w swoim osobnym `module`. Zwróć uwagę, że można to "wykalkulować" na podstawie odnośników / linków — w `main-menu.component`.

- `auction` - rzeczy powiązane z `AuctionItem`: 
  - wyświetlanie Aukcji,
  - i Promocji
  - dodawanie nowej Aukcji
  - Koszyk
  
- `advice` - rzeczy powiązane z artykułami blogowymi
  - strona: "Podpowiadamy"
  
Zastanów się jakiego rodzaju moduły potrzebujesz (Zobacz możliwości z _Angular Schematics_).


### b) Przygotowanie odpowiednich _"entry components"_ + routing

Linki z menu powinny zacząć działać. Dlatego przygotuj komponenty, które będą odpowiedzialne za wyświetlanie stron:  

| Strona  | Komponent  |
|---|---|
| Aukcje | `auctions-page`  |
| Promocje | `promotions-page` |
| Podpowiadamy  | `advices-page` |
| Dodaj  | `add-auction-page` |
| Koszyk  | `cart-page`  |


Zastanów się, gdzie powinien znajdować się do nich routing i w jakich modułach powinny "mieszkać" poszczególne strony.

> Hint:  
> Zauważ, że strony te będą zarządzane przez router - co sprawia że to tzw. _Entry Components_.  
> Nie potrzebują one `selector`'a - w _Schematics_ jest dostępna taka opcja (flaga `--skipSelector` w CLI)

Dodaj odpowiedni routing wzorując się na danych z [main-menu](../src/app/main-menu/main-menu.component.ts)

### c) Dodaj do stron odpowiednie treści

Przygotowane jest już wyświetlanie strony "Aukcje":
```html
<section>
  <div class="my-3">
    <h2>Lista naszych aukcji </h2>
  </div>
  <div class="row">
      <div class="col-10 alert alert-info mx-auto" *ngIf="isLoading">
        <fa-icon [spin]="true" icon="sync"></fa-icon> Poczekaj na aukcje...
      </div>
      <div class="col-10 alert alert-danger mx-auto" *ngIf="auctionsLoadingError">
        {{ auctionsLoadingError }}
      </div>
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-2" *ngFor="let item of auctions">
        <ap-auction-card [auction]="item"></ap-auction-card>
      </div>
  </div>
</section>
```

Twoim zadaniem jest dodanie odpowiednich pól w logice do `auctions-page`.  
Wiedząc, że:
```typescript
{
  isLoading: boolean;
  auctionsLoadingError: string;
  auctions: AuctionItem[]
}
```

W pozostałych stronach `-page` zastosuj podobną konwencję ich tytułowania i otaczania `<section>` z HTML5. 
- przykład:
```html
<section>
  <div class="my-3">
    <h2>Promocje </h2>
  </div>
</section>
```
```html
<section>
  <div class="my-3">
    <h2>Podpowiadamy </h2>
  </div>
</section>
```
.... etc...

### d) Dodanie dumb-komponentu: `AuctionCardComponent` 

Przenieś komponent: [auction-card](./1-zadanie-materialy/auction-card/auction-card.component.ts) do odpowiedniego modułu tak, aby poprawnie zadziałał nam komponent `auctions-page`. Zrób to z myślą o tym, że wykorzystamy ten komponent na stronie `promotions-site`.  
Pamiętaj o jego zadeklarowaniu. 

### e) W tym układzie... -> przenieś model danych `AuctionItem`

Przenieś przygotowany wcześniej model danych [auction-item.ts](../src/app/auction-item.ts) do odpowiedniego modułu. Teraz można go logicznie powiązać z jednym z nich. 


---
Części a) - e) są wykonane poprawnie, jeśli wszystkie strony wyświetlają się bez błędów z tytułami i do każdej z nich można poprawnie przejść używając `main-menu.component`


