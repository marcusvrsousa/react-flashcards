/* eslint-disable react/prop-types */
import { useState } from "react"

export default function FlashCard({
        title = 'titulo do flashcard', 
        description='descrição do flashcard'
    }){

    const [showTitle, setShowTitle] = useState(true);

    const fontSize = showTitle ? 'text-2xl' : 'text-sm'

    function handleCardClick(){
        setShowTitle(currentShowTitle => !currentShowTitle)
    }

    return(
    <div className={`border-spacing-1 shadow-2xl 
            m-auto my-6 w-64 h-48 p-4 
            flex flex-row justify-center items-center 
            font-semibold
            bg-blue-100 rounded-md ${fontSize}`}
            
            onClick={handleCardClick}>
            
            {showTitle ? title : description}
                
        </div>
    )
}