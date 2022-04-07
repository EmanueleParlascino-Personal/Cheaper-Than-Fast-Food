export default function Calculator(props){
    var data = props.data;
    var totalCost = 0;

    
    for (var i= 0; i<=data.length -1; i++){
        var currentValue = 0;

        currentValue = data[i].quantity * data[i].cost

        totalCost += currentValue
    }
    
    return(
        <div>
            <h2>Total: {totalCost}</h2>
        </div>
    )
}
