import logo from './logo.svg';
import './App.css';
import MarksSheet from './components/MarksSheet';

function App() {
  return (
    <div className="App">
      
      <MarksSheet studentName="Veeresh"
       telMarks="99" hidiMarks="29"
       engMarks="56" mathsMarks="99"
       sciMarks="85" socMarks="99">
       </MarksSheet>
      <MarksSheet studentName="Veeru"
          telMarks="97" hidiMarks="40"
          engMarks="56" mathsMarks="32"
          sciMarks="82" socMarks="75">

       </MarksSheet>
      <MarksSheet studentName="Ramki"
          telMarks="99" hidiMarks="10"
          engMarks="75" mathsMarks="25"
          sciMarks="95" socMarks="84"></MarksSheet>
      <MarksSheet studentName="Pradeep"
         telMarks="99" hidiMarks="94"
         engMarks="74" mathsMarks="99"
         sciMarks="100" socMarks="98">
      </MarksSheet>
      <MarksSheet studentName="Ram"
         telMarks="54" hidiMarks="8"
         engMarks="56" mathsMarks="22"
        sciMarks="85" socMarks="99">
      </MarksSheet>
      
    
    </div>
  );
}

export default App;
