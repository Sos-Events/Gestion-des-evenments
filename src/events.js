class Form extends React.Component {
    constructor(props) {
      super(props)
      this.state = { Nom: '' }
      this.state = { entrprise: '' }
      this.state = { Email: '' }
      this.state = { Password: '' }
      this.state = { Localisation: '' }
      this.state = { Date: '' }
      this.state = { Logo: '' }
      this.state = { Message: '' }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value })
    }
  
    handleSubmit(event) {
      alert(this.state.username)
      event.preventDefault()
    }
  
    render() {
      return (

        <form onSubmit={this.handleSubmit}>
        Nom :
        <input
          type="text"
          value={this.state.Nom}
          onChange={this.handleChange}
        />   
        Nom de entrprise : 
        <input
          type="text"
          value={this.state.entrprise }
          onChange={this.handleChange}
        />    
        Email :
          <input
            type="email"
            value={this.state.Email}
            onChange={this.handleChange}
          />
        Password :
          <input
          type="passeword"
          value={this.state.Password}
          onChange={this.handleChange}
        />  
        Localisation :  
        <input
          type="text"
          value={this.state.Localisation}
          onChange={this.handleChange}
        />  
        Date :
         <input
          type="date"
          value={this.state.username}
          onChange={this.handleChange}
        /> 
        Logo  :
         <input
          type="image"
          value={this.state.Logo}
          onChange={this.handleChange}
        />     
        Message :
        <input
          type="text"
          value={this.state.Message}
          onChange={this.handleChange}
        />  
          <input type="submit" value="enregister" />
        </form>
      )
    }
  }