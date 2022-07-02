---
title: Informacje o wersji
subtitle: 
version: 1.5
date: 2021-12-21
# layout: releasenotes_pdf
layout: home
img-folder: "/assets/images/releasenotes"
status: draft
author: Dariusz Boratyn
sidebar: mydoc_sidebar
---

[![PDF]({{ "/assets/PDF_32.png" | relative_url }})]({{ "/downloads/informacje-o-wersji-1.5.pdf" | relative_url }} "Pobierz PDF")
{: .pdf}

# {{ page.title }} {{ page.version }} z dn. {{ page.date | date: "%d-%m-%Y" }}
{:.no_toc .pdf}

## Nowe funkcje

##### Sekcja typu Kalendarz {#np-3427}

{% comment %}[NP-3427](https://naxiom.atlassian.net/browse/NP-3427 "Jacek Mucha, T:0514 Kontrolka kalendarza"){% endcomment %} Dodano nowy typ sekcji: `Kalendarz`. Korzystając z tej sekcji, można wyświetlać na formularzu dane w jednym z kilku widoków kalendarza: miesięcznym, tygodniowym, dziennym i osi czasu. Dane wyświetlane w kalendarzu mogą pochodzić z dowolnej tabeli, a zapytanie SQL do tej tabeli musi zwrócić pięć kolumn: *[id]*, *[start]* (data i godzina rozpoczęcia), *[end]* (data i godzina zakończenia), *[title]* (opis zdarzenia wyświetlany w kalendarzu) oraz *[isAllDay]* (flaga bitowa dla zdarzeń trwających cały dzień).  

Dla kalendarza konieczne jest także wskazanie formularza do edycji zdarzeń oraz akcji aktualizacji i usuwania zdarzeń do obsługi zdarzeń kalendarza przy użyciu myszy. *(T:0514)*

{% include image-ok.html url="np-3427-1.png" description="Kalendarz, widok osi czasu z grupowaniem zdarzeń" %}

>**Uwaga:** Opis konfiguracji sekcji typu kalendarz załączono do niniejszych informacji o wersji jako [dodatek](#calendar). W kolejnej wersji będzie on dostępny w nAxiom jako pomoc kontekstowa do panelu właściwości sekcji.

##### Słowniki hierarchiczne {#np-3338}

{% comment %}[NP-3338](https://naxiom.atlassian.net/browse/NP-3338 "Maciej Wącior, T:0054 Potrzeba rejestrowania poziomowanych słowników (drzew wyboru)"){% endcomment %} Dodano nowy rodzaj słownika — słownik hierarchiczny — który umożliwia tworzenie słowników o strukturze wielopoziomowego drzewa. W celu umożliwienia korzystania z tej funkcjonalności dodano nową kontrolkę formularza `Lista wyboru (Słownik hierarchiczny)`.  

Definicja słowników hierarchicznych wymaga określenia opcji dotyczących unikalności wpisów do słownika. Warunki unikalności są walidowane według wartości z kolumny systemowej `Kod` słownika. *(T:0054)*

{% include image-ok.html url="np-3338-1.png" description="" %}

>**Uwaga:** ze względu na kontynuowane prace programistyczne ta funkcjonalność ma charakter eksperymentalny, jednak nie jest ona objęta działaniem przełącznika `Pokaż funkcje eksperymentalne` w ustawieniach nAxiom.

##### Automatyczne wyświetlanie dokumentu podprocesu {#np-3991}

{% comment %}[NP-3991](https://naxiom.atlassian.net/browse/NP-3991 "Krzysztof Oczoś, T:0728 Możliwość automatycznego otworzenia dokumentu po utworzeniu go w podprocesie [bypass]"){% endcomment %} Dodano możliwość zautomatyzowania wyświetlania formularza dokumentu tworzonego w podprocesie z formularza procesu głównego. W ustawieniach bloku `Podproces synchroniczny` dodano przełącznik `Przekieruj do formularza podprocesu po zainicjowaniu podprocesu`. Jego włączenie powoduje wyświetlenie listy rozwijanej `Akcja otwarcia formularza`, z której należy wybrać odpowiednią akcję. W konfiguracji akcji należy użyć opcji `wskazany dokument` i wpisać *{@Id}* w pole obok tej opcji. Jeśli w tej akcji będą przekazywane jakieś wartości do formularza, zostaną one zignorowane. *(T:0728)*

##### Dostęp do pól sekcji niewidocznej {#np-3846}

{% comment %}[NP-3846](https://naxiom.atlassian.net/browse/NP-3846 "Tomasz Mielniczek, T:0684 1.4.2.1 Dodanie możliwości ukrycia przez JS całej sekcji, a nie tylko pola"){% endcomment %} W oknie `Ustawienia dostępności...` dla sekcji formularza dodano przełącznik `Pole dostępne w przeglądarce, nawet gdy niewidoczne`, którego włączenie umożliwia wykonywanie operacji na wartościach pól w sekcji niewidocznej na formularzu. W przypadku aktualizacji aplikacji do bieżącej wersji, przełącznik jest wyłączony, dla nowo tworzonych sekcji przełącznik jest domyślnie włączony  

Ponadto dodano funkcję ***setSectionAsHidden(*kod-sekcji*)***, której można używać w akcjach JavaScript do ukrywania sekcji z zachowaniem możliwości dostępu do kontrolek w tej sekcji. *(T:0684)*

##### Przyciski w nagłówku sekcji {#np-3762}

{% comment %}[NP-3762](https://naxiom.atlassian.net/browse/NP-3762 "Maciej Wącior, T:0157 Przyciski na sekcji"){% endcomment %} Dodano możliwość umieszczania przycisków w nagłówku sekcji formularza. Dodano również powiązane ustawienia we właściwościach sekcji: `Wyrównanie przycisków w nagłówku sekcji` (do lewej, wyśrodkuj i do prawej) oraz `Kolejność elementów w nagłówku sekcji` (`Najpierw etykieta` albo `Najpierw przyciski`). *(T:0157)*

{% include image-ok.html url="np-3762-1.png" description="" %}

##### Edycja inline — wartości domyślne {#np-3695}

{% comment %}[NP-3695](https://naxiom.atlassian.net/browse/NP-3695 "Tomasz Mielniczek, T:0626 1.4.1.3 Inline - Dodanie możliwości ustawienia wartości domyslnej"){% endcomment %} Dodano funkcję ustawiania wartości domyślnej dla pól w widoku listy po włączeniu edycji inline. Podobnie jak w przypadku pól formularzy, wartość domyślna pól widoku listy może być określona przez podanie stałej wartości lub zwrócona zapytaniem SQL. *(T:0626)*

##### Styl przycisku {#np-2913}

{% comment %}[NP-2913](https://naxiom.atlassian.net/browse/NP-2913 "Dawid Ryl, UX Konfiguracja stylu buttona"){% endcomment %} Dodano właściwości określające wygląd przycisków na formularzach, zarówno przycisków akcji, jak i przycisków workflow oraz w widokach listy. Obecnie można zdefiniować:
   - kolor czcionki i ikony na przycisku (taki sam)
   - kolor wypełnienia przycisku
   - kolor obramowania przycisku
   - grubość obramowania przycisku (od 0 do 5 px)

Ponadto dodano efekt wyróżnienia przycisku po wskazaniu kursorem myszy przez zamianę kolorów czcionki i wypełnienia.

##### Eksport do szablonu Excel {#np-3948}

{% comment %}[NP-3948](https://naxiom.atlassian.net/browse/NP-3948 "Agnieszka Ziętek, T:0709 Obsługa plików Excela jako szablonów dla akcji eksportu do Excela"){% endcomment %} W akcji eksportu do formatu Excel dodano możliwość dopisywania eksportowanych danych do istniejącego pliku — *szablonu Excel*. W takim wypadku należy określić, oprócz nazwy pliku szablonu i arkusza, adres lewej, górnej komórki zakresu danych. Akcja dopisze wyeksportowane dane we wskazanym pliku i zapisze go pod podaną nazwą w folderze pobierania lub wyświetli w programie Excel, zależnie od ustawień przeglądarki.

>**Uwaga:** Jeśli szablon zawiera kolumny ukryte, akcje wpisze dane również w tych kolumnach.

{% include image-ok.html url="np-3948-1.png" description="" %}

Aby dopisywanie eksportowanych danych do istniejącego pliku działało, po wyzwoleniu akcji w aplikacji FrontSPA użytkownik **musi** wybrać format *xlsx*, w przeciwnym razie dane zostaną wyeksportowane do nowego pliku w formacie CSV.  

W związku z tą modyfikacją dodano menu `Szablony Excel` do sekcji `APLIKACJA`. Służy ono do załączania plików Excel, które będą dostępne w akcji eksportu Excel. Dodawanie szablonów wymaga wskazania folderu ich przechowywania. Służy do tego nowe ustawienie `Miejsce zapisu na dysku szablonów Excel` (`SYSTEM` > `Ustawienia` > `Szablony plików`). Nowa sekcja `Szablony plików` w ustawieniach zawiera także dotychczasowe ustawienie `Miejsce zapisu na dysku szablonów Word`. *(T:0709)*

##### Transakcyjne przetwarzanie akcji {#np-3882}

{% comment %}[NP-3882](https://naxiom.atlassian.net/browse/NP-3882 "Krzysztof Oczoś, T:0692 1.4.2.1 Raiserror nie powoduje rollbak transakcji"){% endcomment %} Dodano transakcyjne przetwarzanie sekwencji akcji. Takie sekwencje mogą obejmować:

   - Akcję systemową `Zapisz rekord`
   - Akcje SQL
   - Procedury

Jeśli w sekwencji wystąpi akcja innego rodzaju, sekwencja zostanie podzielona na kilka transakcji.  
W przypadku wystąpienia błędu w akcji wykonywanej w ramach transakcji, zmiany dokonane przez wszystkie wcześniejsze akcje, w tym przez akcję `Zapisz rekord`, zostaną wycofane.

>**Uwaga:** przetwarzanie transakcyjne nie obsługuje akcji zapisu (`APLIKACJA` > `Akcje` > `Akcje zapisu`); obsługa tych akcji jest planowana w kolejnych wersjach.

*(T:0692)*

##### Wysyłka e-mail — pole DW i UDW {#np-4026}

{% comment %}[NP-4026](https://naxiom.atlassian.net/browse/NP-4026 "Tomasz Mielniczek, T:0752 Akcja wysyłki maili - parametr 'do wiadomości'"){% endcomment %} Zmodyfikowano działanie akcji wysyłki e-mail w taki sposób, że obecnie można wybrać, czy wiadomość ma zostać wysłana osobno do każdego adresata określonego w polu `Wyślij do`. Ponadto dodano możliwość określenia adresatów w polach  `Do wiadomości` i `Ukryte do wiadomości`. *(T:0752)*

>**Uwaga:** w przypadku włączenia opcji osobnego wysyłania wiadomości i określenia adresatów w polach `Do wiadomości` i `Ukryte do wiadomości`, każdy adresat określony w tych polach otrzyma tyle kopii wiadomości, ilu jest adresatów w polu `Wyślij do`.

##### Modyfikacja API — pobieranie i zapisywanie danych użytkownika  {#np-3876}

{% comment %}[NP-3876](https://naxiom.atlassian.net/browse/NP-3876 "Dawid Ryl, PEN.TESTY - zabezpieczenie czy da się że nie można wysyłać zapytania do profilu do nie swojego ID"){% endcomment %} Zdefiniowano osobne punkty końcowe API dla żądań pobierania i zapisywania danych użytkownika:

   - `UserProfiles/GetById`: pobieranie danych użytkownika z listy użytkowników; dostępny tylko dla administratora.
   - `UserProfiles/SaveUser`: zapis danych użytkownika na liście użytkowników; dostępny tylko dla administratora.
   - `UserProfiles/Get`: pobieranie danych zalogowanego użytkownika; dostępny dla każdego zalogowanego użytkownika.
   - `UserProfiles/Save`: zapis danych zalogowanego użytkownika; dostępny dla każdego zalogowanego użytkownika.

##### Modyfikacja API — weryfikacja użytkownika  {#np-3873}

{% comment %}[NP-3873](https://naxiom.atlassian.net/browse/NP-3873 "Tomasz Lenart, Rozdzielenie API front/Admin"){% endcomment %} W punktach końcowych API dodano weryfikację roli systemowej użytkownika wysyłającego żądanie.

##### Akcje systemowe na workflow {#np-3664}

{% comment %}[NP-3664](https://naxiom.atlassian.net/browse/NP-3664 "Tomasz Lenart, T:0606 1.4.1.2 Dodanie możliwości użycia "Akcji systemowych" w akcjach prze/po na wyjściu bloczka decyzyjnego"){% endcomment %} W edytorze workflow dodano możliwość użycia akcji systemowych w ustawieniach `Akcje uruchamiane przed` i `Akcje uruchamiane po`. *(T:0606)*

## Poprawki i usunięte błędy

##### PublicAPI — kategorie załączników {#np-4086}

{% comment %}[NP-4086](https://naxiom.atlassian.net/browse/NP-4086 "Wojciech Wojdyło, T:0781 1.4.2.4 PublicApi - dodawanie załączników, wymagalność kategorii załącznika"){% endcomment %} Zmodyfikowano obsługę załączników w interfejsie Public API. Obecnie parametr *attachmentCategoryId* może mieć wartość *NULL*. W takiej sytuacji załącznikowi zostanie przypisana kategoria domyślna według definicji dokumentu biznesowego. *(T:0781)*

##### Widok listy — zachowywanie ustawień {#np-3936}

{% comment %}[NP-3936](https://naxiom.atlassian.net/browse/NP-3936 "Tomasz Mielniczek, T:0703 1.4.2.2. Po wyjściu z dokumentu poprzez akcję "zamknij formularz" znika grupowanie"){% endcomment %} Ustawienia grupowania, filtrowania i sortowania określone przez użytkownika są obecnie zapamiętywane przez nAxiom na czas trwania sesji użytkownika. Do tej pory były one resetowane zawsze po wyjściu z widoku listy do innego widoku lub formularza. *(T:0703)* 

##### Pola zależne od listy wyboru {#np-4073}

{% comment %}[NP-4073](https://naxiom.atlassian.net/browse/NP-4073 "Krzysztof Oczoś, T:0772 1.4.2.4 Brak pól z innych sekcji w "Lista zależności: kolumna - pole formularza""){% endcomment %} Zmieniono działanie zależności pól formularza od kolumn listy rozwijanej definiowanych w oknie dialogowym `Konfiguracja listy wyboru` w taki sposób, że obecnie można wybierać zależne pola z całego formularza. Do tej pory dostępne były tylko pola z bieżącego wiersza formularza. *(T:0772)*

{% comment %}[NP-3642](https://naxiom.atlassian.net/browse/NP-3642 "Agnieszka Ziętek, T:0532 1.4.0.1 Problem z uzupełnianiem powiązanych pól z listy wyboru sql (formularz)"){% endcomment %} Poprawiono działanie zależności pól formularza od kolumn listy rozwijanej typu *uniqueidentifier*. *(T:0532)*
 
##### Lista asynchroniczna {#np-3838}

{% comment %}[NP-3838](https://naxiom.atlassian.net/browse/NP-3838 "Maciej Wącior, T:0674 Dla listy wyboru (SQL - Async) dodać informację, że wartość key ma być stringiem"){% endcomment %} W oknie dialogowym `Konfiguracja listy wyboru` dla kontrolki *Lista wyboru (SQL - Async)* dodano informację, że wartość kolumny *[key]* zwracana przez zapytanie źródłowe dla listy musi być typu tekstowego. *(T:0674)*  

##### Pole numeryczne {#np-3966}

{% comment %}[NP-3966](https://naxiom.atlassian.net/browse/NP-3966 "Maciej Wącior, T:0715 1.4.2.1 Kólko myszy zmienia wartość w polu liczbowym"){% endcomment %} Zablokowano możliwość zmiany przy użyciu kółka myszy wartości w polu numerycznym, kiedy strzałki do zmiany wartości (*spinner*) są wyłączone. *(T:0715)*

##### Przekierowywanie użytkownika w aplikacji FrontSPA {#np-3802}

{% comment %}[NP-3802](https://naxiom.atlassian.net/browse/NP-3802 "Kamil Biały, Problem z przekierowaniem"){% endcomment %} Wprowadzono zmianę w aplikacji *FrontSPA*, która powoduje, że obecnie po zamknięciu formularza użytkownik jest przekierowywany do obiektu, z poziomu którego ten formularz został otwarty. W szczególności, po otwarciu formularza z widoku listy, a następnie zamknięciu tego formularza, wyświetlany jest ponownie widok listy. 

##### Nieaktualne wpisy w *OpenedForms* {#np-4120}

{% comment %}[NP-4120](https://naxiom.atlassian.net/browse/NP-4120 "Kamil Kostrzewski, Po zamknięciu dialogu nie czyści się OpenedForms"){% endcomment %} Usunięto błąd, który powodował że pomimo zamknięcia formularza wyświetlonego w trybie okna dialogowego, w tabeli *OpenedForms* pozostawały wpisy dotyczące tego formularza. 

##### Zapytania do *Linked Servers* {#np-4087}

{% comment %}[NP-4087](https://naxiom.atlassian.net/browse/NP-4087 "Maciej Wącior, T:0782 1.4.2.4 Walidacja definicji formularza z wykorzystaniem LinkedServer"){% endcomment %} Usunięto problem z zapisem formularza w przypadku użycia w definicji kontrolek zapytań SQL kierowanych do serwerów połączonych (*Linked Servers*). *(T:0782)*

##### Załączniki w formacie *docx* {#np-4049}

{% comment %}[NP-4049](https://naxiom.atlassian.net/browse/NP-4049 "Kamil Biały, T:0762 1.4.2.3. / 1.4.2.4. bład pobierania  dodanego załącznika"){% endcomment %} Usunięto błąd, który uniemożliwiał pobieranie załączników w formacie *docx*. *(T:0762)*

##### Przycisk eksportu do Excel {#np-4045}

{% comment %}[NP-4045](https://naxiom.atlassian.net/browse/NP-4045 "Dawid Ryl, T:0761 1.4.2.3 'Wyświetlaj przycisk eksportu listy do excela' - ustawienie nieskuteczne"){% endcomment %} Usunięto błąd, który powodował, że nie można było wyłączyć wyświetlania przycisku eksportu w formacie Excel w widoku listy. *(T:0761)*

##### Ustawienia dostępności przycisków {#np-4024}

{% comment %}[NP-4024](https://naxiom.atlassian.net/browse/NP-4024 "Sebastian Panek, T:0750 1.4.2.3 - Warunek wyświetlania dla buttonów"){% endcomment %} Usunięto błąd powodujący problemy z wyświetlaniem przycisku, dla którego skonfigurowano ustawienia dostępności za pomocą zapytania SQL. *(T:0750)* 

##### Przenoszenie przycisku między sekcjami {#np-4023}

{% comment %}[NP-4023](https://naxiom.atlassian.net/browse/NP-4023 "Wojciech Wojdyło, Wyjątek po przeniesieniu przycisku z jednej sekcji formularza do innej i zapisie"){% endcomment %} Usunięto błąd, który powodował, że po przeniesieniu przycisku z jednej sekcji do innej, podczas zapisu formularza był wyświetlany komunikat *„The instance of entity type 'FormFieldParameter' cannot be tracked because another instance with the same key value for {'Id'} is already being tracked...”*.

##### Mapowanie *NULL* do podprocesów {#np-4022}

{% comment %}[NP-4022](https://naxiom.atlassian.net/browse/NP-4022 "Wojciech Wojdyło, T:0748 1.4.2.* Błędnie przekazywane wartości do podprocesu przy mapowaniu"){% endcomment %} Usunięto błędy w mapowaniu wartości *NULL* do podprocesów dla wszystkich obsługiwanych typów danych. Obecnie taka wartość jest mapowana do podprocesu jako  *NULL*. *(T:0748)*

##### Odświeżanie formularza {#np-4021}

{% comment %}[NP-4021](https://naxiom.atlassian.net/browse/NP-4021 "Kamil Kostrzewski, T:0745 1.4.2.3 Problem z odświeżaniem pop-upów na froncie"){% endcomment %} Poprawiono błąd, który powodował, że odświeżenie formularza z danymi zapisanego dokumentu biznesowego wyświetlanego w trybie okna dialogowego, powodowało wyczyszczenie wartości z pól tego formularza. *(T:0745)* 
   {% comment %}[NP-4013](https://naxiom.atlassian.net/browse/NP-4013 "Tomasz Mielniczek, T:0738 1.4.2.3 - Błąd akcji 'Odśwież formularz' "){% endcomment %} Usunięto błąd akcji `Odśwież formularz`, który mógł powodować, że mimo włączenia atrybutu widoczności po wykonaniu akcji przycisk w nagłówku formularza nie wyświetlał się. *(T:0738)* 

##### Błąd trybu tylko do odczytu dla listy rozwijanej {#np-4019}

{% comment %}[NP-4019](https://naxiom.atlassian.net/browse/NP-4019 "Dawid Ryl, T:0746 1.4.2.3 - Zablokowane pola"){% endcomment %} Usunięto błąd w działaniu kontrolki typu lista rozwijana, który mógł powodować, że była ona wyświetlana w trybie tylko do odczytu, chociaż jej atrybut *isReadOnly* nie był nigdzie modyfikowany. *(T:0746)*

##### Nieaktualne wpisy w kontekście formularza {#np-4011}

{% comment %}[NP-4011](https://naxiom.atlassian.net/browse/NP-4011 "Kamil Kostrzewski, T:0735 1.4.2.1. zaznaczone checkboxami pozycje na liście nie czyszczą się po zmianie sekcji"){% endcomment %} Poprawiono błąd, który powodował, że pomimo wyłączenia zaznaczenia pozycji w sekcji typu lista, wartości dla tych pozycji nadal były przechowywane w kontekście formularza. *(T:0735)*

##### Dublowanie filtrów na liście {#np-3984}

{% comment %}[NP-3984](https://naxiom.atlassian.net/browse/NP-3984 "Dawid Ryl, Zapisanie konfiguracji filtrowania kolumny powiela się"){% endcomment %} Poprawiono błąd, który powodował dublowanie zapisanych filtrów na liście `Filtry` w widoku listy.

##### Edycja inline — *datepicker* {#np-3981}

{% comment %}[NP-3981](https://naxiom.atlassian.net/browse/NP-3981 "Tomasz Mielniczek, Edycja inline, datepicker cofa datę o jeden dzień"){% endcomment %} Poprawiono błąd w działaniu kontrolki *datepicker* w trybie edycji inline.

##### Akcja `Otwórz formularz` na workflow {#np-3978}

{% comment %}[NP-3978](https://naxiom.atlassian.net/browse/NP-3978 "Maciej Wącior, T:0717 1.4.2 Przekazywanie danych do formularza na workflow: Opcja wybierz parametry i wartości nie działa"){% endcomment %} Poprawiono błędne działanie przekazywania do formularza wartości określonych w akcji `Otwórz formularz`. Problem dotyczył sytuacji, kiedy ta akcja była używana we właściwościach bloku workflow `Akcje uruchamiane przed` i `Akcje uruchamiane po`. *(T:0717)*

##### Konfiguracja edycji inline {#np-3959}

{% comment %}[NP-3959](https://naxiom.atlassian.net/browse/NP-3959 "Tomasz Mielniczek, Admin, konfigurator list, edycja inline, system gubi ustawienia akcji"){% endcomment %} Usunięto błąd, który mógł w określonych okolicznościach powodować usuwanie akcji zapisu z konfiguracji edycji inline dla widoku listy.

##### PublicAPI — załączniki {#np-3900}

{% comment %}[NP-3900](https://naxiom.atlassian.net/browse/NP-3900 "Oleksandr Gavryshko, PUBLIC-API nie działa pobieranie załączników"){% endcomment %} Usunięto błędy w metodach API dotyczących załączników.

## Informacje uzupełniające i sprostowania

##### Warunki obsługi ACL dla widoków listy {#np-4027}

{% comment %}[NP-4027](https://naxiom.atlassian.net/browse/NP-4027 "Tomasz Lenart, T:666 Poprawa działania filtrowania po JO"){% endcomment %} 
W celu zapewnienie prawidłowego działania uprawnień ACL dla widoków list, konfiguracja listy musi spełniać następujące warunki:

   - Na karcie `Ogólne` musi zostać zaznaczone co najmniej jedno pole wyboru w grupie `Weryfikacja uprawnień` (`Według szablonu instancji` i/lub `Według szablonu statusu`)
   - Zapytanie źródłowe dla widoku listy musi zwracać kolumny *[ACLId]* i *[Status]*
   - Na karcie `Ustawienia listy` muszą być włączone przełączniki `Stronicowanie` i `Funkcja server-side`

W przypadku widoków list generowanych poleceniem `Utwórz flow` dwa ostatnie warunki są spełnione domyślnie, Dla widoków tworzonych samodzielnie, konsultant musi dopilnować, aby zostały one spełnione. *(T:0666)* 

##### SQL RAISERROR {#np-3866-4112}

{% comment %}[NP-3866](https://naxiom.atlassian.net/browse/NP-3866 "Krzysztof Oczoś, Wyświetlanie komunikatu SQL RAISERROR - stylizacja"){% endcomment %} W **Informacjach do patcha 1.4.2.4** podano błędny zakres poziomu istotności dla ostrzeżeń wyświetlanych przy użyciu metody SQL RAISERROR. Poprawny zakres wynosi od 6 do 10.

{% comment %}[NP-4112](https://naxiom.atlassian.net/browse/NP-4112 "Agnieszka Ziętek, 1.5 Po dodaniu przedrostka [MSG] - omijany jest RAISEERROR"){% endcomment %} W **Informacjach do wersji 1.4.2.1** podano błędny przykład użycia przedrostka *[MSG]* w celu wyłączenia komunikatów systemowych (`Wykonano poprawnie`/`Wystąpił błąd`). W celu prawidłowego działania ten przedrostek musi zostać umieszczony na początku treści komunikatu, np:

   ```sql
   RAISERROR(
          '[MSG]Wartość jest nieprawidłowa.', -- tekst komunikatu
          10, -- poziom istotności
          1 -- stan
            )
   ``` 

##### Kontrolka `Pole czasu` {#np-3983}

{% comment %}[NP-3983](https://naxiom.atlassian.net/browse/NP-3983 "Tomasz Mielniczek, T:0724 problem z kontrolką typu 'pole czasu'"){% endcomment %} Kontrolka `Pole czasu` obsługuje tylko typ danych *datetime* i zapisuje w bazie danych wartości w formacie:

   ```js
   1900-01-01 *godz*:*min*:02.000
   ```
   gdzie *godz* i *min* to wartość godziny i minuty ustawiona przy użyciu kontrolki. sekundy i milisekundy nie są obsługiwane. Aby prawidłowo wyświetlać czas w tej kontrolce należy użyć formatu `HH:mm`. *(T:0724)*

{% comment %} # Dodatek: Sekcja typu kalendarz {#calendar}

> **Podsumowanie:** Kalendarz pozwala wyświetlać dane ze źródła danych w jednym z widoków kalendarza: miesięcznym, tygodniowym, dziennym lub osi czasu. Możliwa jest także edycja tych danych: zmiana czasu rozpoczęcia/zakończenia techniką *drag and drop* lub przez formularz do edycji tych danych. Wpisy w kalendarzu to *zdarzenia*.

Aby zamieścić kalendarz na formularzu, dodaj nową sekcję i na panelu właściwości wybierz pozycję `Kalendarz` z listy rozwijanej `Typ sekcji`. Do poprawnego działania sekcji kalendarz potrzebna jest tabela w bazie danych, która będzie zawierać dane zdarzeń, oraz formularz edycji zdarzenia wyświetlany po kliknięciu komórki kalendarza. Ponadto, oprócz parametrów konfiguracyjnych definiowanych po kliknięciu przycisku `Ustawienia` obok listy `Typ sekcji`, należy zdefiniować akcję usuwania zdarzenia i akcję aktualizacji zdarzenia we właściwościach sekcji.

Ustawienia wspólne dla wszystkich rodzajów sekcji opisano w rozdziale [{{ site.data.map.ui-properties-section-pl.title }}]({{ site.data.map.ui-properties-section-pl.url | append: "#formsection-sectionproperties" | relative_url }}).

W celu konfiguracji kalendarza zaznacz sekcję kalendarza na formularzu i kliknij przycisk `Ustawienia` obok listy `Typ sekcji` na panelu właściwości. Zostanie wyświetlone okno dialogowe `Ustawienia sekcji kalendarza`, w którym poszczególne ustawienia (okna edycji SQL) zostały dla wygody przedstawione jako nagłówki rozwijanych sekcji. Kliknij nagłówek, aby rozwinąć ustawienia.

##### Źródło danych dla zdarzeń {#eventsdatasource}

`SQL dla wydarzeń`: zapytanie SQL, które musi zwrócić następujące kolumny z tabeli, w której mają być zapisywane zdarzenia:
   - `id` (*varchar*): identyfikator zdarzenia
   - `start` (*datetime*): data i godzina rozpoczęcia zdarzenia
   - `end` (*datetime*): data i godzina zakończenia zdarzenia
   - `title` (*varchar*): tytuł zdarzenia
   - `isAllDay` (*bit*): flaga zdarzenia całodniowego
   - `color` (*varchar*): (kolumna opcjonalna) szesnastkowa wartość koloru dla komórki kalendarza w formacie *\#FFFFFF*

Zależnie od wybranego widoku, zdarzenie jest prezentowane na kalendarzu jako prostokątny obszar o rozmiarach odpowiadających czasowi rozpoczęcia i zakończenia opisany tytułem zdarzenia. Zdarzenia oznaczone jako całodniowe zajmują całą komórkę kalendarza.

Zapytanie może także zwracać inne kolumny z tabeli źródłowej, które będą dodatkowo opisywać zdarzenie. Edycja wartości w tych kolumnach będzie odbywać się w formularzu przypisanym we właściwości `Formularz zdarzenia`.

**Przykład:**

```sql
SELECT InspectionId AS [id],
       InspectionBegins AS [start],
       InspectionEnds AS [end],
       InspectionTitle AS [title],
       InspectionGoal,
       InspectorId,
       FieldInspection AS [isAllDay]
FROM dbo.InspectionsSchedule
```

##### Grupowanie zdarzeń {#eventsgrouping}

`Włącz grupowanie`: włącza/wyłącza grupowanie zdarzeń według wartosci z kolumny zwróconej przez zapytanie SQL; domyślnie włączony.

`Nazwa kolumny...`: nazwa kolumny zwraconej przez zapytanie źódłowe, której wartości zostaną użyte do grupowania zdarzeń.

Okno edycji SQL: wpisz zapytanie SQL, które zwróci **unikatowe** wartości w następujących kolumnach:
   - `text` (*varchar*): wartość wyświetlana dla grup zdarzeń
   - `value` (*varchar*): wartość, według której zdarzenia będą grupowane
   - `color` (*varchar*): (kolumna opcjonalna) szesnastkowa wartość koloru, który będzie używany dla zdarzeń z danej grupy w formacie *\#FFFFFF*


**Przykład:**

```sql
SELECT CONCAT(MIN(FirstName), ' ', MIN(LastName)) AS [text],
       dbo.Zamowienia.UserId as [value]
FROM core.UserProfiles
RIGHT JOIN dbo.Zamowienia
ON core.UserProfiles.Id = dbo.Zamowienia.UserId
GROUP BY dbo.Zamowienia.UserId -- wymagane użycie klauzuli GROUP BY
```

##### Pokaż od dnia {#calendarfirstday}

`SQL dla daty dla której kalendarz będzie ustawiony`: zapytanie zwracające datę, dla której zostanie ustawiony początkowy okres, zależnie od trybu wyświetlania, np. widok miesięczny będzie się zaczynał od poniedziałku w tygodniu obejmującym początek miesiąca, w którym przypada zwrócona data.

**Przykład:**

```sql
SELECT DATEADD(wk, DATEDIFF(wk,0,GETDATE()), 0) AS OstatniPoniedzialek
```

##### Dni wolne {#holidays}

`SQL dla dat uznanych jako dni wolne`: zapytanie zwracające listę dat i nazw dni wolnych w kolumnach:
   - `value` (*date*): data dnia wolnego
   - `text` (*varchar*): nazwa dnia wolnego wyświetlana w komórce kalendarza 

**Przykład:**

```sql
SELECT HolidayDate as [value],
       HolidayName as [text]
FROM dbo.HolidaysWorldWide
WHERE CountryAlpha2Code = 'PL'
```

##### Tryby wyświetlania {#displaymodes}

Lista wielowyboru: wybierz tryby wyświetlania kalendarza, które mają być dostępne w aplikacji *FrontSPA*; dostępne wartości:
   - `Miesięczny`: tablica sześciu tygodni ustawionych w rzędach, jeden pod drugim (7 x 6); pierwsza komórka to poniedziałek (zawsze) tygodnia z pierwszym dniem miesiąca lub datą `Pokaż od dnia` 
   - `Tygodniowy`: ustawione obok siebie kolumny poszczególnych dni tygodnia (domyślnie siedem) podzielone na interwały godzinowe; domyślnie jako pierwszy dzień tygodnia jest wyświetlany dzień bieżący lub dzień `Pokaż od dnia`; aby wyświetlać widok tygodniowy od określonego dnia tygodnia, należy w opcji `Pokaż od dnia` użyć zapytania SQL
```sql
SELECT DATEADD(dd,-(DATEPART(WEEKDAY, GETDATE())+1),GETDATE()) -- zwraca datę ostatniego piątku
```
   - `Dzienny`: jedna kolumna dnia o szerokości całego kalendarza podzielona na interwały godzinowe; dzień bieżący lub dzień `Pokaż od dnia`
   - `Oś czasu`: jeden wiersz dni, podzielonych lub nie na interwały godzinowe; zawsze wyświetlany od pierwszego dnia bieżącego miesiąca lub miesiąca, w którym przypada data `Pokaż od dnia`.

Tryb wybrany jako pierwszy jest ustawiany jako domyślny; kolejność trybów na liście wielowyboru nie odpowiada kolejności wyboru trybów na liście rozwijanej — jest ona taka, jak podana powyżej. Jeśli widok dzienny nie zostanie dodany do listy, nie będzie można przechodzić do widoku dziennego po kliknięciu wielokropka w widoku miesięcznym.

##### Interwał czasu dla widoku dziennego {#dayviewinterval}

`Interwał (w minutach)`: wartość określająca podział dnia w widoku dziennym, tygodniowym i osi czasu na interwały godzinowe; dozwolone wartości od 15 do 720 minut.

##### Opcje wyświetlania {#displayoptions}

`Wyświetlana liczba dni tygodnia`: liczba dni wyświetlanych w widoku tygodniowym (łącznie z dniem bieżącym); dozwolone wartości od 1 do 7.

`Oś czasu — interwał całodniowy`: po włączeniu tego przełącznika dni w widoku osi czasu nie będą dzielone na interwały godzinowe.

##### Pozostałe ustawienia sekcji kalendarza {#othercalendarsettings}

W ramach konfiguracji kalendarza, należy określić jeszcze następujące ustawienia dostępne na panelu właściwości:

`Formularz zdarzenia`: formularz wyświetlany po kliknięciu komórki w kalendarzu; kliknij przycisk `Ustaw`, aby wyświetlić okno dialogowe `Wybierz akcję do wywołania` i wybierz, a następnie skonfiguruj akcję `Otwórz formularz`; aby dla nowego zdarzenia automatycznie wypełniać pole rozpoczęcia i zakończenia zgodnie z wartościami dla klikniętej komórki formularza, użyj odwołań *{@\*KodFormularza.Event.start}* i *{@\*KodFormularza.Event.end}*, gdzie *KodFormularza* to kod formularza z kalendarzem.

{% include image-ok.html url="ui-calendar-1.png" description="Przekazywanie parametrów z kalendarza do formularza zdarzenia" %}

`Akcja aktualizacji`: akcja wykonywana po zmianie daty i godziny rozpoczęcia/zakończenia zadania metodą *drag and drop* w widoku kalendarza; na przykład:

```sql
UPDATE [dbo].[WyjsciaRejestr]
SET GodzWyjscia = JSON_VALUE({@Event}, '$.start'),
    GodzPowrotu = JSON_VALUE({@Event}, '$.end')
WHERE [dbo].[WyjsciaRejestr].Id = JSON_VALUE({@Event}, '$.id')
```
> **Uwaga:** w definicji akcji należy włączyć przełącznik `Przekaż wszystkie parametry jako nvarchar`.

`Akcja usunięcia`: akcja wykonywana po kliknięciu symbolu ***x*** w prawym górnym rogu prostokąta zdarzenia; na przykład

```sql
DELETE FROM [dbo].[WyjsciaRejestr]
WHERE [dbo].[WyjsciaRejestr].Id = JSON_VALUE({@Event}, '$.id')
```
> **Uwaga:** w definicji akcji należy włączyć przełącznik `Przekaż wszystkie parametry jako nvarchar`.

##### Obsługa kalendarza w aplikacji *FrontSPA* {#usingcalendar}

W aplikacji *FrontSPA* kalendarz jest wyświetlany w widoku skonfigurowanym jako domyślny. W nagłówku od lewej strony znajduje się przycisk `Dziś`, który wyświetla interwał obejmujący bieżącą datę, strzałki służące do zmiany wyświetlanego interwału (następny/poprzedni dzień/tydzień/miesiąc), określenie bieżącego interwału oraz listę rozwijaną z dostępnymi widokami kalendarza. Jeśli ta lista nie jest dostępna, to znaczy, że widok domyślny jest jedynym dostępnym.

{% include image-ok.html url="ui-calendar-3.png" description="Widok miesięczny" %}


Kliknięcie pustej komórki kalendarza wyświetla formularz, w którym można wpisać dane nowego zdarzenia. Kliknięcie zdarzenia w kalendarzu pozwala edytować to zdarzenie.

Zdarzenia są wyświetlane w kalendarzu jako prostokątne obszary. Po wskazaniu zdarzenia myszą w widoku dziennym i tygodniowym wyświetlane są na górnej i dolnej krawędzi uchwyty do zmiany rozmiaru. Ich przeciąganie pozwala zmieniać czasrozpoczęcia lub zakończenia zdarzenia. Symbol ***x*** wyświetlany w prawym górnym rogu zdarzenia służy do usunięcia zdarzenia. Dodatkowo zdarzenie można przeciągnąć myszą do innej komórki, zmieniając jednocześnie czas rozpoczęcia i zakończenia zdarzenia.

Jeśli w tym samym dniu zostanie zdefiniowanych w tym samym dniu, w widoku miesięcznym będzie obok nich wyświetlany przycisk z wielokrokiem, którego kliknięcie spowoduje przejście do widoku dziennego.

Po skonfigurowaniu i włączeniu grupowania, wybrany widok kalendarza będzie wyświetlany dla każdej grupy osobno. Grupowanie jest przydatne w widoku osi czasu.

{% include image-ok.html url="ui-calendar-2.png" description="Widok osi czasu z grupowaniem" %}

{% endcomment %}