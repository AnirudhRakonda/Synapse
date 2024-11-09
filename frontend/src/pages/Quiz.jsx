import React, { useState } from 'react';

// Header Component
const Header = () => (
  <header className="flex justify-between items-center py-6 px-8 bg-[#1E1E1E] text-[#ffffff] shadow-md">
    <div className="text-2xl font-bold">Synapse Quiz</div>
    <nav className="space-x-6">
      <a href="#trivia" className="text-[#ffffff] hover:text-[#5572CA]">Trivia</a>
      <a href="#quiz" className="text-[#ffffff] hover:text-[#5572CA]">Quiz</a>
      <a href="#leaderboard" className="text-[#ffffff] hover:text-[#5572CA]">Leaderboard</a>
      <a href="#compete" className="text-[#ffffff] hover:text-[#5572CA]">Compete</a>
    </nav>
    <div className="space-x-4">
      <button className="text-[#ffffff] hover:bg-[#44527F] px-6 py-2 rounded">Profile</button>
    </div>
  </header>
);

// Mock Data for Quiz, Leaderboard, and Users
const quizQuestions = [
  {
    question: "What is the time complexity of quicksort in the average case?",
    options: ["O(n)", "O(n log n)", "O(n^2)", "O(log n)"],
    answer: "O(n log n)",
  },
  {
    question: "Which data structure uses LIFO (Last In First Out) order?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    answer: "Stack",
  },
  {
    question: "What does 'CSS' stand for?",
    options: ["Cascading Style Sheets", "Creative Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
    answer: "Cascading Style Sheets",
  },
];

const triviaQuestions = [
  {
    question: "Who invented the telephone?",
    options: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Marie Curie"],
    answer: "Alexander Graham Bell",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Beijing", "Seoul", "Tokyo", "Hanoi"],
    answer: "Tokyo",
  },
];

const leaderboardData = [
  { name: 'User1', score: 90 },
  { name: 'User2', score: 80 },
  { name: 'User3', score: 70 },
];

const users = ['User1', 'User2', 'User3', 'User4', 'User5']; // Mock users for random matching

// MainContent Component
const MainContent = () => {
  const [isQuizActive, setQuizActive] = useState(false);
  const [isTriviaActive, setTriviaActive] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [triviaScore, setTriviaScore] = useState(0);
  const [triviaComplete, setTriviaComplete] = useState(false);
  const [challengingUser, setChallengingUser] = useState(null); // For the competing feature
  const [randomUser, setRandomUser] = useState(null); // To store the random peer
  const [peerScore, setPeerScore] = useState(0); // Peer score for comparison

  // Start the quiz
  const startQuiz = () => {
    console.log("Quiz started");
    setQuizActive(true);
    setScore(0);
    setUserAnswers([]);
    setQuizComplete(false);
    setCurrentQuestionIndex(0);
  };

  // Start the trivia
  const startTrivia = () => {
    setTriviaActive(true);
    setTriviaScore(0);
    setTriviaComplete(false);
    setCurrentQuestionIndex(0);
  };

  // Handle the user answering a question
  const handleAnswer = (selectedOption) => {
    const currentQuestion = isQuizActive ? quizQuestions[currentQuestionIndex] : triviaQuestions[currentQuestionIndex];
    const isCorrect = selectedOption === currentQuestion.answer;
  
    if (isQuizActive) {
      setScore(score + (isCorrect ? 10 : 0));
    } else {
      setTriviaScore(triviaScore + (isCorrect ? 10 : 0));
    }
  
    // Move to the next question or complete the quiz/trivia
    if (currentQuestionIndex < (isQuizActive ? quizQuestions.length - 1 : triviaQuestions.length - 1)) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizComplete(isQuizActive); // Set complete state based on active quiz/trivia
      setTriviaComplete(!isQuizActive);
    }
  };

  // Generate a random peer and start the competition
  const generateRandomUser = () => {
    const randomPeer = users[Math.floor(Math.random() * users.length)];
    setRandomUser(randomPeer); // Match with a random peer
    setChallengingUser(randomPeer);
    setPeerScore(Math.floor(Math.random() * 100)); // Random peer score for comparison
    setQuizActive(true);
    setScore(0);
    setUserAnswers([]);
    setQuizComplete(false);
    setCurrentQuestionIndex(0);
  };

  // Get the winner
  const getWinner = () => {
    if (score > peerScore) {
      return "You win!";
    } else if (score < peerScore) {
      return `${challengingUser} wins!`;
    } else {
      return "It's a tie!";
    }
  };

  return (
    <main className="text-center py-16 px-4 bg-[#1E1E1E] text-[#ffffff] backdrop-blur-lg bg-opacity-30 rounded-lg shadow-xl">
      {/* Landing Page Content */}
      {!challengingUser ? (
        <div id="landing" className="space-y-8">
          <h1 className="text-4xl font-bold">Welcome to Synapse Quiz</h1>
          <p className="mt-4 text-lg">Test your knowledge with coding quizzes or play trivia! Compete with your peers and see who wins.</p>

          <div className="mt-6 space-x-4">
            <button
              className="bg-[#5572CA] text-[#ffffff] px-8 py-4 rounded hover:bg-[#44527F] transition"
              onClick={startQuiz}
            >
              Start Quiz
            </button>
            <button
              className="bg-[#5572CA] text-[#ffffff] px-8 py-4 rounded hover:bg-[#44527F] transition"
              onClick={startTrivia}
            >
              Start Trivia
            </button>
            <button
              className="bg-[#e3342f] text-[#ffffff] px-8 py-4 rounded hover:bg-[#44527F] transition"
              onClick={generateRandomUser}
            >
              Compete with Random User
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-8">
          <h2 className="text-2xl font-bold mb-4">Competing Against {challengingUser}</h2>

          <div className="space-y-4">
            {(isQuizActive ? quizQuestions : triviaQuestions)[currentQuestionIndex] && (
              <>
                <h3 className="text-xl">{(isQuizActive ? quizQuestions : triviaQuestions)[currentQuestionIndex].question}</h3>
                <div className="mt-4 space-y-2">
                  {(isQuizActive ? quizQuestions : triviaQuestions)[currentQuestionIndex].options.map((option, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      className="w-full bg-[#5572CA] text-[#ffffff] py-2 rounded-md shadow-md hover:bg-[#44527F] transition"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Show scores of both players during the competition */}
          <div className="mt-6 flex justify-between items-center text-xl font-semibold">
            <div className="text-[#5572CA]">Your Score: {score}</div>
            <div className="text-[#5572CA]">{challengingUser}'s Score: {peerScore}</div>
          </div>
        </div>
      )}

      {/* Show result when quiz/trivia is complete */}
      {(quizComplete || triviaComplete) && (
        <div className="mt-8 space-y-4">
          <h2 className="text-2xl font-bold mb-2">Competition Over!</h2>
          <p className="text-xl">{getWinner()}</p>
          <div className="mt-6">
            <button
              onClick={() => setChallengingUser(null)}
              className="bg-[#5572CA] text-[#ffffff] px-8 py-4 rounded hover:bg-[#44527F] transition"
            >
              Back to Main Menu
            </button>
          </div>
        </div>
      )}
    </main>
  );
};

// App Component (Main Component)
const Quiz = () => (
  <div className="bg-[#1E1E1E] text-[#ffffff] min-h-screen">
    <Header />
    <MainContent />
  </div>
);

export default Quiz;
