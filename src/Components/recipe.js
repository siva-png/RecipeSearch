import React from 'react';
function Recipe (props){
    var cal = Math.round(props.calories);
        return(
            <div>
            <div className="cad-container">
  <div className="cad u-clearfix rounded">
    <div className="cad-body">
      <span className="cad-number cad-circle subtle">{props.yeild}</span>
      <span className="cad-author subtle">Recipe</span>
      <i className="fa fa-fire">{cal}</i>
      <h2 className="cad-title">{props.name}</h2>
      <span className="cad-description subtle"><h6 className="text-danger">Steps For Cocking</h6>{props.inst}</span>
      <div className="cad-read">

      {/* <!-- Button to Open the Modal --> */}
  <button type="button" class="btn" data-toggle="modal" data-target="#myModal">
    <h4 className="text-success">Read</h4>
  </button>
  
    </div>
    <i className="fa fa-star text-warning"></i>
    <i className="fa fa-star text-warning"></i>
    <i className="fa fa-star text-warning"></i>
    <i className="fa fa-star"></i>

    </div>
    <img src={props.image} alt="dishItems" className="cad-media"  width="50%" height="450px"/>
  </div>
  <div className="cad-shadow"></div>
</div>


{/* <!-- The Modal --> */}
  <div className="modal" id="myModal">
    <div className="modal-dialog modal-dialog-centered">
      <div className="modal-content">
      
        {/* <!-- Modal Header --> */}
        <div className="modal-header">
          <h4 className="modal-title">{props.name}</h4>
          <button type="button" className="close" data-dismiss="modal"><i className="fa fa-close text-danger dark"></i></button>
        </div>
        
        {/* <!-- Modal body --> */}
        <div class="modal-body bg-warning">
        <ul>
            <li><h5>
            {props.instr}
            </h5></li>
        </ul>
        </div>
      </div>
    </div>
  </div>

            </div>

        )   
    
}

export default Recipe;