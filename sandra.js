
console.log('script.js connected');

// ****************************** part 1 ******************************

document.querySelector('#new-task-form').addEventListener('submit', e => {
  e.preventDefault();

  // 1: get the input from user related to the new task and the owner of the task

  const inputs = document.querySelectorAll('input');

  const taskContent = inputs[0].value;
  //   console.log(taskContent);
  const ownerContent = inputs[1].value;
  //   console.log(ownerContent);

  // 2: append it to the DOM

  const ulParent = document.querySelector('#tasks-list');
  const newLi = document.createElement('li');
  newLi.innerHTML = `${taskContent} by ${ownerContent}`;

  ulParent.appendChild(newLi);

  // 3: clear the form after the submission
  inputs[0].value = '';
  inputs[1].value = '';
});

// ****************************** part 2 ******************************

// 1: get the DOM element that represents 'Update gif' button

const updateGifBtn = document.getElementById('update-button');

// 2: add the click handler to it

updateGifBtn.addEventListener('click', () => {
  // 3: get the DOM element that represents 'iframe tag'
  const gifTag = document.querySelector('iframe');

  // 4. change the attribute source to point to 'https://giphy.com/embed/1MTLxzwvOnvmE' after clicking on the 'Update gif' button
  //   gifTag.setAttribute('src', 'https://giphy.com/embed/1MTLxzwvOnvmE');

  // 5: bonus: make it so every time you  click on the 'Update gif' button, a different gif (one of these two) appears

  const src1 = 'https://giphy.com/embed/MOWPkhRAUbR7i';
  const src2 = 'https://giphy.com/embed/1MTLxzwvOnvmE';

  //   if (gifTag.src === src1) {
  //     gifTag.src = src2;
  //   } else {
  //     gifTag.src = src1;
  //   }

  gifTag.src === src1 ? (gifTag.src = src2) : (gifTag.src = src1);
});
