const Ingredients = ({ ingredients }) => {
    const ingredientsList = ingredients.map((ingredient, index) => (
        <li className="text-m list-disc ml-5" key={index}>{ ingredient }</li>
    ))

    return (
        <ul className="shadow-xl border-2 border-gray-400 rounded-2xl p-2"><p className="text-lg italic">Ingredients:</p>
            {ingredientsList}
        </ul>
    )
}

export default Ingredients