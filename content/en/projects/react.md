---
featured: true
date: '2020-08-30'
duration: '08.2018 - 08.2020'
title: 'E-commerce responsive and high-performance SPA'
demo_link: 'https://www.billiger-mietwagen.de/'
techs: ['React', 'TypeScript', 'Redux', 'Jest', 'TestCafe',  'styled-components', 'Optimizely', 'New
        Relic', 'Algolia', 'PWA' ]
---

The customer had a monolith repository with different code bases for desktop and mobile versions of the application, which were hard to maintain and extend. The main goal was to create a responsive mobile-first application that would allow the code to be reused. The project included all phases starting from the technical concept and design to implementing a complex SPA application. The unique feature of this e-commerce project was the absence of a fixed database of currently available rental cars. Instead, it was required to fetch this information from the providers every time not only to present the search results but also for a product page and product configuration like pickup station or time. The focus was, therefore, on a complex data flow and asynchrony. Every major feature should be rolled out by an A/B test and qualitatively tested in user labs in close cooperation with UX designers. Monitoring using New Relic, tracking of customer behavior, and Web Vitals were implemented. A component library, including a storybook, was created.