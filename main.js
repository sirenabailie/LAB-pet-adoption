const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "Cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "Dino",
      imageUrl: "https://mail.google.com/mail/u/0?ui=2&ik=f60dbd08e5&attid=0.0.1&permmsgid=msg-f:1805225651199403844&th=190d732a4f29e744&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ-xjHEpAHGCfqpSgAPGrR7QsUfYBkfIXssK3BHQCWE2_8Jz8DByK9qlS7OmtTJUa1kSu_Z4OGQa3TgxRy9e1VWAIrvrb4hUEMuAXuyEoBBnYjOhnZ2P-zqtPTk&disp=emb",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Green",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "Dino",
      imageUrl: "https://cdn.openart.ai/uploads/image_bGT4bNDQ_1721597821395_raw.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Orange",
      specialSkill: "Burps minimally.",
      type: "Dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Wanda",
      color: "Purple",
      specialSkill: "Enjoys holisitc medicine -- especially catnip.",
      type: "Cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQspVP4DDcPnp-vAqqSP30yKHQAvc4duQK39A&s"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Orange",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "Dog",
      imageUrl: "https://i.pinimg.com/originals/d2/ed/91/d2ed9189d8f7b9bc506b0ed085d67868.png"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Grey",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "Cat",
      imageUrl: "https://www.catster.com/wp-content/uploads/2023/11/shutterstock_1666141360.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "Dino",
      imageUrl: "https://img.freepik.com/premium-photo/cute-dino-realistic-isolated-background-photorealistic-al-generated_866663-2907.jpg"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Specializes in the art of burrito making.",
      type: "Cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Red",
      specialSkill: "Cosplays as the devil, but is really an angel.",
      type: "Cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "Dino",
      imageUrl: "https://cdn.openart.ai/uploads/image_AWcIuTq__1721598816009_raw.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Pink",
      specialSkill: "Participates in puddle splashing tournaments.",
      type: "Dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Maggie",
      color: "Yellow",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "Dog",
      imageUrl: "https://i.pinimg.com/originals/0b/88/66/0b886613160406f2fa5c28c2c2e56308.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Black",
      specialSkill: "Always up for dessert.",
      type: "Cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Cheeto",
      color: "Orange",
      specialSkill: "While most cats are biscuit makers, Cheeto is a cheesemaker.",
      type: "Cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Green",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "Dino",
      imageUrl: "https://img.freepik.com/premium-photo/whimsical-scene-with-dinosaur-driving-car-man-tie_855892-2139.jpg"
    },
    {
     id: 17,
      name: "Nimona",
      color: "White",
      specialSkill: "Thinks Haruki Murakami writes magical realism well, and women badly.",
      type: "Cat",
      imageUrl: "nimona.jpg"
    },
    {
      id: 18,
      name: "Juniper",
      color: "Grey",
      specialSkill: "Is a dino I promise.",
      type: "Dino",
      imageUrl: "juniper.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Brown",
      specialSkill: "Listens attentively to boring stories.",
      type: "Dog",
      imageUrl: "https://www.shutterstock.com/image-photo/cute-lovely-small-jack-russell-600nw-2003363279.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Grey",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "Cat",
      imageUrl: "https://www.humanesociety.org/sites/default/files/2023-05/litter-box-cat-159881.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Green",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "Dino",
      imageUrl: "https://i.pinimg.com/originals/58/11/a7/5811a7d48ab190b461cf558958cde0b6.jpg"
    },
    {
        id: 22,
      name: "Layla",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "Cat",
      imageUrl: "Layla.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "Dog",
      imageUrl: "https://i0.wp.com/oldtowncrier.com/wp-content/uploads/2023/07/Grapevine-Three-Fox-Vineyard.jpg?ssl=1"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "Dog",
      imageUrl: "https://www.thescottishsun.co.uk/wp-content/uploads/sites/2/2017/03/nintchdbpict000306944493.jpg?w=1240"
    },
    {
      id: 25,
      name: "Salem",
      color: "Grey",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "Cat",
      imageUrl: "https://m.media-amazon.com/images/I/61WdxOzEcoL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Grey",
      specialSkill: "Cleans himself.",
      type: "Dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "Dino",
      imageUrl: "https://cdn.openart.ai/uploads/image_EIIRB-lr_1721600003520_raw.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Grey",
      specialSkill: "Dances when he has to.",
      type: "Cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Grey",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "Cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Ducky",
      color: "Green",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "Dino",
      imageUrl: "https://faroutmagazine.co.uk/static/uploads/1/2023/11/Ducky-Ducky-The-Dinosaur-The-Land-Before-Time-1988-Far-Out-Magazine.jpg"
    }
  ];

