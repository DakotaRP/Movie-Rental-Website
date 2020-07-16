
//Open window with more information when a movie icon is clicked
function movieWindow(num) {
    //Receive passed number from clicked image from index.htm or products.htm
    var movieNumber = num;
    //Get trailer for movie from index.htm or products.htm
    var movieTrailer = document.getElementById("movie" + movieNumber + "Trailer").value;
    //Get name of movie from index.htm or products.htm
    var movieName = document.getElementById("movie" + movieNumber + "Name").value;
    //Get price of movie from index.htm or products.htm
    var moviePrice = document.getElementById("movie" + movieNumber + "Price").value;
    //Get description of movie from index.htm or products.htm
    var movieDesc = document.getElementById("movie" + movieNumber + "Desc").value;
    //Open new window
    var movieWindow = window.open("", "MovieInfoDisplay", "toolbar=no, menubar=no, location=no,scrollbar=yes,resizable=no,width=750,height=700");
    //Write html onto new window, write all this to embed a stylesheet
    movieWindow.document.write('<html><head><title>' + movieName + '</title>		<link rel="stylesheet" type="text/css" href="css/style.css"/></head><body>');
    //Video Trailer, embed video from YouTube onto page 
    movieWindow.document.write("<iframe width='750' height='450' src=" + movieTrailer + " frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe></br>");
    //Write name to page
    movieWindow.document.write("<h1>" + movieName + "</h1>");
    //DWrite description to page
    movieWindow.document.write("<p>" + movieDesc + "</p>");3
    //Write price and buy button to page
    movieWindow.document.write("<label><h3>" + moviePrice + "</h3></label><button style='width:100px;height:50px;' type='button'>Buy</button>");
    //Close HTML document for new window
    movieWindow.document.write("</body></html>")
    movieWindow.document.close();
}
//Add Event Listeners for all movie images
var movieImage = [];
for (var i=0; i<24; i++) {
    movieImage[i] = document.getElementById("movie" + i);
        if(movieImage.addEventListener) {
            movieImage.addEventListener("click", movieWindow, false);
        } else if (movieImage.attachEvent) {
            movieImage.attachEvent("onclick", movieWindow);
            }
}
