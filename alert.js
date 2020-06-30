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

console.log(`---> Chapître 4 - Cours 4 <---`)
var A3 = 1;
while(A3 <= 10){// Boucle en While
    console.log(`la valeur de A3 est ${A3}`);
    A3++;
}
console.log(`La boucle A3 est terminé !`);

console.log(`---> Chapître 4 - Cours 5 <---`)
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

console.log(`---> Chapître 4 - Cours 7 <---`)
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

console.log(`---> Chapitre 5 - Cours 1 <--- Engender des fonction simples`)
var a = 2, b = 3, result;

var AddNumbers = function(){
    result = a + b;
    console.log(result);
}

AddNumbers();
console.log(typeof(AddNumbers));

console.log(`---> Chapitre 5 - Cours 2 <--- Envoie de donnée dans une fonction`)
var a = 2, b = 3, result;

function AddNumbers2(num1 = 2, num2 = 3){
    result = num1 + num2;
    console.log(result);
}

AddNumbers2(4);// Les variable entre parenthèse sont prioritaire à num1
AddNumbers2(10, 5);// Pareil ici mais pour num2

console.log(`---> Chapitre 5 - Cours 3 <--- Retourner de donnée dans une fonction`)
function AddNumbers3(num1 = 2, num2 = 3){
    var result = num1 + num2;
    return result;// ICI commande clé: return
}

var AddNumbers3 = AddNumbers3(10, 5);
console.log(AddNumbers3);