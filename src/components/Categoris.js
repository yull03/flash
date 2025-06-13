

const Categoris = ({cardData,onSelected}) => {
    return (
        <div>
            <h1>학습 카테고리</h1>
            <div className="category-wrap">
                {
                    cardData.map((item)=>{
                        return <button key={item.id} onClick={()=>{onSelected(item)}}>{item.name}</button>
                    })
                }
            </div>
        </div>
    );
};

export default Categoris;