import { createField } from './field_cell.js';

const goToPlay = () => {
  const tableAll = createField();
  const divRoot = document.querySelector('.root');
  divRoot.append(tableAll);
  let cellText = 'X';
  tableAll.addEventListener('click', (event) => {
    const { target } = event;
    if (target.textContent === '') {
      target.textContent = cellText;
    }
    if (target.textContent === 'X' || target.textContent === 'O') {
      cellText = cellText === 'X' ? 'O' : 'X';
    }
  });
};

goToPlay();
