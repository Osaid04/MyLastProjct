import React from "react";
import './AboutMe.css';

const AboutMe = () => {
    return (
        <div>
            <h1>About Me</h1>
            <div className="main-flex">
                <section>
                    {/* Class for the about me section */}
                    <div className="me">
                     
                        <p>
                            My name is Osaid Hamayel, and I am 21 years old.<br />
                            I studied at <a href="https://www.facebook.com/abufalahsc?locale=ar_AR">Abu Falah Secondary School</a>.<br />
                            Currently, I am in my third year at <a href="https://www.birzeit.edu/en">Birzeit University</a>, pursuing a bachelor's degree in computer science.<br />
                            I am also participating in a summer training program at <a href="https://www.asaltech.com/">Asal Technologies</a>.
                        </p>
                    </div>
                </section>
                <section>
                    {/* Class for family table */}
                    <table className="family">
                        <caption>Family</caption>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Ghassan Hamayel</td>
                                <td>45</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td>Amal Hamayel</td>
                                <td>42</td>
                                <td>Female</td>
                            </tr>
                            <tr>
                                <td>Osaid Hamayel</td>
                                <td>21</td>
                                <td>Male</td>
                            </tr>
                            <tr>
                                <td>Somaya Hamayel</td>
                                <td>20</td>
                                <td>Female</td>
                            </tr>
                            <tr>
                                <td>Aseel Hamayel</td>
                                <td>16</td>
                                <td>Female</td>
                            </tr>
                            <tr>
                                <td>Kareem Hamayel</td>
                                <td>12</td>
                                <td>Male</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </div>
        <br />
        <br />
        </div>
    );
}

export default AboutMe;
