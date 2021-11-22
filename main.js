// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: 
// nome autore, foto profilo, data, testo del post, immagine (non tutti i post devono avere una immagine), numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>) 
// - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed. 
// - Rendiamo il tasto "Mi Piace" cliccabile con incremento del counter dei like
// Formattare le date in formato italiano (gg/mm/aaaa)
// Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// Al click su un pulsante "Mi Piace" di un post, incrementare il contatore di like al post e cambiare colore al testo del bottone.



const posts = [
    {
        "id": 1,
        "content": "Don't lecture me, Obi-Wan! I see through the lies of the Jedi. I do not fear the dark side as you do. I have brought peace, freedom, justice, and security to my new Empire." ,
        "media": "https://artesettima.it/wp-content/uploads/2019/12/anakin-skywalker-could-have-been-in-star-wars-the_mzvc-696x392.jpg",
        "author": {
            "name": "Anakin Skywalker",
            "image": "https://c.tenor.com/q35YlC4XkeYAAAAC/star-wars-anakin-skywalker.gif"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Be mindful of your thoughts, Anakin, they betray you.",
        "media": "https://multiplayer.net-cdn.it/thumbs/images/2018/11/06/obi-wan-kenobi_jpg_800x0_crop_upscale_q85.jpg",
        "author": {
            "name": "Obi-Wan Kenobi",
            "image": "https://starwarsblog.starwars.com/wp-content/uploads/2017/09/star-wars-episode-II-jar-jar-obi-wan-anakin-skywalker-1024x435.jpg"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "You must unlearn what you have learned.",
        "media": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd0V8utzVdXprJOqK0-v1FoxONAG8bVvFm9A&usqp=CAU",
        "author": {
            "name": "Yoda",
            "image": "https://images.contentful.com/awpxl2koull4/1Fmkrk1eYwO8m6CcS2MwKW/c786e8d968255108ae95ad8de3194537/do-or-do-not.gif"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "So this is how liberty dies.. with thunderous applause.",
        "media": "https://i2.wp.com/starwarsitalia.net/wp-content/uploads/2020/12/Star-Wars-Italia-Padme-Amidala.jpg?resize=1140%2C570&ssl=1",
        "author": {
            "name": "Padmè Amidala",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Did you ever hear the tragedy of Darth Plagueis the Wise?..",
        "media": "https://insolenzadir2d2.it/wp-content/uploads/2017/05/Palp_trustme.jpg",
        "author": {
            "name": "Sheev Palpatine",
            "image": "https://media0.giphy.com/media/3o84sq21TxDH6PyYms/giphy.gif?cid=ecf05e47qsv3pnxu4kzif45j2ikq94biumvavikj6dz9vm9d&rid=giphy.gif&ct=g"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

// console.log(posts);


 


// -- 1 --

const container = document.getElementById('container');

let items = '';






 for (let i = 0; i < posts.length; i++) {
     console.log(posts[i]);

     


     items += `<div class="post">
     <div class="post__header">
         <div class="post-meta">                    
             <div class="post-meta__icon">
                 <img class="profile-pic" src=${posts[i].media} alt=${posts[i].author.name}>                    
             </div>
             <div class="post-meta__data">
                 <div class="post-meta__author">${posts[i].author.name}</div>
                 <div class="post-meta__time">${posts[i].created}</div>
             </div>                    
         </div>
     </div>
     <div class="post__text">${posts[i].content}</div>
     <div class="post__image">
         <img src=${posts[i].author.image} alt="">
     </div>
     <div class="post__footer">
         <div class="likes js-likes">
             <div class="likes__cta">
                 <a class="like-button  js-like-button" href="#" data-postid="1">
                     <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                     <span class="like-button__label">Mi Piace</span>
                 </a>
             </div>
             <div class="likes__counter">
                 Piace a <b id="like-counter-1" class="js-likes-counter">${posts[i].likes}</b> persone
             </div>
         </div> 
     </div>            
 </div>`

 }

 

 console.log(items);

 container.innerHTML = items;

 //

