# Vefforritun 1, 2023: Verkefni 10, JS #4

[Kynning í fyrirlestri](https://youtu.be/fkHRygbU-fM).

## Markmið

- Útbúa eigið verkefni með HTML, CSS og JavaScript.
- Nota Web API.
- Nota JavaScript tól.

## Lýsing

Setja skal upp a.m.k. eina síðu, aðgengilegar af internetinu sem notar eitthvað JavaScript tól og eitthvað Web API.

Athugið að ekki þarf að setja upp mikið af efni eða virkni, það er nóg að setja upp eitthvað sem virkar og uppfyllir kröfur.

### JavaScript tól

Nota skal „nútímalegt“ JavaScript tól (þ.e.a.s. tól sem er ennþá í virkt og uppfært) ásamt öðrum tólum sem við höfum notað í haust. Þið megið velja þessi tól og þurfið að nota a.m.k. einhverja grunnvirkni sem þau bjóða upp á. Sem dæmi má nefna:

- Build framework, t.d.
  - [Vite](https://vitejs.dev/), setja upp „build“ ferli með Vite.
  - [Astro](https://astro.build/), setja upp „build“ ferli með Astro (sem er samt eiginlega bæði build og vef framework).
- Test framework, t.d.
  - [Jest](https://jestjs.io/), setja upp prófunarferli með Jest, skrifa a.m.k. þrjú próf fyrir alvöru virkni.
  - [Cypress](https://www.cypress.io/), setja upp prófunarferli með Cypress, skrifa a.m.k. þrjú próf fyrir alvöru virkni.
- Vef framework (sem er farið nánar í í vefforritun 2), t.d.
  - [React](https://reactjs.org/)
    - [Create React App](https://create-react-app.dev/).
    - [Next.js](https://nextjs.org/).
  - [Vue](https://vuejs.org/)
  - [Svelte](https://svelte.dev/)
- CSS framework, t.d.
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Bootstrap](https://getbootstrap.com/)

Útlista skal í `readme` hvaða tól eru notað og hvernig þau eru sett upp.

### Web API

Síðurnar mega innihalda hvaða efni sem er, en þær þurfa að nýta eitthvert WebAPI, [sjá námsefni](https://github.com/vefforritun/vef1-2023/tree/main/namsefni/40.html5) eða [lista MDN yfir Web APIs](https://developer.mozilla.org/en-US/docs/Web/API).

Virkni skal vera raunveruleg að einhverju leiti, ekki er nóg að afrita aðeins dæmi úr námskeiði, en það má afrita dæmi og gera ykkar eigin útgáfu af því.

Útlista skal í `readme` hvernig WebAPI er notað.

### Annað

Síður skulu vera með einhverju útliti og mega nota CSS framework eins og dæmi er tekið að ofan.

Setja skal upp Sass, `stylelint` og `eslint` eins og gert hefur verið í öðrum verkefnum. Velja skal hvaða reglur eru notaðar og setja upp `lint` script í `package.json`, verkefni skal ekki hafa neinar villur þegar `npm run lint` er keyrt.

## Netlify

Skila skal verkefninu keyrandi á Netlify.

## Mat

- 15% – `readme` uppsett og útskýrir tól og Web API notað.
- 15% – A.m.k. ein síða uppsett með einhverju efni.
- 30% – Verkefni uppsett með JavaScript tóli og keyrandi á Netlify.
- 30% – Web API notað.
- 10% – `stylelint` og `eslint` sett upp og engar villur.

## Sett fyrir

Verkefni sett fyrir mánudaginn 6. nóvember 2023.

## Skil

Skila skal í Canvas, seinasta lagi fyrir lok dags fimmtudaginn 16. nóvember 2023.

Skilaboð skulu innihalda:

- Slóð á verkefnið keyrandi í hýsingu
- Slóð á GitHub repo fyrir verkefni. Dæmatímakennurum skal hafa verið boðið í repo. Notendanöfn þeirra eru:
  - `ahp9`
  - `dawidniescier`
  - `osk`
  - `polarparsnip`
  - `sturla-freyr`

Skila má eins oft og þið viljið þar til skilafrestur rennur út.

## Einkunn

Leyfilegt er að ræða, og vinna saman að verkefni en **skrifið ykkar eigin lausn**. Ef tvær eða fleiri lausnir eru mjög líkar þarf að færa rök fyrir því, annars munu allir hlutaðeigandi hugsanlega fá 0 fyrir verkefnið.

Ef stórt mállíkan (LLM, „gervigreind“, t.d. ChatGTP) er notað til að skrifa part af lausn skal taka það fram. [Sjá nánar á upplýsingasíða um gervigreind hjá HÍ](https://gervigreind.hi.is/).

Sett verða fyrir tíu minni verkefni þar sem átta bestu gilda 5% hvert, samtals 40% af lokaeinkunn.

Sett verða fyrir tvö hópverkefni þar sem hvort um sig gildir 10%, samtals 20% af lokaeinkunn.

> Útgáfa 0.1
