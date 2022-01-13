// TODO: add code here
function init(){
    const url = 'https://handlers.education.launchcode.org/static/astronauts.json';
    fetch(url)
        .then(data => data.json())
        .then(response => {
            const container = document.getElementById("container");
            const h1 = document.querySelector('h1');
            const p = document.createElement('span');
            
            p.innerHTML = " " + response.length;
            h1.appendChild(p);

            response
                .sort((a, b) => a.hoursInSpace - b.hoursInSpace)
                .forEach((person) => {
                    const div = document.createElement('div');
                    const childDiv = document.createElement('div');
                    const h3 = document.createElement('h3');
                    const image = document.createElement('img');
                    const ul = document.createElement('ul');
                    const listOne = document.createElement('li');
                    const listTwo = document.createElement('li');
                    const listThree = document.createElement('li');
                    const active = person.active ? 'active' : 'not-active'

                    div.classList.add('astronaut');
                    childDiv.classList.add('bio');
                    image.classList.add('avatar')

                    // now create the astronaut list items.
                    listOne.innerHTML = `Hours in space: ${person.hoursInSpace}`
                    listTwo.innerHTML = `Active: ${person.active}`;
                    listTwo.classList.add(active)
                    listThree.innerHTML = 'Skills:'

                    person.skills.forEach((skill) => {
                        listThree.innerHTML += skill
                    });

                    ul.appendChild(listOne);
                    ul.appendChild(listTwo);
                    ul.appendChild(listThree);
                    

                    h3.innerHTML = `${person.firstName} ${person.lastName}`;
                    image.setAttribute('src', person.picture)

                    div.appendChild(childDiv);
                    childDiv.appendChild(h3);
                    childDiv.appendChild(ul);
                    div.appendChild(image);

                    container.appendChild(div);

            });
        });
};

window.addEventListener('load', init);