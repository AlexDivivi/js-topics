const listContainer = get('.list-container')
const newTopic = get('.new-topic')

class Topic {
  constructor(head, text) {
    this.head = head
    this.text = text
    this.button = false
  }
}

let topicsArray = [
  new Topic(
    'Topic 1',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur deleniti quod recusandae obcaecati, rem, unde nisi aut tenetur necessitatibus, odio porro dolores beatae reiciendis? Obcaecati reprehenderit at sit accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repudiandae neque sint doloremque earum blanditiis ex illum ipsa ea aspernatur cupiditate eum harum, maiores quae! Dolorum illum iusto eveniet qui?'
  ),
  new Topic(
    'Topic 2',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur deleniti quod recusandae obcaecati, rem, unde nisi aut tenetur necessitatibus, odio porro dolores beatae reiciendis? Obcaecati reprehenderit at sit accusantium?'
  ),
  new Topic(
    'Topic 3',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur deleniti quod recusandae obcaecati, rem, unde nisi aut tenetur necessitatibus, odio porro dolores beatae reiciendis? Obcaecati reprehenderit at sit accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repudiandae neque sint doloremque earum blanditiis ex illum ipsa ea aspernatur cupiditate eum harum, maiores quae! Dolorum illum iusto eveniet qui?'
  ),
  new Topic(
    'Topic 4',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur deleniti quod recusandae obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur deleniti quod recusandae obcaecati.'
  ),
  new Topic(
    'Topic 5',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur deleniti quod recusandae obcaecati, rem, unde nisi aut tenetur necessitatibus, odio porro dolores beatae reiciendis? Obcaecati reprehenderit at sit accusantium? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur deleniti quod recusandae obcaecati, rem, unde nisi aut tenetur necessitatibus, odio porro dolores beatae reiciendis? Obcaecati reprehenderit at sit accusantium? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, repudiandae neque sint doloremque earum blanditiis ex illum ipsa ea aspernatur cupiditate eum harum, maiores quae! Dolorum illum iusto eveniet qui?'
  ),
  new Topic(
    'Topic 6',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur deleniti quod recusandae obcaecati, rem, unde nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur pariatur corrupti quisquam similique repudiandae ad rerum, quas fugit ex, nobis blanditiis nesciunt illum quia, ipsam delectus eum provident quam laborum! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur deleniti quod recusandae obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur deleniti quod recusandae obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non aspernatur deleniti quod recusandae obcaecati. Lorem ipsum.'
  )
]

renderTopics()

newTopic.addEventListener('click', event => {
  const inphead = prompt('Please enter Headline:', '')
  const inptext = prompt('Please enter Text', '')
  topicsArray.push(new Topic(inphead, inptext))
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
