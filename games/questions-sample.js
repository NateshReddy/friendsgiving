// Practice questions for testing the game night app. Real party questions live in questions-party.js.
window.FG_SAMPLE = {
  jeopardy: {
    values: [100, 200, 300],
    categories: [
      {
        name: "Bollywood",
        qs: [
          { id: "s-j-bw-1", level: "easy", q: "Which actor is known as “King Khan”?", a: "Shah Rukh Khan" },
          { id: "s-j-bw-2", level: "medium", q: "Jai and Veeru are the two friends at the heart of which 1975 film?", a: "Sholay" },
          { id: "s-j-bw-3", level: "hard", q: "Which film was India’s first ever Oscar nomination for Best Foreign Language Film, in 1958?", a: "Mother India" }
        ]
      },
      {
        name: "Cricket",
        qs: [
          { id: "s-j-cr-1", level: "easy", q: "Which batsman is called the “God of Cricket”?", a: "Sachin Tendulkar" },
          { id: "s-j-cr-2", level: "medium", q: "In which year did India win its first Cricket World Cup?", a: "1983" },
          { id: "s-j-cr-3", level: "hard", q: "Rohit Sharma holds the record for the highest ODI score. How many runs did he make?", a: "264 (vs Sri Lanka, 2014)" }
        ]
      },
      {
        name: "Which State's Dish?",
        qs: [
          { id: "s-j-fd-1", level: "easy", q: "Dhokla comes from which state?", a: "Gujarat" },
          { id: "s-j-fd-2", level: "medium", q: "Litti chokha is the signature dish of which state?", a: "Bihar" },
          { id: "s-j-fd-3", level: "hard", q: "Pootharekulu, the paper-thin rolled sweet, comes from which state?", a: "Andhra Pradesh" }
        ]
      },
      {
        name: "India GK",
        qs: [
          { id: "s-j-gk-1", level: "easy", q: "What is India’s national animal?", a: "The Bengal tiger" },
          { id: "s-j-gk-2", level: "medium", q: "How many states does India have today?", a: "28 (plus 8 union territories)" },
          { id: "s-j-gk-3", level: "hard", q: "Which river is known as the “Sorrow of Bihar”?", a: "The Kosi" }
        ]
      }
    ]
  },

  literal: [
    { id: "s-l-1", level: "easy", q: "Something Something Happens", a: "Kuch Kuch Hota Hai" },
    { id: "s-l-2", level: "easy", q: "The Big-Hearted Will Take Away the Bride", a: "Dilwale Dulhania Le Jayenge" },
    { id: "s-l-3", level: "medium", q: "Sometimes Happiness, Sometimes Sadness", a: "Kabhi Khushi Kabhie Gham" },
    { id: "s-l-4", level: "medium", q: "You Won't Get This Life Again", a: "Zindagi Na Milegi Dobara" },
    { id: "s-l-5", level: "hard", q: "Land Tax", a: "Lagaan" },
    { id: "s-l-6", level: "hard", q: "Everyone Has Their Own Style", a: "Andaz Apna Apna" }
  ],

  thisthat: [
    { id: "s-t-1", level: "easy", q: "Who is older?", a: "Shah Rukh Khan", b: "Salman Khan", correct: "a", note: "SRK was born in November 1965, Salman in December 1965." },
    { id: "s-t-2", level: "easy", q: "Which film came out first?", a: "Sholay", b: "Dilwale Dulhania Le Jayenge", correct: "a", note: "Sholay is from 1975, DDLJ from 1995." },
    { id: "s-t-3", level: "medium", q: "Which is taller?", a: "Gateway of India", b: "Qutub Minar", correct: "b", note: "Qutub Minar is about 73 m. Gateway of India is about 26 m." },
    { id: "s-t-4", level: "medium", q: "Who has more ODI centuries?", a: "Sachin Tendulkar", b: "Virat Kohli", correct: "b", note: "Kohli passed Sachin’s 49 at the 2023 World Cup." },
    { id: "s-t-5", level: "hard", q: "Which state is bigger by area?", a: "Maharashtra", b: "Madhya Pradesh", correct: "b", note: "Madhya Pradesh is India’s 2nd largest state. Maharashtra is 3rd, just behind." },
    { id: "s-t-6", level: "hard", q: "Which chilli is hotter?", a: "Guntur chilli", b: "Bhut jolokia", correct: "b", note: "Bhut jolokia is around a million Scoville units, far above Guntur." }
  ],

  dialogue: [
    { id: "s-d-1", level: "easy", q: "Mogambo…", a: "…khush hua!", film: "Mr. India" },
    { id: "s-d-2", level: "easy", q: "Kitne aadmi…", a: "…the?", film: "Sholay" },
    { id: "s-d-3", level: "medium", q: "Mere paas…", a: "…maa hai.", film: "Deewaar" },
    { id: "s-d-4", level: "medium", q: "Bade bade deshon mein…", a: "…aisi chhoti chhoti baatein hoti rehti hain, Senorita.", film: "Dilwale Dulhania Le Jayenge" },
    { id: "s-d-5", level: "hard", q: "Rishte mein toh hum tumhare baap lagte hain…", a: "…naam hai Shahenshah.", film: "Shahenshah" },
    { id: "s-d-6", level: "hard", q: "Pushpa, I hate…", a: "…tears.", film: "Amar Prem" }
  ]
};
