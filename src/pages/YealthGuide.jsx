import './YealthGuide.css';

function YealthGuide() {
    return (
        <section className="guide-container">
            <h1 className="top-heading"> Yealth Guide</h1>
            <p>
               Welcome to your guide to Yale Health (Yealth!) Whether you’re feeling under the weather or are preparing for the inevitable yague, welcome. We developed the Yurse app with our fellow students in mind, since we know how hard it can be to get sick on your own for the first time (and any times after that). Our goal is to make sure you get better ASAP and stay healthy through Yurse’s various features by making any Yealth resource visible and easily available. [talk about app features too] 

Get well and stay well,

The Yurse Developers 

            </p>
            <ul className="guide-list">
            <h2 className="guide-item">Resource</h2>
            <h2 className="guide-item">Description</h2>
            <h2 className="guide-item">Resource</h2>
            <h2 className="guide-item">Description</h2>
            </ul>
            <ul className="guide-list">
                <li className="guide-item"> Yale Health Website: </li>
                <li className="guide-item">
                    <a href="https://yalehealth.yale.edu/ ">
                     https://yalehealth.yale.edu/ 
                     <p>Here you can find much more than just making appointments. You can find out about Yealth Careers, Yealth’s various branches, how to reach each of these branches, as well as the purpose they serve, and everything else under the sun.</p>
                     </a>
                </li>

                <li className="guide-item"> My-Chart Guide: </li>
                 <li className="guide-item">
                    <a href=" https://yalehealth.yale.edu/using-mychart " target="_blank"> 
                    https://yalehealth.yale.edu/using-mychart  
                    <p> Every Yalie (staff and students alike!) should be familiar with My-Chart. The guide tells you about what you can do in My-Chart and provides answers to FAQs like “Who can I message in My-Chart” (because you can send messages through My-Chart!)</p>
                    </a>
                </li>

                <li className="guide-item"> My-Chart Login: </li>
                 <li className="guide-item" target="_blank">
                    <a href="https://mychart.ynhhs.org/MyChart-PRD/Authentication/Login"> 
                    https://mychart.ynhhs.org/MyChart-PRD/Authentication/Login 
                    <p> If it’s not your first rodeo, log in to My-Chart here to handle all things Yealth-related, whether that’s paying your bills or scheduling those long overdue appointments :) See the My-Chart Guide linked above for more details.</p>
                    </a>
                </li>

                <li className="guide-item"> Campus Health: </li>
                 <li className="guide-item" target="_blank">
                    <a href="https://campushealth.yale.edu/  "> 
                    https://campushealth.yale.edu/ 
                    <p>Not to be confused with the Yealth website, although it is linked there of course, here you can access resources for all of us actively on campus, such as Yale Health On Track (see below!) or seasonal vaccinations.</p>
                    </a>
                </li>

                <li className="guide-item"> Yale Health On Track: </li>
                 <li className="guide-item" target="_blank">
                    <a href="https://campushealth.yale.edu/welcome-to-health-on-track ">
                     https://campushealth.yale.edu/welcome-to-health-on-track 
                     <p> <b> <em>This is where you upload important, required documents for Yale’s health requirements!! Make sure you have all your things in order :) </em> </b></p>
                     </a>
                </li>

                <li className="guide-item"> Yale Safety Net </li>
                 <li className="guide-item" target="_blank">
                    <a href="https://safetynet.yale.edu/hc/en-us ">
                     https://safetynet.yale.edu/hc/en-us 
                     <p> For any urgent health emergencies that require an unexpected financial burden, use the Yale Safety Net to secure funding. See website for more details.  </p>
                     </a>
                </li>
            </ul>
        </section>
    );
}

export default YealthGuide;