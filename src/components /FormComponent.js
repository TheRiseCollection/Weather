import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

class FormPage extends React.Component {
  state = this.props.initialState || {}
  
render() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>

            <form onSubmit = {this.props.loadWeather}>
            <p className="h4 text-center py-4">Search Weather</p>
                <label
                  className="grey-text font-weight-light"
                >
                  City
                </label>
                <input type="text" name="city" placeholder="City..."/>
                <br />
                <label
                  className="grey-text font-weight-light"
                >
                  Country
                </label>
                <input type="text" name="country" placeholder="Country..."/>

      <div className="text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-purple" type="submit" >
                    Send
                    <MDBIcon far icon="paper-plane" className="ml-2" />
                  </MDBBtn>
                </div>
  </form>


            
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
};

export default FormPage;