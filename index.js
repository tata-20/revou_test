// javascript
function hitung(){
var bil1= parseInt(document.getElementById("a").value);
var bil2= parseInt(document.getElementById("t").value);
var hasil=0.5*bil1*bil2;
document.getElementById("hasil").value = hasil;
document.getElementById("bil1").value = bil1;
document.getElementById("bil2").value = bil2;
}

function keliling(){
    var s1= parseInt(document.getElementById("sisi1").value);
    var s2= parseInt(document.getElementById("sisi2").value);
    var s3= parseInt(document.getElementById("sisi3").value);
    var jumlah= s1+s2+s3;
    document.getElementById("jumlah").value = jumlah;
    document.getElementById("s1").value = s1;
    document.getElementById("s2").value = s2;
    document.getElementById("s3").value = s3;
}

function hitung2(){
    var bil1= parseInt(document.getElementById("a").value);
    var bil2= parseInt(document.getElementById("t").value);
    var hasil=bil1*bil2;
    document.getElementById("hasil").value = hasil;
    document.getElementById("bil1").value = bil1;
    document.getElementById("bil2").value = bil2;
    }

function keliling2(){
    var angka1= parseInt(document.getElementById("1").value);
    var angka2= parseInt(document.getElementById("2").value);
    var jumlah=2*angka1*angka2;
    document.getElementById("jumlah").value = jumlah;
    document.getElementById("angka1").value = angka1;
    document.getElementById("angka2").value = angka2;
        }