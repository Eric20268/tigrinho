let items = []; // Array to store items in the wheel
let spinning = false; // Flag to prevent spinning during animation

function addItem() {
  let newItem = prompt("Enter new item:");
  if (newItem) {
    items.push(newItem);
    renderWheel();
  }
}

function renderWheel() {
  const wheel = document.querySelector('.wheel');
  wheel.innerHTML = '';
  const numItems = items.length;
  const angle = 360 / numItems;
  
  items.forEach((item, index) => {
    const newItem = document.createElement('div');
    newItem.textContent = item;
    newItem.style.transform = `rotate(${index * angle}deg) skewY(${angle}deg)`;
    newItem.style.backgroundColor = getColorForIndex(index);
    wheel.appendChild(newItem);
  });
  
  const arrow = document.querySelector('.arrow');
  arrow.style.transform = `rotate(${90 + 360 * 5}deg)`;
}

function getColorForIndex(index) {
  const colors = ['#f39c12', '#3498db', '#2ecc71', '#e74c3c', '#9b59b6'];
  return colors[index % colors.length];
}

function spinWheel() {
  if (!spinning && items.length > 1) {
    spinning = true;
    const selectedItem = Math.floor(Math.random() * items.length);
    const degrees = selectedItem * (360 / items.length) + 360 * 5; // Rotate 5 full circles
    const wheel = document.querySelector('.wheel');
    wheel.style.transition = 'transform 5s ease-out';
    wheel.style.transform = `rotate(${degrees}deg)`;
    setTimeout(() => {
      alert(`Winner: ${items[selectedItem]}`);
      spinning = false;
    }, 5000); // Wait for 5 seconds before alerting the winner
  } else {
    alert('Add more items to spin the wheel!');
  }
}

// Initial render
renderWheel();
