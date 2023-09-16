export default function FlashCards({children: flashcard}){

    return(
        <div className="border flex flex-row flex-wrap" >
                {flashcard}
        </div>
    )
}