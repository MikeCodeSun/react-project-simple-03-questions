import questions from "./data";
import Question from "./Question";

function App() {
  return (
    <main>
      <div className="container">
        <h2>Questions</h2>
        <section>
          {questions.map((question) => {
            return <Question {...question} key={question.id} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
