---
title: Definiowanie formularza pomocy
alt-title:
subject: Definiowanie formularza do wyświetlania pomocy
abstract: |-
  
uipath: |-
  
sections:
author: Dariusz Boratyn
keywords: help, formularz pomocy
relatedtopics:
  - /topics/data-tables-pl
  - /topics/ui-properties-section-pl
createdate: 2022-06-30
revs:
  - revdate: 
    version: 
    reviewer: 
    revisionscope: > 
      
---

Do wyświetlania treści pomocy potrzebny jest formularz. Najprościej go utworzyć poleceniem `Generuj elementy aplikacji` w `Kreatorze modeli danych`. Wystarczy użyć uproszczonego modelu danych (formularz będzie wyświetlał statyczne dane i nie będzie służył do przetwarzania dokumentów).

Formularz do wyświetlania treści pomocy można zdefiniować na kilka sposobów. Przedstawiony poniżej ma wyłącznie charakter poglądowy.

1. Zdefiniuj uproszczony model danych i w jego tabeli zdefiniuj pola *ParentId* i *StatusId* (typ *liczba całkowita*, anuluj zaznaczenie pole `Wymagane`). Będą to tzw. *pola techniczne* do przekazania identyfikatorów elementów, dla których ma zostać wyświetlona pomoc.
   {%include image-ok.html url="help-form-pl-1800-1.png" %}
1. Uruchom polecenie `Generuj elementy aplikacji` dla utworzonego modelu danych.
1. Przejdź do projektu utworzonego formularza i usuń sekcje pól użytkownika, załączników i komentarzy (opcjonalnie), a dla sekcji pól systemowych wyłącz przełączniki `Aktywna` i `Aktywna w wersji mobile` oraz zmniejsz szerokość kolumny macierzystej do 1 kolumny.
1. Dodaj nową kolumnę, a w niej dodaj trzy sekcje o nazwach *Pomoc dla statusu*, *Pomoc dla formularza* i *Pomoc dla dokumentu biznesowego*; dla wszystkich wybierz `Sekcja HTML` jako typ sekcji.
1. Kliknij przycisk `Ustawienia` i skonfiguruj sekcje zgodnie z przykładami podanymi poniżej.

Sekcja `Pomoc dla statusu`:  

`Zezwól na parsowanie HTML z pól formularza (unsecure)`: włącz ten przełącznik, aby obsłużyć treść pomocy wprowadzoną jako kod HTML  

`Edytor SQL Query`:
```sql
SELECT [Value] as TranslatedHelp
  FROM   [core].[Translations] translations
  JOIN [core].[TranslationDefinitions] translationDefinitions
  ON translationdefinitions.Id = translations.TranslationDefinitionId
  JOIN [core].[BusinessStatuses] businessStatuses
  ON businessStatuses.Help = translationdefinitions.Guid
  WHERE  translations.LanguageId = {@_LangId}
  AND businessStatuses.Id = {@StatusId} -- wartość StatusId zostanie przekazana w akcji otwierania formularza
```
`Edytor HTML`:

```html
<!-- treść pomocy zwrócona przez zapytanie SQL -->
<QueryRowTemplate>{@Query_TranslatedHelp}</QueryRowTemplate>
```

Sekcja `Pomoc dla formularza`:  

`Edytor SQL Query`:

```sql
SELECT [Value] as TranslatedHelp
  FROM   [core].[Translations] translations
  JOIN [core].[TranslationDefinitions] translationDefinitions
  ON translationdefinitions.Id = translations.TranslationDefinitionId
  JOIN [core].[Forms] forms
  ON forms.Help = translationdefinitions.Guid
  WHERE  translations.LanguageId = {@_LangId}
  AND forms.Id = {@ParentId}  -- wartość ParentId zostanie przekazana w akcji otwierania formularza
```
Pozostałe ustawienia, jak w poprzedniej sekcji.

Sekcja `Pomoc dla dokumentu biznesowego`:  

`Edytor SQL Query`:

```sql
SELECT [Value] as TranslatedHelp
  FROM   [core].[Translations] translations
  JOIN [core].[TranslationDefinitions] translationDefinitions
  ON translationdefinitions.Id = translations.TranslationDefinitionId
  JOIN [core].[BusinessDocuments] businessDocuments
  ON businessDocuments.Help = translationdefinitions.Guid
  WHERE  translations.LanguageId = {@_LangId}
  AND businessDocuments.Id = 
    (SELECT BusinessDocumentId
       FROM core.Forms
       WHERE Forms.Id = {@ParentId})  -- wartość ParentId zostanie przekazana w akcji otwierania formularza
```

Pozostałe ustawienia, jak w poprzedniej sekcji. Na koniec zapisz formularz.

Następnie utwórz kopię tego formularza w celu wyświetlania pomocy dla list. W tym formularzu możliwe będzie wyświetlanie pomocy dla list i dla dokumentu biznesowego, dlatego usuń sekcję *Pomoc dla statusu*, a nazwę sekcji pomocy dla formularza zmień na `Pomoc dla listy`. Konieczne będą także zmiany zapytania SQL pobierającego treść pomocy do wyświetlenia.

Sekcja `Pomoc dla list`:  

```sql
SELECT [Value] as TranslatedHelp
  FROM   [core].[Translations] translations
  JOIN [core].[TranslationDefinitions] translationDefinitions
  ON translationdefinitions.Id = translations.TranslationDefinitionId
  JOIN [core].[Grids] grids
  ON forms.Help = translationdefinitions.Guid
  WHERE  translations.LanguageId = {@_LangId}
  AND forms.Id = {@ParentId}  -- wartość ParentId zostanie przekazana w akcji otwierania formularza
```

Sekcja `Pomoc dla dokumentu biznesowego`:  

```sql
SELECT [Value] as TranslatedHelp
  FROM   [core].[Translations] translations
  JOIN [core].[TranslationDefinitions] translationDefinitions
  ON translationdefinitions.Id = translations.TranslationDefinitionId
  JOIN [core].[BusinessDocuments] businessDocuments
  ON businessDocuments.Help = translationdefinitions.Guid
  WHERE  translations.LanguageId = {@_LangId}
  AND businessDocuments.Id = 
    (SELECT BusinessDocumentId
       FROM core.Grids
       WHERE Grids.Id = {@ParentId})  -- wartość ParentId zostanie przekazana w akcji otwierania formularza
```

Jest możliwe obsłużenie pomocy za pomocą jednego tylko formularza z czterema sekcjami. Sekcje niepotrzebne w konkretnym przypadku byłyby ukrywane. Jednak takie rozwiązanie wydaje się bardziej skomplikowane.
