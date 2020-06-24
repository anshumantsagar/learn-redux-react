import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 10" clicked={this.props.onSubCounter}  />
                <hr/>
                <button onClick={this.props.storeResult}>Store Result</button>
                <ul>
                    {this.props.storedResult.map(li => (
                        <li key={li.id} onClick={() => this.props.onDeleteResult(li.id)}>{li.value}</li>))}
                </ul>
            </div>
        );
    }
}

//mapStateToProps stores a function which expects state stored in redux  as input and return a javascript object which is a map of prop names
//and slices of the state stored in redux
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResult: state.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD', val:10}),
        onSubCounter: () => dispatch({type: 'SUB', val:10}),
        storeResult: () => dispatch({type: 'STORE_RESULT'}),
        onDeleteResult: (id) => dispatch({type: 'DELETE_RESULT', resultElId:id})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);

//import { connect } from 'react-redux';
//then wrap the function 'connect' from the react-redux which return the hoc
// then map the state to the props as above with const mapStateToProps
//then we pass this to connect 
//connect then gives us gives us the Coutnter.js state along with the ctr in the mapStateToProps function
// now define a function where we can dispatch our methodes to the reducers like in mapDispatchToProps