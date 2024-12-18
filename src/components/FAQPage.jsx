import React, { useState } from "react";
import "../assets/Home.css"

const FAQDropdown = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => setIsOpen(!isOpen);
  
    return (
      <div style={{ marginBottom: "20px" }}>
        <p className="faq" onClick={toggleDropdown} style={{ cursor: "pointer" }}>
          {question} <span>{isOpen ? "▲" : "▼"}</span>
        </p>
        <div style={{ display: isOpen ? "block" : "none" }}>
          <p className="faq-2">{answer}</p>
        </div>
      </div>
    );
  };
  
  const FAQSection = () => {
    const faqs = [
        {
            question: "What does this platform do?",
            answer:
              "IdeaRight empowers businesses by providing tools to discover competitors, analyze their strategies, and gain actionable insights. It also helps you track emerging market trends to stay ahead of industry shifts and identify key individuals or decision-makers, enabling better networking and strategic planning.",
          },
          {
            question: "Who is IdeaRight designed for?",
            answer:
              "IdeaRight is designed for entrepreneurs, business owners, marketers, and professionals who want to gain a competitive edge. Whether you're launching a new venture, scaling an existing business, or refining your strategies, it provides valuable insights to make informed decisions and stay ahead in your industry.",
          },
          {
            question: "How does the platform find competitors?",
            answer:
              "We leverage advanced analytics to examine market data, industry reports, and the online presence of businesses to identify relevant competitors. Our platform provides a comprehensive view of their strategies, strengths, and weaknesses, helping you better understand your competitive landscape and refine your approach.",
          },
          {
            question: "What type of trends can I track?",
            answer:
              "IdeaRight allows you to monitor critical industry shifts, uncover emerging market opportunities, and analyze evolving customer preferences. By staying informed about these dynamic changes, you can adapt your strategies to align with trends, capitalize on new growth areas, and better meet customer demands.",
          },
          {
            question: "How accurate are the trend predictions?",
            answer:
              "Our AI-driven analysis combines real-time market data with historical trends to deliver highly accurate insights. By continuously learning and adapting, our system identifies patterns, forecasts shifts, and provides reliable recommendations, ensuring you stay informed and make data-driven decisions with confidence.",
          },
          {
            question: "Can I find potential partners or collaborators?",
            answer:
              "Yes, IdeaRight identifies key individuals and organizations that align with your business goals. Using advanced algorithms, it analyzes networks, industry presence, and shared interests to highlight potential collaborators, partners, or influencers who can help drive your success.",
          },
          {
            question: "How do you ensure the accuracy of people-related insights?",
            answer:
              "We use verified sources combined with advanced AI algorithms to curate accurate and reliable profiles of individuals and organizations. By cross-referencing multiple data points, we ensure that the connections and profiles you find are trustworthy, helping you build valuable relationships and make informed decisions.",
          },
    ];
  
    return (
      <div className="features-container" style={{ textAlign: "left" }}>
        <p className="title">FREQUENTLY ASKED QUESTIONS</p>
        <div>
          {faqs.map((faq, index) => (
            <FAQDropdown
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default FAQSection;