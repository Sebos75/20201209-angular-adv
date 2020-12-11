> INTRO:  
> A więc stało się... Demo już dzisiaj!😱  
> Brakuje nam obsługi koszyka!!!

# Zadanie na start #3-1

Wykorzystując wiedzę z wczoraj. Zaimplementuj podstawową obsługę dodawania elementów do koszyka. Zastanów się jak i gdzie powinna mieszkać. 
Przygotuj odpowiedni sposób działania. 

- klikam w ikonkę koszyka na karcie aukcji
- klikam w ikonkę koszyka na innej karcie aukcji
- otwieram koszyk = widzę na liście 2 aukcje

> UWAGA:  
> Póki co (żeby nie komplikować) robimy to "naiwnie" tj. 2x kliknięcie tej samej aukcji - pokazuje 2x aukcje na liście w koszyku

Tutaj kod do wyświetlania aukcji w koszyku w `card-page` komponent:
```html
<section>
  <div class="my-3">
    <h2>Koszyk </h2>
  </div>
  <div>
    <ul class="list-group">
      <ap-cart-item *ngFor="let item of []" [item]="item" ></ap-cart-item>
    </ul>
  </div>
</section>
```

Tutaj komponent `ap-cart-item`: [cart-item](3-1-zadanie-materialy/cart-item)


### Zadanie dodatkowe:

Przygotuj wyświetlanie ilość elementów w koszyku przy buttonie w menu głównym:  
O tutaj - przykładowo 4 elementy w koszyku:
```html
...
<a class="btn btn-secondary ml-2" routerLink="/shopping-cart">
  <fa-icon icon="shopping-basket"></fa-icon> Koszyk (4)
</a>
...
```
