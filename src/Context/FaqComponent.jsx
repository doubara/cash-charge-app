import { useState, useEffect } from "react";

const FaqComponent = (props) =>{
    const [click, setClick]  = useState(props.firstItem);
    // useEffect(()=>{
    //     console.log(click);
    // }, [click])
    function clickQuestion(event){
        setClick(previousState=>!previousState);
    }

    return (
        <div className='bg-white p-4 rounded-2xl mx-4 mb-4 text-sm md:text-2xl w-full md:w-[740px]'>
            <div>
                <button type="button" onClick={clickQuestion} className="text-bold">{props.question.length > 0 ? props.question : 'How many days do we have in a year'}</button>
            </div>
            <div>
                <p className={`pl-4 pt-1 ${!click ? 'h-0 overflow-hidden' : 'h-full overflow-visible'}`}>{props.answer.length > 0 ? props.answer : 'the average amount of days in a years is around 365'}</p>
            </div>
        </div>
    )
};

export default FaqComponent;