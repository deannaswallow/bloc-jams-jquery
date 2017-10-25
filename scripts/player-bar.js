$(document).ready(function(){
  $('button#play-pause').click( function(){
    player.playPause();
    $(this).attr('playState', player.playState);
  });

  const getCurrentIndex = function(currentSong){
    return album.songs.indexOf(currentSong);
  };

  $('button#next').click( function(){
    if(player.playState !== 'playing') {return;}
    const nextSongIndex = getCurrentIndex(player.currentlyPlaying) + 1;
    if(nextSongIndex >= album.songs.length) {return;}
    const nextSong = album.songs[nextSongIndex];
    player.playPause(nextSong);
  });

  $('button#previous').click( function(){
    if(player.playState !== 'playing') {return;}
    const prevSongIndex = getCurrentIndex(player.currentlyPlaying) - 1;
    if(prevSongIndex < 0) {return;}
    const prevSong = album.songs[prevSongIndex];
    player.playPause(prevSong);
  });
});
