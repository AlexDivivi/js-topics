const listContainer = get(".list-container");

let topicsArray = [
  {
    head: "Topic 1",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil!",
    button: false
  },
  {
    head: "Topic 2",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil!",
    button: true
  },
  {
    head: "Topic 3",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil!",
    button: false
  },
  {
    head: "Topic 4",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil!",
    button: false
  },
  {
    head: "Topic 5",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil!",
    button: true
  },
  {
    head: "Topic 6",
    text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil!",
    button: false
  }
];

renderTopics();

function renderTopics() {
  listContainer.innerHTML = null;
  topicsArray.forEach((obj, index) => {
    const listItem = createListItem(obj, index);
    listContainer.insertAdjacentElement("afterbegin", listItem);
  });
}

function createListItem(obj, index) {
  const newListItem = document.createElement("div");
  // add class list for div

  const head = document.createElement("h2");
  head.innerText = obj.head;
  const text = document.createElement("p");
  text.innerText = obj.text;
  const btn = btnLogic(obj, index, text);

  newListItem.insertAdjacentElement("afterbegin", head);
  newListItem.insertAdjacentElement("beforeend", text);
  newListItem.insertAdjacentElement("beforeend", btn);

  return newListItem;
}

function btnLogic(obj, index, text) {
  const newBtn = document.createElement("button");
  newBtn.addEventListener("click", event => {
    obj.button = !obj.button;
    text.classList.toggle("hide");
  });
  return newBtn;
}

function get(sel) {
  return document.querySelector(sel);
}
