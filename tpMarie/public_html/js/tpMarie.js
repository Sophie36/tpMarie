//fonction teste des parametres non definis
function testParam(value){
    if(value == undefined || value == "" || value == null){
        value = "Pas de valeur";
     }
     else{
         value = value;
     }
    return value;
}

//fonction creation tableau pour Brothers et Sisters
function tableBrothersSisters(value1){
    if(value1 == undefined || value1 == "" || value1 == null){
        value1 = new Array();
    }
    else{
        value1 = value1;
    }
    return value1;
}

//fonction pour valeur obligatoire
function valueOblige(value2){
    if(value2 == undefined || value2 == "" || value2 == null){
        //value2 = prompt("Saisir quelque chose");
    }
    else{
        value2 = value2;
    }
    return value2;
}

function Person(firstName, name, age, kind, profession, mother, father, brothers, sisters, profilPicture){
    this.name = testParam(name);
    this.firstName = valueOblige(firstName);
    this.age = testParam(age);
    this.kind = valueOblige(kind);
    this.profession = testParam(profession);
    this.profilPicture = profilPicture;
    this.mother = mother;
    this.father = father;
    this.brothers = brothers;
    this.sisters = sisters;

	this.addMother = function(firstName, name, age, kind, profession, mother, father, brothers, sisters, profilPicture) {
	    this.mother.push(new Person(firstName, name, age, kind, profession, mother, father, brothers, sisters, profilPicture));
	};
	this.addFather = function(firstName, name, age, kind, profession, mother, father, brothers, sisters, profilPicture) {
	    this.father.push(new Person(firstName, name, age, kind, profession, mother, father, brothers, sisters, profilPicture));
	};
        this.addBrothers = function(firstName, name, age, kind, profession, mother, father, brothers, sisters, profilPicture) {
	    this.brothers.push(new Person(firstName, name, age, kind, profession, mother, father, brothers, sisters, profilPicture));
	};
	this.addsisters = function(firstName, name, age, kind, profession, mother, father, brothers, sisters, profilPicture) {
	    this.sisters.push(new Person(firstName, name, age, kind, profession, mother, father, brothers, sisters, profilPicture));
	};
}
//Parents de father
var papy1 = new Person("Aldo ", "Berman", "80", "M", "Astronaute", [], [], [], [], "img/papy1.jpg");
var mamy1 = new Person("Agathe ", "Zeblouse", "68", "F", "Taxidermiste", [], [], [], [], "img/mamy1.jpg");
var father = new Person("Charles", "Berman", "53", "M", "Geologue", [], [], [], [], "img/father.jpg");
father.addMother(mamy1);
father.addFather(papy1);

//Parents de mother
var papy2 = new Person("Adam", "Labrosse ", "74", "M", "Agriculteur", [], [], [], [], "img/papy2.jpg");
var mamy2 = new Person("Aude", "Javel", "68", "F", "Taxidermiste", [], [], [], [], "img/mamy2.jpg");
var mother = new Person("Agnès", "Labrosse", "58", "F", "Pofesseur", [], [], [], [], "img/mother.jpg");
mother.addMother(mamy2);
mother.addFather(papy2);

//Enfant de mother et father
var son1 = new Person("Jean", "Berman", "23", "M", "Etudiant", [], [], [], [], "img/son1.jpg");
son1.addMother(mother);
son1.addFather(father);

//Femme de son1
var wife1 = new Person("Marie ", "Nofaringite", "22", "F", "Gendarme", [], [], [], [], "img/wife1.jpg");

//Enfant de mother et father
var son2 = new Person("Guillaume", "Berman", "33", "M", "Chomeur", [], [], [], [], "img/son2.jpg");
son2.addMother(mother);
son2.addFather(father);

//Enfant de mother et father
var daughter1 = new Person("Marine", "Berman", "35", "F", "Coiffeuse", [], [], [], [], "img/daugther1.jpg");
daughter1.addMother(mother);
daughter1.addFather(father);

//Mari de daughter1
var husband1 = new Person("Brice", "Glace", "31", "M", "plombier", [], [], [], [], "img/husband1.jpg");
//Enfant de daughter1 et husband1
var child1 = new Person("Albert", "Glace", "12", "M", "Ecolier", [], [], [], [], "img/child1.jpg");
child1.addMother(daughter1);
child1.addFather(husband1);

//Enfant de daughter1 et husband1
var child2 = new Person("Line", "Glace", "7", "F", "Ecolier", [], [], [], [], "img/child2.jpg");
child2.addMother(daughter1);
child2.addFather(husband1);

//Enfant de daughter1 et husband1
var child3 = new Person("Arthure", "Glace", "4", "M", "Ecolier", [], [], [], [], "img/child3.jpg");
child3.addMother(daughter1);
child3.addFather(husband1);

//Enfant de mother et father
var daughter2 = new Person("Aline", "Berman", "29", "F", "Soudeuse", [], [], [], [], "img/daugther2.jpg");
daughter2.addMother(mother);
daughter2.addFather(father);

//Mari de daughter2
var husband2 = new Person("Dereck ", "Tom", "27", "M", "Scientifique", [], [], [], [], "img/husband2.jpg");
//Enfant de husband2 et daughter2
var child4 = new Person("Harry ", "Tom", "10", "M", "Ecolier", [], [], [], [], "img/child4.jpg");
child4.addMother(daughter2);
child4.addFather(husband2);

