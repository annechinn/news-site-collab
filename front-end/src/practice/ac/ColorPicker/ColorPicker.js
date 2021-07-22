const yellow = '#FFC857';
const black = '#30332E';
const white = '#EFF1F3';

class ColorPicker extends React.Component{
	constructor(props){
		super(props);
		this.state=({
			bground: yellow,
			inputcolor:black
		});
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e){
		if(chroma.contrast(e.target.value,black)<2.5){
			this.setState({bground:e.target.value, inputcolor:white});
		}else{
			this.setState({bground:e.target.value, inputcolor:black});
		}
	}
	render(){
		let inputClass = 'center input';
		if(this.state.inputColor === white){
			inputClass += 'whitePlaceholder';
		}
		const backgroundStyles = {background: this.state.bground};
		const inputStyles = {color:this.state.inputcolor,borderBottom:'5px solid '+this.state.inputColor};
		return(
			<div style = {backgroundStyles} className='background'>
			<Input style={inputStyles} className = {inputClass} onChange = {this.handleChange} placeholder='Type a color...'/>
			</div>
			);
	}
}
const Input = React.createClass({
  render () {    
    return (      
      <input type="text" {...this.props} />
    )
  }
})


ReactDOM.render(<ColorPicker />, document.querySelector('#app'));