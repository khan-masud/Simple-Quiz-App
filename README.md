# Simple Quiz App

Welcome to the **Quiz App**, an engaging and fun web-based application where users can test their knowledge through humorous and culturally relevant quiz questions.

## 🌟 Features

- **Dynamic Quiz Questions:** Each question comes with multiple answer options, and the correct answer is marked for seamless interactivity.
- **Humorous Content:** The questions are designed with a Bangladeshi cultural twist to make learning and playing enjoyable.
- **Interactive Design:** A clean and simple UI for a smooth user experience.
- **Customizable:** Easily add or modify questions and answers by editing the JavaScript file.

## 🛠️ Technologies Used

- **HTML5:** For structuring the web page.
- **CSS3:** For styling and enhancing visual appeal.
- **JavaScript:** For dynamic functionality and interactivity.

## 🚀 Getting Started

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox, Edge).
- A code editor (optional, for customization).

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/khan-masud/Simple-Quiz-App.git
   ```
2. Navigate to the project directory:
   ```bash
   cd quiz-app
   ```
3. Open the `index.html` file in your browser to play the quiz.


## 📂 Project Structure

```
quiz-app/
├── index.html       # Main HTML file
├── style.css        # Stylesheet for design
├── script.js        # JavaScript file for quiz functionality
└── README.md        # Project documentation
```

## ✨ How to Add New Questions

1. Open the `script.js` file.
2. Locate the `questions` array.
3. Add a new object following the existing structure:
   ```javascript
   {
       question: "Your question here",
       answer: [
           { text: "Option 1", correct: false },
           { text: "Option 2", correct: true },
           { text: "Option 3", correct: false },
           { text: "Option 4", correct: false }
       ]
   }
   ```
4. Save the file and refresh the browser.


## 🌍 Live Demo

```
https://quiz-app-masud.vercel.app/
```

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Submit issues for bugs or feature requests.
- Fork the repository, make changes, and create a pull request.

## 📜 License

This project is licensed under the MIT License.

## 🙌 Acknowledgments

- Special thanks to **Abdullah Al Masud** for conceptualizing this fun and interactive project.
- Inspired by the cultural quirks and humor of Bangladesh.

---

🎉 Enjoy the Quiz App and have fun testing your knowledge! 😊
