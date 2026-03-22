import { createRoot } from 'react-dom/client';
import App from './App';

const elemento = document.querySelector(".root"); // pegar root html
const root = createRoot(elemento); // variavel root que pega o createRoot do react e engloba variavel elemento 
root.render(<App />) // renderiza root com App