import React from "react";
import { teamMembers } from "../data"; // Import team members data

const TeamSection = () => {
  return (
    <section id="team" className="flex flex-col items-center justify-center min-h-screen py-12 px-4 bg-gradient-to-b from-white to-blue-100">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-8">
        Meet Our <span className="text-blue-700">Development Team</span>
      </h2>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl justify-center items-center" 
           data-aos="fade-up" data-aos-delay="300" data-aos-offset="400">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card flex flex-col items-center bg-white p-6 rounded-2xl shadow-lg transition-transform active:scale-100 relative z-10">
            {/* Profile Image */}
            <div className="w-28 h-28 border-4 border-blue-700 rounded-full overflow-hidden mb-4">
              <img src={member.icon} alt={member.name} className="w-full h-full object-cover" />
            </div>

            {/* Name & Role */}
            <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
            <p className="text-gray-500">{member.position}</p>

            {/* Social Icons */}
            <div className="social-icons flex space-x-4 mt-4 relative z-10">
              {member.socials.github && (
                <a href={member.socials.github} target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md transition-all duration-300 active:scale-95">
                  <i className="fab fa-github text-2xl text-blue-700"></i>
                </a>
              )}
              {member.socials.linkedin && (
                <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md transition-all duration-300 active:scale-95">
                  <i className="fab fa-linkedin text-2xl text-blue-700"></i>
                </a>
              )}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
