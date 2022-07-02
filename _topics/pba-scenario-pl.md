---
title: Inicjowanie modelu uprawnień PBA
alt-title: Scenariusz
subject: Scenariusz inicjowania modelu uprawnień PBA
abstract: |-
  Po zainstalowaniu witryny nAxiom w nowym środowisku konieczne jest zainicjowanie modelu uprawnień PBA. Początkowa konfiguracja obejmuje profil użytkownika *superuser*, który ma tylko uprawnienie `Dostęp do administracji uprawnieniami`. Ponadto dostępne są dwa predefiniowane profile użytkowników „systemowych”: *admin* i *consultant*, które jednak nie mają przypisanych żadnych uprawnień.
uipath: |-
  
sections:
author: Dariusz Boratyn
keywords: permissions based authorization, administrator uprawnień, superuser
relatedtopics:
  - /topics/environment-userlist-pl
  - /topics/environment-rolepermissions-pl
createdate: 2022-06-22
revs:
  - revdate: 
    version: 
    reviewer: 
    revisionscope: > 
      
---

W celu zainicjowania modelu PBA należy skorzystać z predefiniowanego profilu użytkownika *superuser* (domyślne hasło *!Q2w3e4r%T*). Ten profil odgrywa rolę *superadministratora uprawnień*, to znaczy może wyznaczać użytkowników (w tym siebie) jako administratorów uprawnień. Temu użytkownikowi nie można odebrać uprawnień do administracji uprawnieniami.

W szkicowaniu scenariuszy inicjowania modelu uprawnień PBA można wyróżnić dwa podstawowe przypadki:

- środowisko nAxiom z pustą bazą danych, tj. brak profili użytkowników innych niż systemowe
- środowisko nAxiom z bazą danych zawierającą profile użytkowników i role biznesowe

Pierwszy przypadek jest bardziej złożony, dlatego zostanie opisany poniżej. W drugim przypadku wystarczy pominąć kroki związane z definiowaniem ról użytkownika i profili użytkowników. 

{% include important.html content="Uprawnienia PBA są weryfikowane podczas logowania użytkownika, dlatego każda zmiana uprawnień zalogowanego użytkownika zacznie obowiązywać dopiero po jego wylogowaniu i ponownym zalogowaniu." %}

1. Użytkownik *superuser* wyznacza użytkownika *admin* jako administratora uprawnień w obszarach *Zarządzanie użytkownikami* oraz *Globalne uprawnienia aplikacji*. Alternatywnie, *superuser* może wyznaczyć siebie jako administratora uprawnień w obu obszarach.
1. Użytkownik *admin* przyznaje użytkownikowi *consultant* komplet uprawnień z obszaru *Globalne uprawnienia aplikacji*
1. Użytkownik *consultant* loguje się do back-office, gdzie definiuje co najmniej jedną aplikację i zestaw ról biznesowych; ewentualnie może być konieczne włączenie dla określonych ról biznesowych systemowych pozycji menu front-office, np. `Użytkownicy`, `Uprawnienia` itp.
1. Użytkownik *admin* loguje się do front-office i definiuje profile użytkowników.
1. W razie potrzeby *superuser* może wyznaczyć kolejnych administartorów uprawnień w obu obszarach.
1. Administratorzy uprawnień przypisują rolom biznesowym i użytkownikom role z obszarów uprawnień.


>**Zapamiętaj:**
- Bez uprawnienia `Używanie wszystkich aplikacji` (`Uprawnienia systemowe` > `Globalne uprawnienia aplikacji`) inne posiadane przez niego uprawnienia będą nieskuteczne, z wyjątkiem uprawnienia `Zmiana własnego hasła`.
- Niezależnie od uprawnień PBA, użytkownikom, którzy mają zarządzać profilami użytkowników, należy przypisać rolę biznesową z dostępem do polecenia `Lista użytkowników` (ewentualnie `Drzewo listy użytkowników`.
- Analogicznie, administratorzy uprawnień będą mieli dostęp do obszarów uprawnień po przypisaniu im ról biznesowych z włączonym dostępem do menu `Zarządzanie uprawnieniami` > `Systemowe`; domyślnie to menu jest dostępne tylko dla posiadaczy roli systemowej `Administrator`.
- Czynności związane z tworzeniem i edytowaniem profili użytkownika są dostępne tylko dla użytkowników z przypisaną rolą systemową *Administrator*.
- Dostęp do back-office (zarządzanie definicjami aplikacji, rozbudowa aplikacji) wymaga posiadania roli *Konsultant*
- Jeśli podczas instalowania witryny nie zostanie wskazana licencja, użytkownik systemowy *consultant* ma uprawnienia do zaimportowania licencji podczas pierwszego uruchomienia. Dopiero wtedy można będzie zalogować się na konto *superuser* i zarządzać uprawnieniami.
- Użytkownik *superuser* ma na stałe przypisane uprawnienie do wyznaczania administratorów uprawnień (pole wyboru `Dostęp do administracji uprawnieniami`) i nie można tego zmienić. Po zainicjowaniu uprawnień PBA ten profil można dezaktywować.
{: .bs-callout .bs-callout-warning}
