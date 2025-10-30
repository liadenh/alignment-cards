 export const categories = [

  {
    "code": "AP", 
    "name": "Alignment Principles", 
    "pathology": "normative void", 
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  }
];
{
  "code": "AB", 
  "name": "Alignment Breakdowns", 
  "pathology": "incentive misalignment", 
  "color": "#FFF3E6",
  "description": "Alignment Breakdowns (AB) identify how systems, institutions, or agents become misaligned with their ethical goals through distorted incentives, feedback loops, or reward structures that punish integrity or reward vagueness, overreach, or goal displacement."
}
];

  {
    "category": "AT",
    "name": "honesty",
    "definition": "loremipsum",
    "people": "loremipsum",
    "peopleref": "OPTIONAL URL reference https://scholarworks.umb.edu/cgi/viewcontent.cgi?referer=&httpsredir=1&article=1001&context=philosophy_faculty_pubs",
    "organizational": "loremipsum",
    "organizationalref": "OPTIONAL",
    "professionals": "loremipsum",
    "professionalref": "OPTIONAL",
    "machine": "loremipsum",
    "machineref": "OPTIONAL",
    "failureModes": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    },
       "expand": {
      "human": "loremipsum",
      "organizational": "loremipsum",
      "experts": "loremipsum",
      "machine": "loremipsum"
    }

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
  },
 {
  category: "AB",
  name: "Reward Operative Honesty (Politics)",
  definition: "Make candidates earn support for specifying operative goals: concrete trade-offs, sources and uses of funds, and priorities.",
  hopedFor: "Candidates who speak clearly about real plans and trade-offs.",
  rewarded: "Vague, high-acceptance ‘official’ goals that offend no one.",
  pathology: "Vagueness premium: voters punish specificity and reward slogans, so politicians avoid operative detail.",
  human: "Voters value and share candidates who give concrete funding and policy details.",
  organizational: "Parties tie debate access and endorsements to operative specificity and budget math.",
  professional: "Campaign staff are evaluated on clarity and truthfulness of proposals, not just polling bumps.",
  machine: "Recommendation systems surface content with verified policy detail rather than pure engagement.",
  failureModes: {
    human: "Voters down-rank a candidate after they explain where cuts and taxes would come from.",
    organizational: "A party rewards messaging that polls well but says nothing concrete.",
    professional: "Consultants advise avoiding any budget detail to minimize attack surface.",
    machine: "Platforms boost vague slogans because they provoke more clicks than nuanced policy."
  }
},
{
  category: "AB",
  name: "Balance Type-I/Type-II Errors (Medicine)",
  definition: "Align incentives so clinicians are accountable for both over-diagnosis/overtreatment (Type I) and missed disease (Type II).",
  hopedFor: "Accurate diagnosis with minimal harm from either kind of error.",
  rewarded: "Conservative labeling of healthy patients as sick (tests, procedures, steady revenue).",
  pathology: "One-sided risk aversion: system penalizes Type-II more than Type-I, so overtreatment is rational.",
  human: "Clinicians track and learn from both false positives and false negatives.",
  organizational: "Hospitals include overdiagnosis, adverse events, and unnecessary procedures in quality scores and bonuses.",
  professional: "Boards review patterns of overtreatment as seriously as missed diagnoses.",
  machine: "Clinical AI optimizes for calibrated risk, penalizing overdiagnosis and missed disease symmetrically.",
  failureModes: {
    human: "Doctor orders low-value tests to ‘play it safe’ for a healthy patient.",
    organizational: "Clinic bonuses correlate with procedure volume, not outcomes or harms.",
    professional: "QA flags only missed cancers, not cascades from false positives.",
    machine: "Triage model pushes many healthy patients into invasive follow-ups to avoid liability."
  }
},
{
  category: "AB",
  name: "Align Care Institutions to Client Outcomes",
  definition: "Fund and evaluate orphanages/rehab centers on successful placements and client well-being, not headcount or size.",
  hopedFor: "Children placed in good homes and clients rehabilitated.",
  rewarded: "Rules and budgets that grow enrollment, staff, and institutional prestige.",
  pathology: "Goal displacement: means (rules, census, budget) become ends that block the mission.",
  human: "Caseworkers are recognized for safe, timely placements, not paperwork volume.",
  organizational: "Budgets and promotions depend on verified outcomes after placement, not number in care.",
  professional: "Supervisors audit for barriers that needlessly delay adoption or discharge.",
  machine: "Decision support flags outcome-improving placements rather than maximizing bed occupancy.",
  failureModes: {
    human: "Staff resist placing a child to avoid losing a ‘case’ from their roster.",
    organizational: "Funding increases with census, so leadership tightens admission and adoption rules.",
    professional: "Managers praise spotless compliance metrics while placements stagnate.",
    machine: "Placement tool optimizes bed utilization, not child well-being."
  }
}
 {
    "category": "AT",
    "name": "accountability",
    "definition": "Taking responsibility for actions and outcomes—able to explain decisions, accept consequences, and recognize limitations.",
    "people": "",
    "peopleref": "",
    "organizational": "",
    "organizationalref": "",
    "professionals": "",
    "professionalref": "",
    "machine": "",
    "machineref": "",
    "failureModes": {},
    "expand": {}
  },
  {
    "category": "AT",
    "name": "trustworthiness",
    "definition": "Inspiring justified confidence by doing what is right even when unseen—reliable, ethical, and loyal to shared commitments.",
    "people": "",
    "peopleref": "",
    "organizational": "",
    "organizationalref": "",
    "professionals": "",
    "professionalref": "",
    "machine": "",
    "machineref": "",
    "failureModes": {},
    "expand": {}
  },
  {
    "category": "AT",
    "name": "reliability / consistency",
    "definition": "Performing as expected across time and situations—predictable, steady, and dependable in purpose and behavior.",
    "people": "Can be counted on to finish responsibilities in a timely manner.",
    "peopleref": "",
    "organizational": "Consistently delivers on commitments and produces good results.",
    "organizationalref": "",
    "professionals": "Demonstrates command of relevant knowledge and executes consistently.",
    "professionalref": "",
    "machine": "Does what it is intended to do when it is supposed to do it.",
    "machineref": "https://chat.openai.com/",
    "failureModes": {
      "human": "Doesn’t do the work or is unreachable when needed.",
      "organizational": "Reneges on promises or repeatedly fails to deliver.",
      "experts": "Over-relies on AI tools or lacks expected domain competence.",
      "machine": "Fails to perform its intended function or behaves unpredictably."
    },
    "expand": {
      "human": "Be transparent about status and timelines; communicate clearly and early when risks arise.",
      "organizational": "Publish targets and shortfalls with corrective plans; add safeguards and runbooks for reliability.",
      "experts": "Acknowledge mistakes, document assumptions, and act in the client’s best interest.",
      "machine": "Surface uncertainty, ask clarifying questions when inputs are ambiguous, and provide fallback behaviors."
    }
  },
  {
    "category": "AT",
    "name": "shared intentionality",
    "definition": "Acting with others toward a common goal by aligning motives, expectations, and understanding so cooperation is natural and mutual.",
    "people": "Openly shares and commits to the same common goal as collaborators.",
    "peopleref": "",
    "organizational": "Aligns values and end goals across teams and stakeholders.",
    "organizationalref": "",
    "professionals": "Acts in the client’s or public’s best interest while coordinating plans.",
    "professionalref": "",
    "machine": "Operates with a clearly defined goal that aligns with the user’s purpose.",
    "machineref": "",
    "failureModes": {},
    "expand": {}
  },
  {
    "category": "AT",
    "name": "shared transparent reasoning",
    "definition": "Making the reasoning behind actions visible and understandable so others can follow, critique, and coordinate with it.",
    "people": "",
    "peopleref": "",
    "organizational": "",
    "organizationalref": "",
    "professionals": "",
    "professionalref": "",
    "machine": "",
    "machineref": "",
    "failureModes": {},
    "expand": {}
  },
  {
    "category": "AT",
    "name": "role fidelity",
    "definition": "Staying faithful to the ethical duties and boundaries of one’s position—knowing one’s role, its limits, and responsibilities.",
    "people": "",
    "peopleref": "",
    "organizational": "",
    "organizationalref": "",
    "professionals": "",
    "professionalref": "",
    "machine": "",
    "machineref": "",
    "failureModes": {},
    "expand": {}
  },
  { "category": "AT", "name": "empathy", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "considerateness", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "reciprocity", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "conflict resolution", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "epistemic humility", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "honesty / veracity", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} }

];
