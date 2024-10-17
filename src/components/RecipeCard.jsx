import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

const RecipeCard = ({ name="Irene", recipeName="Chocolate Chip Cake", ingredients=['2-2.5 cups flour (more if the eggs are large, less if they are small)', '2 eggs', '8oz softened cream cheese', '1 stick softened butter', '1 cup sugar (I sometimes adjust to 3/4 because the chips are sweet enough)', '1 tsp. baking soda', '1 tsp. baking powder', '1-1.25 chocolate chips'] }) => {
    
  return (
    <div className='m-5 pt-3 pb-5 px-5 flex flex-col items-center shadow-xl border-2 border-gray-400 rounded-3xl max-w-xl'>
        <h1 className="font-bold text-2xl">{recipeName}</h1>
        <span className="mb-2 italic text-lg">Added by { name }</span>
        <Ingredients ingredients={ ingredients }/>
        <Instructions />
    </div>
  )
}

export default RecipeCard