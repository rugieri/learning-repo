class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

  
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      isToggleOn:!this.state.isToggleOn
    })
  }

  render() {
    return (
      <div className="container">
      <button className={this.state.isToggleOn ? "buttonTrue": "buttonFalse"} onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF' }
      </button>
        </div>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
