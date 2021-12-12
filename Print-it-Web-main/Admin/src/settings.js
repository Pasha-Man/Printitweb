import React from "react";
import Header from "./header";
function Settings(){
  return(
  <div>
    <Header 
    setting="setting"
    />
      <div className="custom-container mb-5 mt-5">
          <div className="row" style={{display:"flex",justifyContent:"center"}}>
            <div className="col-md-4" style={{textAlign:"center"}}>
              <h3 className="service-h3">
                Settings
              </h3>
            </div>
          </div>
          <div className="service-pad" >
            <div style={{background:'#F6F6F6',borderRadius:'8px',padding:'20px 15px'}}>
              <div style={{background:'#ffffff',borderRadius:'5px',padding:'50px 30px',border:'1px solid #F6F6F6'}}>
                <div style={{display:'flex',alignItems:'center',width:'70%',justifyContent:'space-between'}} className="mb-4">
                  <label for="email" className="boldspan" style={{marginRight:'40px',fontSize:'20px'}}>Email</label>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <input id="email" type="email" style={{border:'1px solid #c7c5c5',borderRight:'0',height:'35px',outline:'none',borderRadius:'4px 0 0 4px',paddingLeft:'5px',width:'250px'}} placeholder="user1@gmail.com"></input>
                    <i className="fa fa-edit" style={{border:'1px solid #c7c5c5',borderLeft:'0',height:'35px',padding:'07px',borderRadius:'0 4px 4px 0',cursor:'pointer'}}></i>
                  </div>
                </div>
                <div style={{display:'flex',alignItems:'center',width:'70%',justifyContent:'space-between'}} className="mb-4">
                  <label for="password" className="boldspan" style={{marginRight:'40px',fontSize:'20px'}}>Password</label>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <input id="password" type="password" style={{border:'1px solid #c7c5c5',borderRight:'0',height:'35px',outline:'none',borderRadius:'4px 0 0 4px',paddingLeft:'5px',width:'250px'}}  placeholder="1234566"></input>
                    <i className="fa fa-eye" style={{border:'1px solid #c7c5c5',borderLeft:'0',height:'35px',padding:'07px',borderRadius:'0 4px 4px 0',cursor:'pointer'}}></i>
                  </div>
                </div>
                <div style={{display:'flex',alignItems:'center',width:'70%',justifyContent:'space-between'}} className="mb-4">
                  <label for="password" className="boldspan" style={{marginRight:'40px',fontSize:'20px'}}>Confirm Password</label>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <input id="password" type="password" style={{border:'1px solid #c7c5c5',borderRight:'0',height:'35px',outline:'none',borderRadius:'4px 0 0 4px',paddingLeft:'5px',width:'250px'}} ></input>
                    <i className="fa fa-eye" style={{border:'1px solid #c7c5c5',borderLeft:'0',height:'35px',padding:'07px',borderRadius:'0 4px 4px 0',cursor:'pointer'}}></i>
                  </div>
                </div>
                <div style={{display:'flex',alignItems:'center',width:'70%',justifyContent:'space-between'}} className="mb-4">
                  <label for="number" className="boldspan" style={{marginRight:'40px',fontSize:'20px'}}>Phone Number</label>
                  <div style={{display:'flex',alignItems:'center'}}>
                    <input id="number" type="text" style={{border:'1px solid #c7c5c5',borderRight:'0',height:'35px',outline:'none',borderRadius:'4px 0 0 4px',paddingLeft:'5px',width:'250px'}} placeholder="0300-4323125"></input>
                    <i className="fa fa-edit" style={{border:'1px solid #c7c5c5',borderLeft:'0',height:'35px',padding:'07px',borderRadius:'0 4px 4px 0',cursor:'pointer'}}></i>
                  </div>
                </div>
                
                <div className="row" style={{display:"flex",justifyContent:"center"}}>
                  <div className="col-md-4" style={{textAlign:"center"}}>
                    <button className="service-h3" style={{border:'none'}}>
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </div>
  )
}
export default Settings;
