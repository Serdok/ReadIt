# Explications du code

### Ajouter des ancres
Il se peut qu'on veuille passer un élément HTML entier à Angular. Pour ce faire, on doit ancrer les éléments HTML.
On utilise un tag sans valeur.

Exemple:
```angular2html
<input type="text" #name>
```

Avec la balise *#name*, Angular crée une variable *name* qui contient la balise HTML *input* que l'on peut passer en paramètre si besoin.

Exemple:
```angular2html
<button (click)="action(name)">Envoyer</button>
```

Ici on utilise l'ancre *name* pour envoyer à la fonction *action()* l'élément HTML *input* associé.

### Les décorateurs
Les décorateurs dans Angular sont symbolisés par des fonctions précédées par *@*, par exemple les décorateurs *@Component*, ou *@Interface*.
Ils se placent avant les déclarations des classes TS et sont interprétées par Angular pour ajouter des informations utiles à l'interaction des éléments.

Le décorateur le plus important à retenir est le décorateur *@Input*. Il permet de passer des variables TS d'un composant parent à un composant fils via un tag Angular

Exemple:

```typescript
import { Article } from './article';

class ArticleComponent implements OnInit {
  // @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article = null;

  constructor() {
  }

  ngOnInit(): void {
  }
}
```

Ici on indique à Angular de créer un tag `[article]` qu'on peut utiliser dans la balise du composant (ici `app-article`).
Un exemple d'appel au composant donne:

```angular2html
<app-article [article]="mon_article"></app-article>
```
Ici le composant sera initialisé avec le contenu de la variable *mon_article*.

_Note_
Ce décorateur est souvent utilisé avec un tableau, donc on utilise avec ça le transfert de controle *\*ngFor* 

### Encapsulation
