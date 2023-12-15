import envelope from "../src/resource/envelope.png";
import phone from "../src/resource/phone.png";
import cvR from "../src/resource/cvR.png";
import html5 from "../src/resource/html5.png";
import CSS3 from "../src/resource/CSS3.png";
import b from "../src/resource/b.png";
import js from "../src/resource/js.jpeg";
import csharp from "../src/resource/csharp.png";
import php from "../src/resource/php.png";
import rn from "../src/resource/rn.png";
import java from "../src/resource/java.png";
import c from "../src/resource/c.png";
import sql from "../src/resource/sql.png";
import m from "../src/resource/m.png";





function Navbar() {
  return(
   <div> 
     
    <nav >
    <div className="home">
      <div className="profile_name">
        Kahan HM
        <div className="contact_info">
          <img src={envelope} alt="envelope"/><img/>
      Kahanahamed42@gmail.com
      </div>
        <div className="Del"></div>
          <div className="contact_info">
            <img src={phone} alt="https://icons8.com/icon/124377/circled-envelope"/><img/>
            +94 755824166

           </div>
        </div>
      <div className="topdiv">
      <section id="home">
        <a className="topmenu" href="#about-me">About Me</a>
        <a className="topmenu" href="#skills">skills </a>
        <a className="topmenu" href="#projects">project</a>
        <a className="topmenu" href="#Certifications">Certifications</a>

        
        </section>
      </div>
    </div>    
  </nav>
  </div>
  );
  
}
function About()
{
  return(
    <div>
    <section id="about-me" >
     
        <img src={cvR} className="profile_image"/>
        <div className="container">
          <h1>
            Hi, I'm  Kahan 
          </h1></div>
          <div className="container"><p>
            I am a hardworking and ambitious individual with a great passion for the IT industry.
             I am currently in my final year of studying Bachelor in ICTS(SPECIAL) at University Of Jaffna.
              I have excellent communication skills.
               I am seeing a Intern position in the industry in which I can put into practice my knowledge and experience,
                grow and further improve my IT skills I work for.
          </p></div>
     
    </section>
  </div>

  )
  
}
function Skill(){
  return(
    <div>
      <section id="skills">
     
     <h2>Skills</h2>
    
     <div className="Del"></div>
     <div className="skillType">
     <h3>Web Development</h3>
     <div className="all_skills">
       <div className="skill">
         <img src={html5}/>
         <h6>HTML</h6>
       </div>  

         <div className="skill">
          <img src={CSS3}/>
          <h6>CSS</h6>
         </div>  
         <div className="skill">
           <img src={b}/>
           <h6>BOOTSTRAP</h6>
         </div>  
 
         <div className="skill">
           <img src={js}/>
           <h6>JavaScript</h6>
         </div>  
        </div>
       
         <div className="skillType">
           <h3>Programming Language</h3>
           <div className="all_skills">
             <div className="skill">
               <img src={csharp}/>
               <h6>C#</h6>
             </div>  
     
             <div className="skill">
               <img src={php}/>
               <h6>PHP</h6>
             </div>  

               <div className="skill">
                 <img src={rn}/>
                 <h6>REACT NATIVE</h6>
               </div>  
       
               <div className="skill">
                 <img src={java}/>
                 <h6>Java</h6>
               </div>  
               <div className="skill">
                 <img src={c}/>
                 <h6>C++</h6>
               </div>
           </div>
           </div>

               
               <div className="skillType">
                 <h3>DataBase</h3>
                 <div class="all_skills">
                   <div className="skill">
                     <img src={sql}/>
                     <h6>Sql</h6>
                   </div>  
                   <div className="skill">
                     <img src={m}/>
                     <h6>MongoDB#</h6>
                   </div>  
                   </div>
               </div>

     </div>
   </section>
         
    </div>
  )
}

function Project() {
  return(
    <div>
       <section className="projects" id="projects">
      <h2>
        Projects
      </h2>
          <div className="Del"></div>

        <div id="projects-container" className="projects-container">
          <div className="project-card">
            <h3>Hostel Management System (CRUD)</h3>
            <ul>
              <li>its an individual project handled by my self. its a software for a hostel
                Management system we can see student's details, check room details
                ,available rooms ,payment and register for new rooms.this application
                create using C# language</li>
            </ul>
          </div>
          <hr></hr>
          <div className="project-card">
            <h3>Bike services center (KIKI) </h3>
            <ul>
              <li>it is a web application . this application can made booking services and
                order parts .this application created using Html,Bootstrap,Javascript and
                PHP.
                <p>(https://github.com/KahanHM/Bike_center_services/tree/5fceb0037e7e6
                68c6ed516dd9e63d05985eabea8)</p></li>
            </ul>
          </div>
          <hr></hr>
          <div className="project-card">
            <h3>Blood donation mobile App </h3>
            <ul>
              <li><p>group project with 1 member</p>
                The app would have a database
                 of blood banks and their blood needs. 
                 Users would be able to search for blood
                  banks by location and blood type. 
                  The app would also show users the 
                blood needs of each blood bank.
                <p>
                The blood donation app would use the API Postman to retrieve data about blood banks, blood needs, and blood donations. This data would then be displayed to the user in the React Native app.</p></li>
            </ul>
          </div>
      </div>
 </section>
  </div>
  )
  
}

function Certification(){
  return(
    <div>
       <section className="Certifications" id="Certifications">
 <h2>
        Certifications
      </h2><div className="Del"></div>
<div>
        <ol>
          <li className="li">
            <h4>Cybersecurity Essentials CISCO</h4> 
         </li>
         <li className="li">
            <h4>Introduction to Cybersecurity CISCO </h4> 
          </li>
          <li className="li">
            <h4>Python for Beginners</h4> 
        </li>
        <li className="li">
          <h4>Introduction to Data Science CISCO</h4> 
      </li>
      <li className="li">
        <h4>Foundational C# with Microsoft</h4> 
    </li>
        </ol></div>
   
    </section>
    </div>
  )
}

function Button(){
  return(
    <div>
      <div className="iconbutton">
     <button className="button"> <a href="#home">HOME
      </a></button>
    </div>
    </div>
  )
}












function App() {
  return (
    <div>
<Navbar/>
   <About/>
   <Skill/>
   <Project/>
   <Certification/>
   <Button/>

    </div>
   
  );
}

export default App;
