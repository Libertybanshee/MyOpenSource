console.log("Message Nv1");
console.info("Message Nv2");
console.warn("Message Nv3");
console.error("Message Max");

console.log(`---> Chapître 2 - Cours 7 <---`)
document.getElementById('txt').innertHTML = "texte inséré via une command";

var Name = "Zack", Name2 = "Steeve", Data = true, Data2 = undefined, Data3 = function(){};
console.log(Name);
console.log(Name2);
console.log(typeof(Data));
console.log(typeof(Data2));
console.log(typeof(Data3));
//affiche type de donne string, number, undefined, boolean, function où objet. on peut déclarer une variable par son type

var Name = "03";//la variable name est modifié si placé selon le sens de lecture
console.log(Name);

var phrase = "Il a dit : \"C'est une simple phrase\".";
console.log(phrase);

var a = 2, b = 4, c = 3, result;
result = (a + b) * c; 
console.log(result);

result2 = Name + " " + Name2
console.log(result2);

result3 = `Mon jour de naissance est le ${Name}
 et je me nomme ${Name2}`;//utilisation de ` entre ouverture et fermture de ligne + remarqué le retour à la ligne est juste la touche "enter"
console.log(result3);

var d = 2, e = 5, f = 8;
e = e + 10;
f = f += 10;
d++;// où ++d racourcie de d = d + 1 fonction avec -- devenant d = d - 1
console.log(d);
console.log(e);
console.log(f);

var base = 0; //toute nombre où chaine de caractère donne true seul zéro, null, NaN donnera false
var bool = Boolean(base);
console.log(bool);

var colors = new Array();//Commande ancienne pour créer des tableaux
colors[0] = "Rouge";
colors[1] = "Vert";
colors[2] = "Bleu";
colors[5] = "7";
console.log(colors);//cette commande affiche toutes les sous-variables

var colors2 = ["Jaune","Violet","Blanc"];//Commande populaire pour créer des tableaux
console.log(colors2[1]);//Cette commande affiche une sous-variable 

var person = new Object();
person.prenom = "Steeve";
person.nom = "Soliman";
person.age = 34;
person.sex = "M"
console.log(person);//Commande ancienne pour déclarer les object

var person2 = {
 prenom : "Zack",
 nom : "Toleon",
 age : 34,
 sex : "M"
};
console.log(person2.age);//Commande populaire pour déclarer les object
console.log(person2["sex"]);

var age = 8;
if(age >= 18){
    console.log(`Le premier a ${age}ans, vous êtes majeur.`);
}
else{
    console.log(`Le premier a ${age}ans, vous êtes mineur.`);
}

console.log(`---> Chapître 4 - Cours 3 <---`)
/* Question ? valeur si vrai : valeur si faux ;
   ATTENTION --> deux point puis point virgule */
var age2 = 82;

age2 >= 18 ? console.log(`Le second a ${age}ans, vous êtes majeur.`): console.log(`Le second a ${age}ans, vous êtes mineur.`);

var A1 = 2, A2 = 1;// essayer en remplaçant A2 par "A2" avec les guillemet
if(A1 == A2){// essayer === <= >= != !== le double == se nomme strict égalité 
    console.log(`la réponse est true`);
}
else{
    console.log(`la réponse est false`);
}

console.log(`---> Chapître 4 - Cours 4 <---`);
var A3 = 1;
while(A3 <= 10){// Boucle en While
    console.log(`la valeur de A3 est ${A3}`);
    A3++;
}
console.log(`La boucle A3 est terminé !`);

console.log(`---> Chapître 4 - Cours 5 <---`);
for(var i = 1; i <= 10; i++){// Boucle en FOR
    console.log(`la valeur de i est ${i}`);
}
console.log(`La boucle i est terminé !`);

console.log(`---> Chapître 4 - Cours 6 <---`)
for(var k = 1; k <= 10; k++){// Boucle en FOR
    if(k == 5){
        console.log(`La valeur de k est en pause`)
        continue;// Essayer Break
    }
    console.log(`la valeur de k est ${k}`);
}
console.log(`La boucle k est terminé !`);

console.log(`---> Chapître 4 - Cours 7 <---`);
var colors = ["Rouge","Vert","Bleu"];
var person = {
    prenom : "Steeve",
    nom : "Toleon",
    age : 34,
    sex : "M",
};
for(color in colors){
    console.log(`Ma couleur préférée est le ${colors[color]}.`);
}
for(prop in person){
    console.log(`La valeur de la clé ${prop} est ${person[prop]}`); //Essayer en supprimant "est ${person[prop]}"
}

