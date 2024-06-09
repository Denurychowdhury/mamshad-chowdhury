// const roll = 470535;
// const name = 'denury chowdhury';
// // const institute = 'sherpur';
// // const friends =['rohim','korim','jodu'];

// // const obg ={
// //     name:'denury chowdhury',
// //     age :21,
// //     ins :'polytechnic',

// // }
// // if(3<6){
// //     console.log(roll);
// //     console.log(name);
// //     console.log(institute);
// //     console.log(friends);

// // }
// // console.log(obg);
function handlecontact(event){

   event.preventDefault();
//     console.log('contact');
//     console.log(event);
//    console.log(event.target);
//    console.log(event.target.name);
//    console.log(event.target.email);
//    console.log(event.target.message);

const name=event.target.name.value;
const email=event.target.email.value;
const message=event.target.message.value;
console.log(name);
console.log(email);
console.log(message);
   

const successcontainer=document.getElementById("success_container");

console.log(successcontainer);

const nameParagraph=document.createElement('p');
nameParagraph.innerText =`your name : ${name}`;

const emailParagraph =document.createElement('p');
emailParagraph.innerText =`your email: ${email}`;
const messageParagraph =document.createElement('p');
messageParagraph.innerText =`your message :${message}`;


console.log(nameParagraph);
console.log(emailParagraph);
console.log(messageParagraph);

successcontainer.appendChild(nameParagraph);
successcontainer.appendChild(emailParagraph);
successcontainer.appendChild(messageParagraph);
}

const imageArray =[
   {
   url :"./image/project/image 3.png",
},
{
   url:"./image/project/image 5.png",
},
{
   url:"./image/project/image 6.png",
},
{
   url:"./image/project/image 7.png",
},
{
   url:"./image/project/image 7.png",
}
];

function handleshowmoreproject(){

   const projectcontainer =document.getElementById('projects');

   const projectdiv=document.createElement('div');
   // console.log(projectdiv)
   console.log('click',projectcontainer);

   for(const item of imageArray){
      // console.log(item);
      const projectdivimage=document.createElement('div');
      projectdivimage.classList.add("project")
      projectdivimage.innerHTML=`
      <img src="${item.url}">
      `;
      projectcontainer.appendChild(projectdivimage);
      console.log(projectdivimage);
   }
}







// const firsturlobject =imageArray[0]
// const secondurlobject =imageArray[1]

// console.log(imageArray);
// console.log(firsturlobject.url);
// console.log(secondurlobject);
// for (const items of imageArray){
//    console.log(items);
// }
// const imagelength =imageArray.length;
// console.log(imagelength);

// const imageurl =imageArray[0]
// console.log(imageurl);

// for(let index=0;index<5 ; index++){
//    console.log(index);
//    console.log(imageArray[index]);
  
// }