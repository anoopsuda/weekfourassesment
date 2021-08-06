import React, { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, FormFeedback, Label, Input  } from "reactstrap";


export class DishDetail extends Component {
  
  constructor(props){
    super(props);

    this.state = {isModalOpen:false};
    this.toggleModal = this.toggleModal.bind(this);
     

    this.state = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contactType: 'Tel.',
      message: '',
      touched: {
          firstname: false,
          lastname: false,
          telnum: false,
          email: false
      }
  };

  this.handleInputChange = this.handleInputChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleBlur = this.handleBlur.bind(this);


     
  }

  toggleModal(){
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
};

handleBlur = (field) => (evt) => {
  this.setState({
      touched: { ...this.state.touched, [field]: true }
  });
}

  validate(firstname, lastname, telnum, email) {
        const errors = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };

        if (this.state.touched.firstname && firstname.length < 3)
            errors.firstname = 'Must be greater than 2 characters';
        else if (this.state.touched.firstname && firstname.length > 10)
            errors.firstname = 'Must be 15 characters or less';

        if (this.state.touched.lastname && lastname.length < 3)
            errors.lastname = 'Last Name should be >= 3 characters';
        else if (this.state.touched.lastname && lastname.length > 10)
            errors.lastname = 'Last Name should be <= 10 characters';

        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            errors.telnum = 'Tel. Number should contain only numbers';

        if(this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';

        return errors;
    };

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({
        [name]: value
      });
  };

  handleSubmit(event) {
    console.log('Current State is: ' + JSON.stringify(this.state));
    alert('Current State is: ' + JSON.stringify(this.state));
    event.preventDefault();
};




  renderDish(dish) {

    

    if (dish != null) {
      return (
        // ITEM DETAILS
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>                
                <CardTitle>{dish.name}</CardTitle>
                {dish.description}
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <ul class="list-unstyled">
              <li>
                {dish.comments.map((item) => {
                  return (
                   
                    <div>
                      <p>{item.comment}</p>{" "}
                      <p>
                         --{item.author},  
                        <i> {item.date}</i>
                      </p>
                     </div>
                    
                  );
                })}
              </li>
            </ul>
            
            <Button outline color="secondary" onClick={this.toggleModal}> <i className="fa fa-pencil"></i> Submit Comment</Button>
            
           
             
          </div>
        </div>
        // ITEM DETAILS ENDS
      );
    } 
     else {
       return <div></div>;
     }
  }





  
  render() {

    const errors = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

    return <div>{this.renderDish(this.props.selectedDish)}
    
    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
    <ModalHeader  toggle={this.toggleModal}>Submit Comment</ModalHeader>    
    <ModalBody>
    <Form onSubmit={this.handleSubmit}>
    <FormGroup>
        <Label for="exampleEmail">Rating</Label>
        <Input type="select" name="select" id="exampleSelect">
        <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>

      </FormGroup>
                        <FormGroup  >
                                <Label htmlFor="firstname"  >Name</Label>
                                 
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                                
                            </FormGroup>
                            <FormGroup>
        <Label for="exampleEmail">Comment</Label>
        <textarea className="form-control" name="comments" id="" placeholder="Comments..." />
      </FormGroup>
      <Button color="primary">Submit</Button>
                        </Form>
    {/* <Form  >
      <FormGroup>
        <Label for="exampleEmail">Rating</Label>
        <Input type="select" name="select" id="exampleSelect">
        <option>0</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </Input>

      </FormGroup>
      <FormGroup  >
                                <Label htmlFor="firstname"  >Name</Label>                               
                                    <Input type="text" id="firstname" name="firstname"
                                        placeholder="Enter Name"
                                        value={this.state.firstname}
                                        valid={errors.firstname === ''}
                                        invalid={errors.firstname !== ''}
                                        onBlur={this.handleBlur('firstname')}
                                        onChange={this.handleInputChange} />
                                    <FormFeedback>{errors.firstname}</FormFeedback>
                           
                            </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Comment</Label>
        <textarea className="form-control" name="comments" id="" placeholder="Comments..." />
      </FormGroup>
      <Button color="primary">Submit</Button>
      </Form> */}

    </ModalBody>
</Modal>
    </div>;
  }
}

export default DishDetail;