//Fabrication d'un dom par personne
function create_dom_person(person){
	//creation d'une liste 
        
        //var ul = document.createElement('ul');
      
        var newUl = $('<ul/>',{id: divArbre}).appendTo($('#'+ divArbre+""));
        //creation des lignes de la liste
        $('<li/>',{html : "<img src="+person.profilPicture + "/>"}).appendTo(newUl);
        $('<li/>',{html : " Nom : "+person.name + ""}).appendTo(newUl);
        //var liName = document.createElement('li');
        
        $('<li/>',{html : " Prénom : "+person.firstName + ""}).appendTo(newUl);
        //var liFirstName = document.createElement('li');
        
        $('<li/>',{html : " Age : "+person.age + ""}).appendTo(newUl);
        //var liAge = document.createElement('li');
        
        $('<li/>',{html : " Sexe : "+person.kind + ""}).appendTo(newUl);
        //var liKind = document.createElement('li');
        
        $('<li/>',{html : " Profession : "+person.profession + ""}).appendTo(newUl);
        //var liProfession = document.createElement('li');
        return newUl;
}
        
	
        var divGrandParent = $('<div/>',{id:'divGrandParent'}).appendTo($('#test'));
        $('<div/>',{id : "papy1"}).appendTo(divGrandParent);
        $('<div/>',{id : "mamy1"}).appendTo(divGrandParent);
        $('<div/>',{id : "papy2"}).appendTo(divGrandParent);
        $('<div/>',{id : "mamy2"}).appendTo(divGrandParent);
        
        
    create_dom_person(papy1,'papy1');
    create_dom_person(mamy1,'mamy1');
    create_dom_person(papy2,'papy2');
    create_dom_person(mamy2,'mamy2');
    
    create_dom_person(mother,'mother');
    create_dom_person(father,'father');
    
    create_dom_person(papy2,'papy2');
    create_dom_person(mamy2,'mamy2');
    create_dom_person(daughter1,"daughter1");
    create_dom_person(husband1,"husband1");
    create_dom_person(daughter2,"daughter2");
    create_dom_person(son1,"son1");
    create_dom_person(wife1,"wife1");
    create_dom_person(husband2,"husband2");
    create_dom_person(son2,"son2");

    create_dom_person(child1,"child1");
    create_dom_person(child2,"child2");
    create_dom_person(child3,"child3");
    create_dom_person(child4,"child4");
        /*//fabrication de la ligne pour l'image
        var liProfilPicture = document.createElement('li');
	var imgProfilPicture = document.createElement('img');
	
	imgProfilPicture.src = person.profilPicture;
	ul.appendChild(liProfilPicture).appendChild(imgProfilPicture);

	liName.innerHTML = "Nom : " + person.name;
	ul.appendChild(document.createElement('hr'));
        ul.appendChild(liName);
        
	liFirstName.innerHTML = "Prénom : " + person.firstName;
	ul.appendChild(liFirstName);

	liAge.innerHTML = "Age : " + person.age;
	ul.appendChild(liAge);

	liKind.innerHTML = "Sexe : " + person.kind;
	ul.appendChild(liKind);

	liProfession.innerHTML = "Profession : " + person.profession;
	ul.appendChild(liProfession);  

	return ul;*/

/*//declaration des variable pour ranger chaque grand parent
var divGrandParent = document.createElement('DIV');
//declaration des variable pour ranger chaque parent
var divParent = document.createElement('DIV');
//declaration des variable pour ranger chaque enfant
var divChildren = document.createElement('DIV');
//declaration des variable pour ranger chaque petit enfant
var divLittleChildren = document.createElement('DIV');

var divhr = document.createElement('DIV');

divGrandParent.appendChild(create_dom_person(papy1)).id="papy1";
divGrandParent.appendChild(create_dom_person(mamy1)).id="mamy1";
divGrandParent.appendChild(create_dom_person(papy2)).id="papy2";
divGrandParent.appendChild(create_dom_person(mamy2)).id="mamy2";

divGrandParent.appendChild(document.createElement('hr'));

divParent.appendChild(create_dom_person(mother)).id="mother";
divParent.appendChild(create_dom_person(father)).id="father";

divChildren.appendChild(create_dom_person(daughter1)).id="daughter1";
divChildren.appendChild(create_dom_person(husband1)).id="husband1";
divChildren.appendChild(create_dom_person(daughter2)).id="daughter2";
divChildren.appendChild(create_dom_person(son1)).id="son1";
divChildren.appendChild(create_dom_person(wife1)).id="wife1";
divChildren.appendChild(create_dom_person(husband2)).id="husband2";
divChildren.appendChild(create_dom_person(son2)).id="son2";

divLittleChildren.appendChild(create_dom_person(child1)).id="child1";
divLittleChildren.appendChild(create_dom_person(child2)).id="child2";
divLittleChildren.appendChild(create_dom_person(child3)).id="child3";
divLittleChildren.appendChild(create_dom_person(child4)).id="child4";

//fabrication des divs par generation
document.getElementById('test').appendChild(divGrandParent)
document.getElementById('test').appendChild(divhr).id="littlechild";
divhr.appendChild(document.createElement('hr')).id="aaa";
divhr.appendChild(document.createElement('hr')).id="bbb";
divhr.appendChild(document.createElement('hr')).id="ccc";
divhr.appendChild(document.createElement('hr')).id="ddd";
divhr.appendChild(document.createElement('hr')).id="eee";
divhr.appendChild(document.createElement('hr')).id="fff";
divhr.appendChild(document.createElement('hr')).id="ggg";
divhr.appendChild(document.createElement('hr')).id="horizon3";
divhr.appendChild(document.createElement('hr')).id="hhh";
divhr.appendChild(document.createElement('hr')).id="iii";
divhr.appendChild(document.createElement('hr')).id="jjj";
divhr.appendChild(document.createElement('hr')).id="kkk";

document.getElementById('test').appendChild(divParent);
document.getElementById('test').appendChild(divhr)
document.getElementById('test').appendChild(divChildren);
document.getElementById('test').appendChild(divhr)
document.getElementById('test').appendChild(divLittleChildren);*/



