---
title: Informacje o wersji (patch)
subtitle: 
version: 1.5.1
date: 2022-01-11
# layout: releasenotes_pdf
layout: home
img-folder: "/assets/images/releasenotes"
status: draft
author: Dariusz Boratyn
sidebar: mydoc_sidebar
---

[![PDF]({{ "/assets/PDF_32.png" | relative_url }})]({{ "/downloads/informacje-o-patchu-1.5.1.pdf" | relative_url }} "Pobierz PDF")
{: .pdf}

# {{ page.title }} {{ page.version }} z dn. {{ page.date | date: "%d-%m-%Y" }}
{:.no_toc .pdf}

## Nowe funkcje

##### Konfiguracja listy użytkowników w strukturze organizacyjnej {#np-3765}

{% comment %}[NP-3765](https://naxiom.atlassian.net/browse/3765 "Tomasz Mielniczek, T:0650 1.4.1.4  Możliwość konfiguracji listy w strukturze organizacyjnej"){% endcomment %}
Dodano możliwość konfigurowania kolumn listy użytkowników wyświetlanej na karcie `Użytkownicy` w formularzu `Edycja jednostki organizacyjnej` (`KONFIGURACJA` > `Struktura organizacyjna`).
Funkcjonalność wymaga określenia następujących ustawień (`SYSTEM` > `Ustawienia` > `Struktura organizacyjna`):
- `Włącz własne ustawienia listy użytkowników`: przełącznik włączający funkcjonalność.
- `Własne zapytanie dla dostępnych użytkowników`: zapytanie źródłowe dla listy użytkowników dodanych do jednostki organizacyjnej wyświetlanej na karcie `Użytkownicy`
- `Własne zapytanie dla użytkowników w jednostce organizacyjnej`: zapytanie źródłowe dla listy wyświetlanej po kliknięciu przycisku `Dodaj użytkownika`.

*(T:0650)*

##### Akcja `Odśwież listę` {#np-4014}

{% comment %}[NP-4014](https://naxiom.atlassian.net/browse/4014 "Maciej Wącior, T:0740 1.4.2.3 - 0676/2021 odświeżanie list - ciąg dalszy"){% endcomment %}
Dodano nową akcję systemową `Odśwież listę`. Akcja jest dostępna tylko dla przycisków widoku listy (`Konfigurator list` > `Edycja listy` > `Przyciski listy`), a jej wykonanie powoduje odświeżenie rekordów wyświetlanych w widoku listy.

##### Uprawnienia ACL formularza dla tabeli katalogu {#np-2701} 

{% comment %}[NP-2701](https://naxiom.atlassian.net/browse/2701 "Tomasz Lenart, PERM.ACL.TMPL.FRM.SCT Uprawnienia niedokumentowe"){% endcomment %}Dodano możliwość definiowania uprawnień ACL dla formularzy, dla których tabelą źródłową jest tabela katalogu.

##### Weryfikacja rozszerzenia nazwy pliku przez Public API {#np-3768}

{% comment %}[NP-3768](https://naxiom.atlassian.net/browse/3768 ", BPS.APD.CAT Kategorie załączników - format plików c.d.- PublicApi"){% endcomment %}Dodano weryfikację rozszerzenia nazwy pliku dodawanego jako załącznik w metodach interfejsu Public API.

## Poprawki i usunięte błędy

##### Zadanie cykliczne — pomoc kontekstowa {#np-4192}

{% comment %}[NP-4192](https://naxiom.atlassian.net/browse/4192 ", T:0828 1.5 Brak instrukcji Cron"){% endcomment %}Dodano pomoc kontekstową w oknie definiowania zadania cyklicznego. *(T:0828)*

##### Sekcja Kalendarz — pomoc kontekstowa {#np-4104}

{% comment %}[NP-4104](https://naxiom.atlassian.net/browse/4104 "Tomasz Mielniczek, Dodać ikonkę pomocy ("i" w kółku) do panelu właściwości dla sekcji typu kalendarz"){% endcomment %}Dodano pomoc kontekstową do sekcji typu kalendarz.

##### Eliminacja znaków diakrytycznych z kodów pól i sekcji {#np-4039}

{% comment %}[NP-4177, NP-4039](https://naxiom.atlassian.net/browse/NP-4039 "Wojciech Wojdyło, Kod pola i sekcji nie może mieć polskich znaków"){% endcomment %}Ze względu na problemy w działaniu zależności wyeliminowano możliwość stosowania znaków diakrytycznych w kodach sekcji i pól formularza. Dozwolone znaki to: a-z, A-Z, 0-9, _ (podkreślenie) oraz - (myślnik). W związku z powyższym wprowadzono następujące zmiany:
- generowane przez system kody sekcji nie będą zawierać znaków diakrytycznych,
- podczas wprowadzania kodu znaki diakrytyczne są automatycznie zamieniane na odpowiadające im znaki alfabetu łacińskiego,
- dodano skrypt zmieniający w bazie danych wszystkie wystąpienia ciągu *_Sekcja_Pola_Użytkownika* na *_Sekcja_Pola_Uzytkownika*.

W istniejących formularzach konieczna jest ręczna zmiana kodów zawierających znaki spoza dozwolonego zestawu. Zmiana nazwy może się wiązać z koniecznością aktualizacji wszelkich referencji do danego kodu, np. w zależnościach.

##### Identyfikatory GUID w kolumnie *Description* {#np-4007}

{% comment %}[NP-4047](https://naxiom.atlassian.net/browse/4047 "Wojciech Wojdyło, T:0760 1.4.2.3 Niejednorodne dane w tabeli systemowej [core].[BusinessStatuses]"){% endcomment %}Wprowadzono modyfikację zapisu wartości w kolumnie *[Description]* tabeli *[core].[BusinessStatuses]*. Od tej pory w tej kolumnie będą zapisywane wyłącznie identyfikatory z kolumny *[Guid]* w tabeli *[core].[TranslationDefinitions]*. Zmiana dotyczy tylko wpisów dodawanych po aktualizacji do bieżącej wersji. *(T:0760)*

##### Obsługa wielkich liter w nazwach kolumn zapytania listy rozwijanej {#np-4068}

{% comment %}[NP-4068](https://naxiom.atlassian.net/browse/4068 "Wojciech Wojdyło, T:0767 Kontrolka nAxiom"){% endcomment %}Wprowadzono modyfikację kontrolki typu lista rozwijana, która zapewnia obsługę wielkich liter w nazwach kolumn zwracanych przez zapytanie źródłowe listy rozwijanej. Dotyczy to konfiguracji list wyboru na formularzu oraz w menu `Kontrolki`. *(T:0767)*

##### Odświeżanie aktywnego formularza po akcji `Zamknij formularz` {#np-4146}

{% comment %}[NP-4146](https://naxiom.atlassian.net/browse/4146 "Jacek Michalik, T:0793 1.4.2.4 Rekord zapisywany z popup/okna nie pojawia się na liście aż do odświeżenia listy ręcznie lub całego formularza"){% endcomment %}Do akcji systemowej `Zamknij formularz` dodano przełącznik `Po zamknięciu odśwież aktywny formularz`. Jego włączenie powoduje, że po zamknięciu formularza wyświetlanego w trybie `Dialog` lub `Okno` odświeżany jest formularz/widok listy, z którego otwarto zamykany formularz. *(T:0793)*

##### Wyświetlanie formularza w trybie *dialog* {#np-4018}

{% comment %}[NP-4018](https://naxiom.atlassian.net/browse/4018 "Oleksandr Gavryshko, T:0744 1.4.2.2 Po kliknięciu przycisku nie otwiera się okno z formularzem"){% endcomment %}Wprowadzono poprawkę eliminującą problemy z wyświetlaniem formularza w trybie `Dialog` bezpośrednio po uruchomieniu aplikacji. *(T:0744)*

##### Zależność kolumna-pole formularza dla listy interesariuszy {#np-4113}

{% comment %}[NP-4143](https://naxiom.atlassian.net/browse/4143 "Maciej Wącior, T:0790, 0826 1.4.2.4 Interesariusze / Lista wyboru SQL Znikająca zależność kolumna-pole formularza"){% endcomment %}Poprawiono błąd, który powodował, że po zamknięciu okna konfiguracji listy wyboru była czyszczona ustawiona wcześniej  zależność kolumna-pole formularza w przypadku, gdy pole formularza było kontrolką interesariuszy.

*(T:0790, 0826)*

##### Przewijanie formularza po zmianie sekcji {#np-4145}

{% comment %}[NP-4145](https://naxiom.atlassian.net/browse/4145 "Maciej Wącior, T:0792 1.4.2.4 Formularz przewija się do góry po zmianie sekcji"){% endcomment %}Usunięto przyczynę przewijania formularza po kliknięciu zakładki sekcji na formularzu. *(T:0792)*

##### Oczekiwanie na zakończenie akcji zapisu {#np-3829}

{% comment %}[NP-3829](https://naxiom.atlassian.net/browse/3829 "Krzysztof Oczoś, T:0672 Występuje Błąd "dokument został zmodyfikowany przez innego użytkownika", kiedy żaden inny użytkownik na pewno go nie modyfikował."){% endcomment %}Wyeliminowano sytuację, w której próba wykonania innej czynności przed ukończeniem akcji zapisu kończyła się komunikatem o modyfikacji dokumentu przez innego użytkownika. Obecnie do chwili ukończenia zapisu użytkownik nie może podejmować innych czynności. *(T:0672)*

##### Wartość domyślna dla słownika hierarchicznego {#np-4102}

{% comment %}[NP-4102](https://naxiom.atlassian.net/browse/4102 "Maciej Wącior, 1.5 REGRES Nie działa ustawienie wartości domyślnej dla słownika hierarchicznego"){% endcomment %}Poprawiono błąd uniemożliwiający ustawianie wartości domyślnej dla kontrolki słownika hierarchicznego w przypadku, gdy wybrana wartość nie była hasłem pierwszego poziomu słownika.

##### Zmiany menu systemowego i menu użytkownika {#np-4051}

{% comment %}[NP-4051](https://naxiom.atlassian.net/browse/4051 "Dawid Ryl, T:0764 1.4.2.3 Pomieszne menu systemowe i użytkownika"){% endcomment %}Wprowadzono następujące modyfikacje menu użytkownika:
- Sekcja `Zdarzenia systemowe` nie jest już domyślnie wyświetlana na liście sekcji menu (*AdminSPA* > `APLIKACJA` > `Menu użytkownika`.
- W aplikacji *FrontSPA* wyłączono podświetlanie pozycji menu, której nie przypisano formularza ani widoku listy.

##### Kolumna *ArchiveStatus* w systemowej funkcji tabelarycznej {#np-4052}

{% comment %}[NP-4052](https://naxiom.atlassian.net/browse/4052 "Wojciech Wojdyło, T:0768 1.4.2.3.funkcja tabelaryczna tworzona podczas flow nie pobiera kolumny ArchiveStatus"){% endcomment %}Poprawiono definicję funkcji tabelarycznej używanej przez polecenie `Utwórz flow` do definiowania źródła danych dla widoku listy (domyślna nazwa: *NazwaTabeli_View*). Obecnie ta funkcja uwzględnia kolumnę `ArchiveStatus` z tabeli dokumentu biznesowego.
W przypadku funkcji tabelarycznych zdefiniowanych we wcześniejszych wersjach, konieczna jest ich samodzielna aktualizacja. W tym celu należy odnaleźć definicję funkcji w bazie danych (MS SQL Management Studio > Databases > *baza_danych* > `Programmability` > `Functions`  > `Table-valued Functions` > *nazwa_funkcji*), kliknąć ją prawym przyciskiem myszy i wybrać polecenie `Modify`. Następnie należy dopisać *d.[ArchiveStatus]* po kolumnie  *d.[ACLId]*.

{% include image-ok.html url="np-4052-1.png" description="" %}

*(T:0768)*

##### Wartość domyślna kontrolki `Pole wyboru` {#np-4075}

{% comment %}[NP-4075](https://naxiom.atlassian.net/browse/4075 "Wojciech Wojdyło, T:0776 1.4.2.4 Podmiana wartości typu bit"){% endcomment %}Zmodyfikowano ustawianie wartości domyślnej w kontrolce `Pole wyboru`. Zarówno w przypadku zapytania SQL, jak i literału tekstowego obsługiwane są wartości *true*, *false*, *0* i *1*, w tym również ujęte w apostrofy (np. *'false'*) i cudzysłowy (np. *"false"*). 
> **Info:** jeśli wartość domyślna nie zostanie ustawiona, pole wyboru w nowym dokumencie ma domyślnie wartość *false*.

##### Dodawanie/przenoszenie kontrolek do nowej sekcji {#np-4058}

{% comment %}[NP-4058](https://naxiom.atlassian.net/browse/4058 ", Błąd dodawania/przesuwania kontrolek w nowej kolumnie/sekcji"){% endcomment %}Usunięto błąd występujący podczas dodawania i przenoszenia kontrolek do nowo utworzonej sekcji.

##### Akcja Import Excel {#np-4110}

{% comment %}[NP-4110](https://naxiom.atlassian.net/browse/4110 "Patryk Mikulski, T:0784 1.4.2.3 Błąd przy imporcie z excela"){% endcomment %}Usunięto błąd, który powodował, że podczas próby uruchomienia akcji typu `Import Excel` był wyświetlany komunikat o błędzie `Wybrana akcja nie istnieje w systemie`. *(T:0784)*

##### Transakcyjne wykonywanie akcji {#np-4118}

{% comment %}[NP-4118](https://naxiom.atlassian.net/browse/4118 "Tomasz Lenart, 1.5 Raiserror nie powoduje rollbak transakcji - odśwież formularz"){% endcomment %}Usunięto problem, który powodował, że umieszczenie akcji `Odśwież formularz` w sekwencji akcji wykonywanych transakcyjnie nie zawsze powodowało podział tej sekwencji na osobne transakcje.

##### Akcja `Zmiana statusu dokumentu` {#np-4141}

{% comment %}[NP-4141](https://naxiom.atlassian.net/browse/4141 ", T:0788, 0795 1.4.2.4 Nie podnosi się formatka akcji "Zmiana statusu dokumentu""){% endcomment %}Usunięto błąd, który uniemożliwiał edycję akcji `Zmiana statusu dokumentu` z poziomu okna wyboru akcji. *(T:0788, 0795)*

##### Akcja `Zamknij formularz` {#np-4181}

{% comment %}[NP-4181](https://naxiom.atlassian.net/browse/4181 "Patryk Mikulski, 1.5.1 REGRES - Zapis formularza w popup - ZAWIESZANIE EKRANU"){% endcomment %}Usunięto błąd akcji zamykania formularza, który powodował zawieszanie się aplikacji.

##### Kopiowanie formularza {#np-4092}

{% comment %}[NP-4092](https://naxiom.atlassian.net/browse/4092 "Maciej Wącior, 1.5 REGRES Kopiowanie formularza - nie przenosi się TOOLBAR"){% endcomment %}Usunięto błąd, który powodował, że w operacji kopiowania formularza pomijane były ustawienia kolorów w sekcji `Toolbar`.

##### Sekcja typu Lista {#np-4158}

{% comment %}[NP-4158](https://naxiom.atlassian.net/browse/4158 "Kamil Kostrzewski, T:0817 1.4.2.4 Sekcja typu lista - domyślnie zwinięta - po rozwinięciu jest zwężona"){% endcomment %}Usunięto problem, który powodował, że domyślnie zwinięta sekcja typu lista była po rozwinięciu zwężona i wymagała ręcznego rozszerzenia. *(T:0817)*

##### Kontrolka `Blok HTML` {#np-4064}

{% comment %}[NP-4064](https://naxiom.atlassian.net/browse/4064 "Krzysztof Oczoś, Blok HTML - problem z ładowaniem kolejnych pól "){% endcomment %}Usunięto problem z wyświetlaniem kontrolki `Blok HTML`, dla której nie zdefiniowano ustawień.

##### Funkcja agregująca w stopce widoku listy {#np-4083}

{% comment %}[NP-4083](https://naxiom.atlassian.net/browse/4083 "Sebastian Panek, T:0780 1.4.2.3 Nie działa suma na liście z włączonym grupowaniem"){% endcomment %}Usunięto błąd, który powodował, że po włączeniu grupowania widoku listy wartość funkcji agregującej w stopce nie wyświetlała się. *(T:0780)*

##### Lista wyboru SQL {#np-4098}

{% comment %}[NP-4098](https://naxiom.atlassian.net/browse/4098 "Dawid Ryl, 1.5 REGRES Niepoprawne działanie akcji JavaScript dla Listy wyboru SQL"){% endcomment %}Usunięto błąd, który powodował, że po zapisaniu rekordu w formularzu nie wyświetlała się wartość wybrana z listy rozwijanej, gdy klucz listy był typu *uniqueidentifier*. *(T:0769)*

##### Akcja uprawnień {#np-4230}

{% comment %}[NP-4230](https://naxiom.atlassian.net/browse/4230 ", T:0842 1.5. Błąd akcji uprawnień"){% endcomment %}Usunięto błąd walidacji zapytania SQL dla akcji uprawnień, który powodował, że kolumny *BusinessDocumentSchema* i *InstanceId* były traktowane jako wymagane. *(T:0842)*

##### Akcja `Odśwież stronę` {#np-4032}

{% comment %}[NP-4032](https://naxiom.atlassian.net/browse/4032 "Maciej Wącior, Akcja "Odśwież stronę" działa nieprawidłowo dla formularza otwartego jako popup"){% endcomment %}Usunięto błąd akcji `Odśwież stronę`, który występował w przypadku wywoływania tej akcji z formularza otworzonego w trybie `Dialog`.

##### Akcja interesariuszy {#np-4203}

{% comment %}[NP-4203](https://naxiom.atlassian.net/browse/4203 "Tomasz Lenart, Po upgrade z wersji 1.4.2.3 przestała działać akcja dodania interesariusza"){% endcomment %}Usunięto błąd akcji interesariuszy. Obecnie wykonanie akcji dla przejścia workflow powoduje poprawne przypisanie użytkownika do listy interesariuszy. *(T:0834)*


## Obejścia znanych błędów

##### Błąd rejestracji kontrolki podglądu raportu Telerik {#np-3845}

Wykryto problem z użyciem sekcji podglądu raportu w przypadku jednoczesnego korzystania z kilku lokalnych instalacji nAxiom. Problem powoduje wyświetlenie w sekcji podglądu komunikatu o błędzie rejestracji kontrolki podglądu w związku z brakiem dostępu do określonej ścieżki. Problem ten zostanie rozwiązany w kolejnej wersji nAxiom. Doraźnym rozwiązaniem jest zatrzymanie puli aplikacji *reportsapi* instancji, która blokuje kontrolkę i restartowanie tej samej puli w używanej instancji. *(T:0682)*

