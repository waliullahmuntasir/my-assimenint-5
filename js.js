var inputNumOneParsed 
var mainamuntmmmmm
document.getElementById('donite-id').addEventListener('click', function(event) {
    event.preventDefault();


    var mainamunt = document.getElementById('balancleft').innerText;
     mainamuntmmmmm = parseInt(mainamunt);

    var balanceminus = document.getElementById('balanclefttttt').innerText;
    var balanceminussss = parseInt(balanceminus);


    var inputNumOne = document.getElementById('input-num').value;
    inputNumOneParsed = parseInt(inputNumOne);

    var inputMinus = mainamuntmmmmm - inputNumOneParsed;


    document.getElementById('balancleft').innerText = inputMinus;
    var balanceminussssuiii = inputNumOneParsed + balanceminussss;
    var jfiodhb = document.getElementById('balanclefttttt').innerText = balanceminussssuiii
    console.log(jfiodhb)
   


    console.log(inputMinus);
});
document.getElementById('traction-list').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('headertag').style.display = "none";
    document.getElementById('traction-list').style.display = "none";
    document.getElementById('mainthinid').style.display = "none";
    console.log(inputNumOneParsed);
    var p = document.createElement('p');
    p.innerText = `Add taka ${inputNumOneParsed} balance left ${mainamuntmmmmm}`;
    document.body.append(p);
    console.log(p);
});
document.getElementById('everthid').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('headertag').style.display = "";
    document.getElementById('traction-list').style.display = "";
    document.getElementById('mainthinid').style.display = "";
 

});
