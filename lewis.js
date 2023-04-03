var qNumb = 0;
var question = '<h1>niaje mkuu, mi naitwa Lewis. unaitwaje??</h1>';
var output = document.getElementById('output');
output.innerHTML = question;

function chatBot() {
  var input = document.getElementById('input').value;
  console.log(input);
  
  if (qNumb == 0) {
    output.innerHTML = 'wow bana nimenice sana kukujua, ' + input + '.</h1>';
    document.getElementById('input').value = "";
    question = '<h1>naweza kusaidia aje?</h1>';
    setTimeout(timedQuestion, 3000);
  }
  
  else if (qNumb == 1) {
    output.innerHTML = '<h1>Sorry fot that unahitaji tu kujiaminia.na kujitia nguvu</h1>';
    document.getElementById('input').value = "";
    question = '<h1><h1>,unastahili kuvumilia buda, tia bidii na ujiamini alafu uweke God first?</h1>'; 
    setTimeout(timedQuestion, 3000);
  }
  
  else if (qNumb == 2) {
    output.innerHTML = '<h1>nakuelewa sana joh, thisis life, it have got ups and downs,we must embrace all ,manze lakini we must finnaly make it sawa?.</h1>';
    document.getElementById('input').value = "";
    question = '<h1>unafaa ujue you are a grown up, na kila decision una make iko na consequences, so be careful</h1>'; 
    setTimeout(timedQuestion, 3000);
  }
  
  else if (qNumb == 3) {
    output.innerHTML = '<h1>I like ' + input + ' too.</h1>';
    document.getElementById('input').value = "";
    question = '<h1>yes put God first, Hatawai kuangusha hawezi kuacha?</h1>'; 
    setTimeout(timedQuestion, 3000);
  }
  
  else if (qNumb == 4) {
    output.innerHTML = '<h1>the good thing ni ati God anatupenda sana manze kuliko everyone else, so usijali.</h1>';
    document.getElementById('input').value = "";
    question = '<h1>build your confidence and courage</h1>'; 
    setTimeout(timedQuestion, 3000);
  }
  
  else if (qNumb == 5) {
    output.innerHTML = '<h1>usikuwe influenced by anyone be yopurself.</h1>';
    document.getElementById('input').value = "";
    question = '<h1>uko sawa sasa?</h1>'; 
    setTimeout(timedQuestion, 3000);
  }
  else if (qNumb == 6) {
    switch(input) {
      case "yes":
      output.innerHTML = '<h1>Awesome!</h1>';
      break;
      case "no":
      output.innerHTML = '<h1>! Sorry to hear that.nikusaidie wapi</h1>';
    }
    document.getElementById('input').value = "";
    question = '<h1>Well, I have to go. Have a great day. Hope to talk again!</h1>'; 
    setTimeout(timedQuestion, 3000);
  }
  
}

function timedQuestion() {
  output.innerHTML = question;
}

// $(document).keypress(function(e) {
//  if (e.which == 13) {
//   chatBot();
//   qNumb++
// }                   
// });

document.getElementById('input').addEventListener('keypress', pressKey);

function pressKey(event) {
  if (event.which == 13) {
    chatBot();
    qNumb++
  }
}