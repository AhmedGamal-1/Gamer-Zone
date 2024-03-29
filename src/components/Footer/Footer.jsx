import React from 'react'
import FooterStyle from '../Footer/Footer.module.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';


export default function Footer() {
  function handleClick() {
    window.location.href = 'mailto:your.email@example.com';
  };
  return (
    <>
      <div className="super-parent position-relative">
        <div className={FooterStyle.parent}> 
          <div className={`container-fluid`} style={{maxWidth:"none"}}>
            <div className="row">
              <div className={`col-md-4 fw-bold text-white z-3 ${FooterStyle.leftSide}`}>
                  <form action="" className={`mt-5`}>
                    <div className="header text-center" style={{color:"#ff4136", fontSize:"30px"}}>Get in touch</div>
                    <div className="d-flex flex-column form-box col-lg-10 mx-3 mt-3 p-3">
                      <input type="text" name="name" placeholder="Name" style={{caretColor:"#eee", color:"#eee", padding:"10px", marginBottom:"15px", background:"none", outline:"none", borderBottom:"1px solid #eee", borderTop:"none", borderLeft:"none", borderRight:"none"}}/>
                      <input type="email" name="email" placeholder="Email" style={{caretColor:"#eee", color:"#eee", padding:"10px", marginBottom:"15px", background:"none", outline:"none", borderBottom:"1px solid #eee", borderTop:"none", borderLeft:"none", borderRight:"none"}}/>
                      <textarea name="message" placeholder="Content" style={{caretColor:"#eee", color:"#eee", padding:"10px", height:"100px",marginBottom:"15px", background:"none", outline:"none", borderBottom:"1px solid #eee", borderTop:"none", borderLeft:"none", borderRight:"none"}}></textarea>
                      <div className="cheack d-flex">
                        <input id="terms" type="checkbox"/> <label for="terms" style={{fontSize:"12px", fontWeight:"normal", color:"#ccc", marginLeft:"5px"}}>I would like to receive the newsletter.</label>
                      </div>
                      <button type='submit' className={`${FooterStyle.submitButton} px-3 py-2`} onClick={handleClick}>
                          <span>Submit</span>
                          <i className="fa-solid fa-arrow-right-long text-white"></i>
                      </button>
                    </div>
                  </form>
              </div>
              <div className="col-md-8 fw-bold text-white z-3 d-flex justify-content-center align-items-center">
                <div className="main-content" style={{width:"75%"}}>
                  <div className={FooterStyle.headTitle} style={{width:"50%",fontSize:"35px", fontWeight:"bold", margin:"0 auto 20px", textAlign:"center"}}>
                    WE ARE READY TO GIVE YOU THE BEST <span style={{color:"#ff4136"}}>Entertainment</span>.</div>
                  <div  style={{width:"100%", margin:"auto"}}>
                    <div className={`address d-flex justify-content-between mt-5 ${FooterStyle.addressSmall}`}>
                      <div className={`d-flex ${FooterStyle.smallAdd}`}>
                        <i className="fa-solid fa-location-dot" style={{color:"#ff4136", marginRight:"10px", fontSize:"25px"}}></i>
                        <p className="">
                          Masr ElGdeda, Street Sheraton Elmatar , 35222
                        </p>
                      </div>
                      <div className={`d-flex ${FooterStyle.smallAdd}`}>
                        <i className="fa-solid fa-phone" style={{color:"#ff4136", marginRight:"10px", fontSize:"25px"}}></i>
                        <p className="">Call us: +01063403215</p>
                      </div>
                    </div>

                    <div className="d-flex justify-content-center" style={{width:"50%", margin:"auto", marginTop:"30px", marginBottom:"50px"}}>
                      <img className='' style={{width:"180px"}} src={logo} alt="" />
                    </div>
                    <div className="d-flex justify-content-center gap-4">
                      <div className=""><Link to={"https://www.instagram.com/"} target='_blank' style={{textDecorationColor:"#ff4136",textDecorationThickness:"0.2em" ,color:"white"}}>instagram</Link></div>
                      <div className=""><Link to={"https://www.facebook.com/"} target='_blank' style={{textDecorationColor:"#ff4136",textDecorationThickness:"0.2em" ,color:"white"}}>facebook</Link></div>
                      <div className=""><Link to={"https://twitter.com/"} target='_blank' style={{textDecorationColor:"#ff4136",textDecorationThickness:"0.2em" ,color:"white"}}>twitter</Link></div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}



{/* <form action="" className='form mb-sm-3 mb-lg-0 col-sm-12 col-lg-6'>
                  <div class="form-box col-lg-10 mx-3 mt-3 p-3">
                    <div class="header-text text-center text-sm-start">Get In Touch</div>
                    <input name="name" placeholder="Name" type="text" />
                    <input name="email" placeholder="Email" type="email" />
                    <textarea name="message" placeholder="Content" ></textarea>
                    <input id="terms" type="checkbox" /> <label for="terms"></label>
                    <span class="fw-bold">I would like to receive the newsletter.</span>
                    <button class="btn-primary mt-5" type="submit">Submit</button>
                  </div>
                </form>


<div class="footer d-flex flex-column justify-content-center align-items-center col-sm-12 col-lg-5" >
                <div class="fw-bold footer-heading-one text-center">
                  WE ARE READY TO GIVE YOU THE BEST DINNING EXPERIENCE.
                </div>
                <div class="d-flex flex-column flex-lg-row address-holder footer-heading-two ms-2" >
                  <div class="d-flex align-items-center">
                    <i class="fa-solid fa-location-dot"></i>
                    <p class="mb-2 mb-xl-0">
                      Masr ElGdeda, Street Sheraton Elmatar , 35222
                    </p>
                  </div>
                  <div class="d-flex align-items-center justify-content-center">
                    <i class="fa-solid fa-phone"></i>
                    <p class="mb-0">Call us: +01063403215</p>
                  </div>
                </div>
                <div class="mt-5 logo-holder">
                  <img src="./assets/images/logo.png" alt="" />
                </div>
                <div class="all-social-holder d-flex justify-content-center gap-2">
                  <div class="facebook social-holder">facebook</div>
                  <div class="twitter social-holder">twitter</div>
                  <div class="instagram social-holder">instagram</div>
                </div>
              </div> */}