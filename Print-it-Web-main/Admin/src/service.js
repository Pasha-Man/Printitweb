import React from "react";
import Header from "./header";
function Service(){
  return(
<div>
    <Header 
    service="service"
    />
    <div className="custom-container mt-5 mb-5">
      <div className="row" style={{display:"flex",justifyContent:"center"}}>
        <div className="col-md-4" style={{textAlign:"center"}}>
          <h3 className="service-h3">
            Services
          </h3>
        </div>
      </div>
      <div className="service-pad"> 
        <p>
          Set the service of your job
        </p>
        <div className="mb-4 mt-4">
          <div className="service-inner spce-bet" style={{alignItems:'center'}}>
            <h5>
              Set opening and closing time of your shop
            </h5>
            <button style={{border:'1px solid rgb(13,57,128)',background:'rgb(13,57,128)',color:'white',padding:'8px 16px',curser:'pointer',fontWeight:'bolder',borderRadius:'5px'}}>+ 1</button>
          </div>
          <div className="service-inner-border spce-bet">
            <h5>
              Monday
            </h5>
            <span>8:30am - 5:30pm</span>
          </div>
          <div className="service-inner spce-bet">
            <h5>
              Tuesday
            </h5>
            <span>8:30am - 4:30pm</span>
          </div>
          <div className="service-inner-border spce-bet">
            <h5>
              Saturday
            </h5>
            <span>9:30am - 2:30pm</span>
          </div>
        </div>
      </div>
      <div className=" mb-5 special-shop service-pad">
        <h3 className="custom-container-h3">
          Set Special Working hours of your Shop
        </h3>
        <div className="service-inner-border mt-4 mb-3" style={{flexDirection:'column'}}>
          <div>
            <input type="checkbox" id="holiday" style={{marginRight:'10px'}}></input>
            <label for="holiday">
                <h5 className="custom-container-h3">
                  Holiday
              </h5>
            </label>
          </div>
          <div className="mb-2" style={{textAlign:'right'}}>
            <label for="holiday" style={{marginRight:'10px'}}>
                  <h5 className="custom-container-h3">
                    date
                </h5>
            </label>
            <input type="text" id="holiday" style={{marginRight:'10px',width:'120px'}}></input>
            <label for="holiday" style={{marginRight:'10px'}}>
                  <h5 className="custom-container-h3">
                    date
                </h5>
            </label>
            <input type="text" id="holiday" style={{marginRight:'10px',width:'120px'}}></input>
            <label for="holiday" style={{marginRight:'10px'}}>
                  <h5 className="custom-container-h3">
                    Timings
                </h5>
            </label>
            <input type="text" id="holiday" style={{marginRight:'10px',width:'120px'}}></input>
            <button style={{border:'1px solid rgb(13,57,128)',background:'rgb(13,57,128)',color:'white',padding:'5px 16px',curser:'pointer',fontWeight:'bolder',borderRadius:'5px'}}>Save</button>
        </div>

        <div>
            <input type="checkbox" id="special" style={{marginRight:'10px'}}></input>
            <label for="special">
                <h5 className="custom-container-h3">
                  Special Hours
              </h5>
            </label>
          </div>
          <div style={{textAlign:'right'}}>
            <label for="holiday" style={{marginRight:'10px'}}>
                  <h5 className="custom-container-h3">
                    date
                </h5>
            </label>
            <input type="text" id="holiday" style={{marginRight:'10px',width:'120px'}}></input>
            <label for="holiday" style={{marginRight:'10px'}}>
                  <h5 className="custom-container-h3">
                    date
                </h5>
            </label>
            <input type="text" id="holiday" style={{marginRight:'10px',width:'120px'}}></input>
            <label for="holiday" style={{marginRight:'10px'}}>
                  <h5 className="custom-container-h3">
                    Timings
                </h5>
            </label>
            <input type="text" id="holiday" style={{marginRight:'10px',width:'120px'}}></input>
            
            <button style={{border:'1px solid rgb(13,57,128)',background:'rgb(13,57,128)',color:'white',padding:'5px 16px',curser:'pointer',fontWeight:'bolder',borderRadius:'5px'}}>Save</button>
        </div>
        </div>
      </div>
    </div>
</div>
  )
}
export default Service;
