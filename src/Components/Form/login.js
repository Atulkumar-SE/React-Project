import React from "react";
import "./login.css";

const RegistrationForm = () => {
  return (
    <div className="DivRF">
      <h1>Deployment Trial Successful</h1>
{/* <img src="https://media.istockphoto.com/id/1354441996/photo/image-of-open-antique-book-on-wooden-table-with-glitter-overlay.jpg?b=1&s=170667a&w=0&k=20&c=O_VZbgONe4WTXPOEvwKYezhqFkzAXpr2g-lCdpdj5FU=" alt="fff" /> */}
      <form action="" className="ContainerRF">
        <div>
          <label htmlFor="">Fullname</label>
          <br />
          {/* the "autoComplete" is used to off the mode of filling option in the textbox */}
          <input type="text" autoComplete="off" 
          
           name="Fullname" id="Fullname" />
        </div>
        <div>
          <label htmlFor="">Phone</label>
          <br />
          <input type="text" autoComplete="off" 
          
           name="Phone" id="Phone" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <br />
          <input type="text" autoComplete="off" 
          
           name="Email" id="Email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <br />
          <input type="Password" autoComplete="off" 
          
           name="Password" id="Password" />
        </div>
        <div className="Social_btn"><br />
        <button type="submit" id="btn1">Google</button>
        <button type="submit" id="btn2">Facebook</button>
        </div>
        <br />
        <button type="submit" className="Sbmt_Button">Submit</button>
      </form>
    </div>

  );
};

export default RegistrationForm;
