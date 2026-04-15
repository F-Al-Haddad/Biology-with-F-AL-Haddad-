// =============================================
// GAMES DATA
// =============================================
const GAMES = [
  { id: 0, icon: '🔵', title: 'تركيب الخلية', sub: 'Cell Structure', badge: '🏅',
    questions: [
      { q: 'ما الوظيفة الرئيسية للغشاء البلازمي؟', opts: ['إنتاج الطاقة','التحكم في دخول وخروج المواد','تخزين المعلومات الوراثية','تصنيع البروتينات'], ans: 1 },
      { q: 'أي عضية تُسمى "مصنع الطاقة" في الخلية؟', opts: ['النواة','الرايبوسوم','الميتوكوندريا','جهاز غولجي'], ans: 2 },
      { q: 'أين توجد المعلومات الوراثية (DNA) في الخلية حقيقية النواة؟', opts: ['السيتوبلازم','الغشاء البلازمي','النواة','الفجوة'], ans: 2 },
      { q: 'ما وظيفة الرايبوسومات؟', opts: ['تصنيع البروتينات','تحليل السكر','نقل الأكسجين','تخزين الطاقة'], ans: 0 },
      { q: 'الفرق الرئيسي بين الخلية النباتية والحيوانية هو وجود:', opts: ['النواة','الميتوكوندريا','جدار الخلية والبلاستيدات الخضراء','الرايبوسومات'], ans: 2 },
      { q: 'ما وظيفة جهاز غولجي؟', opts: ['تصنيع الطاقة','تعديل وتغليف وإرسال البروتينات','تخزين الماء','تخليق الـ DNA'], ans: 1 }
    ]
  },
  { id: 1, icon: '🔄', title: 'الانقسام الخلوي', sub: 'Cell Division', badge: '🥇',
    questions: [
      { q: 'كم عدد مراحل الانقسام المتساوي (Mitosis)؟', opts: ['3','4','5','6'], ans: 1 },
      { q: 'في أي مرحلة تنفصل الكروماتيدات الشقيقة في الانقسام المتساوي؟', opts: ['الطور التمهيدي','الطور الاستوائي','الطور الانفصالي','الطور النهائي'], ans: 2 },
      { q: 'ما الهدف الرئيسي من الانقسام المنصف (Meiosis)؟', opts: ['إصلاح الخلايا التالفة','تكوين الأمشاج','نمو الجسم','استبدال الخلايا الميتة'], ans: 1 },
      { q: 'الانقسام المنصف ينتج عنه كم خلية ابنة؟', opts: ['2','3','4','8'], ans: 2 },
      { q: 'في الطور الاستوائي (Metaphase)، تتراص الكروموسومات في:', opts: ['القطبين','المستوى الاستوائي للخلية','النواة','الغشاء البلازمي'], ans: 1 },
      { q: 'ما المرحلة التي تظهر فيها الكروموسومات بشكل واضح لأول مرة؟', opts: ['الطور النهائي','الطور التمهيدي','الطور الانفصالي','الطور الاستوائي'], ans: 1 }
    ]
  },
  { id: 2, icon: '🌱', title: 'قوانين مندل', sub: "Mendel's Laws", badge: '🌟',
    questions: [
      { q: 'ما قانون السيادة التامة عند مندل؟', opts: ['يظهر كلا الوالدين في الجيل الأول','تسود الصفة القوية على الضعيفة','تختلط الصفات في الجيل الأول','لا تظهر أي صفة'], ans: 1 },
      { q: 'في التزاوج (Aa × Aa)، ما نسبة الأفراد ذوي النمط الظاهري السائد؟', opts: ['1/4','1/2','3/4','4/4'], ans: 2 },
      { q: 'الرمز AA يُمثّل فرداً:', opts: ['متنحياً خالصاً','سائداً هجيناً','سائداً خالصاً','غير محدد'], ans: 2 },
      { q: 'ما قانون التوزيع الحر لمندل؟', opts: ['الصفات تنتقل معاً دائماً','توزيع الأليلات لصفة مستقل عن أليلات صفة أخرى','الصفات تختلط في الجيل الثاني','الصفة المتنحية تختفي للأبد'], ans: 1 },
      { q: 'الرمز aa يُمثّل فرداً:', opts: ['سائداً خالصاً','سائداً هجيناً','متنحياً خالصاً','هجيناً'], ans: 2 },
      { q: 'في قانون الانعزال، كل فرد يحمل للصفة الواحدة:', opts: ['أليلاً واحداً','أليلين','ثلاثة أليلات','أربعة أليلات'], ans: 1 }
    ]
  },
  { id: 3, icon: '⚡', title: 'الطفرات الجينية', sub: 'Gene Mutations', badge: '🔥',
    questions: [
      { q: 'ما الطفرة التي تحدث عند إزالة قاعدة نيتروجينية من التسلسل الجيني؟', opts: ['الاستبدال','الإضافة','الحذف','الانقلاب'], ans: 2 },
      { q: 'أي الطفرات تُسبب إزاحة الإطار (Frameshift)؟', opts: ['الاستبدال فقط','الحذف والإضافة','الانقلاب فقط','لا شيء مما سبق'], ans: 1 },
      { q: 'طفرة الاستبدال تعني:', opts: ['إزالة قاعدة','إضافة قاعدة جديدة','استبدال قاعدة بأخرى','حذف كروموسوم كامل'], ans: 2 },
      { q: 'ما العامل الذي يمكن أن يُسبب الطفرات الجينية؟', opts: ['شرب الماء','الأشعة فوق البنفسجية','النوم الكافي','التمثيل الضوئي'], ans: 1 },
      { q: 'الطفرة الصامتة (Silent Mutation) هي:', opts: ['طفرة تُغير الحمض الأميني','طفرة لا تُغير البروتين الناتج','طفرة تُوقف تخليق البروتين','طفرة تُضيف كروموسوماً'], ans: 1 },
      { q: 'فقر الدم المنجلي مثال على طفرة من نوع:', opts: ['حذف','إضافة','استبدال (نقطية)','انقلاب'], ans: 2 }
    ]
  },
  { id: 4, icon: '🧬', title: 'الحمض النووي DNA', sub: 'DNA & RNA', badge: '💎',
    questions: [
      { q: 'ما مكونات النيوكليوتيد في الـ DNA؟', opts: ['قاعدة نيتروجينية + سكر ريبوز + فوسفات','قاعدة نيتروجينية + سكر ديوكسيريبوز + فوسفات','أحماض أمينية فقط','جلوكوز + أكسجين'], ans: 1 },
      { q: 'أي قاعدة نيتروجينية ترتبط مع الأدينين (A) في الـ DNA؟', opts: ['السيتوزين (C)','الجوانين (G)','الثايمين (T)','الأوراسيل (U)'], ans: 2 },
      { q: 'ما الإنزيم المسؤول عن فك خيوط DNA أثناء التضاعف؟', opts: ['البوليميراز','الهيلكيز','اللايكيز','النيوكليياز'], ans: 1 },
      { q: 'في الـ RNA، يُستبدل الثايمين بـ:', opts: ['الأدينين','السيتوزين','الجوانين','الأوراسيل'], ans: 3 },
      { q: 'عملية الترجمة (Translation) تحدث في:', opts: ['النواة','الميتوكوندريا','الرايبوسومات','جهاز غولجي'], ans: 2 },
      { q: 'ما عدد خيوط جزيء الـ DNA؟', opts: ['خيط واحد','خيطان (Double Helix)','ثلاثة خيوط','أربعة خيوط'], ans: 1 }
    ]
  },
  { id: 5, icon: '🔬', title: 'تطبيقات الوراثة', sub: 'Genetics Applications', badge: '🚀',
    questions: [
      { q: 'الهندسة الوراثية تعني:', opts: ['دراسة تاريخ الوراثة','التلاعب في الجينات لتغيير صفات الكائنات','زراعة النباتات طبيعياً','دراسة الكروموسومات فقط'], ans: 1 },
      { q: 'البصمة الوراثية تُستخدم في:', opts: ['علاج السرطان فقط','التعرف على الهوية وتحديد علاقات القرابة','إنتاج الأنسولين','استنساخ الحيوانات'], ans: 1 },
      { q: 'الاستنساخ يعني:', opts: ['التكاثر الجنسي الطبيعي','إنتاج نسخة وراثية متطابقة من كائن حي','تعديل الجينات','استخدام DNA في الطب'], ans: 1 },
      { q: 'CRISPR هي تقنية تُستخدم في:', opts: ['التصوير بالأشعة','تحرير وتعديل الجينات بدقة','علم الأعصاب','الزراعة المائية'], ans: 1 },
      { q: 'اللقاحات المعتمدة على الهندسة الوراثية تعمل عن طريق:', opts: ['حقن الفيروس الحي كاملاً','استخدام جزء من الجين لإنتاج بروتين يُحفز المناعة','تعطيل جهاز المناعة','زرع الجينات مباشرة'], ans: 1 },
      { q: 'الكائنات المحوّرة وراثياً (GMO) هي:', opts: ['كائنات عاشت منذ ملايين السنين','كائنات تم تعديل جيناتها بشكل مصطنع','كائنات منقرضة','كائنات بحرية'], ans: 1 }
    ]
  }
];

