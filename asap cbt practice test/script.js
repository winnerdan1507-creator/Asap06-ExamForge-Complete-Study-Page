// ========== DATA ==========
    const subjects = [
      { id: 'mts101', code: 'MTS 101', name: 'Mathematics', icon: '∑', color: '#00d4aa', objCount: 200, theoryCount: 50 },
      { id: 'gst111', code: 'GST 111', name: 'Use of English', icon: 'Aa', color: '#0066ff', objCount: 170, theoryCount: 50 },
      { id: 'cos101', code: 'COS 101', name: 'Computer Science', icon: '💻', color: '#ff6b6b', objCount: 150, theoryCount: 50 },
      { id: 'phy101', code: 'PHY 101', name: 'Physics', icon: '⚛', color: '#ffd93d', objCount: 200, theoryCount: 50 },
      { id: 'sta111', code: 'STA 111', name: 'Statistics', icon: '📊', color: '#9b59b6', objCount: 200, theoryCount: 50 },
      { id: 'ift101', code: 'IFT 101', name: 'Internet Fundamentals', icon: '🌐', color: '#e17055', objCount: 200, theoryCount: 50 },
      { id: 'gns103', code: 'GNS 103', name: 'Library & Info Studies', icon: '📚', color: '#00cec9', objCount: 200, theoryCount: 50 },
    ];

    // Lecture Notes Database (Simulating 40 pages of content structure)
    // In a real app, this would come from a database or markdown files.
    const lecturesDB = {
      mts101: {
        title: "MTS 101: Mathematics Lecture Notes",
        content: `
          <div class="lecture-header">
            <h1 style="font-size: 2rem; font-weight: 700; color: var(--accent); margin-bottom: 0.5rem;">MTS 101: Introduction to Mathematics</h1>
            <p style="color: var(--muted);">Comprehensive notes covering Sets, Algebra, Trigonometry, and Calculus basics.</p>
          </div>
          
          <h2>Module 1: Set Theory</h2>
          <p>A <strong>set</strong> is a well-defined collection of distinct objects. The objects in a set are called elements or members of the set.</p>
          <p>Sets are usually denoted by capital letters (A, B, C...) and elements by lowercase letters (a, b, c...).</p>
          <ul>
            <li><strong>Empty Set (∅):</strong> A set with no elements.</li>
            <li><strong>Subset (⊂):</strong> A is a subset of B if every element of A is in B.</li>
            <li><strong>Union (∪):</strong> A ∪ B contains all elements in A or B.</li>
            <li><strong>Intersection (∩):</strong> A ∩ B contains elements in both A and B.</li>
          </ul>
          <p><em>Example: If A = {1, 2, 3} and B = {3, 4, 5}, then A ∩ B = {3}.</em></p>
          
          <h2>Module 2: Number Systems</h2>
          <p>Mathematics relies on various number systems:</p>
          <ul>
            <li><strong>Natural Numbers (ℕ):</strong> {1, 2, 3, ...}</li>
            <li><strong>Whole Numbers:</strong> {0, 1, 2, 3, ...}</li>
            <li><strong>Integers (ℤ):</strong> {..., -2, -1, 0, 1, 2, ...}</li>
            <li><strong>Rational Numbers (ℚ):</strong> Numbers expressible as p/q.</li>
            <li><strong>Irrational Numbers:</strong> Cannot be expressed as fractions (e.g., √2).</li>
          </ul>
          
          <h2>Module 3: Algebra Fundamentals</h2>
          <p>Algebra involves using symbols (variables) to represent numbers. Key concepts include:</p>
          <p><strong>Quadratic Equations:</strong> Equations of the form ax² + bx + c = 0.</p>
          <p>The Discriminant (D = b² - 4ac) determines the nature of roots.</p>
          <p><em>If D > 0, roots are real and distinct. If D = 0, roots are real and equal. If D < 0, roots are complex.</em></p>
          
          <h2>Module 4: Trigonometry</h2>
          <p>Trigonometry deals with the relationships between the sides and angles of triangles.</p>
          <p>Basic Ratios:</p>
          <ul>
            <li>sin θ = Opposite / Hypotenuse</li>
            <li>cos θ = Adjacent / Hypotenuse</li>
            <li>tan θ = Opposite / Adjacent</li>
          </ul>
          <p>Key Identities: sin²θ + cos²θ = 1.</p>
          
          <h2>Practice Problems</h2>
          <p>1. Find the intersection of A={1,2,3} and B={3,4,5}.</p>
          <p>2. Solve the quadratic x² - 5x + 6 = 0.</p>
          <p>3. Prove that √2 is irrational.</p>
        `
      },
      gst111: {
        title: "GST 111: Use of English",
        content: `
          <div class="lecture-header">
            <h1 style="font-size: 2rem; font-weight: 700; color: var(--accent); margin-bottom: 0.5rem;">GST 111: English Language & Communication</h1>
            <p style="color: var(--muted);">Study notes on grammar, essay writing, and comprehension skills.</p>
          </div>
          
          <h2>Module 1: Parts of Speech</h2>
          <p>The parts of speech explain how a word is used in a sentence. There are eight main parts:</p>
          <ul>
            <li><strong>Noun:</strong> Names a person, place, thing, or idea (e.g., Lagos, book).</li>
            <li><strong>Pronoun:</strong> Replaces a noun (e.g., he, she, it).</li>
            <li><strong>Verb:</strong> Shows action or state of being (e.g., run, is).</li>
            <li><strong>Adjective:</strong> Modifies a noun (e.g., beautiful, tall).</li>
            <li><strong>Adverb:</strong> Modifies a verb, adjective, or another adverb (e.g., quickly).</li>
          </ul>
          
          <h2>Module 2: Sentence Structure</h2>
          <p>A sentence must contain a subject and a predicate.</p>
          <p><strong>Simple Sentence:</strong> Contains one independent clause. "The boy runs."</p>
          <p><strong>Compound Sentence:</strong> Contains two independent clauses joined by a conjunction. "The boy runs and the girl walks."</p>
          <p><strong>Complex Sentence:</strong> Contains one independent clause and at least one dependent clause.</p>
          
          <h2>Module 3: Essay Writing</h2>
          <p>An essay typically has three parts: Introduction, Body, and Conclusion.</p>
          <p>The introduction sets the stage with a hook and thesis statement.</p>
          <p>Body paragraphs should each focus on a single main idea supported by evidence.</p>
          <p>The conclusion summarizes the main points and restates the thesis in a new way.</p>
          
          <h2>Module 4: Time Management</h2>
          <p>Effective time management for students involves:</p>
          <ul>
            <li>Setting clear priorities.</li>
            <li>Creating a study schedule.</li>
            <li>Avoiding procrastination.</li>
            <li>Breaking large tasks into smaller steps.</li>
          </ul>
        `
      },
      // Add similar structures for other subjects...
      cos101: {
        title: "COS 101: Computer Science Fundamentals",
        content: `
          <div class="lecture-header">
            <h1 style="font-size: 2rem; font-weight: 700; color: var(--accent); margin-bottom: 0.5rem;">COS 101: Introduction to Computing</h1>
          </div>
          <h2>Module 1: History of Computers</h2>
          <p>Computing devices have evolved from mechanical calculators to modern quantum computers. Key milestones include the Analytical Engine (Babbage) and the Turing Machine.</p>
          <h2>Module 2: Hardware Components</h2>
          <ul>
            <li><strong>CPU:</strong> The "brain" of the computer performing calculations.</li>
            <li><strong>RAM:</strong> Volatile memory for temporary data storage.</li>
            <li><strong>Storage:</strong> Permanent data storage (HDD, SSD).</li>
          </ul>
          <h2>Module 3: Software & Algorithms</h2>
          <p>Software is a set of instructions (programs) that tell the hardware what to do. An <strong>Algorithm</strong> is a step-by-step procedure for solving a problem.</p>
        `
      }
      // Simplified for brevity in this example code
    };
    
    // Add default content for subjects without specific lectures
    subjects.forEach(s => {
      if(!lecturesDB[s.id]) {
        lecturesDB[s.id] = {
          title: `${s.code}: ${s.name}`,
          content: `
            <div class="lecture-header">
              <h1 style="font-size: 2rem; font-weight: 700; color: var(--accent);">${s.code}</h1>
            </div>
            <h2>Introduction</h2>
            <p>Comprehensive lecture notes for ${s.name} are currently being compiled. Please check back later or attempt the Quiz to study key concepts.</p>
            <h2>Key Topics</h2>
            <ul>
              <li>Fundamental Concepts</li>
              <li>Core Principles</li>
              <li>Practical Applications</li>
            </ul>
          `
        };
      }
    });

    const questionsDB = {
      mts101: {
        objectives: [
          { q: "If A={1,2,3} and B={3,4,5}, find A∩B.", options: ["{1,2}", "{3}", "{4,5}", "{1,2,3}"], answer: 1, explanation: "A∩B means intersection - elements common to both sets. Only 3 is in both A and B." },
          { q: "Which of the following is irrational?", options: ["1/2", "√2", "5", "−3"], answer: 1, explanation: "√2 cannot be expressed as a ratio of two integers." },
          { q: "The number of subsets of a set with 3 elements is", options: ["6", "8", "9", "3"], answer: 1, explanation: "Number of subsets = 2^n where n=3. 2³ = 8." },
          { q: "sin30° =", options: ["1", "1/2", "√3/2", "0"], answer: 1, explanation: "sin30° = 0.5 = 1/2." },
          { q: "cos60° =", options: ["1/2", "0", "1", "√3"], answer: 0, explanation: "cos60° = 0.5 = 1/2." },
        ],
        theory: [
          { q: "Define a set.", a: "A set is a collection of distinct objects." },
          { q: "Explain the difference between a subset and a proper subset.", a: "A⊂B means all elements of A are in B; A⊂B is proper if A≠B." },
        ]
      },
      gst111: {
        objectives: [
          { q: "Which part of speech describes a noun?", options: ["Verb", "Adjective", "Adverb", "Conjunction"], answer: 1, explanation: "Adjectives describe nouns." },
          { q: "A clause must contain", options: ["Only noun", "Subject and verb", "Adjective", "Adverb"], answer: 1, explanation: "A clause has a subject and predicate." },
          { q: "Effective sentences should be", options: ["Long", "Clear", "Confusing", "Complex"], answer: 1, explanation: "Clarity is essential for effective communication." },
        ],
        theory: [
          { q: "Explain Time Management.", a: "Time management is the process of planning and organizing how to divide time between activities." },
        ]
      },
      // Simplified DB for other subjects
      cos101: { objectives: [ { q: "The CPU is the ____ of the computer.", options: ["Heart", "Brain", "Soul", "Leg"], answer: 1, explanation: "It processes instructions." } ], theory: [] },
      phy101: { objectives: [ { q: "Force is measured in?", options: ["Joule", "Newton", "Watt", "Pascal"], answer: 1, explanation: "Newton is the SI unit of force." } ], theory: [] },
      sta111: { objectives: [ { q: "Mean of 2,4,6,8,10 is?", options: ["5", "6", "7", "8"], answer: 1, explanation: "(2+4+6+8+10)/5 = 6." } ], theory: [] },
      ift101: { objectives: [ { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Method Logic", "None"], answer: 0, explanation: "HyperText Markup Language." } ], theory: [] },
      gns103: { objectives: [ { q: "OPAC stands for?", options: ["Online Public Access Catalogue", "Open Public Access Code", "Official Public Access Center", "None"], answer: 0, explanation: "Used in libraries to search holdings." } ], theory: [] }
    };

    // ========== STATE ==========
    let currentUser = null;
    let currentSection = 'home';
    let currentSubject = null;
    let selectedQuizType = 'objectives';
    let selectedQuestionCount = 20;
    let questions = [];
    let userAnswers = [];
    let currentQuestionIndex = 0;
    let timer = null;
    let timeLeft = 30;
    let totalPoints = 0;
    let stats = { answered: 0, correct: 0, wrong: 0, subjectScores: {} };

    const sections = {
      home: document.getElementById('home-section'),
      subjects: document.getElementById('subjects-section'),
      platform: document.getElementById('platform-section'),
      lecture: document.getElementById('lecture-section'),
      quizSetup: document.getElementById('quiz-setup-section'),
      quiz: document.getElementById('quiz-section'),
      theory: document.getElementById('theory-section'),
      progress: document.getElementById('progress-section'),
      results: document.getElementById('results-section'),
      corrections: document.getElementById('corrections-section'),
    };

    // ========== INITIALIZATION ==========
    document.addEventListener('DOMContentLoaded', () => {
      loadUserData();
      renderFeaturedSubjects();
      renderAllSubjects();
      renderPerformanceList();
      renderPlatformCourses();
    });

    // ========== AUTH ==========
    function toggleAuthForm() {
      document.getElementById('login-form').classList.toggle('hidden');
      document.getElementById('signup-form').classList.toggle('hidden');
    }
    function handleLogin() {
      const email = document.getElementById('login-email').value.trim();
      if (email) {
        currentUser = { name: email.split('@')[0], email: email };
        localStorage.setItem('examforge_user', JSON.stringify(currentUser));
        closeAuthModal();
      }
    }
    function handleSignup() {
      const name = document.getElementById('signup-name').value.trim();
      const email = document.getElementById('signup-email').value.trim();
      if (name && email) {
        currentUser = { name, email };
        localStorage.setItem('examforge_user', JSON.stringify(currentUser));
        closeAuthModal();
      }
    }
    function closeAuthModal() {
      document.getElementById('auth-modal').classList.remove('active');
      loadUserData();
    }
    function logout() {
      localStorage.removeItem('examforge_user');
      document.getElementById('auth-modal').classList.add('active');
    }
    function loadUserData() {
      const savedUser = localStorage.getItem('examforge_user');
      if (savedUser) {
        currentUser = JSON.parse(savedUser);
        document.getElementById('welcome-user').textContent = currentUser.name;
        document.getElementById('user-avatar').textContent = currentUser.name.charAt(0).toUpperCase();
      }
      const savedStats = localStorage.getItem('examforge_stats');
      if (savedStats) {
        const parsed = JSON.parse(savedStats);
        stats = parsed.stats || stats;
        totalPoints = parsed.totalPoints || 0;
      }
      document.getElementById('totalPoints').textContent = totalPoints.toLocaleString();
      updateStatsDisplay();
    }

    // ========== RENDERING ==========
    function renderFeaturedSubjects() {
      document.getElementById('featured-subjects').innerHTML = subjects.map((s, i) => createSubjectCard(s, i)).join('');
    }
    function renderAllSubjects() {
      document.getElementById('all-subjects').innerHTML = subjects.map((s, i) => createSubjectCard(s, i)).join('');
    }
    function createSubjectCard(subject, index) {
      const progress = stats.subjectScores[subject.id]?.total > 0 ? Math.round((stats.subjectScores[subject.id].correct / stats.subjectScores[subject.id].total) * 100) : 0;
      return `
        <div class="subject-card animate-slide-up" style="animation-delay: ${index * 0.1}s" onclick="selectSubject('${subject.id}')">
          <div class="text-3xl mb-2">${subject.icon}</div>
          <h3 class="font-bold text-lg mb-1">${subject.code}</h3>
          <p class="text-[var(--muted)] text-sm mb-3">${subject.name}</p>
          <div class="progress-track mb-2"><div class="progress-fill" style="width: ${progress}%"></div></div>
          <span class="text-xs text-[var(--muted)]">${progress}% complete</span>
        </div>
      `;
    }
    function renderPerformanceList() {
      document.getElementById('performance-list').innerHTML = subjects.map(s => {
        const progress = stats.subjectScores[s.id]?.total > 0 ? Math.round((stats.subjectScores[s.id].correct / stats.subjectScores[s.id].total) * 100) : 0;
        return `<div class="bg-[var(--card)] border border-[var(--border)] rounded-xl p-4 flex items-center gap-4">
            <div class="text-2xl">${s.icon}</div>
            <div class="flex-1">
              <div class="flex justify-between mb-1"><span>${s.code}</span><span class="text-sm text-[var(--muted)]">${progress}%</span></div>
              <div class="progress-track"><div class="progress-fill" style="width: ${progress}%"></div></div>
            </div>
          </div>`;
      }).join('');
    }

    // ========== PLATFORM & LECTURES ==========
    function renderPlatformCourses() {
      document.getElementById('platform-courses').innerHTML = subjects.map(s => `
        <div class="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <div class="flex items-center gap-3 mb-4">
            <div class="text-2xl">${s.icon}</div>
            <h3 class="font-bold">${s.code}</h3>
          </div>
          <p class="text-[var(--muted)] text-sm mb-4">${s.name}</p>
          <div class="flex gap-2">
            <button class="btn-secondary text-sm flex-1" onclick="openLecture('${s.id}')">Read Notes</button>
            <button class="btn-primary text-sm flex-1" onclick="selectSubject('${s.id}')">Take Quiz</button>
          </div>
        </div>
      `).join('');
    }

    function openLecture(subjectId) {
      currentSubject = subjects.find(s => s.id === subjectId);
      const lecture = lecturesDB[subjectId];
      document.getElementById('lecture-container').innerHTML = lecture.content;
      showSection('lecture');
    }

    function downloadCurrentLecture() {
      if(!currentSubject) return;
      const lecture = lecturesDB[currentSubject.id];
      const element = document.getElementById('lecture-container');
      
      const opt = {
        margin: 10,
        filename: `${currentSubject.code}_LectureNotes.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(element).save();
    }

    // ========== QUIZ LOGIC ==========
    function selectSubject(subjectId) {
      currentSubject = subjects.find(s => s.id === subjectId);
      document.getElementById('setup-icon').textContent = currentSubject.icon;
      document.getElementById('setup-code').textContent = currentSubject.code;
      document.getElementById('setup-name').textContent = currentSubject.name;
      showSection('quizSetup');
    }

    function selectQuizType(type) {
      selectedQuizType = type;
      const objBtn = document.getElementById('type-obj-btn');
      const theoryBtn = document.getElementById('type-theory-btn');
      const countSection = document.getElementById('question-count-section');
      
      if (type === 'objectives') {
        objBtn.className = "px-4 py-2 rounded-lg font-medium bg-[var(--card)] border border-[var(--accent)] text-[var(--accent)]";
        theoryBtn.className = "px-4 py-2 rounded-lg font-medium bg-[var(--bg)] border border-[var(--border)]";
        countSection.style.display = 'block';
      } else {
        theoryBtn.className = "px-4 py-2 rounded-lg font-medium bg-[var(--card)] border border-[var(--accent)] text-[var(--accent)]";
        objBtn.className = "px-4 py-2 rounded-lg font-medium bg-[var(--bg)] border border-[var(--border)]";
        countSection.style.display = 'none';
      }
    }

    function selectQuestionCount(count) {
      selectedQuestionCount = count;
      // Visual update logic could be added here
    }

    function showRulesModal() {
      if (selectedQuizType === 'objectives') {
        document.getElementById('rules-subject').textContent = currentSubject.code;
        document.getElementById('rules-count').textContent = selectedQuestionCount;
        document.getElementById('rules-modal').classList.add('active');
      } else {
        startTheoryQuiz();
      }
    }
    function closeRulesModal() { document.getElementById('rules-modal').classList.remove('active'); }
    function confirmStartQuiz() { closeRulesModal(); startObjectiveQuiz(); }

    function startObjectiveQuiz() {
      const allQuestions = questionsDB[currentSubject.id]?.objectives || [];
      const maxCount = Math.min(selectedQuestionCount, allQuestions.length);
      questions = shuffleArray([...allQuestions]).slice(0, maxCount);
      userAnswers = new Array(questions.length).fill(null);
      currentQuestionIndex = 0;
      document.getElementById('quiz-subject-title').textContent = currentSubject.code;
      document.getElementById('total-q').textContent = questions.length;
      showSection('quiz');
      renderQuestion();
      startTimer();
    }

    function startTheoryQuiz() {
      questions = questionsDB[currentSubject.id]?.theory || [];
      document.getElementById('theory-subject-title').textContent = currentSubject.code;
      renderTheoryQuestions();
      showSection('theory');
    }

    function renderQuestion() {
      const q = questions[currentQuestionIndex];
      document.getElementById('current-q').textContent = currentQuestionIndex + 1;
      document.getElementById('question-text').textContent = q.q;
      document.getElementById('quiz-progress').style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
      const letters = ['A', 'B', 'C', 'D'];
      document.getElementById('options-container').innerHTML = q.options.map((opt, i) => `
        <button class="option-btn ${userAnswers[currentQuestionIndex] === i ? 'selected' : ''}" onclick="selectOption(${i})">
          <span class="option-letter">${letters[i]}</span>
          <span>${opt}</span>
        </button>
      `).join('');
      document.getElementById('next-btn').textContent = currentQuestionIndex === questions.length - 1 ? 'Submit' : 'Next';
    }

    function renderTheoryQuestions() {
      document.getElementById('theory-container').innerHTML = questions.map((q, i) => `
        <div class="bg-[var(--card)] border border-[var(--border)] rounded-xl p-6">
          <p class="font-medium mb-3">${i+1}. ${q.q}</p>
          <details class="explanation-box">
            <summary class="cursor-pointer text-[var(--accent)] text-sm font-medium">Show Answer</summary>
            <p class="mt-3 text-[var(--muted)]">${q.a}</p>
          </details>
        </div>
      `).join('');
    }

    function selectOption(index) {
      userAnswers[currentQuestionIndex] = index;
      renderQuestion();
    }

    function nextQuestion() {
      if (currentQuestionIndex === questions.length - 1) submitQuiz();
      else { currentQuestionIndex++; renderQuestion(); resetTimer(); }
    }
    
    function prevQuestion() {
      if (currentQuestionIndex > 0) { currentQuestionIndex--; renderQuestion(); resetTimer(); }
    }

    function submitQuiz() {
      clearInterval(timer);
      let correct = 0, wrong = 0, skipped = 0;
      questions.forEach((q, i) => {
        if (userAnswers[i] === null || userAnswers[i] === -1) skipped++;
        else if (userAnswers[i] === q.answer) correct++;
        else wrong++;
      });
      const percentage = Math.round((correct / questions.length) * 100);
      
      stats.answered += questions.length; stats.correct += correct; stats.wrong += wrong;
      if (!stats.subjectScores[currentSubject.id]) stats.subjectScores[currentSubject.id] = { correct: 0, total: 0 };
      stats.subjectScores[currentSubject.id].correct += correct;
      stats.subjectScores[currentSubject.id].total += questions.length;
      totalPoints += correct * 10;
      
      document.getElementById('final-score').textContent = `${percentage}%`;
      document.getElementById('correct-count').textContent = correct;
      document.getElementById('total-questions').textContent = questions.length;
      document.getElementById('score-correct').textContent = correct;
      document.getElementById('score-wrong').textContent = wrong;
      document.getElementById('score-skipped').textContent = skipped;
      document.getElementById('totalPoints').textContent = totalPoints.toLocaleString();
      
      saveData();
      updateStatsDisplay();
      renderAllSubjects();
      renderPerformanceList();
      showSection('results');
    }

    function showCorrections() {
      const letters = ['A', 'B', 'C', 'D'];
      document.getElementById('corrections-container').innerHTML = questions.map((q, i) => `
        <div class="correction-card ${userAnswers[i] === q.answer ? 'correct' : 'wrong'}">
          <p class="font-medium mb-4">${i+1}. ${q.q}</p>
          <div class="grid gap-2">
            ${q.options.map((opt, j) => `
              <div class="p-2 rounded ${j === q.answer ? 'bg-[rgba(0,212,170,0.1)] border border-[var(--success)]' : (j === userAnswers[i] ? 'bg-[rgba(255,71,87,0.1)] border border-[var(--danger)]' : 'bg-[var(--bg)]')}">
                ${letters[j]}. ${opt} ${j === q.answer ? '(Correct)' : ''}
              </div>
            `).join('')}
          </div>
          <div class="explanation-box mt-4 text-sm text-[var(--muted)]">${q.explanation}</div>
        </div>
      `).join('');
      showSection('corrections');
    }
    
    function backToResults() { showSection('results'); }
    function retryQuiz() { if(currentSubject) showRulesModal(); }
    function exitQuiz() { clearInterval(timer); showSection('subjects'); }

    // ========== PDF DOWNLOAD FOR RESULTS ==========
    function downloadResultsPDF() {
      const element = document.getElementById('corrections-container');
      if(!element.innerHTML) { showCorrections(); }
      
      // We need to re-render for PDF context because the dark theme won't print well
      const letters = ['A', 'B', 'C', 'D'];
      let html = `<div style="font-family: sans-serif; padding: 20px; color: #333;">`;
      html += `<h1 style="color: #00a88a;">Quiz Results: ${currentSubject.code}</h1>`;
      html += `<p>Score: ${document.getElementById('final-score').textContent}</p><hr/>`;
      
      questions.forEach((q, i) => {
        html += `<div style="margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px;">`;
        html += `<p><strong>Q${i+1}:</strong> ${q.q}</p>`;
        q.options.forEach((opt, j) => {
          const isCorrect = j === q.answer;
          const isUser = j === userAnswers[i];
          let style = "padding: 5px; display: block; margin: 2px 0;";
          if(isCorrect) style += "background: #dcfce7; color: #166534; border-left: 3px solid #16a34a;";
          else if(isUser && !isCorrect) style += "background: #fee2e2; color: #991b1b; border-left: 3px solid #dc2626;";
          
          html += `<span style="${style}">${letters[j]}. ${opt} ${isCorrect ? '✓' : ''} ${isUser && !isCorrect ? '✗ Your Answer' : ''}</span>`;
        });
        html += `<p style="font-size: 12px; color: #666; margin-top: 5px;"><em>Explanation: ${q.explanation}</em></p>`;
        html += `</div>`;
      });
      html += '</div>';
      
      const container = document.getElementById('pdf-export-area');
      container.innerHTML = html;
      
      const opt = {
        margin: 10,
        filename: `${currentSubject.code}_Results.pdf`,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(container).save().then(() => { container.innerHTML = ''; });
    }

    // ========== TIMER ==========
    function startTimer() {
      timeLeft = 30;
      updateTimerDisplay();
      timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) {
          if (userAnswers[currentQuestionIndex] === null) userAnswers[currentQuestionIndex] = -1;
          nextQuestion();
        }
      }, 1000);
    }
    function resetTimer() { clearInterval(timer); startTimer(); }
    function updateTimerDisplay() {
      document.getElementById('timer-display').textContent = timeLeft;
      const offset = 150.8 * (1 - timeLeft / 30);
      document.getElementById('timer-circle').style.strokeDashoffset = offset;
    }

    // ========== UTILS ==========
    function showSection(section) {
      Object.values(sections).forEach(s => s.classList.add('hidden'));
      sections[section].classList.remove('hidden');
      currentSection = section;
      window.scrollTo(0, 0);
    }
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    function saveData() { localStorage.setItem('examforge_stats', JSON.stringify({ stats, totalPoints })); }
    function updateStatsDisplay() {
      document.getElementById('stat-answered').textContent = stats.answered;
      document.getElementById('stat-accuracy').textContent = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) + '%' : '0%';
      document.getElementById('stat-points').textContent = totalPoints;
      let best = '-', bestScore = 0;
      Object.entries(stats.subjectScores).forEach(([id, data]) => {
        if (data.total > 0) {
          const score = (data.correct / data.total) * 100;
          if (score > bestScore) { bestScore = score; best = subjects.find(s => s.id === id)?.code || id; }
        }
      });
      document.getElementById('stat-best').textContent = best;
    }