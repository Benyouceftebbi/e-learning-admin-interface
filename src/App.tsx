import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { AuthProvider } from './contexts/AuthContext';
import Auth from './pages/Auth';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <Dashboard />
        </Layout>
      </Router>
    </AuthProvider>
  );
}

export default App;