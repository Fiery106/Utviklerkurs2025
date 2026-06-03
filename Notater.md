# Notater

> *Følgende er notater jeg brukte da jeg har utviklet nettsiden.*

## BACKEND

*Admin konto:*

Har tilgang til å lage grupper og skriv eller slette post og brukere. Når admin lager en gruppe, må man legge til hvilket måned og årspunktet starter kurset slik at det oppdateres på hovedsiden. Hver gruppe har sin kode som kan gis til brukerne å melde seg på gruppen og begynne å være en del av kurset.

*Bruker konto:*

Alle kan lage sin egen konto men kun de som har tilgang til kurset kan begynne å legge ut post på forumet. De må ha en kode til å se på og bruke de gruppene som finnes på nettsiden.

Backend delen av nettsiden skal bygges opp ved å bruke Postgresql, express.js og axios? (Tror det er riktig)

## Informasjon

### post

- Tittel
- Innhold
- Tema (enten diskusjon eller leksjon)
- Gruppe (hvilke gruppe tilhører posten)
- Filer man kan nedlaste
- Dato

Kommentarer
    - Innhold
    - Kontonummer til riktig navn

### snipppet

- Tittel
- Innhold (html)

### brukerkonto

- Navn
- I grupper (array med lenker)
- Bakgrunnsfarge
- Tilgang å skrive kommentarer/poster
- Forespørsler for serveren (nedlastet filer, aktivitet på forumet, osv. Noe kun admin kan se)
- Kommentarer

### admin

- Kan legge/redigere eller slette grupper og kommentarer

## Alle sidene

### Hovedside

- Landing page
- Deltaker
- Bedrift
- Nav

### Kursportal

- Landing page med flere grupper
- Alle post med søk
- Ny post
- Vis post
- Rediger post
- Register
- Innlogging
- Kontoside

### Begge

- Feil (404)
- Leaflet

## Andre

Dette prosjektet ble først lagret på 17. september 2025 og utviklet av Norbert Pap. Utviklerkurset og sin nettside er eiet av Alf as.

### Responsive images

- 128px stor, 96px små for businesskort profilbildene
- 480x361 for navigasjonsbildene
- 55x83 for markeren på kartet
- 1096x823 for LCP på mobil

### Konto farger

Lysmodus + mørkmodus

alf-blue `rgb(0, 167, 181)` + cyan-800
klosterhagen `rgb(187, 192, 117)` + lime-800
aurora `rgb(247, 166, 0)` + amber-800
megafon `rgb(205, 23, 25)` + red-800
urbant `rgb(121, 175, 62)` + green-800

### Font Awesome Ikoner

- `fas` = Free Solid
- `far` = Free Regular
- `fab` = Free Brands

``` html
<FontAwesomeIcon :icon="['fas', 'house']" aria-labelledby="alt" />
```

**Library**
(
    faUser, faBuilding, faPeopleGroup, faArrowRight, faPhone, faEnvelope, faArrowUpRightFromSquare, faLink, faSun, faMoon, faSearch, faAddressCard, faBars, faCircleXmark, faEllipsisVertical, faDownload, faArrowRightToBracket, faHouseChimney, //SOLID
    faPenToSquare, faSquarePlus, faTrashCan, faMessage, faCopyright,  //REGULAR
    faHtml5, faCss, faJs, faReact, faAngular, faBootstrap, //CODE
    faFacebook, faSquareInstagram, faLinkedin, faYoutube //SOCIALS
)

### Google Fonts

- [Roboto](https://fonts.google.com/specimen/Roboto)
- [Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed)
- [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)

### Dokumentasjon

- [Vue.js](https://vuejs.org/guide/introduction.html)
- [Vue Router](https://router.vuejs.org/guide/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)
- [PostGreSQL](https://www.postgresql.org/docs/)

Telefonnumre er skrevet på denne måten: "+47 XX XX XX XX"
