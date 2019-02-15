class Task extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        };
    };
    edit = () => {
        this.setState ({edit: true});
    };
    delete = () =>{
        if(confirm("Are you sure?")){
            this.props.delete (this.props.index);
        }
    };
    save = () =>{
        var value = this.refs.newTxt.value;
        if (value.length != 0){
            this.props.update(value, this.props.index);
            this.setState({edit: false})
        } else {
            alert("Please don't leave empty field")
        }

    };
    cancel = () =>{
        this.setState({edit: false})
    };
    renderNormal(){
        return(
            <div className="box">
                <div className="text">{this.props.children}</div>
                <button onClick={this.edit} className="btn edit"><i className='fa fa-edit' /></button>
                <button onClick={this.delete} className="btn delete"><i className="fa fa-trash-o" /></button>
                <hr/>
            </div>
        );
    }
    renderEdit(){
        return(
            <div className="box">
                <textarea ref="newTxt" defaultValue={this.props.children}></textarea><br/>
                <button onClick={this.save} className="btn save"><i className='fa fa-check' /></button>
                <button onClick={this.cancel} className="btn cancel"><i className='fa fa-close' /></button>
                <hr/>
            </div>
        );
    }
    render(){
        if (this.state.edit){
            return this.renderEdit();
        } else {
            return this.renderNormal();
        }
    }
}

class Field extends  React.Component{
    constructor(props) {
        super(props);
        this.state = {
            tasks: []
        };
    };
    add = () => {
        var text = this.refs.addTxt.value;
        if (text.length != 0){
            var arr = this.state.tasks;
            arr.push(text);
            this.refs.addTxt.value='';
            this.setState ({tasks: arr});
        } else {
            alert("Please don't leave empty field")
        }
    };
    deleteBlock = (i) => {
        var arr = this.state.tasks;
        arr.splice (i, 1);
        this.setState ({tasks: arr});
    };
    updateText = (text, i) => {
        var arr = this.state.tasks;
        arr[i] = text;
        this.setState ({tasks: arr});
    };
    eachTask = (item, i) => {
        return (
            <Task key={i} index={i} update={this.updateText} delete={this.deleteBlock}>
                {item}
            </Task>
        );
    };
    render() {
        return (
            <div className="field">
                <div>
                    <textarea ref="addTxt"></textarea>
                </div>
                <button onClick={this.add} type="submit" className="btn new">New task</button>
                {this.state.tasks.map (this.eachTask)}
            </div>
        );
    }
}

ReactDOM.render(
    <Field/>,
    document.getElementById("app")
);