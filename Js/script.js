const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const listItems = document.querySelector('.textBox');

  const username = document.getElementById('username').value;

  let html = `<li class="listItems"> ${username}</li>`;

  if (username.trim().length === 0) {
    return;
  }

  listItems.insertAdjacentHTML('afterend', html);

  const users = document.querySelector('.listItems');

  users.addEventListener('click', () => {
    users.classList.add('hidden');
  });
});
