// Selection
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const listItems = document.querySelector('.textBox');

  const username = document.getElementById('username').value;

  let html = `<li class="listItems" id="myText"> ${username}
  <img title="Copy" class="copy" src="Images/copy.png" alt="COPY">
  <img title="Delete" class="dustbin" src="Images/dustbin.png" alt="DUSTBIN">
  </li>`;

  if (username.trim().length === 0) {
    return;
  }

  listItems.insertAdjacentHTML('afterend', html);

  const users = document.querySelector('.listItems');

  const dustbin = document.querySelector('.dustbin');

  const copy = document.querySelector('.copy');

  let text = document.getElementById('myText').textContent.trim();

  copy.addEventListener('click', () => {
    const copyContent = async () => {
      try {
        await navigator.clipboard.writeText(text);
      } catch (err) {
        console.log('Error');
      }
    };
    copyContent();
  });

  dustbin.addEventListener('click', () => {
    users.classList.add('hidden');
  });
});
