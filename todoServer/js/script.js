// TODOLIST
const todoItems = document.getElementById("todo-items");
const btnTodo = document.getElementById("todo-submit");

const review = document.getElementById("review");
const email = document.getElementById("email");
const name = document.getElementById("name");

const form = document.getElementsByTagName("form");
const url = "https://quiet-spire-94328.herokuapp.com/reviews";

function clear() {
  review.value = "";
  email.value = "";
  name.value = "";
  todoItems.innerHTML = "";
}

function loadingTodoList() {
  clear();
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      let reviews = json.reviews;
      reviews.forEach((element) => {
        const div = document.createElement("div");
        const closeDiv = document.createElement("button");
        closeDiv.classList.add("closeVisible");

        div.classList.add("item");
        closeDiv.innerHTML = "Delete";

        const count = document.querySelectorAll(".item").length;
        const countClose = document.querySelectorAll(".closeVisible").length;
        console.log(countClose);

        div.innerHTML =
          "<div>Name: " +
          element.name +
          "</div>Email: " +
          "<div>" +
          element.email +
          "</div>Review: " +
          "<div>" +
          element.review +
          "</div>";

        div.id = `id${count}`;
        closeDiv.id = `close${count}`;

        todoItems.append(div);
        div.append(closeDiv);
        deleteTodo(element.id)
      });
    })
    .catch(() => {
      console.log(ERROR);
    });
}

loadingTodoList();

btnTodo.addEventListener("click", (e) => {
  e.preventDefault();

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name: name.value,
      email: email.value,
      review: review.value,
    }),
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      loadingTodoList();
    });
});


function deleteTodo(id) {
  const deleteBtn = document.querySelectorAll(".closeVisible");
  deleteBtn.forEach((item) =>
    item.addEventListener("click", () => {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ id: id }),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          loadingTodoList();
        })
        .catch(function (error) {
          console.log(error);
        });
    })
  );
}