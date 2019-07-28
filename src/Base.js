import Rebase from 're-base';

const API_KEY = process.env.REACT_APP_FB_API_KEY;

const base = Rebase.createClass ({
	apiKey: API_KEY,
    authDomain: "ma-chat-box-6705d.firebaseapp.com",
    databaseURL: "https://ma-chat-box-6705d.firebaseio.com"
});

export default base;
