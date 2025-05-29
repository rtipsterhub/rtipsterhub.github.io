import React, { useState } from 'react';
import { Sparkles, Star, Shield, Crown, BookOpen } from 'lucide-react';

const HogwartsQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 0 });
  const [showResult, setShowResult] = useState(false);
  const [userName, setUserName] = useState('');
  const [quizStarted, setQuizStarted] = useState(false);

  const questions = [
    {
      question: "You're walking alone at night and come to a fork in the road. Which path do you take?",
      options: [
        { text: "The well-lit path that looks safe", house: "hufflepuff", points: 3 },
        { text: "The mysterious dark path that intrigues you", house: "slytherin", points: 3 },
        { text: "The path with strange sounds - you want to investigate", house: "gryffindor", points: 3 },
        { text: "You study both paths carefully before deciding", house: "ravenclaw", points: 3 }
      ]
    },
    {
      question: "What quality do you most admire in others?",
      options: [
        { text: "Loyalty and kindness", house: "hufflepuff", points: 3 },
        { text: "Intelligence and creativity", house: "ravenclaw", points: 3 },
        { text: "Courage and determination", house: "gryffindor", points: 3 },
        { text: "Ambition and cunning", house: "slytherin", points: 3 }
      ]
    },
    {
      question: "You're given a group project. What role do you naturally take?",
      options: [
        { text: "The mediator who keeps everyone working together", house: "hufflepuff", points: 2 },
        { text: "The researcher who gathers all the information", house: "ravenclaw", points: 2 },
        { text: "The leader who takes charge and motivates others", house: "gryffindor", points: 2 },
        { text: "The strategist who plans the most efficient approach", house: "slytherin", points: 2 }
      ]
    },
    {
      question: "What's your greatest fear?",
      options: [
        { text: "Being rejected or abandoned by those you love", house: "hufflepuff", points: 2 },
        { text: "Being seen as ignorant or stupid", house: "ravenclaw", points: 2 },
        { text: "Being seen as a coward", house: "gryffindor", points: 2 },
        { text: "Being powerless or insignificant", house: "slytherin", points: 2 }
      ]
    },
    {
      question: "Which magical creature would you most like to study?",
      options: [
        { text: "Nifflers - they're cute and harmless", house: "hufflepuff", points: 2 },
        { text: "Phoenixes - ancient and full of mystery", house: "ravenclaw", points: 2 },
        { text: "Dragons - dangerous but magnificent", house: "gryffindor", points: 2 },
        { text: "Basilisks - powerful and commanding respect", house: "slytherin", points: 2 }
      ]
    },
    {
      question: "How do you prefer to solve problems?",
      options: [
        { text: "Work with others and find a solution everyone can agree on", house: "hufflepuff", points: 3 },
        { text: "Research thoroughly and think it through logically", house: "ravenclaw", points: 3 },
        { text: "Face it head-on with determination", house: "gryffindor", points: 3 },
        { text: "Find the most advantageous solution for yourself", house: "slytherin", points: 3 }
      ]
    },
    {
      question: "What motivates you most?",
      options: [
        { text: "Making others happy and creating harmony", house: "hufflepuff", points: 3 },
        { text: "Learning new things and understanding the world", house: "ravenclaw", points: 3 },
        { text: "Standing up for what's right", house: "gryffindor", points: 3 },
        { text: "Achieving your goals and gaining recognition", house: "slytherin", points: 3 }
      ]
    },
    {
      question: "Which Hogwarts class sounds most interesting?",
      options: [
        { text: "Herbology - working with plants and nature", house: "hufflepuff", points: 2 },
        { text: "Ancient Runes - decoding mysterious symbols", house: "ravenclaw", points: 2 },
        { text: "Defense Against the Dark Arts - learning to fight evil", house: "gryffindor", points: 2 },
        { text: "Potions - creating powerful magical substances", house: "slytherin", points: 2 }
      ]
    }
  ];

  const houses = {
    gryffindor: {
      name: "Gryffindor",
      colors: "bg-gradient-to-br from-red-600 to-yellow-500",
      icon: <Shield className="w-16 h-16 text-yellow-300" />,
      traits: ["Brave", "Daring", "Chivalrous", "Bold"],
      description: "You belong in Gryffindor! You're brave, daring, and always ready to stand up for what's right. Like Harry Potter, Hermione Granger, and Ron Weasley, you face challenges head-on with courage and determination.",
      founder: "Godric Gryffindor",
      element: "Fire",
      mascot: "Lion"
    },
    hufflepuff: {
      name: "Hufflepuff", 
      colors: "bg-gradient-to-br from-yellow-400 to-yellow-600",
      icon: <Star className="w-16 h-16 text-yellow-800" />,
      traits: ["Loyal", "Patient", "Kind", "Hard-working"],
      description: "You belong in Hufflepuff! You're loyal, patient, and believe in treating everyone fairly. Like Cedric Diggory and Newt Scamander, you value friendship, hard work, and kindness above all else.",
      founder: "Helga Hufflepuff",
      element: "Earth", 
      mascot: "Badger"
    },
    ravenclaw: {
      name: "Ravenclaw",
      colors: "bg-gradient-to-br from-blue-600 to-blue-800",
      icon: <BookOpen className="w-16 h-16 text-blue-200" />,
      traits: ["Intelligent", "Wise", "Curious", "Creative"],
      description: "You belong in Ravenclaw! You're intelligent, curious, and always seeking knowledge. Like Luna Lovegood and Cho Chang, you think outside the box and value wisdom and creativity.",
      founder: "Rowena Ravenclaw",
      element: "Air",
      mascot: "Eagle"
    },
    slytherin: {
      name: "Slytherin",
      colors: "bg-gradient-to-br from-green-700 to-gray-800", 
      icon: <Crown className="w-16 h-16 text-green-300" />,
      traits: ["Ambitious", "Cunning", "Resourceful", "Determined"],
      description: "You belong in Slytherin! You're ambitious, resourceful, and determined to achieve your goals. Like Severus Snape and Draco Malfoy, you're willing to do whatever it takes to succeed.",
      founder: "Salazar Slytherin",
      element: "Water",
      mascot: "Serpent"
    }
  };

  const handleAnswer = (option) => {
    const newScores = { ...scores };
    newScores[option.house] += option.points;
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const maxScore = Math.max(...Object.values(scores));
    const winningHouse = Object.keys(scores).find(house => scores[house] === maxScore);
    return houses[winningHouse];
  };

  const startQuiz = () => {
    if (userName.trim()) {
      setQuizStarted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScores({ gryffindor: 0, hufflepuff: 0, ravenclaw: 0, slytherin: 0 });
    setShowResult(false);
    setQuizStarted(false);
    setUserName('');
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-md w-full text-center border border-white/20">
          <Sparkles className="w-20 h-20 text-yellow-400 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-white mb-4">Hogwarts House Sorting</h1>
          <p className="text-white/80 mb-6">Discover which Hogwarts house you truly belong in!</p>
          
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-white/60 border border-white/30 mb-6 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          
          <button
            onClick={startQuiz}
            disabled={!userName.trim()}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold py-3 px-6 rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Begin Sorting Ceremony
          </button>
        </div>
      </div>
    );
  }

  if (showResult) {
    const result = getResult();
    return (
      <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
        <div className={`${result.colors} rounded-3xl p-8 max-w-2xl w-full text-center shadow-2xl`}>
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            {result.icon}
            <h1 className="text-5xl font-bold text-white mb-4">{result.name}</h1>
            <h2 className="text-2xl text-white/90 mb-6">Welcome, {userName}!</h2>
            
            <p className="text-lg text-white/90 mb-6 leading-relaxed">{result.description}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="font-bold text-white mb-2">Your Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {result.traits.map((trait, index) => (
                    <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-4">
                <h3 className="font-bold text-white mb-2">House Details</h3>
                <p className="text-white/80 text-sm">Founder: {result.founder}</p>
                <p className="text-white/80 text-sm">Element: {result.element}</p>
                <p className="text-white/80 text-sm">Mascot: {result.mascot}</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={resetQuiz}
                className="flex-1 bg-white/20 text-white font-bold py-3 px-6 rounded-xl hover:bg-white/30 transition-all duration-300"
              >
                Take Quiz Again
              </button>
              <button
                onClick={() => {
                  const text = `I've been sorted into ${result.name}! 🏰✨`;
                  navigator.share ? navigator.share({title: 'My Hogwarts House', text}) : navigator.clipboard.writeText(text);
                }}
                className="flex-1 bg-white text-gray-800 font-bold py-3 px-6 rounded-xl hover:bg-gray-100 transition-all duration-300"
              >
                Share Result
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl w-full border border-white/20">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-white">Question {currentQuestion + 1} of {questions.length}</h2>
            <div className="text-white/60">👋 {userName}</div>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-white mb-8 leading-relaxed">
          {questions[currentQuestion].question}
        </h3>

        <div className="space-y-4">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="w-full p-4 text-left bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 text-white hover:scale-105 border border-white/20 hover:border-white/40"
            >
              <span className="font-medium">{option.text}</span>
            </button>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-white/60 text-sm">Choose the answer that best represents you</p>
        </div>
      </div>
    </div>
  );
};

export default HogwartsQuiz;