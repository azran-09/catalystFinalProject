import './YealthGuide.css';

function YealthGuide() {
    return (
        <section className="guide-container">
            <h1 style={{ fontSize: "2.4rem", fontWeight: "700", color: "#1B4965", textAlign:"center" }}>
          Yealth Guide
        </h1>

            <p>
               Welcome to your guide to Yale Health (Yealth!) Whether you’re feeling under the weather or are preparing for the inevitable yague, welcome. We developed the Yurse app with our fellow students in mind, since we know how hard it can be to get sick on your own for the first time (and any times after that). Our goal is to make sure you get better ASAP and stay healthy through Yurse’s various features by making any Yealth resource visible and easily available. [talk about app features too] 
               <br /><br />
               Get well and stay well,
               <br />
               The Yurse Developers
            </p>

            <div className="table-wrapper">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Resource</th>
                            <th>Description</th>
                            <th>Resource</th>
                            <th>Description</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>Yale Health Website:</td>
                            <td>
                                <a href="https://yalehealth.yale.edu/" target="_blank" rel="noopener noreferrer">
                                    https://yalehealth.yale.edu/
                                </a>
                                <br /><br />
                                Here you can find much more than just making appointments. You can find out about Yealth Careers, Yealth’s various branches, how to reach each of these branches, as well as the purpose they serve, and everything else under the sun.
                            </td>

                            <td>My-Chart Guide:</td>
                            <td>
                                <a href="https://yalehealth.yale.edu/using-mychart" target="_blank" rel="noopener noreferrer">
                                    https://yalehealth.yale.edu/using-mychart
                                </a>
                                <br /><br />
                                Every Yalie (staff and students alike!) should be familiar with My-Chart. The guide tells you about what you can do in My-Chart and provides answers to FAQs like “Who can I message in My-Chart” (because you can send messages through My-Chart!)
                            </td>
                        </tr>

                        <tr>
                            <td>My-Chart Login:</td>
                            <td>
                                <a href="https://mychart.ynhhs.org/MyChart-PRD/Authentication/Login" target="_blank" rel="noopener noreferrer">
                                    https://mychart.ynhhs.org/Login
                                </a>
                                <br /><br />
                                If it’s not your first rodeo, log in to My-Chart here to handle all things Yealth-related, whether that’s paying your bills or scheduling those long overdue appointments :) See the My-Chart Guide linked above for more details.
                            </td>

                            <td>Campus Health:</td>
                            <td>
                                <a href="https://campushealth.yale.edu/" target="_blank" rel="noopener noreferrer">
                                    https://campushealth.yale.edu/
                                </a>
                                <br /><br />
                                Not to be confused with the Yealth website, although it is linked there of course, here you can access resources for all of us actively on campus, such as Yale Health On Track (see below!) or seasonal vaccinations.
                            </td>
                        </tr>

                        <tr>
                            <td>Yale Health On Track:</td>
                            <td>
                                <a href="https://campushealth.yale.edu/welcome-to-health-on-track" target="_blank" rel="noopener noreferrer">
                                    https://campushealth.yale.edu/welcome-to-health-on-track
                                </a>
                                <br /><br />
                                <strong>This is where you upload important, required documents for Yale’s health requirements!! Make sure you have all your things in order :)</strong>
                            </td>

                            <td>Yale Safety Net</td>
                            <td>
                                <a href="https://safetynet.yale.edu/hc/en-us" target="_blank" rel="noopener noreferrer">
                                    https://safetynet.yale.edu/
                                </a>
                                <br /><br />
                                For any urgent health emergencies that require an unexpected financial burden, use the Yale Safety Net to secure funding. See website for more details.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default YealthGuide;