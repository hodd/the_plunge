console.log('Hello Node.js !');

//  télécharge un fichier sur Internet
// et affiche un message quand il a terminé

request('http://www.site.com/fichier.zip', function (error, response, body) {
    console.log("ok");
});
console.log("Un café ?");

// Résultat identique au code précédent

var callback = function (error, response, body) {
    console.log("Done !");
};
// dès que c'est fini
request('http://www.site.com/fichier.zip', callback); // appelle la fonction
console.log("Bosse en //");