console.log(`---> Chapitre 5 - Cours 1 <--- Créer des fonction simples`);
var a = 2, b = 3, result;

var AddNumbers = function(){
    result = a + b;
    console.log(result);
}

AddNumbers();
console.log(typeof(AddNumbers));

console.log(`---> Chapitre 5 - Cours 2 <--- Envoie de donnée dans une fonction`);
var a = 2, b = 3, result;

function AddNumbers2(num1 = 2, num2 = 3){
    result = num1 + num2;
    console.log(result);
}

AddNumbers2(4);// Les variable entre parenthèse sont prioritaire à num1
AddNumbers2(10, 5);// Pareil ici mais pour num2

console.log(`---> Chapitre 5 - Cours 3 <--- Retourner de donnée dans une fonction`);
function AddNumbers3(num1 = 2, num2 = 3){
    var result = num1 + num2;
    return result;// ICI commande clé: return
}

var AddNumbers3 = AddNumbers3(10, 5);
console.log(AddNumbers3);

console.log(`---> Chapitre 5 - Cours 4 <--- Executer une fonction / Fonction anonyme car sans nom`);
//IIPE Immediately Invoked Function Execution
(function(num3, num4){
    var result = num3 + num4;
    console.log(result);
})(2, 4);

console.log(`---> Chapitre 5 - Cours 5 <--- Appréhender les fonction à flèche`);
//IIPE Immediately Invoked Function Execution
((num5, num6) => { // ICI commande clé: Autre syntaxe pour écrire une fonction
    var result = num5 + num6;
    console.log(result);
})(7, 8);

console.log(`---> Chapitre 5 - Cours 6 <--- La portée des variable`);
var result4;

function AddNumbers4(num7 = 2,num8 = 7){
    var result4;
    result4 = num7 + num8;
    console.log(result4); //Déplacer cette ligne incluant la variable result4 pour tester sa portée
}

AddNumbers4(30, 5); //variable entre parenthère prioritaire

console.log(`---> Chapitre 5 - Cours 7 <--- Remplacer VAR par LET pour déclarer les variables`);
//L'objectif de ce cours de comparé la portée de VAR et LET 
function AddNumbers5(num9 = 2,num10 = 7){
    if(true){
       let result5 = num9 + num10;
        console.log(result5); //Déplacer cette commande hors de la condition pour constater la portée de LET comparé a VAR
    }
}

AddNumbers5(30, 5); //variable entre parenthère prioritaire

console.log(`---> Chapitre 5 - Cours 6 <--- Utiliser CONST pour déclarer des variables`);
//L'ojectif de ce cours apprendre l'utilité de l'argument CONST
const PRENOM2 = "Teddy"; //const signifie constance, déclare des variable qui ne change JAMAIS et doit être écritre en MAJUSCULE
//const PRENOM2 = "Claude" ;//Si vous activez cette ligne, un erreur apparaitra car 

console.log(PRENOM2);

console.log(`---> Chapitre 6 - Cours 1 <--- Découvrir l'objet MATH`);
//Ojectif: Apprendre l'utilité de l'argument Math
let a2 = 2.2, b2 = 6, c2 = 3, myNumber, RNG;

myNumber = Math;//Affiche les possibilité de Math
RNG = Math.random();//cette fonction attribut un chiffre entre 0 et 1

console.log(myNumber);
console.log(RNG);

console.log(`---> Chapitre 6 - Cours 2 <--- Travailler avec l'objet DATE`);

let today = new Date();
let birthday = new Date(1986, 04, 03, 15, 30); // concernant le mois c'est un rey donc indexé à 00 soit 00 = Janviers et 11 = Décembre

console.log(birthday.getDay());// se renseigner sur les argument lié au .get et les objet lié a la date

console.log(`---> Chapitre 6 - Cours 3 <--- Revisiter les chaîne de caractère`);
//Ojectif: découvrir les possibilité object des chaine de caractère (string)
let prenom3 = "Mario";

console.log(prenom3.toLocaleUpperCase());// Découvrir les autres possibilité sur W3schools.com 

console.log(`---> Chapitre 6 - Cours 4 <--- Employer l'objet NUMBER`);

let myNumber2;

myNumber2 = 85.8;

console.log(Number.isInteger(myNumber2));// indique si la variable est un chiffre entiers
console.log(myNumber2.toPrecision(2));// Découvrir les autres possibilité sur W3schools.com 

console.log(`---> Chapitre 6 - Cours 5 <--- Redécouvrir l'objet ARRAY`);

