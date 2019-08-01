import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss']
})
export class QuestionsPage implements OnInit {
  constructor(public router: ActivatedRoute) {}
  tableauGeneral = [
    [
      {
        question: 'Selectionner la balise orpheline :',
        reponse1: '<img>',
        reponse2: '<h1>',
        reponse3: '<div>',
        reponse4: '<label>',
        reponse: '<img>'
      },
      {
        question: 'Selectionner la bonne syntaxe HTML :',
        reponse1: '<p>Je suis un paragrpahe<p>',
        reponse2: '<img src=monImage.png"></img>',
        reponse3: '<h1>Je suis un titre</h1>',
        reponse4: '<div> <id = "monId"</div>',
        reponse: '<h1>Je suis un titre</h1>'
      },
      {
        question: 'Que signifie HTML ?',
        reponse1: 'Hello the master loaded',
        reponse2: 'Hauteur totale maximum labélisée',
        reponse3: 'Hyper text markup language',
        reponse4: 'Haricot tres mal lavés',
        reponse: 'Hyper text markup language'
      },
      {
        question: 'Que signifie CSS ?',
        reponse1: 'Cascading style shett',
        reponse2: 'créer serveur sympa',
        reponse3: 'Choucroute saucisse savoyarde',
        reponse4: 'create simple sample',
        reponse: 'Cascading style shett'
      },
      {
        question: 'Le rôle du HTML est de...',
        reponse1: 'Mettre en forme du texte',
        reponse2: 'Ordonner du contenu',
        reponse3: 'Créer des sites e-commerce',
        reponse4: 'create simple sample',
        reponse: 'Ordonner du contenu'
      },
      {
        question: 'Lorsque vous utilisez l\'élément a, vous devez obligatoirement préciser...',
        reponse1: 'Un attribut target',
        reponse2: 'Sa valeur',
        reponse3: 'Deux attributs href et target',
        reponse4: 'Un attribut href',
        reponse: 'Un attribut href'
      },
      {
        question: 'Le séléecteur CSS étoile (*) sert à...',
        reponse1: 'Appliquer des bordures aux éléments',
        reponse2: 'Sélectionner tous les éléments d\'une page HTML',
        reponse3: 'Centrer le texte',
        reponse4: 'Sélectionner un élément possédant un attribut en particulier',
        reponse: 'Sélectionner tous les éléments d\'une page HTML'
      },
      {
        question: 'Le sélecteur div + p sert à sélectionner...',
        reponse1: 'Tous les div qui contiennent un p',
        reponse2: 'Le premier élément p enfant d\'un div',
        reponse3: 'Tous les éléments p enfants dans un div',
        reponse4: 'Tous les éléments p suivants un div (et de même niveau)',
        reponse: 'Tous les éléments p suivants un div (et de même niveau)'
      },
      {
        question: 'Pourquoi utiliser des sprites d\'images ?',
        reponse1: 'Pour diminuer le nombre de requêtes envoyées au serveur',
        reponse2: 'Par simplicité pour insérer des images',
        reponse3: 'Car cela crée des images plus jolies',
        reponse4: 'Parce que le Sprite c\'est bon',
        reponse: 'Pour diminuer le nombre de requêtes envoyées au serveur'
      }
    ],
    [
      {
        question: 'Que signifie PHP',
        reponse1: 'Page Helper Process',
        reponse2: 'Programming Home Pages',
        reponse3: 'Hypertext Preprocessor',
        reponse4: 'Processus Hyper Performant',
        reponse: 'Hypertext Preprocessor'
      },
      {
        question: 'Quelle fonction retourne la longeur "une chaine de texte"',
        reponse1: 'strlen',
        reponse2: 'strlength',
        reponse3: 'length',
        reponse4: 'substr',
        reponse: 'length'
      },
      {
        question:
          'Quelle fonction retourne le nombre de secondes écoulées depuis le 1er janvier 1970 ?',
        reponse1: 'time',
        reponse2: 'timestamp',
        reponse3: 'mktime',
        reponse4: 'dreamtime',
        reponse: 'time'
      },
      {
        question: 'La boucle for ($i=0 ; $i<=3 ; $i++){ echo $i;}',
        reponse1: 'sera executée 2 fois',
        reponse2: 'sera executée 3 fois',
        reponse3: 'Sera executée 4 fois',
        reponse4: 'Sera executée 12 fois',
        reponse: 'Sera executée 4 fois'
      },
      {
        question: 'Quelle fonction retire un élément de la fin d\'un tableau ?',
        reponse1: 'array_splice()',
        reponse2: 'array_pop()',
        reponse3: 'array_pad()',
        reponse4: 'array_shift()',
        reponse: 'array_pop()'
      },
      {
        question:
          'Quelle fonction permet d\'envoyer des en-têtes HTTP au navigateur avant le contenu de la page ?',
        reponse1: 'parse_url()',
        reponse2: 'http_post()',
        reponse3: 'header()',
        reponse4: 'what_the_F***()',
        reponse: 'header()'
      },
      {
        question: 'Quelles valeurs peut prendre le type booléen ?',
        reponse1: 'boli ou bolo',
        reponse2: 'TRUE ou FALSE',
        reponse3: '0 ou 1',
        reponse4: 'Toutes sauf NULL',
        reponse: 'TRUE ou FALSE'
      },
      {
        // tslint:disable-next-line: max-line-length
        question:
          'Dans le cas d\'envoi d\'informations plus ou moins sensibles par formulaire, quelle méthode utilisera-t-on de préférence ?',
        reponse1: 'get',
        reponse2: 'mailto',
        reponse3: 'post',
        reponse4: 'forgot',
        reponse: 'post'
      }
    ],
    [
      {
        question: 'Quel est le nom de l\'institution où a été créé le web ?',
        reponse1: 'IRIS',
        reponse2: 'CIL',
        reponse3: 'CERN',
        reponse4: 'SNCF',
        reponse: 'CERN'
      },
      {
        question: 'Qui a inventé le HTML ?',
        reponse1: 'Tim Berners-Lee',
        reponse2: 'Obiwan Kenobi',
        reponse3: 'Bill Gates',
        reponse4: 'Rocky Balboa',
        reponse: 'Tim Berners-Lee'
      },
      {
        question:
          'Comment se nomme le consortium qui s\'occupe d\'uniformiser les techniques du web ?',
        reponse1: 'WBA',
        reponse2: 'W3C',
        reponse3: 'WWF',
        reponse4: 'WTC',
        reponse: 'W3C'
      },
      {
        question: 'Quel était le nom du plus célèbre moteur de recherche du début du web ?',
        reponse1: 'Hasta la vista',
        reponse2: 'Alta Vista',
        reponse3: 'Lycos',
        reponse4: 'Yahoo',
        reponse: 'Yahoo'
      },
      {
        question: 'Qu\'est-ce qu\'Internet ?',
        reponse1: 'un réseau mondial d\'ordinateurs connectés',
        reponse2: 'un disque dur',
        reponse3: 'un ensemble de pages contenant du texte et des images',
        reponse4: 'un moteur de recherche',
        reponse: 'un réseau mondial d\'ordinateurs connectés'
      },
      {
        question: 'WWW signifie',
        reponse1: 'Wild Wide World',
        reponse2: 'World Wide Web',
        reponse3: 'Wide World Web',
        reponse4: 'Wolverine World Wide',
        reponse: 'World Wide Web'
      },
      {
        question:
          'Le logiciel permettant de consulter des pages Web sur votre ordinateur s\'appelle',
        reponse1: 'un surfeur',
        reponse2: 'un serveur Web',
        reponse3: 'un navigateur',
        reponse4: 'un intranet',
        reponse: 'un navigateur'
      },
      {
        question: 'Dans une URL, la partie initialen par exemple "http://" désigne',
        reponse1: 'l\'encodage',
        reponse2: 'l\'amorce',
        reponse3: 'le protocole Web',
        reponse4: 'le nom de domaine',
        reponse: 'le protocole Web'
      }
    ],
    [
      {
        question: 'Java Script est un language qui :',
        reponse1: 'Doit être compilié avant d\'être exécuté',
        reponse2: 'S\'exécute sur le client',
        reponse3: 'est un language dérivé de l\'ADA',
        reponse4: 'S\'exécute sur le serveur',
        reponse: 'S\'exécute sur le client'
      },
      {
        question: 'Si ch1="ABCDE", que retourne ch1.charAt(3) :',
        reponse1: 'Une erreur',
        reponse2: 'True',
        reponse3: 'D',
        reponse4: 'C',
        reponse: 'D'
      },
      {
        question: 'Comment accéder au premier élément d\'un tableau T1 :',
        reponse1: 'T1(1)',
        reponse2: 'T1[1]',
        reponse3: 'T1(0)',
        reponse4: 'T1[0]',
        reponse: 'T1[0]'
      },
      {
        question: 'Comment s\'ecrit Jquery en raccourci :',
        reponse1: '€',
        reponse2: '£',
        reponse3: '$',
        reponse4: '¥',
        reponse: '$'
      },
      {
        question: 'Comment peut-on sélectionner les images d\'une largeur de 300px ?',
        reponse1: '$("img[width=300px]")',
        reponse2: '$("img[width=300]");',
        reponse3: '$("img").width("300");',
        reponse4: '$(width("",300));',
        reponse: '$("img[width=300]");'
      },
      {
        question: 'Comment peut-on sélectionner les deux premiers titres h3 d\'une page ?',
        reponse1: '$("h3+h3")',
        reponse2: '$("h3(1,2)")',
        reponse3: '$("h3:lt(2)");',
        reponse4: '$("h3 :slice(0,2)")',
        reponse: '$("h3:lt(2)");'
      },
      {
        question: 'Comment peut-on empécher l\'exécution d\'un lien cliqué ?',
        reponse1: '$("a").click(function() { exit; });',
        reponse2: '$("a").click(function() { return true; });',
        reponse3: '$("a").click(function(e) { e.preventDefault; });',
        reponse4: '$("a").click(function(e) { e.preventDefault(); });',
        reponse: '$("a").click(function(e) { e.preventDefault(); });'
      },
      {
        question:
          'Comment peut-on ajouter la classe .actif sur un élément <li> si celle-ci n\'est pas présente : ',
        reponse1: '$("li").addClass(.actif);',
        reponse2: '$("li").addClass(".actif");',
        reponse3: '$("li!actif").addClass("actif");',
        reponse4: '$("li").toggleClass("actif");',
        reponse: '$("li").toggleClass("actif");'
      }
    ]
  ];

  theme = 0;
  rand = 0;

  getRandomTheme() {
    return this.tableauGeneral[Math.floor(Math.random() * this.tableauGeneral.length)];
  }

  getRandomThemeId() {
    return Math.floor(Math.random() * this.tableauGeneral.length);
  }

  getRandomQuestionId(theme: any) {
    return Math.floor(Math.random() * theme.length);
  }

  getRandomQuiz(themeId: number) {
    const theme = this.getRandomTheme();
    const questionId = this.getRandomQuestionId(theme);

    this.rand = questionId;
    this.theme = themeId;
  }

  ngOnInit() {
    const name = this.router.snapshot.paramMap.get('theme');
    const titre = $('#cat_quest');

    switch (name) {
      case 'html':
        titre.html(`HTML / CSS`);
        this.getRandomQuiz(0);
        break;
      case 'js':
        titre.html(`JavaScript`);
        this.getRandomQuiz(3);
        break;
      case 'web':
        titre.html(`Histoire du Web`);
        this.getRandomQuiz(2);
        break;
      case 'php':
        titre.html(`PHP`);
        this.getRandomQuiz(1);
        break;

      default:
        break;
    }
  }

  onReponseClick() {
    this.getRandomQuiz(this.theme);
  }
}
