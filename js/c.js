var fobj = document.getElementById("f1");
var objInd = document.getElementById("uri").value;

loadComment();

fobj.addEventListener("submit", (event) => {
  event.preventDefault();
  var objUser = document.getElementById("namef").value;
  var objEmail = document.getElementById("emailf").value;
  var objComment = document.getElementById("comment").value;

  const dataJson = {
    username: objUser,
    section: objInd,
    details: objComment,
    email: objEmail,
  };  

  saveComment(dataJson);
});

async function saveComment(dataJson) {
  try {
    console.log("saving comment");
    await fetch("/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataJson),
    });

    document.getElementById("namef").value = "";
    document.getElementById("emailf").value = "";
    document.getElementById("comment").value = "";
    loadComment();
  } catch (error) {
    console.error("Could no save comments:", error);
  }
}

async function loadComment() {
  try {
    console.log("loading comment");

    const fpromiseG = await fetch("/comment", {
      headers: {
        ind: objInd,
      },
    });

    const data = await fpromiseG.json();
    commentListObject = document.getElementById("commentlist");
    commentListObject.innerHTML = buildComment(data);
  } catch (error) {
    console.error("Could no get comments:", error);
  }
}

function buildComment(data) {
  var c = "";

  for (var i = 0; i < data.length; i++) {
    c =
      c +
      `<li id="comment01">
      <cite>${data[i].username} (${data[i].day.substring(0, 10)})</cite>
      <p>${data[i].details}</p>
      </li>`;
  }

  return c;
}
