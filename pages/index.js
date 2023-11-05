import React, { useState } from 'react';
import BookIcon from '@material-ui/icons/Book';
import RoomServiceIcon from '@material-ui/icons/RoomService';
import DateRangeIcon from '@material-ui/icons/DateRange';
import InboxIcon from '@material-ui/icons/Inbox';

export default function Home() {
  const [listData, setListData] = useState([1,2,3,4])
  return (
    <div>
      <div className='border-line'></div>
      <div className='home-header'>
        <div className='flex justify-between gap-6'>
          <p style={{ color: "#81d8d0" }}>Jewellery</p>
          <p>Jewelery</p>
          <p>Love & Engagement</p>
          <p>Home & Accessories</p>
          <p>Mens</p>
          <p>Gift</p>
          <p>Stone</p>
          <p>Bracelets</p>
        </div>
      </div>
      <section className="slider_section">
        <div className="container-fluid">
          <div className="row">
            <div id="main_slider" className="carousel slide carousel-fade" data-ride="carousel" data-interval="5000">
              <div className="carousel-inner">
                <div className="carousel-item slider_inner slider1 active">
                  <div className="container">
                    <div className="row">
                      <div className="slider_coint_inner">
                        <h3>Best<br /><strong>New Collection</strong></h3>
                        <h4 className="font_themecolor">Loxury Jewellery</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item slider_inner slider2">
                  <div className="container">
                    <div className="row">
                      <div className="slider_coint_inner">
                        <h3>Best<br /><strong>New Collection</strong></h3>
                        <h4 className="font_themecolor">Loxury Jewellery</h4>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="slider_bullets">
                  <ol className="carousel-indicators">
                    <li data-target="#main_slider" data-slide-to="0" className="active"><i className="fa fa-chevron-left"></i></li>
                    <li data-target="#main_slider" data-slide-to="1"><i className="fa fa-chevron-right"></i></li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slider_section">
        <div className="container-fluid">
          <div className="row">
            <div className="container mt-[40px]">
              <div className="row">
                <div className="flex flex-col justify-center items-center">
                  <h3><strong>New Collection</strong></h3><br />
                  <h4 className="font_themecolor">FEEL LOVE PRODUCTS</h4>
                </div>
              </div>
            </div>
            <div className="home-header2">
              <div className='row'>
                <div className='col-md-6'>
                  <img src='../../images/pro1.jpg' alt='image'/>
                </div>
                <div className='col-md-6 mt-[50px]'>
                  <h3><strong>NOW OPEN THE<br /> LANDMARK</strong></h3>
                  <p className="font_themecolor">Some description</p>
                  <button className='btn btn-primary'>Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className='home-header'>
        <h1 className='flex justify-center mt-5'><strong>THE TIFFANT EXPERIENCE</strong></h1>
        <div className='flex items-center justify-center gap-10 mt-5'>
          <div className='flex flex-col justify-center'>
            <div className='exper'> <BookIcon /><br /></div>
            <p>COMPLIMENTRY <br /> SHIPPING & RETURNS</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='exper'> <RoomServiceIcon /><br /></div>
            <p>TIFFANY AT<br /> YOUR SERVICES</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='exper'> <DateRangeIcon /><br /></div>
            <p>TIFFANY BOOK <br /> ANY APPOINMENT</p>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <div className='exper'> <InboxIcon /><br /></div>
            <p>TIFFANY THE <br /> ICONIC BLUE BOX</p>
          </div>
        </div>
      </div>

      <section className="layout_padding padding_bottom_0" style={{background: "#fff;"}}>
         <div className="container">
            <div className="row">
               <div className="col-lg-12">
                  <div className="text-center mb-5">
                     <h2>SHOP BY CATEGORY</h2>
                  </div>
               </div>
            </div>
            <div className="row product_section">
               <div className="col-md-4"> 
                  <div className="full product_blog margin_top_30">
                     <img src="../../images/pro1.jpg" alt="#" />
                     <h3><span style={{color: "#72dd78 !important;"}}></span> EARNING</h3>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="full product_blog margin_top_30">
                     <img src="../../images/pro2.jpg" alt="#" />
                     <h3><span style={{color: "#72dd78 !important;"}}></span> NECKLESS & PENDANTS</h3>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="full product_blog margin_top_30">
                     <img src="../../images/pro3.jpg" alt="#" />
                     <h3><span style={{color: "#72dd78 !important;"}}></span> ENGAEMENT RING</h3>
                  </div>
               </div>
            </div>
          </div>
      </section>

      <section className="slider_section">
        <div className="container-fluid">
          <div className="row">
            <div className="container mt-[40px]">
              <div className="row">
                <div className="flex flex-col justify-center items-center">
                  <h3><strong>New Collection</strong></h3><br />
                  <h4 className="font_themecolor">WHATS NEWS</h4>
                </div>
              </div>
            </div>
            <div className="home-header3">
              <div className='row flex justify-between'>
                <div className='col-md-6'>
                  {listData?.map((ele) => (
                    <div className=' flex mt-[50px] w-[400px] h-[80px]'>
                    <img src='../../images/pro2.jpg' alt='image' style={{height:"100px",width:"100px"}}/>
                    <div className='row h-[70px]' style={{margin:"0px"}}>
                      <h3 style={{width:"380px",margin:"0px",fontSize:"20px"}}><strong>NOW OPEN THE LANDMARK DGFFH</strong></h3>
                      <p className="font_themecolor" style={{margin:"0px",width:"340px"}}>Some description fghhjhj fhggjhh hggjhghjk hgfghjh hggjhghjk hgfghjh hggjhghjk</p>
                      <button style={{color:"green",width:"105px"}}>Learn More</button>
                    </div>
                    </div>
                    )
                  )}
                </div>
                
                <div className='col-md-6'>
                <img src='../../images/pro1.jpg' alt='image' style={{height:"500px"}}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <h1 className='text-center mt-5'>SUSCRIBE OUR NEWS LETTER</h1>
        <div className='flex justify-center'>
          <input type="text" className="blog_sec_4_r_email_input" placeholder="Enter Your Email"/>
          <burron className="blog_sec_4_r_email_button">Subscribe</burron>
        </div>
        
      </div>

    </div>
  )
}
