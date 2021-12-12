import React from "react";
import Header from "./header";
import NotificationPopup from "./NotificationPopup";
import firebase, { db } from "./config";
import axios from 'axios';
class Service extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      regtime:"",
      regday:"",
      spdate:"",
      sptime:"",
      spday:"",
      hdate:"",
      htime:"",
      hday:"",
      data:[],
      sdata:[],
      hdata:[],
    }
  }
  componentDidMount(){
    this.getdata()
  }
  getdata= async()=>{
    console.log("wait")
    axios.get('http://localhost:8000/vendor/regulartimings')
    .then( (res) => {
      console.log(res.data)
      this.setState({data:(this.state.data.concat(res.data))})
   })
   .catch(error =>{console.log(error)})
   axios.get('http://localhost:8000/vendor/specialtimings')
   .then( (res) => {
     console.log(res.data)
     this.setState({sdata:(this.state.sdata.concat(res.data))})
  })
  .catch(error =>{console.log(error)})
  axios.get('http://localhost:8000/vendor/holidays')
  .then( (res) => {
    console.log(res.data)
    this.setState({hdata:(this.state.hdata.concat(res.data))})
 })
 .catch(error =>{console.log(error)})  
}
  addInfo = async () =>{
    var counter=0
    console.log("wait")
    db.collection('services').get().then((values)=>{        
      values.docs.forEach((d)=>{ 
        if(d.data().regday==this.state.regday&&counter==0){
          alert("Sorry! Timing Already Exists") 
          counter+=1         
        }
        else{
          db.collection('services').add({
            'regtime': this.state.regtime,
            'regday': this.state.regday,
          })
          alert("Added Successfully")
        }
      })
    }) 
  }
  addSpecialInfo = async () =>{
    var counter=0
    console.log("wait")
    await db.collection('specialtimings').get().then((values)=>{        
      values.docs.forEach((d)=>{ 
        if(d.data().spdate==this.state.spdate&&d.data().spday==this.state.spday){
          alert("Sorry! Timing Already Exists") 
          counter+=1         
        }
        else{
          db.collection('specialtimings').add({
            'sptime': this.state.sptime,
            'spday': this.state.spday,
            'spdate': this.state.spdate,
          })
          alert("Added Successfully")
        }
      })
    }) 
  }
  addHolidayInfo = async () =>{
    var counter=0
    console.log("wait")
    await db.collection('holidays').get().then((values)=>{        
      values.docs.forEach((d)=>{ 
        if(d.data().hdate==this.state.hdate && d.data().hday==this.state.hday){
          alert("Sorry! Timing Already Exists") 
          counter+=1         
        }
        else{
          db.collection('holidays').add({
            'htime': this.state.htime,
            'hday': this.state.hday,
            'hdate': this.state.hdate,
          })
          alert("Added Successfully")
        }
      })
    }) 
  }
  render(){
    return (
      <div>
        <Header service="service" />
        <NotificationPopup />
        <div className="custom-container mt-5 mb-5">
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-4" style={{ textAlign: "center" }}>
              <h3 className="service-h3">Services</h3>
            </div>
            ``
          </div>
          <div className="service-pad">
          <h3>Set opening and closing time of your shop</h3>
            <div className="mb-4 mt-4">
              <div
                className="service-inner spce-bet"
                style={{ alignItems: "center" }}
              >
                
                <input
                          id="email"
                          type="text"
                          style={{
                            border: "1px solid #c7c5c5",
                            borderRight: "0",
                            height: "35px",
                            outline: "none",
                            borderRadius: "4px 0 0 4px",
                            paddingLeft: "5px",
                            width: "250px",
                          }}
                          placeholder="Enter Day"
                          onChange={(val)=>{
                          this.setState({amount:this.state.regday = val.target.value})
                          }}/>
                          <input
                          id="email"
                          type="text"
                          style={{
                            border: "1px solid #c7c5c5",
                            borderRight: "0",
                            height: "35px",
                            outline: "none",
                            borderRadius: "4px 0 0 4px",
                            paddingLeft: "5px",
                            width: "250px",
                          }}
                          placeholder="Enter Time"
                          onChange={(val)=>{
                          this.setState({amount:this.state.regtime = val.target.value})
                          }}/>
                          <button className="service-h2" style={{ border: "none" }}
                            onClick={async () => await this.addInfo()}>
                             ADD
                          </button>
                
              </div>
              <div className="service-inner-border spce-bet">
              {this.state.data.map((d,i) => {
                      return (
                        <div>
                        <h5>{d.regday}</h5>
                        <span>{d.regtime}</span>
                        <button className="blue-button"
                          onClick = {()=>{
                            db.collection("services").get().then((values)=>{        
                             values.docs.forEach((e)=>{  
                               if(e.data().regday==d.regday&&e.data().regtime==d.regtime){
                                db.collection('services').doc(e.id).delete().then(() => {
                                console.log("Document successfully deleted!");
                                }).catch((error) => {
                                    console.error("Error removing document: ", error);
                                })}})})
                            }}
                            >Delete
                            </button>
                        </div>
                      );
                    })}
              </div>
            </div>
          </div>



          <div className=" mb-5 special-shop service-pad">
            <h3 className="custom-container-h3">
              Set Special Timings of your Shop
            </h3>
            <div
              className="service-inner-border mt-4 mb-3"
              style={{ flexDirection: "column" }}
            >
              <div>
                <input
                  type="checkbox"
                  id="holiday"
                  style={{ marginRight: "10px" }}
                ></input>
                <label for="holiday">
                  <h5 className="custom-container-h3">Holiday</h5>
                </label>
              </div>
              <div className="mb-2" style={{ textAlign: "right" }}>
                <label for="holiday" style={{ marginRight: "10px" }}>
                  <h5 className="custom-container-h3">date</h5>
                </label>
                <input
                  type="text"
                  id="holiday"
                  style={{ marginRight: "10px", width: "120px" }}
                  placeholder="Enter Date"
                  onChange={(val)=>{
                    this.setState({hdate:this.state.hdate = val.target.value})
                  }}
                ></input>
                <label for="holiday" style={{ marginRight: "10px" }}>
                  <h5 className="custom-container-h3">day</h5>
                </label>
                <input
                  type="text"
                  id="holiday"
                  style={{ marginRight: "10px", width: "120px" }}
                  placeholder="Enter Day"
                  onChange={(val)=>{
                    this.setState({hday:this.state.hday = val.target.value})
                  }}              
                ></input>
                <label for="holiday" style={{ marginRight: "10px" }}>
                  <h5 className="custom-container-h3">Timings</h5>
                </label>
                <input
                  type="text"
                  id="holiday"
                  style={{ marginRight: "10px", width: "120px" }}
                  placeholder="Enter Time"
                  onChange={(val)=>{
                    this.setState({htime:this.state.htime = val.target.value})
                  }} 
                ></input>
                <button
                  style={{
                    border: "1px solid rgb(13,57,128)",
                    background: "#ff976d",
                    color: "white",
                    padding: "5px 16px",
                    curser: "pointer",
                    fontWeight: "bolder",
                    borderRadius: "5px",
                  }}
                  onClick={() => this.addHolidayInfo()}>
                  Save
                </button>
              </div>
  
              <div>
                <input
                  type="checkbox"
                  id="special"
                  style={{ marginRight: "10px" }}
                ></input>
                <label for="special">
                  <h5 className="custom-container-h3">Special Hours</h5>
                </label>
              </div>
              <div style={{ textAlign: "right" }}>
                <label for="holiday" style={{ marginRight: "10px" }}>
                  <h5 className="custom-container-h3">date</h5>
                </label>
                <input
                  type="text"
                  id="holiday"
                  style={{ marginRight: "10px", width: "120px" }}
                  placeholder="Enter Date"
                  onChange={(val)=>{
                    this.setState({spdate:this.state.spdate = val.target.value})
                  }}
                ></input>
                <label for="holiday" style={{ marginRight: "10px" }}>
                  <h5 className="custom-container-h3">day</h5>
                </label>
                <input
                  type="text"
                  id="holiday"
                  style={{ marginRight: "10px", width: "120px" }}
                  placeholder="Enter Day"
                  onChange={(val)=>{
                    this.setState({spday:this.state.spday = val.target.value})
                  }}              
                ></input>
                <label for="holiday" style={{ marginRight: "10px" }}>
                  <h5 className="custom-container-h3">Timings</h5>
                </label>
                <input
                  type="text"
                  id="holiday"
                  style={{ marginRight: "10px", width: "120px" }}
                  placeholder="Enter Time"
                  onChange={(val)=>{
                    this.setState({sptime:this.state.sptime = val.target.value})
                  }} 
                ></input>
  
                <button
                  style={{
                    border: "1px solid rgb(13,57,128)",
                    background: "#ff976d",
                    color: "white",
                    padding: "5px 16px",
                    curser: "pointer",
                    fontWeight: "bolder",
                    borderRadius: "5px",
                  }}
                  onClick={() => this.addSpecialInfo()}>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

  }
}
export default Service;
