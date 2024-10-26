const playBtns = document.querySelectorAll('.card > .play-btn')

const stopPlaying = () => {
  const mySongs = document.querySelectorAll('#mySong')
  mySongs.forEach(song => song.pause())
}

const handleIcons = () => {
  const icons = document.querySelectorAll('.play-btn > .fa-solid')
  icons.forEach(icon => {
    if (icon.classList.contains('fa-pause')) {
      icon.classList.remove('fa-pause')
      icon.classList.add('fa-play')
    }
  })
}

// playBtns.forEach((playBtn) => playBtn.addEventListener('click', (e) => {
  

//   playBtns.forEach(btn => {
//     const card = btn.parentElement;
//     if (card.classList.contains('active'))
//       card.classList.remove('active')
//   })

//   playBtn.classList.add('active')
  
//   const icon = playBtn.querySelector('.fa-solid');
//   if (icon.classList.contains('fa-play')) {
//     handleIcons();
//     icon.classList.remove('fa-play')
//     icon.classList.add('fa-pause')
//   } else {
//     icon.classList.add('fa-play')
//     icon.classList.remove('fa-pause')
//     stopPlaying();
//     return;
//   }


//   stopPlaying();
//   const mySong = playBtn.nextElementSibling;
//   mySong.play();

// }))

playBtns.forEach((playBtn) => playBtn.addEventListener('click', (e) => {

  // Remove active class from all other play buttons
  playBtns.forEach(btn => {
    const card = btn.parentElement;
    if (card.classList.contains('active')) {
      card.classList.remove('active');
    }
  });

  // Add active class to the clicked button
  const card = playBtn.parentElement;
  card.classList.add('active');

  const icon = playBtn.querySelector('.fa-solid');

  
  if (icon.classList.contains('fa-play')) {
    
    handleIcons();  // Ensure this handles resetting other icons
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');

    stopPlaying();  // Stop any currently playing audio
    const mySong = playBtn.nextElementSibling;  // Assuming next sibling is <audio>
    if (mySong && mySong.tagName === 'AUDIO') {
      mySong.play();  // Play the audio
    }

  } else {    
    icon.classList.add('fa-play');
    icon.classList.remove('fa-pause');
    icon.parentElement.parentElement.classList.remove('active')
    stopPlaying();  // Stop the current song and reset icon
  }
}));