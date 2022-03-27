document.querySelector("#generate").addEventListener("click", () => {
    generate();
  });
 function generate () {
    var sayings = {
        "Andrew Williams": '"On ne nait pas vainqueur , on le devient."',
        "Albert Einstein": '" Soit A un succes dans la vie.Alors A=x+y+z, ou x=travailler,y=samuser,z=se taire."',
        "Jennifer Lawrence": '"On ne peut pas rattraper le temps perdu mais on peut arreter de perdre son temps."',
        "Albert Einstein": '"La connaissance sacquiert par lexperience, tout le reste nest que de linformation."',
        "African Proverb": '" Teeth do not see poverty."',
        "Albert Einstein": '" Le monde ne sera pas detruit par ceux qui font le mal, mais par ceux qui les regardent sans rien faire."',
    };
    var author = Object.keys(sayings);
    var author = author[Math.floor(Math.random() * author.length)];
    var saying = sayings[author]
    document.querySelector("#saying").textContent = saying;
    document.querySelector("#author").textContent = author;
  
  }