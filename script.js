//object literal for the pet salon
//name, phone, adress(street, number) --> name:"AAA";

const salon={
    name:"The Fashion Pet",
    phone:"555-555-555",
    adress:{
        street:"Ave. University",
        number:"528=k"
    },
    counter:function(){
        alert("A pet was registered!");
    },
    pets:[]

}


//object destructoring
let{name,phone,adress:{street,number},counter,pets}=salon;

document.getElementById("footer-info").innerHTML=`
<p class="text-center"> ${name} ${phone} <br> ${street},${number}  </P>
`;

//console.log(pets);

//object constructor for the pests (multiple)
var petId=0;
class pet{
    constructor(name,age,breed,gender,service,ownerName,contactPhone,){
        this.name=name;
        this.age=age;
        this.breed=breed;
        this.gender=gender;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id=petId;
        petId+=1;
    }
}


//create 2 pets
const Scooby = new pet("Scooby",60,"Full Service","Shaggy","555-666-777");

const Dexter = new pet("Dexter",1,"male","Full Service","Mayleni","222-333-444");

pets.push(Scooby);

pets.push(Dexter);


//gettoing the values from the HTML inputs
var txtName=document.getElementById("petName");
var txtAge=document.getElementById("petAge");
var txtBreed=document.getElementById("petBreed");
var txtGender=document.getElementById("petGender");
var txtService=document.getElementById("petService");
var txtOwnerName=document.getElementById("ownerName");
var txtContactPhone=document.getElementById("contactPhone");


//register function 
function register(){
   const thePet = new pet(txtName.value,txtAge.value,txtBreed.value,txtGender.value,txtService.value,txtOwnerName.value,txtContactPhone.value,);

    console.log(thePet);
    pets.push(thePet);
    console.log(pets);
  
    displayTable(thePet);
    
}

function clear(){
    txtName.value="";
    txtAge.value="";
    txtBreed.value="";
    txtGender.value="";
    txtOwnerName.value="";
    txtContactPhone.value="";    

}



function status(){
    alert("Registered pets: " + pets.length);
    console.log("registered pets: " + pets.length);
   
    cosnsole.log(dogs[0]);
    console.log()
    //travel the array to display pets name
    for (p=0;p<3;p++){
        cosnsole.log(dogs[p].name);

    }
    
}

//status();


function displaList(aPet){
    //select the html element petList
    var list = document.getElementById("petList");
    //create the li code for the pet
    var li=`
    <li id ="${aPet.id}" > ${aPet.name} ${aPet.age} ${aPet.breed} ${aPet.gender} ${aPet.ownerName} ${aPet.contactPhone} <button onclick="deletePet(${pet.id});"> Delete </button></li>
    `;
    //intesrt the li pet in the petList
list.innerHTML+=li;
}

displayTable(Dexter);

displayTable(Scooby);

function displayTable(aPet){
    //** register.html create a <table id=""> </table> without row
    //select the table $ or js (getElementById)
     //create a <tr> <td> </tr>
      //insert the tr in the table

    var table = document.getElementById("petTable");
    var tr= `
    <tr id ="${aPet.id}"> <td>${aPet.name}</td> <td>${aPet.age}</td> <td>${aPet.breed}</td> <td>${aPet.gender}</td> <td>${aPet.ownerName}</td> <td>${aPet.contactPhone}</td> <td>${aPet.service}</td> <td> <button onclick="deletePet(${aPet.id});"> Delete </button> </td> </tr>
    `;
    table.innerHTML+=tr; 
}




function deletePet(petId){

    console.log("delet pet "+ petId);
    //add an id to the tr ot li and add a delete button
    var indexDelete;
    var tr=document.getElementById(petId);
    //search the pet (travel array and find the pet)
    for(var i=0;i<pets.length;i++){
        var selectedId=pets[i].id;
        if(selectedId===petId){
            indexDelete=i;
        }
    }
    //delete from the arrat splice()
    pets.splice(indexDelete,1);
    //delet from the html remove()
    tr.remove();
}


function search(){
    //get the info from the input and save it in a var .value
    var ss=document.getElementById("searchPet").value;
    console.log(ss);
    for(var i=0;i<pets.length;i++){
        var foundPet=pets[i];
        if(foundPet.name.toLowerCase()==ss.toLowerCase()){
            
            console.log("found"+foundPet.id);

            //cr homework //do something to highlight the result on the table
            // use the id ratribute("calss","name");
            //add background or border
            //add css to inputs and to the table(bootstrap)
        }
        else{
            console.log("It dosen't exist");
        }
    }
    
}