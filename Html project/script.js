function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  function shuffleGirlsInRooms() {
    const roomContainers = document.querySelectorAll('.room');
    const allGirls = [];
  
    roomContainers.forEach(roomContainer => {
      const studentElements = roomContainer.querySelectorAll('.student');
      const girlStudents = Array.from(studentElements).filter(student => {
        const name = student.textContent.trim();
        return name.toLowerCase().includes('vaishnavi') || name.toLowerCase().includes('khushi') || name.toLowerCase().includes('swati') || name.toLowerCase().includes('pranita') || name.toLowerCase().includes('radha') || name.toLowerCase().includes('sarika') || name.toLowerCase().includes('mrunali') || name.toLowerCase().includes('nikita') || name.toLowerCase().includes('avantika') || name.toLowerCase().includes('samiksha') || name.toLowerCase().includes('vishakha') || name.toLowerCase().includes('priti') || name.toLowerCase().includes('payal') || name.toLowerCase().includes('priya') || name.toLowerCase().includes('ashwini') || name.toLowerCase().includes('sapana') || name.toLowerCase().includes('kanchan') || name.toLowerCase().includes('prachi')|| name.toLowerCase().includes('krutika')|| name.toLowerCase().includes('snehal');
      });
  
      girlStudents.forEach(student => {
        allGirls.push(student);
        student.remove();
      });
    });
  
     shuffleArray(allGirls);
  
     roomContainers.forEach(roomContainer => {
       while (roomContainer.children.length < 4 && allGirls.length > 0) {
         roomContainer.appendChild(allGirls.pop());
       }
    });
  }
  const shuffleButton = document.querySelector('.shuffle-button');
  shuffleButton.addEventListener('click', shuffleGirlsInRooms);