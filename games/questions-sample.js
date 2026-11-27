// Practice set v3: kept small on purpose so the good material is saved for the party set.
window.FG_SAMPLE = {
  jeopardy: {
    values: [100, 200, 300],
    categories: [
      {
        name: "India GK",
        qs: [
          { id: "s2-j-gk-1", level: "easy", q: "What is the capital of Arunachal Pradesh?", a: "Itanagar" },
          { id: "s2-j-gk-2", level: "medium", q: "Which state has India\u2019s longest coastline?", a: "Gujarat" },
          { id: "s2-j-gk-3", level: "hard", q: "Lonar Lake in Maharashtra was formed by what?", a: "A meteorite impact" }
        ]
      },
      {
        name: "What State's Dish?",
        qs: [
          { id: "s2-j-fd-1", level: "easy", q: "Bisi bele bath comes from which state?", a: "Karnataka" },
          { id: "s2-j-fd-2", level: "medium", q: "Chhena poda, the \u201cburnt cheese\u201d dessert, comes from which state?", a: "Odisha" },
          { id: "s2-j-fd-3", level: "hard", q: "Siddu, a steamed stuffed bread, comes from which state?", a: "Himachal Pradesh" }
        ]
      },
      {
        name: "Koffee & Gossip",
        qs: [
          { id: "s3-j-kg-1", level: "easy", q: "Which actress married Virat Kohli in Italy in 2017?", a: "Anushka Sharma" },
          { id: "s3-j-kg-2", level: "medium", q: "Which actress married Nick Jonas in 2018?", a: "Priyanka Chopra" },
          { id: "s3-j-kg-3", level: "hard", q: "Gauri Khan is best known for which business?", a: "Interior design" }
        ]
      },
      {
        name: "Mythology & Epics",
        qs: [
          { id: "s3-j-my-1", level: "easy", q: "Which brother went into exile with Rama and Sita?", a: "Lakshmana" },
          { id: "s3-j-my-2", level: "medium", q: "Who taught archery to both the Pandavas and the Kauravas?", a: "Dronacharya" },
          { id: "s3-j-my-3", level: "hard", q: "In the Mahabharata, who narrates the Kurukshetra war to the blind king Dhritarashtra?", a: "Sanjaya" }
        ]
      }
    ]
  },

  literal: [
    { id: "s2-l-1", level: "easy", q: "Wrestling Bout", a: "Dangal" },
    { id: "s2-l-2", level: "medium", q: "Blind Tune", a: "Andhadhun" },
    { id: "s2-l-3", level: "hard", q: "The Maze", a: "Bhool Bhulaiyaa" }
  ],

  thisthat: [
    { id: "s2-t-1", level: "easy", q: "Which came out first?", a: "Hum Aapke Hain Koun..!", b: "Dilwale Dulhania Le Jayenge", correct: "a", note: "Hum Aapke Hain Koun..! is from 1994, DDLJ from 1995." },
    { id: "s2-t-2", level: "medium", q: "Which is older?", a: "Taj Mahal", b: "Qutub Minar", correct: "b", note: "Qutub Minar was started around 1200. The Taj Mahal was built in the 1630s and 1640s." },
    { id: "s2-t-3", level: "hard", q: "Which state has more districts?", a: "Uttar Pradesh", b: "Madhya Pradesh", correct: "a", note: "Uttar Pradesh has 75 districts, more than any other state." }
  ],

  dialogue: [
    { id: "s2-d-1", level: "easy", q: "Don ko pakadna mushkil hi nahi…", a: "…naamumkin hai.", film: "Don" },
    { id: "s2-d-2", level: "medium", q: "Tension lene ka nahi…", a: "…sirf dene ka.", film: "Munna Bhai M.B.B.S." },
    { id: "s2-d-3", level: "hard", q: "Ek chutki sindoor ki keemat…", a: "…tum kya jaano Ramesh babu.", film: "Om Shanti Om" }
  ],

  tunes: [
    { id: "s3-n-0", level: "easy", q: "Item number", a: "Chikni Chameli", src: "Agneepath", year: "2012" },
    { id: "s3-n-1", level: "medium", q: "Item number", a: "Munni Badnaam Hui", src: "Dabangg", year: "2010" },
    { id: "s3-n-2", level: "hard", q: "90s indie-pop", a: "Bolo Ta Ra Ra", src: "Daler Mehndi", year: "1995" }
  ]
};
