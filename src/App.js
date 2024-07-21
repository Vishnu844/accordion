import "./App.css";
import Accordion from "./Accordion";
import Modal from "./Modal";
import Dropdown from "./Dropdown";

function App() {
  const accordionItems = [
    {
      id: 1,
      content: "content-1",
    },
    {
      id: 2,
      content: "content-2",
    },
    {
      id: 3,
      content: "content-3",
    },
  ];
  return (
    <>
      {/* <Accordion items={accordionItems} /> */}
      {/* <Modal/> */}
      <Dropdown />
    </>
  );
}

export default App;
