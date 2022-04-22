import { createRoot } from 'react-dom/client';
import { App } from './assets/app/App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App></App>);