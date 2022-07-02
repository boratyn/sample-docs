---
title: Uprawnienia w obszarze Globalne uprawnienia aplikacji
alt-title: 
subject: Opcje uprawnień systemowych
abstract: |-
  
uipath: |-
  
sections:
author: Dariusz Boratyn
keywords: permissions, authorization, rozbudowa, uprawnienia, systemowe, pba, definicje aplikacji, aplikacje
relatedtopics:
  - 
createdate: 2022-06-23
revs:
  - revdate: 
    version: 
    reviewer: 
    revisionscope: > 
      
---

`Globalne uprawnienia aplikacji` to obszar grupujący następujące uprawnienia do korzystania z aplikacji biznesowych i ich tworzenia:
- `Zarządzanie definicjami aplikacji`:
  - `Przeglądanie listy aplikacji`: uprawnia do wyświetlenia listy aplikacji zdefiniowanych w danym środowisku nAxiom (`ADMINISTRACJA` > `Lista aplikacji`); w razie braku uprawnienia wyświetlana jest informacja o braku dostępu do strony.
  - `Tworzenie aplikacji`: udostępnia przycisk `Dodaj definicję` na liście definicji aplikacji; w razie braku uprawnienia przycisk jest niewidoczny.
  - `Edycja aplikacji`: udostępnia ikonę do edycji {% include image-inline.html url="but-edit-light.png" %} w wierszu definicji aplikacji; w razie braku uprawnienia ikona jest niewidoczna.
  - `Usuwanie aplikacji`: udostępnia ikonę do usuwania {% include image-inline.html url="but-trash.png" %} w wierszu definicji aplikacji; w razie braku uprawnienia ikona jest niewidoczna.
- `Używanie wszystkich aplikacji`: umożliwia korzystanie ze wszystkich aplikacji, to jest korzystanie z poleceń menu udostępniających formularze i listy, do których użytkownik ma dostęp w związku z przypisanymi mu rolami biznesowymi.
- `Filtry SQL list`: umożliwia definiowanie filtrów dla list jako zapytań SQL (*FrontSPA* > *NazwaListy* > Lista rozwijana wyboru filtra > `Ustawienia` > `Dodaj nowy filtr predefiniowany`).
- `Rozbudowa wszystkich aplikacji`: umożliwia korzystanie z back-office w roli użytkownika tworzącego aplikacje biznesowe (zwyczajowo nazywanego *konsultantem*), z wyjątkiem dostępu do funkcji chronionych uprawnieniami z grupy `Zarządzanie definicjami aplikacji`.

>**Uwaga:** Modyfikowanie zmiennych środowiskowych aplikacji (`ADMINISTRACJA` > `Lista aplikacji` > ikona {% include image-inline.html url="but-vars.png" %}) wymaga posiadania uprawnień: `Przeglądanie listy aplikacji` oraz `Rozbudowa wszystkich aplikacji`.