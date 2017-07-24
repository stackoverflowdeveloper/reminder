import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import{bindActionCreators} from 'redux';
import {addReminder, deleteReminder} from '../actions';

 class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text:''
		}
	}

	addReminder(){
		this.props.addReminder(this.state.text);
	}
	deleteReminder(id){
		this.props.deleteReminder(id);
	}

	renderReminders(){
		const {reminders}=this.props; 
		return (
			<ul>
			{
				reminders.map(reminder=> {
					return (
						<li key={reminder.id} className='list-item'>
						<div>{reminder.text}</div>
						<div id="delete-btn"
						onClick={()=> this.deleteReminder(reminder.id)}
						>
						&#x2715;
						</div>
					</li> 
					)
				})
			}
			</ul> 
			)
		}


	render(){
		return(
			<div className="App">
				<div className="title">Remind me...</div> 
				<div>
					<input placeholder='to do...'
					onChange={event=> this.setState({text:event.target.value})}
					/> 
				</div>
				<button type='button'
				onClick={()=>this.addReminder()}
				>button</button>  

				{this.renderReminders()}
			</div>



			)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({addReminder, deleteReminder}, dispatch);
};

function mapStateToProps(state){
	//console.log('state',state);
	return {
		reminders:state
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);