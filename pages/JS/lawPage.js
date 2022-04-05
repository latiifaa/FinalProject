
function showOne() {
    document.getElementById("one").style.display="flex";
    document.getElementById("two").style.display="none";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="none";
};

  function showTwo() {
    document.getElementById("one").style.display="none";
    document.getElementById("two").style.display="flex";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="none";
};

  function showThree() {
    document.getElementById("one").style.display="none";
    document.getElementById("two").style.display="none";
    document.getElementById("three").style.display="flex";
    document.getElementById("four").style.display="none";
};

  function showFour() {
    document.getElementById("one").style.display="none";
    document.getElementById("two").style.display="none";
    document.getElementById("three").style.display="none";
    document.getElementById("four").style.display="flex";
};
