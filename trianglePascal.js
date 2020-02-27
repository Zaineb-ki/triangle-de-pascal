// function crationTrianglePascal (nbrCollogne){
//     var trianglePascale = [] ;

//     for (let i = 0; i < nbrCollogne ; i++) {
//         trianglePascale[i] = new Array [i+1]
        
//     }
// }



function creationTrianglePascal (nbrligne) {
    var trianglePascale = [];
    
    for (var i = 0; i <= nbrligne ; i++) { 
        trianglePascale[i] = new Array(i);
      
      for (var j = 0; j < i+1; j++) {            
        if (j === 0 || j === i) {
            trianglePascale[i][j] = 1;
        } else {
            trianglePascale[i][j] = trianglePascale[i-1][j-1] + trianglePascale[i-1][j];
        }
      }
    }
    
    return trianglePascale;
  }
  
// document.getElementById("nbrLigne").value ;

function pascale(){

    let p = creationTrianglePascal(document.getElementById("index").value);
    for(let i = 0 ; i<p.length;i++){
    document.getElementById("res").innerHTML += p[i] + '<br>'
  }
}