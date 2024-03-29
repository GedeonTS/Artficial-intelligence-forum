// speaker card
function speaker(photo, Name, Work, Descrition, containerC, behindImg) {
  // Creation of elements
  const AllSpeakers = containerC;
  const speakerWrapper = document.createElement('section');
  const speakerImage = document.createElement('div');
  const behindPicture = document.createElement('div');
  const SpeakerDescription = document.createElement('div');
  const profileImage = document.createElement('img');
  const speakerName = document.createElement('h4');
  const SpeakerWork = document.createElement('h6');
  const DescritionText = document.createElement('p');
  const hr = document.createElement('hr');

  // Assingment of selectors
  speakerWrapper.classList.add('speaker-wrapper');
  speakerImage.classList.add('speaker-image');
  behindPicture.classList.add(behindImg);
  SpeakerDescription.classList.add('speaker-description');
  profileImage.classList.add('image');
  speakerName.classList.add('speaker-name');
  SpeakerWork.classList.add('inline2');
  DescritionText.classList.add('description-text');

  // Tree organization
  AllSpeakers.append(speakerWrapper);
  speakerWrapper.append(speakerImage, SpeakerDescription);
  speakerImage.append(behindPicture, profileImage);
  SpeakerDescription.append(speakerName, SpeakerWork, hr, DescritionText);

  // value definition
  profileImage.src = `${photo}`;
  speakerName.innerText = Name;
  SpeakerWork.innerText = Work;
  DescritionText.innerText = Descrition;
}

const Data1 = [{
  photo: './IMG/KARIM.jpeg',
  Name: 'Mr Karim Abdelghani',
  Work: 'ITU Regional Officer for the Arab States',
  Descrition: 'With an experience of around 17 years in Information and Communication Technology',
}, {
  photo: './IMG/speakers/IMG_8237.jpg',
  Name: 'Mr Houlin Zhao',
  Work: 'ITU Secretary-General',
  Descrition: 'With an experience of more than 27 years in Information and Communication Technology',
}, {
  photo: './IMG/speakers/AmadouGarba.jpg',
  Name: 'Mr Karim Abdelghani',
  Work: 'Senior (Technology) Coordinator',
  Descrition: 'Associate Professor at Carnegie Mellon University, Africa and Director General of the Multi-Sector Regulatory Authority of Niger',
}, {
  photo: './IMG/speakers/BEREAUX-Stephen.jpg',
  Name: 'Mr Stephen Bereaux',
  Work: 'Deputy Director, ITU Development Bureau ',
  Descrition: 'With more than 20 years of senior management experience in regulatory bodies in the Caribbean region.',
}, {
  photo: './IMG/speakers/AMINATA.JPG',
  Name: 'Ms Mame Aminata Diambo',
  Work: 'Student',
  Descrition: 'Student, ESMT Dakar, Senegal',
}, {
  photo: './IMG/speakers/allo-cin2.jpg',
  Name: 'Mr Lacina Koné',
  Work: 'CEO of Smart Africa',
  Descrition: ' Advisor to the Prime Minister of the Republic of Côte d`Ivoire (2017-2018), in charge of Digital Transformation',
}];

// Hide&show variables declaration
const middleSection = document.querySelector('.HS-buttons');
const btn2Wrapper = document.createElement('div');
const btn2Wrapper2 = document.createElement('div');

// -----------button show---------------------------
const linkBtn2 = document.createElement('a');
const textBtn2 = document.createElement('div');
const arrow = document.createElement('div');

// Hide&Show button's selectors assignment
btn2Wrapper.classList.add('btn2-wrapper');
linkBtn2.classList.add('btn1', 'btn2');
arrow.classList.add('arrow-down');
btn2Wrapper.classList.add('show');

// Hide&Show button's tree
middleSection.append(btn2Wrapper);
btn2Wrapper.append(linkBtn2);
linkBtn2.append(textBtn2, arrow);

// Hide&Show button values
textBtn2.innerText = 'MORE';
arrow.innerHTML = '<i class="material-icons ">keyboard_arrow_down</i>';

// ----------button hide-------------------
const linkBtn22 = document.createElement('a');
const textBtn22 = document.createElement('div');
const arrow2 = document.createElement('div');

// Hide&Show button's selectors assignment
btn2Wrapper2.classList.add('btn2-wrapper');
linkBtn22.classList.add('btn1', 'btn2');
arrow2.classList.add('arrow-down');
btn2Wrapper2.classList.add('hide');

// Hide&Show button's tree
middleSection.append(btn2Wrapper2);
btn2Wrapper2.append(linkBtn22);
linkBtn22.append(textBtn22, arrow2);

// Hide&Show button values
textBtn22.innerText = 'LESS';
arrow2.innerHTML = '<i class="material-icons ">keyboard_arrow_up</i>';

for (let x = 0; x < Data1.length; x += 1) {
  speaker(Data1[x].photo, Data1[x].Name, Data1[x].Work, Data1[x].Descrition, document.querySelector('#speaker-list2'), 'behind-picture');
}

for (let x = 0; x < Data1.length; x += 1) {
  speaker(Data1[x].photo, Data1[x].Name, Data1[x].Work, Data1[x].Descrition, document.querySelector('#speaker-list1'), 'behind-pic-mobile');

  const cardsArray = document.querySelectorAll('.speaker-wrapper');
  if (x >= 2) {
    cardsArray[x].style.display = 'none';
  }

  btn2Wrapper.addEventListener('click', () => {
    cardsArray[x].style.display = 'flex';
    btn2Wrapper2.classList.remove('hide');
    btn2Wrapper2.classList.add('show');
    btn2Wrapper.classList.remove('show');
    btn2Wrapper.classList.add('hide');
  });

  btn2Wrapper2.addEventListener('click', () => {
    if (x >= 2) {
      cardsArray[x].style.display = 'none';
      btn2Wrapper.classList.remove('hide');
      btn2Wrapper.classList.add('show');
      btn2Wrapper2.classList.remove('show');
      btn2Wrapper2.classList.add('hide');
    }
  });
}

// nav-menu
const open = document.getElementById('open');
const close = document.getElementById('close');
const canceli = document.getElementById('cancel');
const link1 = document.getElementById('elem1');
const link2 = document.getElementById('elem2');
const link3 = document.getElementById('elem3');

open.addEventListener('click', () => {
  open.classList.add('hide');
  open.classList.remove('show');
  close.classList.remove('hide');
  close.classList.add('show');
  canceli.classList.remove('hide');
  canceli.classList.add('show');
});
canceli.addEventListener('click', () => {
  close.classList.add('hide');
  close.classList.remove('show');
  canceli.classList.add('hide');
  canceli.classList.remove('show');
  open.classList.remove('hide');
  open.classList.add('show');
});

link1.addEventListener('click', () => {
  close.classList.add('hide');
  close.classList.remove('show');
  canceli.classList.add('hide');
  canceli.classList.remove('show');
  open.classList.remove('hide');
  open.classList.add('show');
});

link2.addEventListener('click', () => {
  close.classList.add('hide');
  close.classList.remove('show');
  canceli.classList.add('hide');
  canceli.classList.remove('show');
  open.classList.remove('hide');
  open.classList.add('show');
});

link3.addEventListener('click', () => {
  close.classList.add('hide');
  close.classList.remove('show');
  canceli.classList.add('hide');
  canceli.classList.remove('show');
  open.classList.remove('hide');
  open.classList.add('show');
});
