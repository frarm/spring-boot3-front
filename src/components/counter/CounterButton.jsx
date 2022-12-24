export default function CounterButton({by, incrementMetod, decrementMetod}){

    // function incrementCounterFunction(){
    //     incrementMetod(by);
    // }

    // function decrementCounterFunction(){
    //     decrementMetod(by);
    // }

    return(
        <div className="Counter">
            <div>
                <button className="counterButton" 
                onClick={() => incrementMetod(by)}
                >+{by}</button>
                <button className="counterButton" 
                onClick={() => decrementMetod(by)}
                >-{by}</button>
            </div>          
        </div>
    )
}
// CounterButton.propTypes =  {
//     by: PropTypes.number
// }

// CounterButton.defaultProps =  {
//     by: 1
// }