import questions from "./data";
import Question from "./Question";

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Questions</h2>
          <div className="underline"></div>
        </div>
        {questions.map((question) => {
          return <Question {...question} key={question.id} />;
        })}
      </section>
    </main>
  );
}

export default App;
