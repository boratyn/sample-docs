---
title: Uprawnienia w obszarze Zarządzanie użytkownikami
alt-title: 
subject: Opcje uprawnień systemowych
abstract: |-
  
uipath: |-
  
sections:
author: Dariusz Boratyn
keywords: permissions, authorization, zarządzanie użytkownikami, uprawnienia, systemowe, pba
relatedtopics:
  - 
createdate: 2022-06-23
revs:
  - revdate: 
    version: 
    reviewer: 
    revisionscope: > 
      
---

`Zarządzanie użytkownikami` to obszar grupujący uprawnienia do zarządzania profilami użytkowników; uprawnienia z tego obszaru mają zastosowanie tylko do użytkowników, którzy mają dostęp do poleceń `Lista użytkowników` i/lub `Drzewo listy użytkowników` we front-office (back-office: `ADMINISTRACJA` > `Role biznesowe` > `Uprawnienia` > `Użytkownicy` / `Lista użytkowników` / `Drzewo listy użytkowników`); obszar obejmuje następujące uprawnienia i grupy uprawnień:

{% include note.html content="uprawnienia w tym obszarze dotyczą natywnych funkcjonalności zarządzania profilami użytkowników (polecenia `Lista użytkowników` i `Drzewo listy użytkowników`) dostępnych we front-office oraz punktów końcowych API udostępniających funkcje związane z profilami użytkowników." %}

  - `Przeglądanie listy użytkowników`: pozwala wyświetlić listę użytkowników przy użyciu polecenia `Lista użytkowników` w menu front-office.
  - `Przeglądanie drzewa użytkowników`: pozwala wyświetlić drzewo listy użytkowników przy użyciu polecenia `Drzewo listy użytkowników` w menu front-office.
  - `Tworzenie nowego użytkownika`: wyświetla przycisk `Dodaj użytkownika` na liście użytkowników; do wyświetlenia okna dialogowego `Dodanie profilu użytkownika` wymagane jest uprawnienie `Podgląd szczegółów dowolnego użytkownika`; posiadanie tylko tych dwóch uprawnień pozwala tworzyć nowe profile użytkownika bez przypisanej roli biznesowej i hasła; możliwe jest utworzenie profilu użytkownika bez hasła, ale na taki profil nie można się zalogować (do wykorzystania w scenariuszach, kiedy inna osoba tworzy profil, a inna nadaje hasło).
  - `Zmiana ról biznesowych użytkownika`: pozwala zmieniać role biznesowe przypisane do profilu użytkownika; brak tego uprawnienia powoduje ukrycie odpowiedniej kontrolki na formularzu danych użytkownika. 
  - `Podgląd danych użytkowników`:
    - `Podgląd szczegółów dowolnego użytkownika`: uprawnienie wymagane do wysyłania zapytań API o dane użytkowników; pomocniczo wymagane przez uprawnienia `Tworzenie nowego użytkownika`.
    - `Podgląd własnego profilu`: uprawnienie wymagane do wysyłania zapytań API o własne dane.
  - `Edycja danych użytkowników`:
    - `Edycja profilu dowolnego użytkownika`: uprawnienie wymagane do modyfikowania danych w profilu użytkownika; użytkownik z tym uprawnieniem ma dostęp do przycisków `Edytuj` w ostatniej kolumnie z prawej strony na liście użytkowników.
    - `Edycja własnego profilu`: uprawnienie wymagane do modyfikowania danych w swoim profilu użytkownika; użytkownik z tym uprawnieniem ma dostęp do przycisku `Edytuj` w ostatniej kolumnie z prawej strony na liście użytkowników w wierszu swojego profilu; dodatkowo użytkownik może zmieniać dane swojego profilu po kliknięciu w nazwę logowania i wybraniu polecenia `Mój profil`.
  - `Usuwanie użytkownika`: uprawnienie pomocnicze wymagane do uprawnienia `Import użytkowników z pliku Excel`.
  - `Zmiana hasła użytkowników`:
    - `Zmiana hasła dowolnego użytkownika`:  pozwala zmieniać hasło przypisane do profilu użytkownika; brak tego uprawnienia powoduje ukrycie odpowiedniej kontrolki na formularzu danych użytkownika; to uprawnienie wymaga uprawnienia `Edycja profilu dowolnego użytkownika`.
    - `Zmiana własnego hasła`:  pozwala zmieniać hasło przypisane do własnego profilu użytkownika; brak tego uprawnienia powoduje ukrycie przycisku `Zmień hasło` w oknie dialogowym wyświetlanym po kliknięciu w nazwę logowania i wybraniu polecenia `Mój profil`.
  - `Dostęp do funkcji 'Pobierz przełożonych z AD'`: brak tego uprawnienia powoduje ukrycie przycisku `Pobierz przełożonych dla użytkowników AD` w nagłówku listy użytkowników. 
  - `Import użytkowników z pliku excel`: brak tego uprawnienia powoduje ukrycie przycisku `Importuj użytkowników z pliku Excel` w sekcji `Import użytkowników` w ustawieniach systemu w back-office (`ADMINISTRACJA` > `Ustawienia systemu`).
    {% include note.html content="back-office jest dostępne tylko dla użytkowników z przypisaną rolą systemową *Konsultant*." %}
