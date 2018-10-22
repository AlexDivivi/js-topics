const listContainer = get('.list-container')
const newTopic = get('.new-topic')
let inphead = ''
let inptext = ''

let topicsArray = [
  {
    head: 'Topic 1',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil!',
    button: false
  },
  {
    head: 'Topic 2',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil!',
    button: true
  },
  {
    head: 'Topic 3',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil!',
    button: false
  },
  {
    head: 'Topic 4',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil!',
    button: false
  },
  {
    head: 'Topic 5',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil!',
    button: true
  },
  {
    head: 'Topic 6',
    text:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, id nihil! Aut animi perferendis obcaecati expedita soluta quasi vel praesentium consequuntur minus libero ipsum incidunt voluptates inventore voluptatem sint ipsa explicabo cumque mollitia, quaerat asperiores, fugiat illum enim? Quo aliquam, odit blanditiis veritatis velit adipisci corrupti quod quis fugit nihil!',
    button: false
  }
]

renderTopics()

newTopic.addEventListener('click', event => {
  inphead = prompt('Please enter Headline:', '')
  inptext = prompt('Please enter Text', '')
  renderTopics()
})

function renderTopics() {
  listContainer.innerHTML = null
  topicsArray.forEach((obj, index) => {
    const listItem = createListItem(obj, index)
    listContainer.insertAdjacentElement('afterbegin', listItem)
  })
}

function createListItem(obj, index) {
  const newListItem = document.createElement('div')
  //add class list for div
  newListItem.classList.add('content-box')

  const newHead = document.createElement('div')
  newHead.classList.add('content-head')
  const head = document.createElement('h2')
  head.innerText = obj.head

  const newText = document.createElement('div')
  newText.classList.add('content-main')
  const text = document.createElement('p')
  text.innerText = obj.text

  const btn = btnLogic(obj, index, newText)
  btn.classList.add('btn')
  btn.innerHTML = '<i class="fas fa-text-height"></i>'

  newHead.insertAdjacentElement('afterbegin', head)
  newHead.insertAdjacentElement('beforeend', btn)
  newText.insertAdjacentElement('afterbegin', text)
  newListItem.insertAdjacentElement('beforeend', newHead)
  newListItem.insertAdjacentElement('beforeend', newText)

  return newListItem
}

function btnLogic(obj, index, newText) {
  const newBtn = document.createElement('button')
  newBtn.addEventListener('click', event => {
    obj.button = !obj.button
    newText.classList.toggle('hide')
  })
  return newBtn
}

function get(sel) {
  return document.querySelector(sel)
}
