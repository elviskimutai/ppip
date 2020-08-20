import React from "react";
const Breadcrum=(props)=>{	
	
return (
    <div id="content" className="content">
			<ol class="breadcrumb float-xl-right">
				<li class="breadcrumb-item"><a href="javascript:;">Home</a></li>
				<li class="breadcrumb-item"><a href="javascript:;">Dashboard</a></li>
				<li class="breadcrumb-item active">Dashboard v3</li>
			</ol>		
			 <h1 class="page-header mb-3">props.location.aboutprops.Title</h1>
			<div  style={{backgroundColor:"white"}}>
			{props.children}
			</div>           
   </div>
)
}
export default Breadcrum;