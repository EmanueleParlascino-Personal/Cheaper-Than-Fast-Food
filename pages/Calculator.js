function Calculator(props){
    var data = props.data;
    var costs = props.costs;
    var totalCost = 0;

    console.log(data)

    

    for (var i= 0; i<=data.length -1; i++){
        var currentValue = 0;

        currentValue = data[i] * costs[i]

        totalCost += currentValue
    }
    
    return(
        <div>
            <h2>Total: {totalCost}</h2>
        </div>
    )
}

export default Calculator