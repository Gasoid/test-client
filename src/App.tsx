import { useContext } from 'react';
import { SettingsContext } from './providers/settings';
import Editor from "@monaco-editor/react";
import './App.css';

function App() {
  const {data, isLoading} = useContext(SettingsContext);
  return (
    <div className="App">
      <div>Hello, World</div>
      <Editor height="90vh" options={{
        wordWrap: "on"
      }} theme="vs-dark" loading={isLoading} defaultLanguage="json" value={JSON.stringify(data)} />
    </div>
  );
}

export default App;
