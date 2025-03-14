// Speichert den aktuellen Darkmode-Status aus dem localStorage
let darkmode = localStorage.getItem('darkmode')

// Wählt den Theme-Switch-Button über seine ID aus
const themeSwitch = document.getElementById('bölüm_theme-switch')

// Funktion, um den Darkmode zu aktivieren:
const enableDarkmode = () => {
   // Fügt dem body-Element die Klasse 'darkmode' hinzu
   document.body.classList.add('darkmode')
   // Speichert den Status 'active' im localStorage
   localStorage.setItem('darkmode', 'active')
}

// Funktion, um den Darkmode zu deaktivieren:
const disableDarkmode = () => {
   // Entfernt die Klasse 'darkmode' vom body-Element
   document.body.classList.remove('darkmode')
   // Setzt den Status im localStorage auf null
   localStorage.setItem('darkmode', null)
}

// Beim Laden der Seite: Wenn der Darkmode im localStorage aktiviert ist, aktiviere ihn
if(darkmode === "active") enableDarkmode()

// Fügt einen Event-Listener zum Theme-Switch-Button hinzu
themeSwitch.addEventListener("click", () => {
   // Liest den aktuellen Status aus dem localStorage
   darkmode = localStorage.getItem('darkmode')
   // Verwendet einen ternären Operator: Wenn Darkmode nicht aktiv ist, aktiviere ihn; sonst deaktiviere ihn
   darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})