# Zadanie #2-3
### a) Dokończenie strony "Podpowiadamy"

Dodaj poniższy kod do template komponentu `advices-page`

```html
<section>
  <div class="my-3">
    <h2>Podpowiadamy co wybrać !/h2>
  </div>
  <div class="row">
    <div class="col-12 col-sm-4">
      <ul class="list-group">
        <li class="list-group-item">
          <a routerLink="article/1"> Jak wybrać dobry komputer? </a>
        </li>
        <li class="list-group-item">
          <a routerLink="article/2"> Inny tytuł </a>
        </li>
        <li class="list-group-item">
          <a routerLink="article/3"> Co robić kiedy... </a>
        </li>
        <li class="list-group-item">
          <a routerLink="article/4"> Artykuł 4 </a>
        </li>
        <li class="list-group-item">
          <button class="btn btn-primary" routerLink="article/67">
            Artykuł 67
          </button>
        </li>
      </ul>
    </div>
    <div class="col-12 col-sm-8"></div>
  </div>
</section>
```

### b) Detale artykułu
Biorąc pod uwagę schemat działania:
- wybieramy artykuł po lewej
- po prawej załadowuje nam się odpowiednia jego treść

Zaproponuj obsłużenie tego schematu, używając nowego komponentu `advice-detail`,  
który będzie "Entry Component'em" osadzonym na kolejnym `<router-outlet>`

W `advice-detail` będziemy chcieli odczytywać odpowiedni `:id` naszego artykułu tak aby możliwe było załadowanie jego treści 
