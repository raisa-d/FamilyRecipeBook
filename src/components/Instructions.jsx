const instruction = 'Preheat oven to 350 degrees and bake for 40-45 minutes (better to undercook than overcook). Cream together softened cream cheese (I use Philadelphia), softened butter, sugar. Add eggs (and mix for a minute). Add and mix baking soda. baking powder. Add chocolate chips. I use a bundt pan (about 8 inches in diameter). However, you can also use small loaf pans  and this mixture will fill three of them. That way you can freeze two loaves -- this cake is bullet proof. You can freeze, defrost, microwave, etc. It maintains its texture and taste :)'

const Instructions = ({ instructions=instruction }) => {

  return (
    <div className="mt-3 rounded-xl bg-purple-400 p-3">
        <p className="text-lg italic">Instructions:</p>
        <p className="text-m">{ instructions }</p>
    </div>
  )
}

export default Instructions