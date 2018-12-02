
/// start button event
$("#start-button").click(function(){
  startWebcam();
})

//---------------
// launch webcam
//---------------
var video;
function startWebcam(){
  console.log("video streaming start.")
  $("#console").html('<li>video streaming satrt. </li>');
  video = $("#main-stream-video").get(0);

  navigator.getMedia = navigator.getUserMedia ||
                                          navigator.webkitGetUserMedia ||
                                          navigator.mozGetUserMedia ||
                                          navigator.msGetUserMedia;
  navigator.getMedia({
    video: true,
    audio: false
  }, function(stream) {
    localStream = stream;
    video.srcObject = stream;
    video.play();
  }, function(error) {
    alert("Something wrong with webcam!")
  });

}