// =============================================
// POINTS SYSTEM (localStorage)
// =============================================
function getPoints() { return parseInt(localStorage.getItem('bio_points') || '0'); }
function getBadges() { return JSON.parse(localStorage.getItem('bio_badges') || '[]'); }
function savePoints(p) { localStorage.setItem('bio_points', p); }
function saveBadges(b) { localStorage.setItem('bio_badges', JSON.stringify(b)); }
function addPoints(p, badge) {
  const pts = getPoints() + p;
  savePoints(pts);
  const badges = getBadges();
  if (badge && !badges.includes(badge)) badges.push(badge);
  saveBadges(badges);
}

function renderPointsBar() {
  const pts = document.getElementById('total-pts');
  const bl = document.getElementById('badge-list');
  if (pts) pts.textContent = getPoints();
  if (bl) {
    const b = getBadges();
    bl.innerHTML = b.length ? b.map(x=>`<span style="font-size:18px">${x}</span>`).join('') : '<span style="opacity:0.5;font-size:12px">لا يوجد بعد</span>';
  }
}

// =============================================
// QUIZ ENGINE
// =============================================
let currentGame = null, currentQ = 0, answered = false, score = 0;

function startGame(id) {
  currentGame = GAMES[id];
  currentQ = 0; score = 0; answered = false;
  document.getElementById('quiz-overlay').classList.add('open');
  showQuestion();
}

