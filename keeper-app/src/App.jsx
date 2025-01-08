
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import Notes from "../Note.js";


export default function App() {
  return (
    <div>
       <Header />
       { Notes.map((note)=>(
         <Note title={note.title}
               content={note.content} />
       
       ))}
       
    </div>
  );
}


