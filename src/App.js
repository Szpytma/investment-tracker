import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import TableResult from "./components/TableResult";

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  return (
    <div>
      <Header />
      <Form
        setIsFormSubmitted={setIsFormSubmitted}
        isFormSubmitted={isFormSubmitted}
      />
      <TableResult isFormSubmitted={isFormSubmitted} />
    </div>
  );
}
export default App;
