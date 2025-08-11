const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

const yamkela = {
  name: "Yamkela Lusithi",
  email: "lusithiyamkela@gmail.com",
  phone: "+27 665 430 254",
  location: "Johannesburg, South Africa",
  title: "Full Stack Web Developer & Cybersecurity Enthusiast",
  education: [
    "B.A. (Hons.) in Education, University of Johannesburg (2025–2026)",
    "Bachelor of Education (B.Ed), Walter Sisulu University (2020–2023)",
    "Senior Secondary (Arts), Langa Senior Secondary School (2019)"
  ],
  certifications: [
    "Full Stack Web Development – FNB App Academy",
    "Basics of Data Visualization Using Python – UniAthena",
    "Python Web Developer Certificate – Udemy",
    "CompTIA A+ Certification Core 2 (220-1102) – Coursera"
  ],
  skills: [
    "HTML5", "CSS3", "JavaScript", "Python", "PHP",
    "WordPress", "Linux", "GitHub", "VS Code",
    "Technical Writing", "Web Application Security", "VAPT"
  ],
  projects: [
    {
      name: "Academic Research Web Design",
      tech: ["HTML", "CSS", "JavaScript"],
      desc: "Built a responsive academic research website supporting students and researchers with over 50+ curated resources including Google Scholar, JSTOR, DOAJ, Open Library, and more. Enhanced research efficiency by 70%."
    }
  ],
  github: "https://github.com/Yamkela4458",
  portfolio: "https://yamkela4458.github.io/Portfolio/",
  otherSite: "https://yamkela4458.github.io/TheAcademics/"
};

function getBotReply(userInput) {
  const input = userInput.toLowerCase();

  if (input.includes("name")) return `My name is ${yamkela.name}.`;
  if (input.includes("email")) return `You can email me at ${yamkela.email}`;
  if (input.includes("phone") || input.includes("contact")) return `You can reach me at ${yamkela.phone}`;
  if (input.includes("location") || input.includes("where")) return `I'm based in ${yamkela.location}.`;
  if (input.includes("title") || input.includes("who are you"))
    return `I'm ${yamkela.name}, a ${yamkela.title}.`;
  if (input.includes("skills"))
    return `Here are some of my skills:\n- ${yamkela.skills.join("\n- ")}`;
  if (input.includes("education") || input.includes("study"))
    return `My education background:\n- ${yamkela.education.join("\n- ")}`;
  if (input.includes("certification") || input.includes("course"))
    return `Certifications I've completed:\n- ${yamkela.certifications.join("\n- ")}`;
  if (input.includes("project"))
    return yamkela.projects.map(p => `${p.name}:\n${p.desc}`).join("\n\n");
  if (input.includes("github")) return `Check out my GitHub here: ${yamkela.github}`;
  if (input.includes("portfolio")) return `Here’s my portfolio: ${yamkela.portfolio}`;
  if (input.includes("research") || input.includes("academic"))
    return `Visit my academic research site: ${yamkela.otherSite}`;

  return "I'm not sure about that. Try asking about my skills, education, certifications, or projects.";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const userInput = input.value;
  if (!userInput.trim()) return;

  addMessage("user", userInput);
  const response = getBotReply(userInput);
  setTimeout(() => addMessage("bot", response), 500);

  input.value = "";
});

function addMessage(sender, message) {
  const msg = document.createElement("p");
  msg.className = sender;
  msg.textContent = message;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

