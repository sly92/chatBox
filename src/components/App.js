import React from 'react';
import Formulaire from './Formulaire.js';
import Message from './Message.js';
import Base from '../Base.js';
// CSS
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import '../animation.css'



class App extends React.Component {
	
	state = {
		messages: {}
	}

	componentWillMount(){
		this.ref = Base.syncState('/messages', {
			context:this,
			state: 'messages'
		});
	}

	componentDidUpdate(){
		//Mettre le scroll en bas
		this.messages.scrollTop = this.messages.scrollHeight;
	}

	addMessage = message => {
		// Copier le state
		const messages = {...this.state.messages};
		// Ajoute le message avec une clé timestamp
		const timestamp = Date.now();
		messages[`message-${timestamp}`] = message; // jsx (derniere version javascript) - concatenation
		// On supprime si plus de 10 messages
		Object.keys(messages).slice(0,-10).map(key => messages[key] = null);
		// Mettre à jour notre state
		this.setState({messages});
	};

	isUser = (pseudo) => {
		return pseudo === this.props.params.pseudo
	}
	render(){

		
		const messages = Object
			.keys(this.state.messages)
			.map(key => <Message key={key} details={this.state.messages[key]}
			isUser={this.isUser} />)
		console.log(messages);
		return(
		<div className="box">
			<div>
				<div className="messages" ref={input => this.messages = input} >
				<ReactCSSTransitionGroup
					component="div"
					className="message"
					transitionName="message"
					transitionEnterTimeout={200}
					transitionLeaveTimeout={200}
				>
					{messages}
				</ReactCSSTransitionGroup>
				</div>
				<Formulaire addMessage={this.addMessage} pseudo={this.props.params.pseudo} length={170} />
			</div>
		</div>
		)
	}

	static propTypes = { 
	params: React.PropTypes.object.isRequired
	}
	
}

export default App;

 