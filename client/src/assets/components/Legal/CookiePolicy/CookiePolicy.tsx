import React from 'react'
import "./CookiePolicy.css"

function CookiePolicy() {

  return (

    <div className='cookiePolicy'>
        
        <p>FoodButcherShop använder kakor (cookies) vilket innebär att vi exempelvis sparar inloggningsinformation så att vi känner igen återkommande besökare. Detta gör hemsidan bekvämare och förbättrar kundupplevelsen.
        Cookies är en liten textfil som blir lite som ett ID-kort och kan göra användarens upplevelse mer effektiv.</p>
        <h3>Inkluderar</h3>
        <ul>
            <li>Sparar varor ni lagt i er varukorg.</li>
            <li>Förifyllning av checkoutformuläret.</li>
        </ul>
        <h3>Två typer av Cookies</h3>
        <p><strong>Temporära kakor/Session Cookies</strong> innehåller tillfällig information under tiden en besökare är inne på en webbsida. Sparas inte utan försvinner direkt när ni loggar ut.</p>
        <p><strong>Permanent Cookie</strong> sparas som en fil på er egen dator. Den används främst för att kunna anpassa en webbplats efter besökarens önskemål, sparar inställningar och information från ett besök till nästa.</p>
        <h3>Tredjepartsprogram</h3>
        <p>Tredjepartprogram (exempelvis Google Analytics) används inte över huvud taget på denna webbplats.</p>
        <div className='spacer'></div>
        <p>Om ni inte vill ta emot cookies har ni möjlighet att ändra inställningar för cookies i er webbläsare. Det går att spärra cookies men observera att ni då inte kommer kunna använda alla funktioner på sidan.</p>
        <div className='spacer'></div>
        <p>Klicka på följande länkar för att läsa mer om hur ni ändrar inställningarna för cookies:</p>
        <ul>
            <li className='linkList'><a target='_blank' href="http://support.mozilla.org/sv/kb/Kakor?redirectlocale=en-US&redirectslug=Cookies">Inställningar för cookies i Firefox</a></li>
            <li className='linkList'><a target='_blank' href="https://support.google.com/chrome/answer/95647?hl=sv&hlrm=en">Inställningar för cookies i Chrome</a></li>
            <li className='linkList'><a target='_blank' href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">Inställningar för cookies i Safari</a></li>
            <li className='linkList'><a target='_blank' href="https://support.microsoft.com/sv-se/help/17442/windows-internet-explorer-delete-manage-cookies">Inställningar för cookies i Internet Explorer</a></li>
        </ul>
        <h3>Cookies på FoodButcherShop</h3>
        <table className='cookieTable'>
            <tr>
                <th>Namn</th>
                <th>Beskrivning</th>
                <th>Livslängd</th>
            </tr>
            <tr>
                <td>FBS-Session</td>
                <td>Webplatsfunktionalitet</td>
                <td>Max Ett dygn eller till utloggning</td>
            </tr>
            <tr>
                <td>FBS-Session.sig</td>
                <td>Webplatsfunktionalitet</td>
                <td>Max Ett dygn eller till utloggning</td>
            </tr>
            <tr className='hidden'>
                <td>FBS-Settings</td>
                <td>Webplatsfunktionalitet</td>
                <td>180 dagar</td>
            </tr>
        </table>



    </div>

  )
}

export default CookiePolicy