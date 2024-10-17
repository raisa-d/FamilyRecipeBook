import Navbar from './components/Navbar';
import RecipeSection from './components/RecipeSection';

function App() {
  return (
    <div>
      <Navbar />
      <RecipeSection />
    </div>
  );
}

export default App;

// NEXT STEPS:
// Build static version of "Add Recipe" section
// Build "About section"
// Add inverse data flow so the user can change the data (add recipes)
// Style web app