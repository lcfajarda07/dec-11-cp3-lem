import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter id="footer1" color="blue" className="font-small pt-4 mt-5">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="4">
     
           
          </MDBCol>
        
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} All Rights Reserved okey kayo <a href="https://www.MDBootstrap.com"> LCF.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;