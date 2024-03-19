import { LoginProvider } from './src/contexts/Login';
import Router from './src/routes/index'

export default function App() {
  return (
    <LoginProvider>
      <Router/>
    </LoginProvider>

    );
}
