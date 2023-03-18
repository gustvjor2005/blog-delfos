var fobj = document.getElementById("f1");
var objInd = document.getElementById("uri").value;

loadComment();

fobj.addEventListener('submit', (event) => {

  event.preventDefault();

  var objUser = document.getElementById("namef").value;
  var objEmail = document.getElementById("emailf").value;
  var objComment = document.getElementById("comment").value;
 
  dataJson = {"username":objUser,"section":objInd, "details":objComment, "email": objEmail};

  const fpromiseP = fetch("http://localhost:8090/api/comment", {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataJson) 
    });  

  fpromiseP.then((response) => {
  
      if (!response.ok){
          throw new Error("Ocurrio un error");
      } else {
          return response.text();
      }
  })
  .then((data) => {

    document.getElementById("namef").value = "";
    document.getElementById("emailf").value = "";
    document.getElementById("comment").value = "";
    loadComment();
    console.log(data);

  })
  .catch((error) => {
    console.error('Error:', error)
  });

});

function loadComment(){

  console.log("load comment");

  const fpromiseG = fetch("http://localhost:8091/api/comment", {
    headers: {
        'ind': objInd
    }
    });  

  fpromiseG.then((response) => {

    if (!response.ok){
      throw new Error("Error de invocacion al api");
    }else{
      return response.json();
    }
  
  })
  .then((data) => {
    var obj = document.getElementById("commentlist");
    obj.innerHTML = buildComment(data);

    console.log(data[0]);
  
  });
  
}

function buildComment(data){

    var c = "";
  
    for (var i = 0; i < data.length; i++){
    
      c = c + `<li id="comment01">
      <cite>${data[i].username} (${data[i].day.substring(0, 10)})</cite>
      <p>${data[i].details}</p>
      </li>`;
  
    }
  
    return c;
  
}