# Zadanie #2-4
### a) Działający koszyk
Na tym etapie zastanów się jak zaimplementować działanie koszyka. Wystaw odpowiednie metody.

- na razie skupmy się na naiwnej implementacji, każde kliknięcie w Aukcje powoduje dodanie elementu do koszyka
- aukcja kliknięta kilka razy - pojawi się kilka razy w koszyku


### b) Refactoring
Chcemy aby `auction-card` pozostało "Dumb Component'em" - bez wiedzy na temat koszyka. Dzięki temu pozostanie "doskonale re-używalny"
