---
title: Model uprawnień PBA
alt-title: Wprowadzenie
subject: Ogólny opis modelu uprawnień PBA
abstract: |-
  Model uprawnień PBA obejmuje uprawnienia do wykonywania określonych czynności w systemie przypisywane rolom biznesowym i indywidualnym użytkownikom. Te uprawnienia są przypisywane po stronie front-office.
uipath: |-
  Menu front-office, sekcja `ZARZĄDZANIE UPRAWNIENIAMI`, polecenia `Administracja` i `Systemowe`. Domyślnie dostęp do tych poleceń ma tylko profil użytkownika *superuser*.
sections:
author: Dariusz Boratyn
keywords: permissions based authorization, administrator uprawnień, superuser
relatedtopics:
createdate: 2022-06-14
revs:
  - revdate: 
    version: 
    reviewer: 
    revisionscope: > 
      
---

Model uprawnień *Permissions Based Authorization* (autoryzacja oparta na uprawnieniach) pozwala kontrolować dostęp użytkowników do wykonywania określonych czynności w systemie na podstawie posiadanych przez nich uprawnień. Proces przyznawania uprawnień odbywa się po stronie *front-office* (w aplikacji *FrontSPA*). 
- Uprawnienia mogą być przyznawane rolom biznesowym oraz indywidualnym użytkownikom. 
- Uprawnienia wynikowe każdego użytkownika stanowią logiczną sumę uprawnień przypisanych w ramach każdej jego roli oraz indywidualnie jego profilowi; to znaczy, że aby pozbawić użytkownika danego uprawnienia, należy je wyłączyć zarówno w jego profilu, jak i we wszystkich jego rolach. 
- Weryfikacja uprawnień odbywa się podczas logowania użytkownika (zmiana uprawnień zaczyna obowiązywać po ponownym zalogowaniu użytkownika).
- Zarządzanie uprawnieniami w modelu PBA odbywa się na dwóch poziomach:
   - Poziom administracji uprawnieniami: wyznaczanie użytkowników, którzy będą mogli definiować uprawnienia innych użytkowników (administratorzy uprawnień)
   - Poziom przypisywania uprawnień: przypisywanie rolom i użytkownikom uprawnień z predefiniowanych obszarów uprawnień w nAxiom, np. uprawnień powiązanych z zarządzaniem użytkownikami, uprawnień do korzystania z aplikacji, do rozbudowy aplikacji itp.