    var pname= document.getElementById('pname')
var url= document.getElementById('url')
  var sud=document.getElementById("sud")

 var vs=document.getElementById('vs')
var del=document.getElementById('del')


var sites=[];

if(localStorage.getItem("product")){

sites=JSON.parse(localStorage.getItem("product"));
displaydate();
}


function sitex(){
var pro={
    ppname:pname.value,
    uurl:url.value,

}
    sites.push(pro);

    localStorage.setItem( "product" ,JSON.stringify(sites));
    displaydate();

}


function displaydate(){

var cartona="";
for( var i=0;i<sites.length;i++){

cartona+=`
<tr>
        <td >${i+1}</td>
        <td>${sites[i].ppname}</td>
        <td >${sites[i].uurl} <td/ >
        <td><a href="${sites[i].uurl}" target="_blank"class="border-3  btn py-2 px-4 bg-info text-white text-decoration-none">visit</a></td>
        <td><button onclick="deletdata(${i})" class="border-3 btn py-2 px-4 bg-danger">Delete</button></td>"
    </tr>
`
}
document.getElementById('rowdata').innerHTML=cartona;

};


function deletdata(indix){
    
 sites.splice(indix,1);
    localStorage.setItem("product",JSON.stringify(sites));
    displaydate();

};