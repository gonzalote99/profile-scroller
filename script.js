const data = [
  {
    name: 'jhon',
    age: 21,
    gender: 'male',
    location: 'usa',
    image: 'https://raw.githubusercontent.com/God-father1/Javascript-projects/master/Profile%20Scroller/images.jfif'
  },
  {
    name: 'jhonny',
    age: 32,
    gender: 'male',
    location: 'spain',
    image: 'https://raw.githubusercontent.com/God-father1/Javascript-projects/master/Profile%20Scroller/gig.jfif'
  },
  {
    name: 'william',
    age: 43,
    gender: 'male',
    location: 'india',
    image: 'https://raw.githubusercontent.com/God-father1/Javascript-projects/master/Profile%20Scroller/gig.jpg'
  },
];

const profiles = profileIterator(data);


nextProfile();

document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;
  if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
    <ul class='list-group'>
       <li class='list-group-item'>name: ${currentProfile.name}</li>
       <li class='list-group-item'>age: ${currentProfile.age}</li>
       <li class='list-group-item'>location: ${currentProfile.location}</li>
       <li class='list-group-item'>gender: ${currentProfile.gender}</li>
    </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
    

  } else {
    window.location.reload();
  }
}

function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < profiles.length ? 
      {value: profiles[nextIndex++],done : false} :
      {done: true};
    }
  };
}