let colors3 = ["Rouge", "Bleu", "Jaune"];

colors3.push("Orange"); //Tester les autres possibilité
colors3.unshift("Orange"); //Tester les autres possibilité

console.log(colors3.join(` - `));// Découvrir les autres possibilité sur W3schools.com 

console.log(`---> Chapitre 6 - Cours 6 <--- S'initier au BOM`);
// BOM signifie Browser Object Model
console.log("Voir le cours vidéo");

console.log(`---> Chapitre 6 - Cours 7 <--- pratiquer BOM`);

console.log(window);
console.log(window.location);
console.log(window.navigator);
console.log(window.document);

console.log(`---> Chapitre 7 - Cours 1 <--- qu'est-ce DOM ?`);
/* DOM signifie Document Object Model 
    Document -> Une page web 
    Object -> Les éléments
    Model -> Une convention, syntaxe */
console.log("Voir le cours vidéo");

console.log(`---> Chapitre 7 - Cours 2 <--- travailler avec les noeuds et les éléments`);
//Ojectif: découvrir les possibilité de l'onglet inspecteur de la console du navigateur
console.log("Voir le cours vidéo");

console.log(`---> Chapitre 7 - Cours 3 <--- Accédez au éléments DOM`);
//Ojectif: découvrir les manipulation d'oject
let header = document.getElementById(`mainHeader`);
let txt = document.getElementById(`txt`);
let active = document.getElementsByClassName(`active`);
let links = document.getElementsByTagName(`a`);
let par = document.getElementsByTagName(`p`);

//Manipulation d'object combiné pour un ciblage précis
let footer = document.getElementById(`mainFooter`);//Ciblera l'ensemble du footer
let focus_footer = footer.getElementsByTagName(`p`);//Ciblera uniquement les paragraphe du footer

console.log(header);
console.log(txt);
console.log(active);
console.log(links);
console.log(par);

console.log(mainFooter);
console.log(focus_footer);

console.log(`---> Chapitre 7 - Cours 4 <--- Utilisier querySelector et querySelectorAll`);
// Ciblé des balises comme sur CSS, différencier querySelector et querySelectorAll

let selected = document.querySelectorAll(`#mainHeader p`);

console.log(selected);

console.log(`---> Chapitre 7 - Cours 5 <--- Modifier les éléments du DOM (Cour à revoir)`);
// Ciblé et utiliser les balises dans la console

let main = document.querySelectorAll(`#mainFooter li`);

console.log(main); // A refaire

console.log(`---> Chapitre 7 - Cours 6 <--- Créer de nouveaux élément dans le DOM (Cour à revoir)`);
// Objectif ajouter un nouvelle puce du tableau nommer Liste 4 dans le footer

//Créer l'element A
let elemA = document.createElement(`a`);
//Changer l'attribut href de l'élément a
elemA.href = `produit.html`;
//Créer un textNode
let linkLabel = document.createElement(`Liste4`);
//Ajoute le texte à l'élément a
elemA.appendChild(linkLabel);
//Créer un élément li
let liElem = document.createElement(`li`);
//ajouter l'élément a à l'élement li
liElem.appendChild(elemA);
//rechercher l'élément ul et y ajouter li crée plutôt
document.querySelector(`#mainFooter ul`).appendChild(liElem);

console.log(`---> Chapitre 7 - Cours 7 <--- Modifier le style CSS avec le Javascript`);
//Utiliser l'argument objet style pour modifer le CSS 

let txtcss = document.getElementById('txt');
txtcss.style.fontSize = 30 ; //Essaie poyr modifier la taille d'écriture

console.log(txtcss);

console.log(`---> Chapitre 8 - Cours 1 <--- Préparer un script pour afficher une image`);
// Prépration des dossier suite dans le fichier randomimage.js

console.log(`---> Chapitre 8 - Cours 2 <--- Comprendre JSON (support manquant vidéo a revoir)`);
// Découvrir l'utiliser JSON pour décoder les longues chaîne de caractères
// variable = `[{très longue chaine de caractère}]`
// la commande JSON.parse(variable)

let ImageFond = document.getElementById(`mainHeader`);

console.log(`---> Chapitre 8 - Cours 3 <--- choisir un élément aléatoire dans un objet ARRAY (support manquant vidéo a revoir)`);
// Créer un système de sélection aléatoire

let randomimage2 = Math.floor(Math.random() * 5);// ICI commande clé code final est image.[Math.floor(Math.random() * 13)];

console.log(randomimage2);

console.log(`---> Chapitre 8 - Cours 4 <--- afficher une image aléatoire (ristourne trouver)`);
// Ecrire le code de sélection et affichage

