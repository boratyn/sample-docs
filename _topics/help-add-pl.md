---
title: Definiowanie treści pomocy
alt-title:
subject: Definiowanie treści pomocy dla elementów aplikacji
abstract: |-
  
uipath: |-
  
sections:
author: Dariusz Boratyn
keywords: help, ikona pomocy, koło ratunkowe, treść pomocy, translations, tłumaczenia i pomoc
relatedtopics:
  - 
createdate: 2022-06-30
revs:
  - revdate: 
    version: 
    reviewer: 
    revisionscope: > 
      
---

1. Wyświetl definicję listy, formularza, dokumentu biznesowego lub diagram procesu.
1. Kliknij przycisk `Tłumaczenia i pomoc`.  
   {% include tip.html content="na diagramie procesu przycisk `Tłumaczenia i pomoc` jest reprezentowany przez ostatnią ikonę z prawej strony na pasku narzędzi u góry." %}
{%include image-ok.html url="help-add-pl-1800-1.png" %}
Zostanie wyświetlona tabela z tekstami tłumaczeń i pomocy.
1. Kliknij przycisk `Edycja` w wierszu, w którym wartość w kolumnie `Pole` to `Help`. Zostanie wyświetlone okno `Edycja tłumaczenia/pomocy`.
   {%include image-ok.html url="help-add-pl-1800-2.png" %}
1. Wpisz tekst pomocy w kolumnie `Tekst tłumaczenia` dla języka polskiego; w tym polu można wkleić przygotowany osobno kod HTML z tekstem pomocy sformatowanym przy użyciu znaczników HTML; opcjonalnie podaj treść pomocy dla innych języków.
   {% include tip.html content="treść pomocy można także wprowadzić bezpośrednio w odpowiedniej komórce tabeli tłumaczeń; aby zmiana została zapisana, należy nacisnąć przycisk *Enter*." %}

Treść pomocy można również dodawać, używając polecenia `Tłumaczenia i pomoc` z menu `ADMINISTRACJA`. To polecenie wyświetla całą tabelę tłumaczeń, aby łatwiej znaleźć odpowiednie wiersze, należy w filtrze kolumny `Pole` wpisać wartość *Help*.

Treść pomocy jest zapisywana w bazie danych w tabeli *core.Translations*.
