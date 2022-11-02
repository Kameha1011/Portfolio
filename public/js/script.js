  // bootstrap pooper
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})

// animacion terminal text

consoleText(['Web Developer', 'Console Text', 'Made with Love.'], 'text',['green','rebeccapurple','lightblue']);

function consoleText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

//form
 const contactForm = document.querySelector('.contact-form');

 let fName = document.getElementById('name');
 let email = document.getElementById('email');
 let subject = document.getElementById('subject');
 let message = document.getElementById('message');

  contactForm.addEventListener('submit', e =>{ 
    e.preventDefault(); 
    let formData = {
      name: fName.value,
      email: email.value,
      subject: subject.value,
      message: message.value
  }
   axios.post('/', formData)
   
   .then(function (response) {
    alert('Mail Sent')
    fName.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
     console.log(response);
   })
   .catch(function (error) {
    alert('an error ocurred', error)
     console.log(error);
   });
 });




