// import React from 'react'
import { AiFillHtml5 } from "react-icons/ai"
import { ImCss3 } from "react-icons/im"
import {TbBrandJavascript} from "react-icons/tb"
import {FaBootstrap, FaNodeJs, FaReact} from "react-icons/fa"
import {SiAmazonaws, SiExpress, SiGit, SiHeroku, SiInsomnia, SiMaterialui, SiMongodb, SiMysql, SiNetlify, SiRedux, SiTailwindcss} from "react-icons/si"



 import React from 'react'
 
 export default function Skills() {
   return (
     <div>

      <div className="container skill" name="skill">
        <div className="row mx-auto">
          <h1 className="fw-bold text-center text-warning display-4 mt-5 mb-5">Skills</h1>
          <div className="col ">

          <div className="d-flex gap-3 flex-wrap ">

          <div className="d-flex gap-5 mx-auto ">
            <h4 className='text-light element'><AiFillHtml5 className='text-danger' size={50} /><br />Html</h4>            
            <h4 className='text-light element'><ImCss3 className='text-primary' size={50} /><br />Css</h4>
          </div>
            
          <div className="d-flex gap-5 mx-auto  ">
          <h4 className='text-light text-center element'><TbBrandJavascript className='text-warning' size={50} /><br />Javascript</h4>
           <h4 className='text-light text-center element'><FaBootstrap className=' text-primary ' size={50} /><br />Bootstrap</h4>
          </div>  
           
          <div className="d-flex gap-5 mx-auto ">
          <h4 className='text-light text-center element'><FaReact className=' text-info ' size={50} /><br />React</h4>
           <h4 className='text-light text-center element'><FaNodeJs className=' text-success ' size={50} /><br />Node.Js</h4>
          </div>
           
           <div className="d-flex gap-5 mx-auto ">
           <h4 className='text-light text-center element'><SiMongodb className=' text-success ' size={50} /><br />Mongodb</h4>
           <h4 className='text-light text-center element'><SiGit className=' text-danger ' size={50} /><br />Git</h4>
           </div>

           <div className="d-flex gap-5 mx-auto ">
              <h4 className='text-light text-center element'><SiInsomnia className=' text-primary ' size={50} /><br />Insomnia</h4>
              <h4 className='text-light text-center element'><SiTailwindcss className=' text-info ' size={50} /><br />Tailwind</h4>
            </div>

            <div className="d-flex gap-5 mx-auto ">
              <h4 className='text-light text-center element'><SiMaterialui className=' text-primary ' size={50} /><br />Materialui</h4>
              <h4 className='text-light text-center element'><SiRedux className=' text-primary ' size={50} /><br />Redux</h4>
           </div>

           <div className="d-flex gap-5 mx-auto ">
               <h4 className='text-light text-center element'><SiExpress className=' text-secondary ' size={50} /><br />Express.js</h4>            
               <h3 className='text-light text-center element'><SiAmazonaws className='aws  ' size={50} /><br />Aws</h3>
           </div>

           <div className="d-flex gap-5 mx-auto mb-5 ">
           <h4 className='text-light text-center element'><SiHeroku className=' text-primary ' size={50} /><br />Heroku</h4>
           <h4 className='text-light text-center element'><SiMysql className=' text-primary ' size={50} /><br />My Sql</h4>
           <h3 className='text-light text-center element'><SiNetlify className='text-info ' size={50} /><br />Netlify</h3>
           </div>
           
           
</div>


          </div>
          
        </div>
      </div>



     </div>
   )
 }
 
 