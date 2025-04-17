import React, { useState } from 'react';
import { Github, Linkedin, Mail, MapPin, User, Briefcase, Code, GraduationCap, Download  } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const sections = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'projects', label: 'Projects', icon: Code },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md fixed h-full">
        <div className="p-6">
          <h1 className="text-xl font-bold text-gray-900">Houssam QOTBI</h1>
          <p className="text-sm text-gray-500">Software Engineer</p>
          <div className="mt-2 flex items-center text-gray-500 text-sm">
            <MapPin className="h-4 w-4 mr-1" />
            <span>Morocco</span>
          </div>
          <div className="mt-4 flex space-x-4">
            <a href="https://github.com/Hosam02" className="text-gray-500 hover:text-gray-900">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/houssam-qotbi-927597224/" className="text-gray-500 hover:text-gray-900">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:houssamqotbi@gmail.com" className="text-gray-500 hover:text-gray-900">
              <Mail className="h-5 w-5" />
            </a>
            <a href="Houssam_Qotbi_resume.pdf" download className="text-gray-500 hover:text-gray-900" title="Download CV">
              <Download className="h-5 w-5 mx-auto" />
            </a>
          </div>
        </div>
        <nav className="mt-6">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`w-full flex items-center px-6 py-3 text-sm ${
                  activeSection === section.id
                    ? 'bg-gray-100 text-gray-900 border-r-4 border-gray-900'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {section.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-64 flex-1 p-8">
        {/* About Section */}
        {activeSection === 'about' && (
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">About Me</h2>
            <p className="text-gray-600">
            Motivated and detail-oriented software engineer with a recent degree in Computer Science. Skilled in modern web technologies, strong in analytical thinking, and effective in team collaboration. Eager to contribute to innovative projects within a forward-thinking organization that values precision, dedication, and continuous improvement.
            </p>
          </section>
        )}

        {/* Experience Section */}
        {activeSection === 'experience' && (
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-900">Software Engineer Intern – Harx Technologies Inc</h3>
                <p className="text-gray-500">Rabat • 01/2025 – 04/2025</p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>Developed micro-frontends with React and Vite</li>
                  <li>Created a containerized app using Qiankun</li>
                  <li>Deployed the solution on Contabo via Docker</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Software Engineer Intern – Lear Corporation</h3>
                <p className="text-gray-500">Rabat • 02/2024 – 06/2024</p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>Built an automation app with Django</li>
                  <li>Deployed and maintained the app in production</li>
                  <li>Optimized system performance</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Software Engineer Intern – National Library of Morocco</h3>
                <p className="text-gray-500">Rabat • 07/2023 – 08/2023</p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>Implemented ITSM with GLPI</li>
                  <li>Managed IT assets and supported users</li>
                  <li>Customized GLPI for institutional needs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Worker Intern – First Instance Court</h3>
                <p className="text-gray-500">Ben Ahmed • 07/2022 – 08/2022</p>
                <ul className="mt-2 text-gray-600 list-disc list-inside">
                  <li>Configured VMware ESXi server for VMs</li>
                  <li>Set up antivirus server for network protection</li>
                  <li>Ensured a secure and stable environment</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === 'skills' && (
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h3 className="font-medium text-gray-900">Languages & Frameworks</h3>
                <ul className="mt-2 text-gray-600">
                  <li>Java (Spring Boot), Python (Django)</li>
                  <li>JavaScript, TypeScript, Node.js, React, Vue.js, Express</li>
                  <li>C, C#, ASP.NET, Flutter, Android</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Databases & Tools</h3>
                <ul className="mt-2 text-gray-600">
                  <li>MySQL, MongoDB, SQL Server</li>
                  <li>Git, Maven, Docker</li>
                  <li>REST APIs, Microservices, UML</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Platforms & Extras</h3>
                <ul className="mt-2 text-gray-600">
                  <li>AWS, Azure</li>
                  <li>Power BI, Figma</li>
                  <li>Windows Server, SOAP</li>
                </ul>
              </div>
            </div>
          </section>
        )}

        {/* Education Section */}
        {activeSection === 'education' && (
          <section className="bg-white shadow rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-900">Engineering Degree in IT – School of Information Sciences</h3>
              <p className="text-gray-500">Rabat • 2024</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Preparatory Class – Lycée Ibn Ghazi</h3>
              <p className="text-gray-500">Rabat • 2021</p>
              <p className="mt-2 text-gray-600">Physics, Chemistry & Engineering Sciences</p>
            </div>
            <div className="mt-6">
              <h3 className="text-lg font-medium text-gray-900">Languages</h3>
              <ul className="mt-2 text-gray-600 list-disc list-inside">
                <li>Arabic: Native</li>
                <li>English: C1 – Advanced</li>
                <li>French: B2 – Advanced</li>
              </ul>
            </div>
          </section>
        )}
        {activeSection === 'projects' && (
  <section className="bg-white shadow rounded-lg p-6">
    <h2 className="text-xl font-semibold text-gray-900 mb-4">Projects</h2>
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium text-gray-900">Micro-Frontend Dashboard</h3>
        <p className="text-gray-600">
          Built a containerized micro-frontend architecture using Qiankun, Vite, and React.
          Deployed using Docker on a Contabo VPS.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">Automation Platform with Django</h3>
        <p className="text-gray-600">
          Created a web app for business process automation and performance monitoring, deployed in production at Lear Corporation.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">ITSM System for National Library</h3>
        <p className="text-gray-600">
          Customized GLPI for asset management and technical support workflows at the National Library of Morocco.
        </p>
      </div>
      <div>
        <h3 className="text-lg font-medium text-gray-900">Infrastructure Setup for Court</h3>
        <p className="text-gray-600">
          Built a virtualized infrastructure using VMware and configured a network-secured antivirus server.
        </p>
      </div>
    </div>
  </section>
)}


        {/* Footer */}
        <footer className="mt-8">
          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} Houssam QOTBI. All rights reserved.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
