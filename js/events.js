//define functions here

function getIt(){
  $("p").on("click", function(){
    alert("Hey!")
  } )
}


function frameIt(){
  $("img").on("load", function(){
    $("img").addClass("tasty");
  } )
}

function pressIt(){
  $('document').on('keydown', function(){  // input ok?
      // below, tried 'input'    'event.key'
      if (('keydown').which == 71){    //changed fm 'input'
        alert('you pressed G.');
        
      }
    }
)}




function submitIt(){
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.");
  });
}

$(document).ready(function(){
// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