ImageFond.style.backgroundImage = `url(/image/image-${randomimage2}.jpg)`;// ICI commande clé pour afficher le fichier

console.log(`url(/image/image-${randomimage2}.jpg)`);// ICI commande clé pour sélectionner le fichier

console.log(`---> Chapitre 8 - Cours 5 <--- Vider un élément de son contenu`);
// Découvrir la commande et procedé p

let picInfo = document.getElementById('picInfo');
while(picInfo.firstChild){
    picInfo.removeChild(picInfo.firstChild)
};

console.log(picInfo); //Commande clé entre les ligne 359 à 361, transformer la commande en commentaire pour comprendre

console.log(`---> Chapitre 8 - Cours 6 <--- Affichez du contenu`);
// Objectif: Créer des éléments textes, (revoir le cours vidéo pour afficher un texte aléatoire)

let picTitle = document.createElement(`h1`);
let picTitleContent = document.createTextNode(`BILOBIBLO`);
picTitle.appendChild(picTitleContent);
picInfo.appendChild(picTitle);

console.log(picTitle);

console.log(`---> Chapitre 8 - Cours 7 <--- Appliquez le script sur les autres pages`);
// Cas particulier revoir le cour vidéo, pas vraiment d'ajout

console.log(`---> Chapitre 9 - Cours 1 <--- Comprendre le rôle des évènements (voir le cour vidéo)`);
// Comprendre comment on s'y prendre

console.log(`---> Chapitre 9 - Cours 2 <--- Réagir à des évènements (voir le cour vidéo)`);
// 

console.log(`---> Chapitre 9 - Cours 3 <--- Utiliser addEventListener`);
// Découvrir l'argument AddEventListener 

let galImages = document.querySelectorAll(`#singleGallery img`);

for (let i = 0; i < galImages.length; i++){
    let image = galImages[i];
    image.addEventListener(`click`, () => {alert(`Bonjour, image non déclarez !`)}, false);
    image.addEventListener(`click`, () => {alert(`apprend juste le code`)}, false);
    image.addEventListener(`click`, showSinglePict, false);
}

console.log(galImages);

// Code du Chapitre 9 Cours 7
window.addEventListener(`load`,() => {
    let galleriesRaw = `{Grande et Longue chaîne de caractère venant d'un serveur}`;
    /*let galleries = JSON.parse(galleriesRaw);
    console.log(galleries);*/

// Code du Chapitre 9 Cours 8
    let searchParams = new URLSearchParams(window.location.search);

    /*if(searchParams.has(`id`)){
        let galId = searchParams.get(`id`);
        console.log(galId);
    } else {
        window.location.pathname = 'Opensource.html';
    }*/

    console.log(searchParams.has(`id`));
    console.log(window.location);
    alert(`page chargé`);
},false);

console.log(`---> Chapitre 9 - Cours 4 <--- Inspecter les propriétés des évènements`);
// une autre méthode pour utiliser les évènements et la fenêtre inspection

function showSinglePict(e){
    alert(`apprend cette 2ieme façon de coder`);
    console.log(e);
    let imageE = e.target;
    // Code du cours Chapître 9 Cours 5
    let imageContainer = document.getElementById(`galleryContainer`);
    let bigImage = imageContainer.querySelector(`img`);
    bigImage.src = imageE.src;
    imageContainer.classList.toggle(`visible`);
    imageContainer.addEventListener(`click`, closeSinglePict, false);
}

function closeSinglePict(){
    let imageContainer = document.getElementById(`galleryContainer`);
    imageContainer.classList.toggle(`visible`);
}

console.log(`---> Chapitre 9 - Cours 5 <--- Utiliser l'évènement CLICK`);
// Suite du code dans le chapitre précedént, utiliser l'évènement CLICK pour aggrandir une image

console.log(`---> Chapitre 9 - Cours 6 <--- Animer des éléments avec CSS et Javascript`);
// créer un transition en douceur de l'agrandissement d'image

console.log(`---> Chapitre 9 - Cours 7 <--- Employer ONLOAD`);
// Suite du code dans le chapitre 9 cours 3, découvrir l'objet window

console.log(`---> Chapitre 9 - Cours 8 <--- récupérer les données l'URL `);
// Suite du code dans le chapitre 9 cours 3, redirection de page en cas d'erreur

console.log(`---> Chapitre 9 - Cours 9 <--- Afficher les galeris de photos (voir le cour vidéo)`);
// code final en screenshot, instruction mais inutile car le HTML & CSS suffit
