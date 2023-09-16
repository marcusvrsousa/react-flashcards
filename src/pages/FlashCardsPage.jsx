import FlashCard from "../components/FlashCard";
import FlashCards from "../components/FlashCards";
import { Header } from "../components/Header";
import { allFlashcards } from "../data/flashcards";

export function FlashCardsPage(){

    return(
        <>
            <Header>FlashCards</Header>
            <FlashCards>
                {allFlashcards.map(({id, title, description}) => {
                    return <FlashCard key={id} title={title} description={description}/>
                })}
            </FlashCards>
        </>
    )
}