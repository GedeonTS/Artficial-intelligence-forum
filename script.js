//speaker card
function speaker(photo, Name, Work, Descrition) {

    //Creation of elements
    const speakerWrapper = document.createElement('section');
    const speakerImage = document.createElement('div');
    const behindPicture = document.createElement('div');
    const SpeakerDescription = document.createElement('div');
    const profileImage = document.createElement('img');
    const speakerName = document.createElement('h4');
    const SpeakerWork = document.createElement('h6');
    const DescritionText = document.createElement('p');


    //Assingment of selectors and values
    speakerWrapper.classList.add('speaker-wrapper');
    speakerImage.classList.add('speaker-image');
    behindPicture.classList.add('behind-picture');
    SpeakerDescription.classList.add('speaker-description');
    profileImage.classList.add('image');
    speakerName.classList.add('speaker-name');
    SpeakerWork.classList.add('inline2');
    DescritionText.classList.add('description-text')
}