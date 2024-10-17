import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const RecipeCard = ({ recipeName="Chocolate Chip Cake", ingredients=['2-2.5 cups flour (more if the eggs are large, less if they are small)', '2 eggs', '8oz softened cream cheese', '1 stick softened butter', '1 cup sugar (I sometimes adjust to 3/4 because the chips are sweet enough)', '1 tsp. baking soda', '1 tsp. baking powder', '1-1.25 chocolate chips'] }) => {
    
  return (
    <div className='m-5 p-5 flex flex-col items-center bg-violet-300 rounded-3xl max-w-xl'>
        <h1 className="font-bold text-2xl mb-2">{recipeName}</h1>
        <Ingredients ingredients={ ingredients }/>
        <Instructions />
    </div>
  )
}

export default RecipeCard