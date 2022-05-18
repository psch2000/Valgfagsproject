import { createRoot } from 'react-dom/client';
import { AppComponent } from './assets/app/AppComponent';
import { TestDraw } from './testing/TestDraw';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppComponent />);
