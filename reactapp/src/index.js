import { createRoot } from 'react-dom/client';
import { AppComponent } from './assets/app/AppComponent';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppComponent />);
