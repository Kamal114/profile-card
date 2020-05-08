const heading = "Please meet our team";
let i = 0;

const typing = () => {
    document.querySelector('.heading').innerHTML += heading.charAt(i);
    i++;
    setTimeout(typing, 150);
}

typing();
