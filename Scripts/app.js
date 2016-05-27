/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function(){
    "use strict";
    
    // define an array of HTML elements
    var paragraphElements = [];
    
    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphTwoB");
    paragraphElements[3] = document.getElementById("paragraphTwoC");
    paragraphElements[4] = document.getElementById("paragraphThree");
    
    // define your paragraphs array;
    var paragraphs = [];
    
    // data for my pages
    paragraphs[0] = "You've got to go out on a limb sometimes because that's where the fruit is.";
    paragraphs[1] = "Development and characterization of a new inbred transgenic rat strain expressing DsRed monomeric fluorescent protein. Authors: Montanari, S.; Wang, X-H.; Yannarelli, G.; Dayan, V.; Berger, T.; Zocche, L.; Kobayashi, E.;  Viswanathan, S.; Keating, A.";
    paragraphs[2] = "Pap Test as the First Step in Screening Genetic Stability in Cell-Based Therapy. Authors: Carvalho, K.A.T.; Zocche, Larissa, Irioda, A.C., Souza, C., Ferreira, R.J.; Aliprandini, E.; Cunha, R.C.; Francisco, J.C.; Guarita-Souza, L.C.; Malvezzi, M.; Beltrame, M.; Mesquita, L.; Kuczera, D.; Vargas, R.";
    paragraphs[3] = "Functional Outcome of Bone Marrow Stem Cells (CD45+/CD34−) After Cell Therapy in Acute Spinal Cord Injury: In Exercise Training and in Sedentary Rats. Authors: Carvalho, K. A. T.; Cunha, R. C.; Vialle E.N; Osiecki, R.; Moreira, GHG; Simeoni, R. B.; Francisco, J. C.; Guarita-Souza, L. C.; Oliveira, L.; Zocche, Larissa; Olandoski, M." ;
    paragraphs[4] = "In short? I am a versatile person, who loves to travel, summer and dogs. A little longer: I have a Bachelors degree in Biology and a Masters in Biotechnology. I've work in research laboratories, mostly with pre-clinical stem cell studies. Currently, I am studying Software Engineering and my next goal is to find a good job in the IT industry."; 

    // second way to define an array
    //var paragraphs = new Array();
    
    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) {
        if(paragraphElements[index]) {
         paragraphElements[index].textContent = paragraphs[index];
        }
    }
    
    
})();