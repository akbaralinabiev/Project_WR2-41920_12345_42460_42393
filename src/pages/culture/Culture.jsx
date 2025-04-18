import React from "react";
import "./culture.css";


// imported Components
import { default as Navbar } from "../../components/navbar/Navbar";
import { Footer} from "../../components/export.js";

//imported images
import Sculp from "../../assets/images/culture-images/sculp.svg";
import Logo from "../../assets/images/logo.svg";
import Rectangle from "../../assets/images/culture-images/Rectangle.svg";
import Balance from "../../assets/images/culture-images/balance.svg";
const Culture = () => {

     return (
         <div>
           <div className="culture-main">
               <Navbar />
               <div className="culture-container">
                    <div className="container-info-1">
                         <p>Whether you're currently a valued client or considering joining our community, whether you're already a
                              vital member of our professional team or interested in becoming part of our ongoing pursuit of exceptional
                              design, this serves as a concise introduction to our culture, objectives, and preferred modes of collaboration.
                         </p>
                         <span>
                              <h2>
                                   Welcome to
                              </h2>
                              <img src={Logo} alt="" />
                              <h2>agency!</h2>
                         </span>
                         <p>
                              We are a collective of dreamers, thinkers, developers, designers, writers, and makers united by the conviction that
                              truly exceptional products are crafted by individuals who genuinely care. <br /> <br />Founded by Akbarali, Appbuild.agency emerged
                              with the purpose of cultivating a vibrant amalgamation of diverse talents, disciplines, and skills. Our vision is to foster an open,
                              collaborative environment where individuals with a shared passion for problem-solving and exquisitely crafted, human-centered design come together.
                         </p>
                    </div>
                    <div className="culture-info_image">
                         <img src={Sculp} alt="" />
                    </div>
               </div>
               <div className="culture-container">
                    <div className="culture-info_image">
                              <img src={Rectangle} alt="" />
                    </div>
                    <div className="container-info-2">
                         <div className="span-2">
                              <h3>We welcome uniqueness.</h3>
                         </div>
                         <p>
                         We are a purpose-driven agency offering exceptional design and brand communication for a broad spectrum of industries and categories, 
                         spanning different products and services, continents and cultures. <br /> <br />
                         Avoiding generic, one-size-fits-all approaches is an essential part of our philosophy and we encourage you to adopt the same mindset. 
                         That's why we tailor our teams and processes to our clients' heritage, their individual aspirations and their business goals. 
                         For each project, we need to assemble the right experience and expertise to effectively address the specific challenges.
                         </p>
                    </div>
               </div>
               <div className="culture-container">
                    <div className="container-info-1">
                         <div>
                              <h3>Let's remain united.</h3>
                         </div>
                         <p>We understand that our mission is no simple feat, but our strength lies in our unity.
                              Choosing to collaborate with a limited number of clients allows us the flexibility to venture wherever a project leads us.
                              <br /><br /> Gratitude extends to our exceptional team members and the wonders of technology, enabling us to stay seamlessly connected. 
                              This connectivity empowers us to consistently deliver an unparalleled interdisciplinary approach, crafting innovative visual 
                              solutions that not only meet our clients' current needs but also pave the way for their future success.
                         </p>
                    </div>
                    <div className="culture-info_image">
                         <img src={Rectangle} alt="" />
                    </div>
               </div>
               <div className="culture-container">
                    <div className="culture-info_image">
                              <img src={Balance} alt="" />
                    </div>
                    <div className="container-info-2">
                         <div className="span-2">
                              <h3>Maintaining the balance
                              </h3>
                         </div>
                         <p>
                         To meet the diverse needs of our clients and enable them to succeed in today's business world, we strategically assemble a team that takes advantage of international diversity. This includes bringing together people from different cultures, all with different work experiences and different perspectives on strategic and design challenges.

                         <br /><br />While forming successful working groups is already a challenge in a local environment, it becomes even more complicated when team members come from different countries, have different functional backgrounds and work in different locations. It is not always enough to pursue a common goal. Therefore, we are actively committed to promoting mutual respect and continuous learning among team members. To compensate for the lack of face-to-face meetings, we integrate "intentional moments" into our virtual meetings. This includes regular check-ins, encouraging casual conversations and organizing brainstorming sessions where everyone has the opportunity to evaluate agenda items and contribute their ideas freely.
                         </p>
                    </div>
               </div>
               <div className="culture-container">
                    <div className="container-info-1">
                         <div>
                              <h3>Our Core Values</h3>
                         </div>
                         <p>
                         At the heart of our mission is the commitment to design for a better world, crafting experiences that bring benefits to individuals, businesses, and the environment alike.
                         <br /><br />In our partnerships, we prioritize collaboration with people and businesses who uphold values of truthfulness and communicate with clarity and directness. Integrity is paramount, and we choose not to engage in collaborations with individuals or entities that compromise honesty, fail to recognize the true value of our work, or do not respect our established procedures. Our dedication to these principles underscores our pursuit of meaningful and impactful design.
                         </p>
                    </div>
                    <div className="culture-info_image">
                         <img src={Rectangle} alt="" />
                    </div>
               </div>
               <div className="culture-container">
                    <div className="culture-info_image">
                              <img src={Balance} alt="" />
                    </div>
                    <div className="container-info-2">
                         <div className="span-2">
                              <h3>Championing the Ambitious Small
                              </h3>
                         </div>
                         <p>
                         We champion those who may be small in scale but harbor grand visions. While we firmly stand against free creative pitches—our rationale for this decision is multifaceted, and we're more than willing to discuss it—we understand the critical significance of making a lasting first impression in the business realm.
                         <br /><br />Recognizing the challenges faced by startups, we empathize with the frustration of creating something remarkable but struggling to garner attention or, worse, genuine interest. In such instances, we extend a helping hand. We enthusiastically welcome your ideas and, if we genuinely believe in your company, we may opt for equity over monetary compensation.
                         <br />Our commitment extends to assisting you in defining what sets your brand apart. Armed with this understanding, we embark on a comprehensive design journey—from conceptualizing your name to crafting your logo, website, and marketing materials. Additionally, we offer valuable insights on effectively fostering community engagement.
                         Ultimately, aiding startups in realizing their potential is our forte!.
                         </p>
                    </div>
               </div>

          </div>
               <Footer />
         </div>
     );
}

export default Culture;