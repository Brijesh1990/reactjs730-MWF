import React from 'react';
function InlineStyle()
{
    return (
        <React.Fragment>
         <div style={{"backgroundColor":"lightgray","color":"red","width":"60%","height":"450px","margin":"auto","padding":"15px","marginTop":"10%","boxShadow":"2px 1px 2px 1px red"}}>

            <h1>Get in touch with Google Map</h1>
            <p>You can find our address in google map</p>
            <hr align="left" style={{width:"42%",border:"solid 2px red"}} />

            <div style={{"width":"48%","height":"250px","float":"left"}}>
            
                <p><b><span className='fa fa-map-marker'></span> &nbsp;Our Office Address :</b>150feet rign road rajkot  behind telephone exchange,<br/>near savan signet rajkot-36005</p>

                <p><span className='fa fa-phone'></span> <b>Call Us :</b>(+91)-9998003879</p>
           
            </div>   

            <div style={{"float":"left","width":"48%","height":"250px"}}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3691.9500461949297!2d70.76096390033304!3d22.27988203526223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scrystal%20mall!5e0!3m2!1sen!2sin!4v1671419720657!5m2!1sen!2sin" width="100%" height="150" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <p>Copyright@2022 all right reserved</p>    
        </div>  
        </React.Fragment>
    )

}

export default InlineStyle;