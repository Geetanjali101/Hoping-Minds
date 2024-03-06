// Define arrays for meal categories and their corresponding box IDs
const categories = {
  'all': ['#sandwichBox', '#pastaBox', '#pancakeBox','#burgerBox', '#daalBox', '#soupBox','#pizzaBox','#pooriBox', '#briyaniBox', '#saladBox','#coffeeBox', '#juiceBox'],
  'breakfast': ['#sandwichBox', '#pastaBox', '#pancakeBox','#juiceBox'],
  'lunch': ['#burgerBox', '#coffeeBox', '#soupBox','#pizzaBox'],
  'dinner': ['#pooriBox', '#briyaniBox','#daalBox', '#saladBox'],
};

// JavaScript functions to handle button clicks
function showItems(category) {
  // Get the array of box IDs based on the selected category
  const selectedBoxes = categories[category];
  console.log(selectedBoxes);
  
  // Hide all boxes
  document.querySelectorAll('.box').forEach(box => {
    box.style.display = 'none';
  });
  
  // Show the selected boxes
  selectedBoxes.forEach(boxId => {
    // document.querySelector(boxId).style.display = 'flex';
    const box = document.querySelector(boxId);
    if (box) {
      box.style.display = 'flex';
    }
  });
}

// Function to show all items
function showAll() {
  // Show all boxes
//   document.querySelectorAll('.box').forEach(box => {
//     box.style.display = 'flex';
//   });
     const boxes = document.querySelectorAll(".boxezz");
     console.log(box);
     boxes.forEach((box)=>{
        box.style.display="flex";
     })
    //  boxes.style.display="flex";
}