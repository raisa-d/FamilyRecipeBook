import RecipeCard from "./RecipeCard";

const RecipeSection = () => {
  return (
    <div className="container flex justify-around flex-wrap">
        <RecipeCard />
        <RecipeCard />
    </div>
  )
}

export default RecipeSection