import Navbar from './components/Navbar';
import RecipeSection from './components/RecipeSection';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <RecipeSection />
        <AddRecipeForm />
      </div>
    </>
  );
}

export default App;

// NEXT STEPS:
// Build static version of "Add Recipe" section
// Build "About section"
// Add inverse data flow so the user can change the data (add recipes)
// Style web app