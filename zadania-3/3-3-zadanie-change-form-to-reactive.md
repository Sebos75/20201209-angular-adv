# Zadanie #3-3
### a) Reactive driven !
Formularze w Angular, są bardziej elastyczne jeśli mamy możliwość zaimplementowania ich za pomocą: `ReactiveFormsModule`

- zauważ, że moduł ten jest już zaimportowany w `SharedModule`

Naszym zadaniem będzie przerobienie `Template-Driven` na `Reactive-Driven` form.


### b) Dynamiczny formularz:
Załóżmy że chcemy dodawać nowe tagi, do naszych aukcji.
Każdy z nich dopisujemy dynamicznie

- Potrzebny kod HTML do dodawania nowych tagów:
```html
<div>
  <button class="btn btn-outline-secondary" (click)="handleAddTag()" type="button">Dodaj tag</button>
</div>
<div class="form-group">
  <div class="input-group mb-3">
    <div class="input-group-prepend">
      <span class="input-group-text">
        <fa-icon icon="tag"></fa-icon>
      </span>
    </div>
    <input type="text" class="form-control"/>
  </div>
</div>
```


