> INTRO:  
> Na tym etapie, chcemy przetestować działanie naszej aplikacji, warto dodać jakieś elementy w tablicy `auctions` dla komponentu `auctions-page`.  
> Sprawdzić, czy wszystko działa 😅  


# Zadanie #2
### a) Poprawki do `fa-icon`:
Ikony używane w module `advice` nie będą działały poprawnie dopóki nie zatroszczymy się o zaimportowanie odpowiedzialnego za nie modułu - przez inne moduły, których komponenty będą z nich(ikon) korzystać.  
Nanieś odpowiednie poprawki

### b) Ponowne wykorzystanie dyrektywy `apHighlight`
Dyrektywa [apHighlight](../src/app/highlight.directive.ts) ma z założenia działać również dla komponentów w module `auction` - na przykład w tytułach `auction-card`. Zastosuj ją i sprawdź czy działa poprawnie.

### c) Napotykamy na dziwny problem...
Kilka modułów, chce korzystać z podobnych zasobów, jednak moduły te nie mają ze sobą bezpośredniego powiązania w `imports`...

Jak go rozwiązać i dostarczyć działające `<fa-icon>` oraz `[apHighlight]` wszędzie tam gdzie potrzeba?

### d) Uporządkowanie ikon*
Czy masz pomysł na uporządkowanie ikon, tak aby posiadały swój własny, definiujący je i ich zależności (wraz z biblioteką tj.`faIconLibrary`) - moduł pomocniczy.