function showQuestion() {
  const q = currentGame.questions[currentQ];
  const total = currentGame.questions.length;
  const pct = (currentQ / total * 100).toFixed(0);
  document.getElementById('quiz-content').innerHTML = `
    <div class="quiz-title">${currentGame.icon} ${currentGame.title}</div>
    <div class="quiz-progress">سؤال ${currentQ + 1} من ${total}</div>
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div class="quiz-q">${q.q}</div>
    <div class="quiz-opts">
      ${q.opts.map((o,i) => `<button class="opt-btn" id="opt-${i}" onclick="answer(${i})">${o}</button>`).join('')}
    </div>
    <div class="quiz-feedback" id="qfb"></div>
    <button class="quiz-next-btn" id="qnext" onclick="nextQ()">${currentQ + 1 < total ? 'التالي ←' : 'النتيجة 🏁'}</button>
  `;
}

function answer(i) {
  if (answered) return;
  answered = true;
  const q = currentGame.questions[currentQ];
  document.querySelectorAll('.opt-btn').forEach(b => b.disabled = true);
  const fb = document.getElementById('qfb');
  if (i === q.ans) {
    document.getElementById('opt-' + i).classList.add('correct');
    fb.textContent = '✅ إجابة صحيحة!'; fb.style.color = '#1da868';
    score++;
  } else {
    document.getElementById('opt-' + i).classList.add('wrong');
    document.getElementById('opt-' + q.ans).classList.add('correct');
    fb.textContent = '❌ الإجابة الصحيحة: ' + q.opts[q.ans]; fb.style.color = '#e24b4a';
  }
  document.getElementById('qnext').style.display = 'block';
}

function nextQ() {
  currentQ++;
  answered = false;
  if (currentQ < currentGame.questions.length) { showQuestion(); }
  else { showResult(); }
}

function showResult() {
  const total = currentGame.questions.length;
  const pct = Math.round(score / total * 100);
  let badge = '', msg = '', stars = 0;
  if (pct === 100) { badge = '🏆'; msg = 'ممتاز! أداء مثالي!'; stars = 3; }
  else if (pct >= 70) { badge = currentGame.badge; msg = 'رائع! أداء جيد جداً!'; stars = 2; }
  else if (pct >= 50) { badge = '⭐'; msg = 'جيد! استمري في التعلم!'; stars = 1; }
  else { badge = '💪'; msg = 'حاولي مرة أخرى!'; stars = 0; }
  addPoints(score * 10, badge);
  renderPointsBar();
  document.getElementById('quiz-content').innerHTML = `
    <div class="quiz-score-box">
      <div class="quiz-badge">${badge}</div>
      <div class="quiz-score-big">${score}/${total}</div>
      <div class="stars">${[1,2,3].map(s=>`<span class="star" style="opacity:${s<=stars?1:0.25}">⭐</span>`).join('')}</div>
      <div class="quiz-score-msg">${msg}<br><span style="font-size:13px;color:#5a5a8a;font-weight:400">حصلتِ على ${score*10} نقطة!</span></div>
      <div class="score-btns">
        <button class="score-btn score-btn-primary" onclick="startGame(${currentGame.id})">🔄 أعيدي اللعب</button>
        <button class="score-btn score-btn-secondary" onclick="closeQuiz()">✕ إغلاق</button>
      </div>
    </div>
  `;
}

function closeQuiz() {
  document.getElementById('quiz-overlay').classList.remove('open');
}

window.addEventListener('DOMContentLoaded', renderPointsBar);