// utility function renderToDom can be used for more than one thing
  const renderToDom = (divId, htmlToRender) => {
    const selectedDiv = document.querySelector(divId);
    selectedDiv.innerHTML = htmlToRender;
  };

// This is how the cards will be put on the DOM
  const cardsOnDom = (array) => {
  let domString = "";
  for (const pet of array) {              
    // footerClass is a function to target specific footers for different color bgs
    const footerClass = pet.type === 'Cat' ? 'footer-cat' : pet.type === 'Dog' ? 'footer-dog' : 'footer-dino';   
    // This is the card template we will loop through to grab pets' object info
    domString += `<div class="card mx-auto" style="width: 18rem;">
        <h3 class="card-title">${pet.name}</h3>
        <img src=${pet.imageUrl} class="card-img-top" alt=${pet.name}>
        <div class="card-body">
          <h5 class="card-title">${pet.color}</h5>
          <p class="card-text">${pet.specialSkill}</p>
          </div>
          <card-footer class="card-footer ${footerClass}">${pet.type}</card-footer>
          <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
      </div>`; 
  }
  
  renderToDom("#app", domString);
  };

  // function to filter pet type
  const filter = (array, typeString) => {
    const petArray = [];
    for (const pet of array) {
      if (pet.type === typeString) {
        petArray.push(pet);
      }
    }
  
    return petArray;
  };

// this is how cards will be rendered to dom
cardsOnDom(pets);

// this is a function that grabs all values from form, pushes new obj to array and repaints dom with new pet
const form = document.querySelector('form');      // this will target form on DOM
const createPet = (e) => {                        // must create event for every form
  e.preventDefault();                             

 
  const newPetObj = {  
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#special-skill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#image").value
  }

  pets.push(newPetObj);
  cardsOnDom(pets);
  form.reset();
}

form.addEventListener('submit', createPet);         //call event listener for form submit and pass in createPet function


const app = document.querySelector("#app");         // taget app div

app.addEventListener('click', (e) => {              // add event listener to listen for clicks
  if (e.target.id.includes("delete")) {             // make sure id includes "delete"
    const [, id] = e.target.id.split("--");         // check this targets pet ID -- splits off number from delete
    const index = pets.findIndex(e => e.id === Number(id));   //turns number from string to integer removes from array
    pets.splice(index, 1);                          // modifies original array
    cardsOnDom(pets);                               // repaints dom with new array
  }
});

//() events last
const startApp = () => {                              
  cardsOnDom(pets);                                 
}

// call event function
startApp();

// targets buttons on DOM
const showAllButton = document.querySelector("#show-all-btn");
const showCatsButton = document.querySelector("#show-cat-btn");
const showDogsButton = document.querySelector("#show-dog-btn");
const showDinosButton = document.querySelector("#show-dino-btn");

// event listener listens for click to show all pets using function above
showAllButton.addEventListener("click", () => {    
  cardsOnDom(pets);
});

// event listener listens for button click and fiters by type of pet
showCatsButton.addEventListener("click", () => {
  const cats = filter(pets, "Cat");
  cardsOnDom(cats);
});

showDogsButton.addEventListener("click", () => {
  const dogs = filter(pets, "Dog");
  cardsOnDom(dogs);
});

showDinosButton.addEventListener("click", () => {
  const dinos = filter(pets, "Dino");
  cardsOnDom(dinos)
});
