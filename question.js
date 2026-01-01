const questions = [
{
  question: "What are your main skin concerns?",
  options: ["Sensitivity","Redness","Fine lines","Loss of firmness","Hyper-pigmentation","Acne","Dryness","Other"],
  why: "Your specific concerns guide ingredient prioritization and treatment focus so we can build a personalized regimen."
},
{
  question: "How sensitive is your skin?",
  options: ["Not sensitive","Slightly sensitive","Very sensitive"],
  why: "Skin sensitivity indicates barrier health. Sensitive skin requires gentler concentrations and soothing ingredients like niacinamide and ceramides."
},
{
  question: "Are you concerned with dark circles?",
  options: ["Yes","No"],
  why: "Dark circles can indicate pigmentation, vascular issues, or fatigue — all require different treatment strategies."
},
{
  question: "When you wake up, your skin feels",
  options: ["Dry","Normal","Oily","Tight"],
  why: "Morning skin condition reveals hydration and oil-balance, which helps us customize moisturizers."
},
{
  question: "In photos, your skin appears",
  options: ["Dull","Shiny","Red","Even"],
  why: "Visual appearance helps assess glow, oil reflection, redness and skin texture."
},
{
  question: "After a shower, your face feels",
  options: ["Dry","Soft","Tight","Oily"],
  why: "Post-wash sensation indicates moisture retention and barrier strength."
},
{
  question: "How would you describe your skin type?",
  options: ["Dry","Oily","Combination","Normal"],
  why: "Skin type controls cleanser, serum and moisturizer formulation."
},
{
  question: "How would you describe your skin tone?",
  options: ["Light","Medium","Tan","Deep"],
  why: "Melanin levels affect pigmentation risk and sunscreen needs."
},
{
  question: "Do you wear makeup?",
  options: ["Yes","No","Sometimes"],
  why: "Makeup use affects pore congestion and cleansing strategy."
},
{
  question: "What do you consume daily?",
  options: ["Water","Coffee","Sugar","Fruits","Fast food"],
  why: "Diet strongly impacts inflammation, acne and skin aging."
},
{
  question: "How stressed are you?",
  options: ["Low","Moderate","High"],
  why: "Stress increases cortisol which triggers breakouts and dullness."
},
{
  question: "How many hours of sleep?",
  options: ["<5","5-7","7-9","9+"],
  why: "Skin regenerates during sleep — low sleep accelerates aging."
},
{
  question: "What is your gender?",
  options: ["Male","Female","Other"],
  why: "Hormonal differences influence oil production and skin thickness."
},
{
  question: "How old are you?",
  options: ["<18","18-25","26-35","36-50","50+"],
  why: "Age determines collagen production and wrinkle formation."
},
{
  question: "Do you use retinol?",
  options: ["Yes","No"],
  why: "Retinol affects sensitivity, peeling and product compatibility."
},
{
  question: "Any skincare allergies?",
  options: ["Yes","No","Not sure"],
  why: "Avoiding allergens prevents irritation and long-term damage."
}
];

let current = 0;

function loadQuestion(){
  const q = questions[current];
  document.getElementById("stepCount").innerText = `${current+1} / ${questions.length}`;

  let html = `
  <h2 class="text-2xl font-bold text-gray-800 mb-2">${q.question}</h2>
  <p class="text-gray-500 mb-6">Select all that apply</p>
  <div class="grid grid-cols-2 md:grid-cols-3 gap-4">`;

  q.options.forEach(opt=>{
    html += `<button class="option-btn">${opt}</button>`;
  });

  html += `</div>`;
  document.getElementById("questionBox").innerHTML = html;
  document.getElementById("whyText").innerText = q.why;
}

function nextQuestion() {
  if (current < questions.length - 1) {
    current++;
    loadQuestion();
  } else {
    // When last question is finished → go to routine page
    window.location.href = "routine.html";
  }
}

function prevQuestion(){ if(current > 0){ current--; loadQuestion(); } }

loadQuestion();

//connect with the start consultion page

function goToQuestions(){
    window.location.href = "question.html";
}

