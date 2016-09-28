//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  var template = "";
    for(var i = 0; i < songList.length; i++){
      template +=`<div class='row'>
      <div class='col col-xs-12'><img src="${songList[i].albumArt}"></div>
      <div id='songTitle' class='col col-xs-4'><h4> Title: ${songList[i].title}</h4></div>
      <div id = 'aristName' class = "col col-xs-4">Artist: ${songList[i].artist}</div>
      <div class='col col-xs-4'><audio controls><source src="${songList[i].preview}" type="audio/ogg"></audio></div>
      <div class = 'col col-xs-6'>Price: ${songList[i].price} </div>
      </div>`
    }
    document.getElementById('songBox').innerHTML = template; 
}
