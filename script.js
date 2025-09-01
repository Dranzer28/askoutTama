(function () {
  const $ = window.jQuery;

  const inviteeName = 'Tama';
  const hostName = 'Sid';
  const whenText = 'Monday, Sep 1 - 9:00 PM';
  const whereText = 'Tabula Rasa';
  const planText = 'Purr-sonal Talks & Dinner';

  const whenISO = '2025-09-06T19:00:00';
  const durationMinutes = 150; // 2.5 hours

  // Populate dynamic fields
  $('#invitee-name').text(inviteeName);
  $('#your-name').text(hostName);
  $('#date-when').text(whenText);
  $('#date-where').text(whereText);
  $('#date-plan').text(planText);

  // Calendar link (Google Calendar style)

  // Text link (opens SMS on mobile, WhatsApp fallback on desktop)

  // Yes/No logic
  const $yes = $('#btn-yes');
  const $no = $('#btn-no');
  const $after = $('#after-yes');

  let playfulIndex = 0;
  const playfulNoTexts = [
    'Are you paws-itive? 🐾',
    'What if I bring treats? 🍪',
    'I can share my lap! 🐱',
    'I do the dishes for a week! 🧼',
    'Meow that hurts... 😿',
  ];

  $no.on('mouseenter focus', function () {
  // Keep No button fixed, do not move
  $(this).text('Maybe 🐾');
  });

  $yes.on('click', function () {
  $after.prop('hidden', false);
  gentleShake('.cat');
  $after.find('.big').text('Purr-fect! I knew mew\'d say yes! 🐱💕');
  });

  // Removed mini-game logic

  $no.on('click', function () {
    $after.prop('hidden', false);
    $after.find('.big').text('Paww-sibly Yess!🫣❤️');
  });

  // Paw trail
  const pawContainer = document.getElementById('paw-trail');
  let lastPawTime = 0;
  window.addEventListener('pointermove', (e) => {
    const now = performance.now();
    if (now - lastPawTime < 70) return;
    lastPawTime = now;
    const span = document.createElement('span');
    span.className = 'trail-heart';
    span.textContent = '❤️';
    span.style.left = e.clientX + 'px';
    span.style.top = e.clientY + 'px';
    pawContainer.appendChild(span);
    setTimeout(() => span.remove(), 1600);
  });

  // Gentle shake animation helper
  function gentleShake(selector) {
    const el = document.querySelector(selector);
    if (!el) return;
    el.animate([
      { transform: 'translateY(0)' },
      { transform: 'translateY(-2px)' },
      { transform: 'translateY(0)' }
    ], { duration: 500, iterations: 2 });
  }

  // Confetti

  // Reasons reveal (typewriter)
  const reasons = [
    'You laugh at my terrible puns',
    'You make ordinary moments feel cozy',
    'Your humour is effortless',
    'You remember the little things',
    'You make me want to be my best'
  ];
  const typed = document.getElementById('reason-typed');
  let reasonIndex = 0, typing = false;

  function typeText(text, cb) {
    if (!typed) return;
    typing = true;
    typed.textContent = '';
    let i = 0;
    const speed = 42; // slower typing ms per char
    const id = setInterval(() => {
      typed.textContent += text[i++];
      if (i >= text.length) { clearInterval(id); typing = false; cb && cb(); }
    }, speed);
  }

  function autoCycle() {
    if (reasonIndex >= reasons.length) {
      reasonIndex = 0;
      setTimeout(autoCycle, 1000); // brief pause before looping
      return;
    }
    typeText(reasons[reasonIndex++], () => {
      setTimeout(autoCycle, 800); // small pause before next
    });
  }

  // start autoplay on load
  autoCycle();
})(); 