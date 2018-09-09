var crystal1 = "assets/images/crystal1.jpg";
var crystal2 = "assets/images/crystal2.jpg";
var crystal3 = "assets/images/crystal3.jpg";
var crystal4 = "assets/images/crystal4.jpg";


var crystals = [crystal1, crystal2, crystal3, crystal4];


var crystalIds = ["crystal1", "crystal2", "crystal3", "crystal4"]

      // MAJOR TASK #1: DYNAMICALLY CREATE CRYSTAL IMAGES as buttons
      // =================================================================================

      // 1. Create a for-loop to iterate through the letters array.
      for (var i = 0; i < crystals.length; i++) {

        // Inside the loop...

        // 2. Create image tags
        var crystalBtn = $("<img>");

        // 3. adding attributes to the crystal images
        crystalBtn.attr("src", crystals[i]);
        crystalBtn.attr("id", crystalIds[i]);
        crystalBtn.attr("style", "width:120px; height:120px");

        
        // 4. Finally, append each crystal images
        $("#crystals").append(crystalBtn);

      }


      function compChoice(){
        var randScore = Math.floor(Math.random() * (121-19)) + 19;
        return randScore;
    
      }

      function crystalRandom(){
        var crystalValues1 = Math.floor(Math.random() * (13-1)) + 1;
        var crystalValues2 = Math.floor(Math.random() * (13-1)) + 1;
        var crystalValues3 = Math.floor(Math.random() * (13-1)) + 1;
        var crystalValues4 = Math.floor(Math.random() * (13-1)) + 1;

        var crystalValues = crystalValues1 + crystalValues2 + crystalValues3 + crystalValues4;

        console.log(crystalValues1);
        console.log(crystalValues2);
        console.log(crystalValues3);
        console.log(crystalValues4);
        console.log(crystalValues);


        return crystalValues;
      }


      $("#randScore").text(compChoice());

      $("#totalScore").text(crystalRandom());


      

    
