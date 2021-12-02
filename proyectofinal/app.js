// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCec3tg2197k3J2YcEfSD7GUFsix3PlaRo",
    authDomain: "iotej1.firebaseapp.com",
    projectId: "iotej1",
});
  
var db = firebase.firestore();

var tabla = document.getElementById('tabla');
db.collection("users").onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data().sensor_1}`);
        tabla.innerHTML += `
        <tr>
        <th scope="row">${doc.id}</th>
        <td>${doc.data().pote}</td>
        <td>${doc.data().lm35}</td>
        <td>${doc.data().boton}</td>
        <td>OFF</td>
        <td>ON</td>
        <td>OFF</td>
        </tr>
        `
    });
});

var cont=1;
var s1=0;
var s2=0;
var s3=0;
var m1=0;
var m2=0;
var m3=0;

console.log(cont)
function Manual(){
    console.log(cont)
    if(cont==0){
        cont=1;
        alert('Sistema Automatico Activado');
        var tabla2 = document.getElementById('tabla2');
        db.collection("users").onSnapshot((querySnapshot) => {
            tabla2.innerHTML = '';
            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data().sensor_1}`);
                tabla2.innerHTML += `
                <tr>
                <th scope="row">${doc.id}</th>
                <td><button id="btns1" class="btn btn-warning  disabled">I/O</button></td>
                <td><button id="btns2" class="btn btn-warning  disabled">I/O</button></td>
                <td><button id="btns3" class="btn btn-warning  disabled">I/O</button></td>
                <td><button id="btnm1" class="btn btn-warning" disabled>I/O</button></td>
                <td><button id="btnm2" class="btn btn-warning" disabled>I/O</button></td>
                <td><button id="btnm3" class="btn btn-warning" disabled>I/O</button></td>
                </tr>
                `
        });
    })
    }else{
        cont=0;
        alert('Al pasar los sensores a estado de manual se deshabilitaran los protocolos automaticos Sistema Manual Activado');
        var tabla2 = document.getElementById('tabla2');
    db.collection("users").onSnapshot((querySnapshot) => {
        tabla2.innerHTML = '';
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().sensor_1}`);
            tabla2.innerHTML += `
            <tr>
            <th scope="row">${doc.id}</th>
            <td><button id="btns1"  onclick=estado_s1() class="btn btn-danger">I/O</button></td>
            <td><button id="btns2"  onclick=estado_s2() class="btn btn-danger">I/O</button></td>
            <td><button id="btns3"  onclick=estado_s3() class="btn btn-danger">I/O</button></td>
            <td><button id="btnm1"  onclick=estado_m1() class="btn btn-danger">I/O</button></td>
            <td><button id="btnm2"  onclick=estado_m2() class="btn btn-danger">I/O</button></td>
            <td><button id="btnm3"  onclick=estado_m3() class="btn btn-danger">I/O</button></td>
            </tr>
            `
        });
    })
    }
}
function estado_s1(){
    if(s1==0){
        document.getElementById("btns1").style.background ="green";
        s1=1;
    }
    else{
        document.getElementById("btns1").style.background ="red";
        s1=0;
    }

}

function estado_s2(){
    if(s2==0){
        document.getElementById("btns2").style.background ="green";
        s2=1;
    }
    else{
        document.getElementById("btns2").style.background ="red";
        s2=0;
    }

}

function estado_s3(){
    if(s3==0){
        document.getElementById("btns3").style.background ="green";
        s3=1;
    }
    else{
        document.getElementById("btns3").style.background ="red";
        s3=0;
    }

}

function estado_m1(){
    if(m1==0){
        document.getElementById("btnm1").style.background ="green";
        m1=1;
    }
    else{
        document.getElementById("btnm1").style.background ="red";
        m1=0;
    }

}

function estado_m2(){
    if(m2==0){
        document.getElementById("btnm2").style.background ="green";
        m2=1;
    }
    else{
        document.getElementById("btnm2").style.background ="red";
        m2=0;
    }

}
function estado_m3(){
    if(m3==0){
        document.getElementById("btnm3").style.background ="green";
        m3=1;
    }
    else{
        document.getElementById("btnm3").style.background ="red";
        m3=0;
    }

}