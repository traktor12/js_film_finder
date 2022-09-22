var moviesDiv = document.getElementById("moviesDiv");

//Movie Filter Functions
function allMovies() {
  let newMovieUl = document.createElement("ul");
  newMovieUl.id = "allUl";
  if (document.getElementById('allR').checked || document.getElementById('allC').checked) 
  {
    for (let i = 0; i < movies.length; i++) 
    {
      let newMovieLi = document.createElement("li");
      newMovieLi.innerHTML =
       '<a href="https://www.imdb.com/title/' + movies[i].imdbID + '">' + '<img src=' + movies[i].poster +'/>' 
       +'<br/>'+ movies[i].title + " : " 
       + movies[i].year;
      moviesDiv.appendChild(newMovieUl);
      newMovieUl.appendChild(newMovieLi);
    }
  }
  else  {
    moviesDiv.removeChild(allUl);
  }
}

function newestMovies() {
  let newMovieUl = document.createElement("ul"); newMovieUl.id = "newestUl";

  if (document.getElementById("newestR").checked || document.getElementById("newestC").checked) {
    movies.filter((word) => {
      if (word.year >= 2014) {
        let newMovieLi = document.createElement("li");
          newMovieLi.innerHTML = 
          '<a href="https://www.imdb.com/title/' + word.imdbID + '">' + '<img src=' + word.poster + '/>'
            +'<br/>'+ word.title + " : "
            + word.year;
        moviesDiv.appendChild(newMovieUl);
        newMovieUl.appendChild(newMovieLi);
      }
    });
  } else {
    moviesDiv.removeChild(newestUl);
  }
}

function avengerMovies() {
  let newMovieUl = document.createElement("ul"); newMovieUl.id = "avengerUl";
  if (document.getElementById("avengerR").checked || document.getElementById("avengerC").checked) {
    moviesDiv.appendChild(newMovieUl);
    movies.filter((word) => {
      if (word.title.toLowerCase().includes("avenger")) {
        let newMovieLi = document.createElement("li");
          newMovieLi.innerHTML = 
          '<a href="https://www.imdb.com/title/' + word.imdbID + '">' + '<img src=' + word.poster + '/>'
            +'<br/>' + word.title + " : "
            + word.year;
        newMovieUl.appendChild(newMovieLi);
      }
    });
  } else {
    moviesDiv.removeChild(avengerUl);
  }
}

function xMenMovies() {
  let newMovieUl = document.createElement("ul"); 
  newMovieUl.id = "xMenUl";
  if (document.getElementById("xMenR").checked || document.getElementById("xMenC").checked) 
  {
    movies.filter((word) => {
      if (word.title.toLowerCase().includes("x-men")) {
        let newMovieLi = document.createElement("li");
          newMovieLi.innerHTML = 
          '<a href="https://www.imdb.com/title/' + word.imdbID + '">' + '<img src=' + word.poster + '/>'  
            +'<br/>' + word.title + " : "
            + word.year;
        moviesDiv.appendChild(newMovieUl);
        newMovieUl.appendChild(newMovieLi);
      }
    });
  } else {
    moviesDiv.removeChild(xMenUl);
  }
}

function batmanMovies() {
  let newMovieUl = document.createElement("ul");
  newMovieUl.id = "batmanUl";
  if (document.getElementById("batmanR").checked || document.getElementById("batmanC").checked)
   {
    movies.filter((word) => {
      if (word.title.toLowerCase().includes("batman")) {
        let newMovieLi = document.createElement("li");
          newMovieLi.innerHTML = 
          '<a href="https://www.imdb.com/title/' + word.imdbID + '">' + '<img src=' + word.poster + '/>'
            +'<br/>' + word.title + " : "
            + word.year;
            moviesDiv.appendChild(newMovieUl);
            newMovieUl.appendChild(newMovieLi);      }
    });
  } else {
    moviesDiv.removeChild(batmanUl);
  }
}

function princessMovies(){
  let newMovieUl = document.createElement("ul"); newMovieUl.id = "princessUl";
  if (document.getElementById("princessR").checked || document.getElementById('princessC').checked) {
    moviesDiv.appendChild(newMovieUl);
    movies.filter((word) => {
      if (word.title.toLowerCase().includes("princess")) {
          let newMovieLi = document.createElement("li");
            newMovieLi.innerHTML = 
            '<a href="https://www.imdb.com/title/' + word.imdbID + '">' + '<img src=' + word.poster + '/>'
              +'<br/>' + word.title + " : "
              + word.year;
        newMovieUl.appendChild(newMovieLi);
      }
    });
  } else {
    moviesDiv.removeChild(princessUl);
  }
}
//Movie Filter End ---------------------------------------------------------------

function search(){
  let newMovieUl = document.createElement("ul"); newMovieUl.id = "searchUl";
  let value = document.getElementById("search").value.toLowerCase();
  console.log(value);
  document.querySelectorAll('.checkbox').forEach(e => e.checked = false, moviesDiv.innerHTML = '');
  document.querySelectorAll('.radio').forEach(e => e.checked = false, moviesDiv.innerHTML = '');

  moviesDiv.appendChild(newMovieUl);
  movies.filter(word => {
    if (word.title.toLowerCase().includes(value)) {
      let newMovieLi = document.createElement("li");
      newMovieLi.innerHTML = 
      '<a href="https://www.imdb.com/title/' + word.imdbID + '">' + '<img src=' + word.poster + '/>'
        +'<br/>' + word.title + " : "
        + word.year;
        newMovieUl.appendChild(newMovieLi);
    }
  })
}

//Uncheck checkbox if radio gets checked
document.querySelectorAll('.radio').forEach(radio => { radio.addEventListener('click', function () {
    document.querySelectorAll('.checkbox').forEach(checkbox => {
      moviesDiv.innerHTML = '';
      checkbox.checked = false;
    })
  })
});

//Uncheck radio if checkbox gets checked
document.querySelectorAll('.checkbox').forEach(checkbox => { checkbox.addEventListener('click', function () {
    document.querySelectorAll('.radio').forEach(radio => {
      if (radio.checked) {
        moviesDiv.innerHTML = '';
        radio.checked = false;
      }
    })
  })
});

//Movie Filter listeners
document.querySelectorAll('.all').forEach(e => e.addEventListener('click', e => allMovies()));
document.querySelectorAll('.newest').forEach(e => e.addEventListener('click', e => newestMovies()));
document.querySelectorAll('.avenger').forEach(e => e.addEventListener('click', e => avengerMovies()));
document.querySelectorAll('.xMen').forEach(e => e.addEventListener('click', e => xMenMovies()));
document.querySelectorAll('.batman').forEach(e => e.addEventListener('click', e => batmanMovies()));
document.querySelectorAll('.princess').forEach(e => e.addEventListener('click', e => princessMovies()));

document.getElementById('searchButton').addEventListener('click', search);
//Movie Filter Listeners End --------------------------------


//Unused filter with forLoop() instead of .filter()
/*
function batmanMovies2() {
  let newMovieUl = document.createElement("ul");
  newMovieUl.id = "batmanUl";

  if (document.getElementById('batmanC').checked) 
  {
    for (let i = 0; i < movies.length; i++)
     {  
      if (movies[i].title.toLowerCase().includes('batman'))
       {
        let newMovieLi = document.createElement("li");
        newMovieLi.innerHTML =  movies[i].title; 
        moviesDiv.appendChild(newMovieUl);
        newMovieUl.appendChild(newMovieLi);
      }
    }
  }
  else {
    moviesDiv.removeChild(batmanUl);
  }
}
*/