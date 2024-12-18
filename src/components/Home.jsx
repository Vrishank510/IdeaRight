import NavBar from "./Navbar";
import { useState, useEffect } from "react";
import '../assets/Home.css'
import { Button } from "react-bootstrap";
import Slider from "./Slider";
import FAQSection from "./FAQPage";

function Home(){
    const words = ["Difficult?", "EASY"];
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
          setIndex((prevIndex) => (prevIndex + 1) % words.length); 
        }, 2000);  
    
        return () => clearInterval(interval); 
      }, []);
    
    return (
        <div >
            <NavBar/>
            <div className="title-container">
                <p style={{fontSize:'4vw'}}>Starting up is <strong style={{color: index === 0 ? "red" : "green"}}>{words[index]}</strong></p>
                <strong style={{fontWeight:'800',fontSize:'4vw'}}>Explore Your Idea </strong>
                <br/>
                <strong style={{fontWeight:'800',fontSize:'4vw'}}>with IdeaRight</strong>
                <p style={{marginTop:'20px'}}>Our AI simplifies competitor and trend discovery—Get a comprehensive list of competitors, in-depth analysis, and key industry players.</p>
                
                <Button className="try-button">Try IdeaRight For Free</Button>
            </div>
            <div className="slider">
                <Slider/>
            </div>
            <FAQSection/>      
            <div className="features-container">
                <p className="title">AI FEATURES</p>
                <p style={{fontSize:'3vw', fontWeight:'500', }}> 
                    <strong style={{fontWeight:'800'}}>AI Idea Match </strong>
                    / Idea Exploration is Already Hard!
                </p>
                
                <p className="title-2">Increase Your Odds With IdeaRight</p>
                <ul className="list">
                    <li>Explore innovative paths for your vision.</li>
                    <li>Identify opportunities shaping the market.</li>
                    <li>Say goodbye to tedious work.</li>
                    <li>constant updates about competitors, people and trends.</li>
                </ul>
                <Button className="ideate-button">Start Exploring</Button>
            </div>

            <div className="features-container">
                <p className="title">BUSINESS MODEL AI</p>
                <p className="title-2">Generate a business model based on your inputs</p>
                <div className="business-image">
                    <ul className="list">
                        <li>Discover competitors and trends</li>
                        <li>Get tailored competitor analysis.</li>
                        <li>Automate research, focus on growth.</li>
                    </ul>
                    <img src="business-model.jpg"></img>
                </div>
                <Button className="ideate-button">Try Now</Button>
            </div>
            
            <div className="features-container">
                <p className="title">INSIDER CONNECTIONS</p>
                <p className="title-2">Engage with Industry Experts in Your Field</p>
                <div className="business-image">
                    <ul className="list" >
                        <li>Connect with top professionals for valuable insights.</li>
                        <li>Build meaningful relationships with experts in your industry.</li>
                        <li>Gain the latest trends and best practices from leading experts.</li>
                    </ul>
                    <img src="networking.jpg"></img>
                </div>
                <Button className="ideate-button">Find People</Button>
            </div>

            <div className="features-container">
                <p className="title">FREQUENTLY ASKED QUESTIONS</p>
                
                <div style={{textAlign:'left'}}>
                    <p className="faq" >What does this platform do?</p>
                    <p className="faq-2" >IdeaRight empowers businesses by providing tools to discover competitors, analyze their strategies, and gain actionable insights. It also helps you track emerging market trends to stay ahead of industry shifts and identify key individuals or decision-makers, enabling better networking and strategic planning.</p>
                    <br/>
                    <p className="faq">Who is IdeaRight designed for?</p>
                    <p className="faq-2">IdeaRight is designed for entrepreneurs, business owners, marketers, and professionals who want to gain a competitive edge. Whether you're launching a new venture, scaling an existing business, or refining your strategies, it provides valuable insights to make informed decisions and stay ahead in your industry.</p>
                    <br/>
                    <p className="faq">How does the platform find competitors?</p>
                    <p className="faq-2">We leverage advanced analytics to examine market data, industry reports, and the online presence of businesses to identify relevant competitors. Our platform provides a comprehensive view of their strategies, strengths, and weaknesses, helping you better understand your competitive landscape and refine your approach.</p>
                    <br/>
                    <p className="faq">What type of trends can I track?</p>
                    <p className="faq-2">IdeaRight allows you to monitor critical industry shifts, uncover emerging market opportunities, and analyze evolving customer preferences. By staying informed about these dynamic changes, you can adapt your strategies to align with trends, capitalize on new growth areas, and better meet customer demands.</p>
                    <br/>
                    <p className="faq">How accurate are the trend predictions?</p>
                    <p className="faq-2">Our AI-driven analysis combines real-time market data with historical trends to deliver highly accurate insights. By continuously learning and adapting, our system identifies patterns, forecasts shifts, and provides reliable recommendations, ensuring you stay informed and make data-driven decisions with confidence.</p>
                    <br/>
                    <p className="faq">Can I find potential partners or collaborators?</p>
                    <p className="faq-2">Yes, IdeaRight identifies key individuals and organizations that align with your business goals. Using advanced algorithms, it analyzes networks, industry presence, and shared interests to highlight potential collaborators, partners, or influencers who can help drive your success.</p>
                    <br/>
                    <p className="faq">How do you ensure the accuracy of people-related insights?</p>
                    <p className="faq-2">We use verified sources combined with advanced AI algorithms to curate accurate and reliable profiles of individuals and organizations. By cross-referencing multiple data points, we ensure that the connections and profiles you find are trustworthy, helping you build valuable relationships and make informed decisions.</p>
                    <br/>
                </div>
                
            </div>

            <div className="features-container" style={{alignItems:'center'}}>
            <p style={{fontSize:'4vw', fontWeight:'800', marginBottom:'0px'}}>EXPLORE/BUILD YOUR NEXT IDEA IN A CLICK</p>
            <Button className="ideate-button">TRY NOW</Button>
            </div>

            <footer >
                @IdeaRight 2024
            </footer>
            
        </div>
    )
}

export default Home;