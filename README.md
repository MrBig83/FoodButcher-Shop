# FoodButher Shop
### Examensarbete för "Webutveckling inom E-handel" på MedieInstitutet - 2024

## Köra projektet: 
1. Clona ner repot och spara på valfri plats.
2. Öppna en terminal och navigera till projektets rotmapp/server
3. Skriv kommandot `npm install` för att installera beroenden. (Dessa finns specifierade längre ner)
4. Starta ytterligare en terminal och navigera till projektets rotmapp/client
5. Skriv kommandot `npm install` för att installera beroenden. (Dessa finns specifierade längre ner)
6. Kopiera .env-filen som tilldelats via itsLearning (i inlämningsboxen) och klistra in den i projektets rotmapp/server
7. I din första terminal (som nu har installerat alla beroenden för servern) skriver du `npm start` för att starta backend servern.
8. I din andra terminal (som nu har installerat alla beroenden för front end) skriver du `npm run dev` för att starta webservern för att presentera sidan.
9. Klicka på länken i din andra terminal (den som hanterar front end) eller skriv `o` och tryck `Enter`. 

## Navigera på sidan: 
Sidan fungerar som vilken E-handel som helst. Du kan skapa en egen användare och prova att genomföra ett köp eller varför inte genomföra ett köp som gäst? 
För att komma åt admin-rättigheterna på sidan behöver man logga in med ett admin-konto. Detta görs med 
***Användarnamn:*** `robban@mail.com` <br/>
***Lösenord:*** `robban`

Nu kommer det att visas en ikon för "Adminpanel" i headern. I adminpanelen kan du administrera produkter (uppdatera, ta bort och lägga till), du kan även se alla ordrar som lagts och uppdatera orderstatus till "Levererad". 

- Mycket nöje!

## Beroenden (Samtliga installeras automatiskt vid respektive `npm install` )
### Backend: 
```
    bcrypt v.5.1.1
    cors v.2.8.5
    dotenv v.16.3.1
    express v.4.18.2
    express-async-errors v.3.1.1
    mongodb v.6.3.0
    mongoose v.8.0.3
  
  Beroenden för utvecklarmiljön: 
    cookie-session v.2.0.0
    joi v.17.11.0
    nodemon v.3.0.2
```
### Frontend: 
```
    @fortawesome/fontawesome-svg-core v.6.5.1
    @fortawesome/free-brands-svg-icons v.6.5.1
    @fortawesome/free-regular-svg-icons v.6.5.1
    @fortawesome/free-solid-svg-icons v.6.5.1
    @fortawesome/react-fontawesome v.0.2.0
    react v.18.2.0
    react-dom v.18.2.0
    react-router-dom v.6.21.0
  
  Beroenden för utvecklarmiljön: 
    @types/react v.18.2.43
    @types/react-dom v.18.2.17
    @typescript-eslint/eslint-plugin v.6.14.0
    @typescript-eslint/parser v.6.14.0
    @vitejs/plugin-react v.4.2.1
    eslint v.8.55.0
    eslint-plugin-react-hooks v.4.6.0
    eslint-plugin-react-refresh v.0.4.5
    typescript v.5.2.2
    vite v.5.0.8
```
  
