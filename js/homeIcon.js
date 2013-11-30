var home= "M27.812,16l-3.062-3.062V5.625h-2.625v4.688L16,4.188L4.188,16L7,15.933v11.942h17.875V16H27.812zM16,26.167h-5.833v-7H16V26.167zM21.667,23.167h-3.833v-4.042h3.833V23.167z";

var elements = document.querySelectorAll('.home');
for (i=0; i<elements.length; i++) {
    paper = Raphael(elements[i], 30, 30)
    paper.path(home).attr({"fill": "black"})
}
