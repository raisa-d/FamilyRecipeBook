import FormTextField from "./FormTextField";
import FormTextArea from "./FormTextArea";
import Button from "./Button";

const AddRecipeForm = () => {
  return (
    <>
        <form className="flex flex-col rounded-3xl p-3 shadow-xl border-2 border-gray-400 w-full md:w-3/4 lg:w-1/2 text-lg">
            <h2 className="font-bold mb-1 text-2xl text-center">Add Recipe</h2>
            <div className="flex justify-between">
                <FormTextField
                    formName="addedBy" 
                    placeholder="Your Name" 
                    formLabel="Added by:"/>
                <FormTextField
                    formName="serves" 
                    placeholder="I.e., 4 people" 
                    formLabel="Serves:"/>
            </div>
            <FormTextField 
                formName="category" 
                placeholder="I.e., Appetizer, Side, Bread, Seafood, Meat, etc." 
                formLabel="Category:"/>
            <FormTextField 
                formName="recipeName" 
                placeholder="I.e., Chocolate Chip Cake" 
                formLabel="Recipe Name:"/>
            <FormTextArea 
                formName="ingredients" 
                placeholder="I.e., 1 cup sugar, 8oz softened cream cheese..." 
                formLabel="Ingredients List (Separated By Commas):"/>
            <FormTextArea 
                formLabel="Instructions:" 
                formName="instructions" 
                placeholder="I.e., Preheat oven to 350..."/>
            <Button text="Add Recipe"/>
        </form>
    </>
  )
}

export default AddRecipeForm