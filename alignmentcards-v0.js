 export const categories = [
  {
    "code": "AP",
    "name": "Alignment Principles",
    "pathology": "normative void",
    "color": "#E6FFE9",
    "description": "Alignment principles are contestable, general-purpose, broadly recognized ethical or social or normative commitments that can serve as warrants for recommending or evaluating an agent's course of action in contexts where alignment and cooperation with others matters."
  },
  {
    "code": "AB",
    "name": "Alignment Breakdowns",
    "pathology": "incentive misalignment",
    "color": "#FFF3E6",
    "description": "Alignment Breakdowns (AB) identify how systems, institutions, or agents become misaligned with their ethical goals through distorted incentives, feedback loops, or reward structures that punish integrity or reward vagueness, overreach, or goal displacement."
  },
  {
    "code": "AT",
    "name": "Agent Traits",
    "pathology": "trait gaps",
    "color": "#FFFFE6",
    "description": "Traits and habits we evaluate in aligned agents (people, orgs, professionals, machines)."
  }
];

export const cards = [
  // ===== AP EXAMPLES =====
  {
    "category": "AP",
    "name": "Justice",
    "definition": "Treat people fairly and without bias.",
    "human": "Avoiding favoritism and treating others equitably.",
    "organizational": "Creating policies that ensure equal opportunities and fairness.",
    "professional": "Upholding fairness in evaluations, hiring, and service delivery.",
    "machine": "Designing algorithms that avoid bias and treat all users fairly.",
    "failureModes": {
      "human": "A teacher favors certain students over others regardless of performance.",
      "organizational": "A company promotes only certain demographic groups into leadership.",
      "professional": "An engineer ignores safety complaints from marginalized workers.",
      "machine": "A hiring algorithm disproportionately rejects qualified candidates from minority groups."
    }
  },
  {
    "category": "AP",
    "name": "Transparency",
    "definition": "Ensure decisions and processes are open and understandable.",
    "human": "Being honest and clear in communication.",
    "organizational": "Providing clear documentation and reasoning behind policies.",
    "professional": "Making methods, data, and assumptions accessible to peers and the public.",
    "machine": "AI systems that can explain how and why they make decisions.",
    "failureModes": {
      "human": "Someone hides key information from their team.",
      "organizational": "A company obscures the risks of a product in its marketing.",
      "professional": "A scientist withholds methodology details, preventing replication.",
      "machine": "An AI system gives outcomes with no explanation, leaving users confused and mistrustful."
    }
  },
  {
    "category": "AP",
    "name": "Privacy",
    "definition": "Respect and protect individuals' personal information.",
    "human": "Not sharing sensitive details about others without consent.",
    "organizational": "Safeguarding customer and employee data against misuse.",
    "professional": "Respecting confidentiality of client or patient records.",
    "machine": "AI systems that protect personal data and minimize surveillance risks.",
    "failureModes": {
      "human": "A person leaks a friend's private medical information.",
      "organizational": "A company sells user data without their knowledge.",
      "professional": "A doctor discloses a patient's health status without permission.",
      "machine": "A smart home device records and shares conversations without consent."
    }
  },
  {
    "category": "AP",
    "name": "Sustainability",
    "definition": "Act in ways that preserve resources and protect the environment.",
    "human": "Making lifestyle choices that reduce harm to the planet.",
    "organizational": "Building long-term strategies that minimize environmental impact.",
    "professional": "Choosing designs and materials that are eco-friendly and responsible.",
    "machine": "AI systems optimized for energy efficiency and reduced ecological footprint.",
    "failureModes": {
      "human": "An individual wastes water and energy without care.",
      "organizational": "A factory pollutes to cut costs instead of adopting cleaner methods.",
      "professional": "An engineer designs products meant to break quickly (planned obsolescence).",
      "machine": "A data center AI consumes massive amounts of energy without efficiency safeguards."
    }
  },
  {
    "category": "AP",
    "name": "Reliability",
    "definition": "Perform dependably and as expected.",
    "human": "Being consistent and trustworthy in commitments.",
    "organizational": "Delivering products and services that meet quality standards.",
    "professional": "Following through on professional responsibilities without cutting corners.",
    "machine": "Systems that consistently produce accurate and stable outcomes.",
    "failureModes": {
      "human": "A friend repeatedly cancels important plans at the last minute.",
      "organizational": "A company’s service crashes during peak demand.",
      "professional": "A bridge inspector ignores cracks, leading to collapse.",
      "machine": "An autonomous car system unpredictably fails in routine traffic conditions."
    }
  },
  {
    "category": "AP",
    "name": "Safety",
    "definition": "Prevent harm and protect people from danger.",
    "human": "Making choices that avoid unnecessary risks.",
    "organizational": "Prioritizing workplace safety measures and compliance.",
    "professional": "Ensuring designs and practices safeguard public welfare.",
    "machine": "Building AI and autonomous systems that prevent accidents and minimize harm.",
    "failureModes": {
      "human": "Someone drives recklessly, endangering themselves and others.",
      "organizational": "A company ignores fire safety regulations in its buildings.",
      "professional": "An engineer signs off on equipment that fails under stress.",
      "machine": "A robot malfunctions and injures workers in a factory."
    }
  },

  // ===== AB EXAMPLES =====
  {
    "category": "AB",
    "name": "Reward Operative Honesty (Politics)",
    "definition": "Make candidates earn support for specifying operative goals: concrete trade-offs, sources and uses of funds, and priorities.",
    "hopedFor": "Candidates who speak clearly about real plans and trade-offs.",
    "rewarded": "Vague, high-acceptance ‘official’ goals that offend no one.",
    "pathology": "Vagueness premium: voters punish specificity and reward slogans, so politicians avoid operative detail.",
    "human": "Voters value and share candidates who give concrete funding and policy details.",
    "organizational": "Parties tie debate access and endorsements to operative specificity and budget math.",
    "professional": "Campaign staff are evaluated on clarity and truthfulness of proposals, not just polling bumps.",
    "machine": "Recommendation systems surface content with verified policy detail rather than pure engagement.",
    "failureModes": {
      "human": "Voters down-rank a candidate after they explain where cuts and taxes would come from.",
      "organizational": "A party rewards messaging that polls well but says nothing concrete.",
      "professional": "Consultants advise avoiding any budget detail to minimize attack surface.",
      "machine": "Platforms boost vague slogans because they provoke more clicks than nuanced policy."
    }
  },
  {
    "category": "AB",
    "name": "Balance Type-I/Type-II Errors (Medicine)",
    "definition": "Align incentives so clinicians are accountable for both over-diagnosis/overtreatment (Type I) and missed disease (Type II).",
    "hopedFor": "Accurate diagnosis with minimal harm from either kind of error.",
    "rewarded": "Conservative labeling of healthy patients as sick (tests, procedures, steady revenue).",
    "pathology": "One-sided risk aversion: system penalizes Type-II more than Type-I, so overtreatment is rational.",
    "human": "Clinicians track and learn from both false positives and false negatives.",
    "organizational": "Hospitals include overdiagnosis, adverse events, and unnecessary procedures in quality scores and bonuses.",
    "professional": "Boards review patterns of overtreatment as seriously as missed diagnoses.",
    "machine": "Clinical AI optimizes for calibrated risk, penalizing overdiagnosis and missed disease symmetrically.",
    "failureModes": {
      "human": "Doctor orders low-value tests to ‘play it safe’ for a healthy patient.",
      "organizational": "Clinic bonuses correlate with procedure volume, not outcomes or harms.",
      "professional": "QA flags only missed cancers, not cascades from false positives.",
      "machine": "Triage model pushes many healthy patients into invasive follow-ups to avoid liability."
    }
  },
  {
    "category": "AB",
    "name": "Align Care Institutions to Client Outcomes",
    "definition": "Fund and evaluate orphanages/rehab centers on successful placements and client well-being, not headcount or size.",
    "hopedFor": "Children placed in good homes and clients rehabilitated.",
    "rewarded": "Rules and budgets that grow enrollment, staff, and institutional prestige.",
    "pathology": "Goal displacement: means (rules, census, budget) become ends that block the mission.",
    "human": "Caseworkers are recognized for safe, timely placements, not paperwork volume.",
    "organizational": "Budgets and promotions depend on verified outcomes after placement, not number in care.",
    "professional": "Supervisors audit for barriers that needlessly delay adoption or discharge.",
    "machine": "Decision support flags outcome-improving placements rather than maximizing bed occupancy.",
    "failureModes": {
      "human": "Staff resist placing a child to avoid losing a ‘case’ from their roster.",
      "organizational": "Funding increases with census, so leadership tightens admission and adoption rules.",
      "professional": "Managers praise spotless compliance metrics while placements stagnate.",
      "machine": "Placement tool optimizes bed utilization, not child well-being."
    }
  },

  // ===== AT TRAITS (placeholders allowed) =====
  { "category": "AT", "name": "accountability", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "trustworthiness", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "reliability / consistency", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "shared intentionality", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "shared transparent reasoning", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "role fidelity", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "empathy", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "considerateness", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "reciprocity", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "conflict resolution", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "epistemic humility", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} },
  { "category": "AT", "name": "honesty / veracity", "definition": "", "people": "", "peopleref": "", "organizational": "", "organizationalref": "", "professionals": "", "professionalref": "", "machine": "", "machineref": "", "failureModes": {}, "expand": {} }
];
