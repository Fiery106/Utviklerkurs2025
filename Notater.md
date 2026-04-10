# Notater
> *Følgende er notater jeg brukte da jeg har utviklet nettsiden.*

Telefonnumre er skrevet på denne måten: "+47 XX XX XX XX"

## BACKEND

*Admin konto:*

Har tilgang til å lage grupper og skriv eller slette postene og brukere. Når admin lager en gruppe, må man legge til hvilket måned og årspunktet starter kurset slik at det oppdateres på hovedsiden. Hver gruppe har en kode som kan gis til brukerne å melde de seg på gruppen og begynne å chatte og være en del av kurset.   

*Bruker konto:*

Alle kan lage sin egen konto men kun de som har tilgang til kurset kan bruke det for noe. De må ha en kode til å se på og bruke disse gruppene. De har begrensets tilgang til nettsiden men de kan likevel legge ut postene i diskusjon fane. 

Backend delen av nettsiden skal bygges opp ved å bruke Postgresql, express.js og axios? (Tror det er riktig)


## Informasjon

### post
- Tittel
- Innhold
- Tema (enten diskusjon eller leksjon)
- Gruppe
- Filer
- Dato
- Kommentarer
    - Innhold
    - Kontonummer

### snipppet
- Tittel
- Innhold (html)

### brukerkonto
- Navn
- Tilgang til grupper (array med lenker)
- Tilgang å skrive kommentarer/poster
- Nedlastet filer (kun admin)
- Kommentarer

### admin
- Kan legge/redigere eller slette grupper og kommentarer


## Alle sidene
**Hovedside**
- Landing page
- Deltaker
- Bedrift
- Nav

**Kursportal**
- Landing page med flere grupper
- Alle post med søk
- Ny post
- Vis post 
- Rediger post
- Register
- Innlogging
- Kontoside

**Begge**
- Feil (404)
- Leaflet ?
- Kontakt oss?

Formatering for *.md* filer: [Basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)

Original Source Koden fra [kilavila](https://github.com/kilavila):<br>
https://github.com/kilavila/utviklerkurs

## Font Awesome Ikoner
- `fas` = Free Solid
- `far` = Free Regular
- `fab` = Free Brands

<FontAwesomeIcon :icon="['fas', 'house']" aria-labelledby="alt" />

**Library**
(
    faUser, faBuilding, faPeopleGroup, faArrowRight, faPhone, faEnvelope, faArrowUpRightFromSquare, faLink, faSun, faMoon, faSearch, faAddressCard, faBars, faCircleXmark, faEllipsisVertical, faDownload, faArrowRightToBracket, faHouseChimney, //SOLID
    faPenToSquare, faSquarePlus, faTrashCan, faMessage, faCopyright,  //REGULAR
    faHtml5, faCss, faJs, faReact, faAngular, faBootstrap, //CODE
    faFacebook, faSquareInstagram, faLinkedin, faYoutube //SOCIALS
)

## Google Fonts 
[Roboto](https://fonts.google.com/specimen/Roboto)<br>
[Roboto Condensed](https://fonts.google.com/specimen/Roboto+Condensed)<br>
[Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)

## Dokumentasjon
[Vue.js](https://vuejs.org/guide/introduction.html)<br>
[Vue Router](https://router.vuejs.org/guide/)<br>
[Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)<br>
[PostGreSQL](https://www.postgresql.org/docs/)


## Andre

Dette prosjektet ble først lagret på 17. september 2025 og utviklet av Norbert Pap. Utviklerkurset og sin nettside er eiet av Alf as. 