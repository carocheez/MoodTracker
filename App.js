import React, { Component } from "react";
import './App.css';
//import Example from "./Example.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: "_____",
			CaptionArea: "",
			AfterSubmissionCap: "",
			date: new Date().toLocaleString(),
			PostSubmissionDate: "",
			submissions: [],
    };


    this.handleDropdownChange = this.handleDropdownChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDropdownChange(e) {
    this.setState({ selectValue: e.target.value });
  }
	handleChange(event) {
    this.setState({value: event.target.value});
  }

	handleSubmit(event) {
		let original = this.state.submissions;
		let new_entry = {
			"date": new Date().toLocaleString(),
			"text": this.state.value,
		}

		original.push(new_entry);

		this.setState({
			submissions: original,
		});

    event.preventDefault();
  }

	handleClear(event) {
    this.setState({selectValue: ""});
  }



  render() {
    return (
			<div>
			

					<div className="App">
						<title> Mae Diary </title>
						<header className="App-header">
							<code> Mood Tracker</code>

						</header>

						<body className = "App-body">

										<label> How are you feeling today? </label>
										<p>
										<div>
						          <div>
						            <select id="dropdown" onChange={this.handleDropdownChange}>
												<option value="default"> </option>
												<option value="happy">happy</option>
												  <option value="meh">meh</option>
												  <option value="sad">sad</option>
												  <option value="very sad">very sad</option>
												  <option value="angry">angry</option>
												  <option value="stressed">stressed</option>
																				</select>
						          </div>
											<p> </p>
						          <div>You are feeling {this.state.selectValue} </div>
						        </div>
										<p> Why are you feeling {this.state.selectValue} today? </p>
							</p>



							<form onSubmit={this.handleSubmit}>
        <label>

          <textarea type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
				<p> </p>
        <input type="submit" value="Submit"/>
      </form>

			<ul>
                {this.state.submissions.map(function(entry, index){
                    return <li key={ index }>
									On {entry.date}, you said: <p> </p>  {entry.text} </li>;
                  })}
            </ul>


			<form onClear={this.handleClear}>
			Click here to clear -->
			<button type="clear" value="Clear"/>
			</form>


</body>
					</div>

				</div>
    );


  }





}
export default App;
