---
featured: true
date: '2020-08-30'
duration: '08.2018 - 08.2020'
title: 'Erstellung des responsiven und performanten Booking-Funnels in React SPA für einen Mietwagen Portal'
demo_link: 'https://www.billiger-mietwagen.de/'
techs: ['React', 'TypeScript', 'Redux', 'Jest', 'TestCafe',  'styled-components', 'Optimizely', 'New
        Relic', 'Algolia', 'PWA' ]
---

Der Kunde hatte veraltete Monolith mit den separaten Code Base für Desktop und Mobile, welche
sich nicht so leicht pflegen und erweitern lässt. Hauptziel war eine responsive mobile-first
Anwendung zu erstellen, welche es ermöglicht, den Code wieder in den anderen Projekten
verwenden. Das Projekt beinhalt alle Phasen ab den Technische Konzeption und Design bis zur
Umsetzung einer komplexen SPA Anwendung. Die Besonderheit von diesem E-Commerce
Projekt war, dass es keine feste Datenbank mit derzeit verfügbaren Mietwagen gab, sondern eine
Abfrage von Provider bei jedem Suchergebnis als auch ein Produkt und deren Konfiguration (wir
z.B. eine Station oder Abholzeit Auswahl) nötig war. Der Schwerpunkt lag deshalb in einem
komplexen Datenfluss und Asynchronität. Jede größere Feature sollte durch einen A/B Test
ausgerollt und auch in User Labs in enger Zusammenarbeit mit UX-Designers qualitativen getestet
werden. Monitoring mittels New Relic, Tracking vom Kundenverhalten und Web Vitals war
umgesetzt. Eine Komponenten-Library inclusive ein Storybook wurde erstellt.