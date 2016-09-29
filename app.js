//Do Not Modify the getMusic function
function getMusic(){
  var artist = document.getElementById('artist').value;
  itunes.getMusicByArtist(artist).then(drawSongs);
}



function drawSongs(songList){
  var template = "";
    for(var i = 0; i < songList.length; i++){
      template +=`<div class='row songs'>
      <div class='col col-xs-12  col-lg-12'><img src="${songList[i].albumArt}"></div>
      <div class='col col-xs-6  col-lg-3'><h4> Title: ${songList[i].title}</h4></div>
      <div class='col col-xs-6 col-lg-3'><audio controls class='audioClass'><source src="${songList[i].preview}"></audio></div>
      <div class ='col col-xs-6 col-lg-3'>Artist: ${songList[i].artist}</div>
      <div class='col col-xs-6 col-lg-3'>  Album: ${songList[i].collection}</div>
      <div class ='col col-xs-6 col-lg-6'>Price: ${songList[i].price} </div>
      </div>`
    }
    document.getElementById('songBox').innerHTML = template; 
}


////function for stopping music////
document.addEventListener('play', function(e){
 var audios = document.getElementsByTagName('audio');
 for(var i = 0, len = audios.length; i < len;i++){
     if(audios[i] != e.target){
         audios[i].pause();
     }
 }
}, 
true);


//  type="audio/ogg"