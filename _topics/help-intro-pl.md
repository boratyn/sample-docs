---
title: Wprowadzenie
alt-title: Pomoc w aplikacjach biznesowych
subject: Definiowanie pomocy dla użytkowników aplikacji biznesowych nAxiom
abstract: |-
  W aplikacjach biznesowych nAxiom można wyświetlać pomoc dotyczącą formularzy, list, definicji dokumentów biznesowych oraz statusów. Treść pomocy jest wyświetlana w zdefiniowanym przez konsultanta formularzu, kiedy użytkownik kliknie ikonę koła ratunkowego {% include image-inline.html url="but-sos.png" %}. Zależnie od ustawień, ikona pomocy jest wyświetlana w obszarze ikon systemowych (np. kontekst, audyt, odśwież) na formularzu i w widoku listy (także w sekcji typu lista).
uipath: |-
  
sections:
author: Dariusz Boratyn
keywords: help, ikona pomocy, koło ratunkowe, treść pomocy, translations
relatedtopics:
  - 
createdate: 2022-06-30
revs:
  - revdate: 
    version: 
    reviewer: 
    revisionscope: > 
      
---

Przykładowy scenariusz konfigurowania pomocy dla użytkownika może wyglądać następująco:

1. Dodać treść pomocy do elementów aplikacji.
1. Zdefiniować formularz do wyświetlania pomocy.
1. Zdefiniować akcje otwierania formularza z przekazywaniem identyfikatora formularza/statusu i listy.
1. Przypisać akcje wykonywane po kliknięciu przycisku pomocy:
  - w ustawieniach systemowych
  - indywidualnie dla dokumentu biznesowego
1. Skonfigurować opcje wyświetlania przycisku pomocy dla list i formularzy.