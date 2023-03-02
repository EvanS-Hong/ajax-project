var char = document.querySelector('.column');
var charImg = document.querySelector('.column-middle');
var desc = document.querySelector('.column-right');
var weap = document.querySelector('.weapons');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://valorant-api.com/v1/agents?isPlayableCharacter=true');
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  // console.log(xhr.response.data);
  for (var i = 0; i < xhr.response.data.length; i++) {
    var div = document.createElement('div');
    div.className = 'character';
    div.classList.add(xhr.response.data[i].role.displayName.toLowerCase());

    var img1 = document.createElement('img');
    img1.src = xhr.response.data[i].displayIcon;

    var text = document.createElement('p');
    text.textContent = xhr.response.data[i].displayName;

    char.appendChild(div);
    div.appendChild(img1);
    div.appendChild(text);

    var img2 = document.createElement('img');
    img2.src = xhr.response.data[i].fullPortraitV2;
    if (i !== 0) {
      img2.className = 'hidden';
    }
    charImg.appendChild(img2);

    var div2 = document.createElement('div');
    if (i === 0) {
      div2.className = 'content';
    } else {
      div2.className = 'content hidden';
    }

    var div3 = document.createElement('div');
    div3.className = '.role-wrapper';

    var text2 = document.createElement('h2');
    text2.textContent = '// ROLE';

    var h1 = document.createElement('h1');
    h1.textContent = xhr.response.data[i].role.displayName.toUpperCase();

    var img3 = document.createElement('img');
    img3.src = xhr.response.data[i].role.displayIcon;

    var text3 = document.createElement('h2');
    text3.textContent = '// BIOGRAPHY';

    var text4 = document.createElement('p');
    text4.textContent = xhr.response.data[i].description;

    desc.appendChild(div2);
    div2.appendChild(text2);
    div2.appendChild(div3);
    div3.appendChild(h1);
    div3.appendChild(img3);
    div2.appendChild(text3);
    div2.appendChild(text4);

  }
});
xhr.send();

var xhr2 = new XMLHttpRequest();
xhr2.open('GET', 'https://valorant-api.com/v1/weapons');
xhr2.responseType = 'json';

xhr2.addEventListener('load', function () {
  // console.log(xhr2.response.data);
  for (var i = 0; i < xhr2.response.data.length; i++) {
    var div = document.createElement('div');
    if (xhr2.response.data[i].displayName === 'Sheriff') {
      div.className = 'gun sheriff';
      div.classList.add(xhr2.response.data[i].category);
    } else if (xhr2.response.data[i].displayName === 'Classic') {
      div.className = 'gun classic';
      div.classList.add(xhr2.response.data[i].category);
    } else if (xhr2.response.data[i].displayName === 'Frenzy') {
      div.className = 'gun frenzy';
      div.classList.add(xhr2.response.data[i].category);
    } else {
      div.className = 'gun';
      div.classList.add(xhr2.response.data[i].category);
    }

    var p = document.createElement('p');
    p.textContent = xhr2.response.data[i].displayName;

    var img = document.createElement('img');
    img.src = xhr2.response.data[i].displayIcon;

    weap.appendChild(div);
    div.appendChild(p);
    div.appendChild(img);
  }
});
xhr2.send();

var selector = document.querySelector('.selection-bar');
function viewSwap(event) {
  var agentView = document.querySelector('.agentsView');
  var weaponView = document.querySelector('.weaponsView');
  if (event.target.getAttribute('id') === 'agents') {
    agentView.classList.remove('hidden');
    weaponView.classList.add('hidden');
  } else if (event.target.getAttribute('id') === 'weapons') {
    agentView.classList.add('hidden');
    weaponView.classList.remove('hidden');
  }

}
selector.addEventListener('click', viewSwap);

var pickGuns = document.getElementById('guns');
var pickAgents = document.querySelector('.agents');

function gunSwap(event) {
  var gunList = document.querySelectorAll('.gun');
  for (var i = 0; i < gunList.length; i++) {
    if (gunList[i].classList.contains(event.target.value)) {
      gunList[i].classList.remove('hidden');
    } else if (event.target.value === 'all') {
      gunList[i].classList.remove('hidden');
    } else {
      gunList[i].classList.add('hidden');
    }
  }
}

function agentSwap(event) {
  var agentList = document.querySelectorAll('.character');
  for (var i = 0; i < agentList.length; i++) {
    if (agentList[i].classList.contains(event.target.value)) {
      agentList[i].classList.remove('hidden');
    } else if (event.target.value === 'all') {
      agentList[i].classList.remove('hidden');
    } else {
      agentList[i].classList.add('hidden');
    }
  }
}

pickGuns.addEventListener('change', gunSwap);
pickAgents.addEventListener('change', agentSwap);
