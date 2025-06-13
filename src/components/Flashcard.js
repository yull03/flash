

const Flashcard = ({cardData,onLearn,onSelected})=> {
    return (
        <div>
            <h2>{cardData.name}</h2>
            <ul>
                {
                    cardData.flashcards.map((obj)=>{
                        return <li key={obj.id}>{obj.question}</li>
                    })
                }
            </ul>
            <button onClick={()=>{onLearn(true)}}>학습시작</button>
            <button onClick={()=>{onSelected(null)}}>뒤로가기</button>
        </div>
    );
};

export default Flashcard;