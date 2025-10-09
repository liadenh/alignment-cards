 export const categories = [

  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
];

export const cards = [
  {
    category: "AP",
    name: "Justice",
    definition: "Treat people fairly and without bias.",
    human: "Avoiding favoritism and treating others equitably.",
    organizational: "Creating policies that ensure equal opportunities and fairness.",
    professional: "Upholding fairness in evaluations, hiring, and service delivery.",
    machine: "Designing algorithms that avoid bias and treat all users fairly.",
    failureModes: {
      human: "A teacher favors certain students over others regardless of performance.",
      organizational: "A company promotes only certain demographic groups into leadership.",
      professional: "An engineer ignores safety complaints from marginalized workers.",
      machine: "A hiring algorithm disproportionately rejects qualified candidates from minority groups."
    }
  },
  {
    category: "AP",
    name: "Transparency",
    definition: "Ensure decisions and processes are open and understandable.",
    human: "Being honest and clear in communication.",
    organizational: "Providing clear documentation and reasoning behind policies.",
    professional: "Making methods, data, and assumptions accessible to peers and the public.",
    machine: "AI systems that can explain how and why they make decisions.",
    failureModes: {
      human: "Someone hides key information from their team.",
      organizational: "A company obscures the risks of a product in its marketing.",
      professional: "A scientist withholds methodology details, preventing replication.",
      machine: "An AI system gives outcomes with no explanation, leaving users confused and mistrustful."
    }
  },
  {
    category: "AP",
    name: "Privacy",
    definition: "Respect and protect individuals' personal information.",
    human: "Not sharing sensitive details about others without consent.",
    organizational: "Safeguarding customer and employee data against misuse.",
    professional: "Respecting confidentiality of client or patient records.",
    machine: "AI systems that protect personal data and minimize surveillance risks.",
    failureModes: {
      human: "A person leaks a friend's private medical information.",
      organizational: "A company sells user data without their knowledge.",
      professional: "A doctor discloses a patient's health status without permission.",
      machine: "A smart home device records and shares conversations without consent."
    }
  },
  {
    category: "AP",
    name: "Sustainability",
    definition: "Act in ways that preserve resources and protect the environment.",
    human: "Making lifestyle choices that reduce harm to the planet.",
    organizational: "Building long-term strategies that minimize environmental impact.",
    professional: "Choosing designs and materials that are eco-friendly and responsible.",
    machine: "AI systems optimized for energy efficiency and reduced ecological footprint.",
    failureModes: {
      human: "An individual wastes water and energy without care.",
      organizational: "A factory pollutes to cut costs instead of adopting cleaner methods.",
      professional: "An engineer designs products meant to break quickly (planned obsolescence).",
      machine: "A data center AI consumes massive amounts of energy without efficiency safeguards."
    }
  },
  {
    category: "AP",
    name: "Reliability",
    definition: "Perform dependably and as expected.",
    human: "Being consistent and trustworthy in commitments.",
    organizational: "Delivering products and services that meet quality standards.",
    professional: "Following through on professional responsibilities without cutting corners.",
    machine: "Systems that consistently produce accurate and stable outcomes.",
    failureModes: {
      human: "A friend repeatedly cancels important plans at the last minute.",
      organizational: "A company’s service crashes during peak demand.",
      professional: "A bridge inspector ignores cracks, leading to collapse.",
      machine: "An autonomous car system unpredictably fails in routine traffic conditions."
    }
  },
  {
    category: "AP",
    name: "Safety",
    definition: "Prevent harm and protect people from danger.",
    human: "Making choices that avoid unnecessary risks.",
    organizational: "Prioritizing workplace safety measures and compliance.",
    professional: "Ensuring designs and practices safeguard public welfare.",
    machine: "Building AI and autonomous systems that prevent accidents and minimize harm.",
    failureModes: {
      human: "Someone drives recklessly, endangering themselves and others.",
      organizational: "A company ignores fire safety regulations in its buildings.",
      professional: "An engineer signs off on equipment that fails under stress.",
      machine: "A robot malfunctions and injures workers in a factory."
    }
  }
];
