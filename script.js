(function () {
  const example = document.getElementById("example");
  const cw1 = document.getElementById("cw1");
  const cw2 = document.getElementById("cw2");
  const cw3 = document.getElementById("cw3");
  const answer = document.getElementById("answer");
  const pops = document.getElementById("pop");

  example.addEventListener("click", function () {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((array) => {
        console.log(array);
        answer.innerHTML = JSON.stringify(array);
      });
  });

  cw1.addEventListener("click", function () {
    answer.innerHTML = "Processing...";
    setTimeout(function () {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
          title: "Tytuł nieskomplikowany",
          body: "Treść drogocenna",
          userId: 1,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((post) => {
          answer.innerHTML = `Nowy post o ID = ${post.id} oraz treści ${post.body}`;
        });
    }, 2000);
  });

  cw2.addEventListener("click", function () {
    answer.innerHTML = "Processing...";
    const selectedId = lista.value;
    pops.style.display = "flex";
    fetch(`https://jsonplaceholder.typicode.com/posts/${selectedId}`)
      .then((response) => response.json())
      .then((post) => {
        console.log("Wybrany post:", post);
        answer.innerHTML = `
          <table border="1" style="width: 100%; text-align: center; border-collapse: collapse;">
            <thead>
              <tr>
                <th>ID</th>
                <th>Tytuł</th>
                <th>Treść</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${post.id}</td>
                <td style="color: red;">${post.title}</td>
                <td style="color: green;">${post.body}</td>
              </tr>
            </tbody>
          </table>
        `;
      })
      .finally(() => {
        pops.style.display = "none";
      });
  });

  cw3.addEventListener("click", function () {
    //TODO
  });
})();
