let lang = prompt("Enter a language code:", "'es', 'de', 'en', or 'fr'");
switch (lang) {
    case "es":
        console.log("Hello World translated in Spanish is: Hola mundo");
        break;
    case "de":
        console.log("Hello World translated in German is: Hallo welt");
        break;
    case "fr":
        console.log("Hello World translated in French is: Bonjour le monde");
        break;
    default:
        console.log("Hello World translated in English is: Hello world");
}