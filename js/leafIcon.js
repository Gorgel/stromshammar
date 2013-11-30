var leaf= "M24.485,2c0,8-18,4-18,20c0,6,2,8,2,8h2c0,0-3-2-3-8c0-4,9-8,9-8s-7.981,4.328-7.981,8.436C21.239,24.431,28.288,9.606,24.485,2z";

var elements = document.querySelectorAll('.leaf');
for (i=0; i<elements.length; i++) {
    paper = Raphael(elements[i], 32, 32)
    paper.path(leaf).attr({"fill": "black"})
}
