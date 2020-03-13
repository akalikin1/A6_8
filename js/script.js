let progressbarvalue = 0

function init() {
  
    $("#button-1").click(function() {
        progressbarvalue = progressbarvalue + 1;
        $("#my-progress-bar").width(progressbarvalue + "%");
        $("#progressbarvalue").text(progressbarvalue);
    });
  
    $("#button-3").click(function() {
        progressbarvalue = progressbarvalue + 3;
        $("#my-progress-bar").width(progressbarvalue + "%");
        $("#progressbarvalue").text(progressbarvalue);
    });

    $("#button-7").click(function() {
        progressbarvalue = progressbarvalue + 7;
        $("#my-progress-bar").width(progressbarvalue + "%");
        $("#progressbarvalue").text(progressbarvalue);
    });

    $("#button-reload").click(function() {
        location.reload();
    });

    
  }
  
$(document).ready(init);
  