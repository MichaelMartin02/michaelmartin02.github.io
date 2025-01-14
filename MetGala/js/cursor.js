
const cursor = document.querySelector('.cursor');
const moveCursor = (e)=> {
  
  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

}

window.addEventListener('mousemove', moveCursor)



