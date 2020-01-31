import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBIcon } from 'mdbreact';

class FormPage extends React.Component {

  state = this.props.initialState || {}
render() {
  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="16">
          <MDBCard>
            <MDBCardBody>
              <form>
                <label
                  htmlFor="defaultFormCardNameEx"
                  className="text"
                >
                  City
                </label>
                <input
                  type="text"
                  id="defaultFormCardNameEx"
                  className="form-control"
                />
                <br />
                <label
                  htmlFor="defaultFormCardEmailEx"
                  className="text"
                >
                  Country
                </label>
                <input
                  type="text"
                  id="defaultFormCardEmailEx"
                  className="form-control"
                />
                <div className="text text-center py-4 mt-3">
                  <MDBBtn className="btn btn-outline-grey" type="submit" onSubmit={this.props.loadWeather}>
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