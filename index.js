fetch('https://randomuser.me/api/?results=5')
  .then(r => r.json())
  .then(function(data){
    let inf = data.results;
    return inf;
  })
  .then(function (users){
    users.forEach((value) => {
    const main = document.querySelector('#news');
    let article = document.createElement('article');
    article.classList.add("new");
    let img = document.createElement('img');
    img.src = `${value.picture.large}`;
    let name = document.createElement('h3');
    name.textContent = `${value.name.first} ${value.name.last}`;
    let email = document.createElement('p');
    email.textContent = `${value.email}`;
    email.classList.add("email");
    let dob = document.createElement('p');
    dob.textContent = `${value.dob.date.slice(0, 10)} (${value.dob.age})`;
    let city = document.createElement('p');
    city.textContent = `${value.location.city} (${value.location.country})`;
    let lorem = document.createElement('p');
    lorem.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet delectus velit dolor consectetur tenetur nihil.";
    article.append(img, name, email, dob, city, lorem);
    main.append(article);
})
  })