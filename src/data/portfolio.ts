export type Metric = {
  value: string
  label: string
  detail: string
}

export type Project = {
  id: string
  index: string
  title: string
  category: string
  summary: string
  challenge: string
  approach: string
  outcome: string
  metric: string
  metricLabel: string
  stack: string[]
  accent: 'archive' | 'search' | 'automation' | 'compliance'
}

export const profile = {
  name: 'Deependra Singh',
  role: 'Senior Software Engineer',
  location: 'Delhi NCR, India',
  email: 'dschinku@gmail.com',
  phone: '+91 9667309540',
  linkedin: 'https://linkedin.com/in/deependra-singh-192b36239',
  github: 'https://github.com/er-deepdev',
  resume: '/Deependra_Singh_Resume.pdf',
}

export const navItems = [
  { label: 'Overview', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Journey', to: '/journey' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
]

export const metrics: Metric[] = [
  {
    value: '30%',
    label: 'faster queries',
    detail: 'Through data separation, query tuning, and indexing.',
  },
  {
    value: '35%',
    label: 'lower match latency',
    detail: 'Apache Solr optimization for compliance screening.',
  },
  {
    value: '1–10M',
    label: 'records processed',
    detail: 'High-volume batch and delta workflows in UAT and production.',
  },
  {
    value: '25%',
    label: 'faster reporting',
    detail: 'Optimized report processing and refresh workloads.',
  },
]

export const focusAreas = [
  {
    number: '01',
    title: 'System architecture',
    description:
      'Translate business constraints into resilient services, workflows, and data boundaries.',
  },
  {
    number: '02',
    title: 'Performance engineering',
    description:
      'Find the real bottleneck across code, databases, search, caching, and concurrency.',
  },
  {
    number: '03',
    title: 'Enterprise delivery',
    description:
      'Own features across backend, frontend, reporting, deployment, UAT, and production support.',
  },
  {
    number: '04',
    title: 'Technical leadership',
    description:
      'Turn requirements into HLD and LLD, sequence work, and keep releases moving with clarity.',
  },
]

export const projects: Project[] = [
  {
    id: 'historical-data-architecture',
    index: '01',
    title: 'Historical data migration and archival architecture',
    category: 'Data architecture',
    summary:
      'Separated active and historical datasets to keep planning workloads fast while preserving reliable access to archived data.',
    challenge:
      'Growing historical data was increasing query cost and putting pressure on operational workloads.',
    approach:
      'Designed dedicated historical structures, migration flows, Flyway-managed changes, and a retrieval strategy supported by tuned SQL, views, functions, and indexes.',
    outcome:
      'Improved query performance and created a more scalable foundation for long-term data growth.',
    metric: '30%',
    metricLabel: 'faster queries',
    stack: ['Java', 'Spring Boot', 'SQL Server', 'PostgreSQL', 'Flyway'],
    accent: 'archive',
  },
  {
    id: 'aml-screening-engine',
    index: '02',
    title: 'High-volume AML name-screening engine',
    category: 'Search and AI',
    summary:
      'Built real-time, batch, and delta screening workflows with fuzzy search and AI-assisted re-ranking for regulated data.',
    challenge:
      'Screen millions of records with low latency while improving match quality and controlling false positives.',
    approach:
      'Combined Apache Solr tuning, multithreaded Java processing, rule-based matching, and AI/ML re-ranking across scalable services.',
    outcome:
      'Reduced matching latency while supporting datasets of approximately one to ten million records in UAT and production.',
    metric: '35%',
    metricLabel: 'lower latency',
    stack: ['Java', 'Spring Boot', 'Apache Solr', 'Redis', 'AI/ML'],
    accent: 'search',
  },
  {
    id: 'reporting-automation',
    index: '03',
    title: 'Reporting workflow automation',
    category: 'Automation',
    summary:
      'Automated report calculation and generation with webhook status updates, validation, and workflow visibility.',
    challenge:
      'Manual reporting processes created delays, inconsistent status visibility, and costly refresh workloads.',
    approach:
      'Built scheduled backend jobs, webhook notifications, validation steps, and optimized the underlying reporting database processes.',
    outcome:
      'Reduced report processing and refresh time while giving stakeholders clearer real-time feedback.',
    metric: '25%',
    metricLabel: 'faster reporting',
    stack: ['Java', 'Spring Boot', 'Webhooks', 'Tableau', 'Power BI'],
    accent: 'automation',
  },
  {
    id: 'compliance-workflow',
    index: '04',
    title: 'CDD and compliance investigation workflow',
    category: 'Compliance systems',
    summary:
      'Delivered due-diligence, risk-profiling, investigation, STR, and SAR workflows for enterprise compliance teams.',
    challenge:
      'Model complex regulatory processes without losing auditability, performance, or operator clarity.',
    approach:
      'Created service orchestration, case-management flows, Redis-assisted calculations, SQL tuning, and event-driven integrations.',
    outcome:
      'Improved calculation performance and established a clearer, traceable workflow for compliance investigations.',
    metric: '20%',
    metricLabel: 'faster CDD',
    stack: ['Microservices', 'Kafka', 'RabbitMQ', 'Redis', 'SQL'],
    accent: 'compliance',
  },
]

export const experiences = [
  {
    company: 'SCA Technologies',
    role: 'Senior Software Engineer',
    location: 'Gurugram, Haryana',
    period: 'May 2026 – Present',
    current: true,
    summary:
      'Building enterprise supply-chain planning applications across backend, frontend, database, and reporting layers.',
    highlights: [
      'Translated business requirements into technical designs and full-stack workflows.',
      'Designed the historical data migration and archival architecture that improved query performance by 30%.',
      'Re-engineered SQL workloads and managed database upgrades and migrations with Flyway.',
      'Built automated reporting jobs with validation and webhook-based status updates.',
      'Reduced report processing and refresh time by 25% across Tableau and Power BI workloads.',
      'Supported controlled releases, UAT, RCA, and production performance troubleshooting.',
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Ember.js',
      'SQL Server',
      'PostgreSQL',
      'Flyway',
      'Redis',
      'Apache Spark',
      'Jenkins',
    ],
  },
  {
    company: 'Mente Consultancies',
    role: 'Software Engineer',
    location: 'New Delhi',
    period: 'August 2024 – April 2026',
    current: false,
    summary:
      'Designed compliance, AML, AI integration, and customer-experience systems for high-volume enterprise use cases.',
    highlights: [
      'Built name screening, sanctions screening, CDD, CRP, STR, and SAR workflows.',
      'Integrated AI/ML-based re-ranking with rule-based matching to improve screening quality.',
      'Processed approximately one to ten million records with multithreaded batch and delta workflows, reducing processing time by 30%.',
      'Cut Apache Solr matching latency by 35% and improved CDD calculation time by 20%.',
      'Implemented Kafka and RabbitMQ workflows plus services using Spring MVC, Security, JPA, Hibernate, jOOQ, and Node.js.',
      'Coordinated tasks and releases, and supported Linux deployments, RCA, and production debugging.',
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Microservices',
      'Angular',
      'React',
      'Apache Solr',
      'Kafka',
      'RabbitMQ',
      'Redis',
    ],
  },
]

export const journey = [
  {
    number: '01',
    period: '2019',
    type: 'Foundation',
    title: 'Choosing computer science as a craft',
    description:
      'Started a B.Tech in Computer Science and Engineering with a focus on understanding how software, data, and systems work together.',
    challenge: 'Turn curiosity into a disciplined learning practice.',
    work: 'Built fundamentals in programming, data structures, algorithms, databases, and operating systems.',
    learning: 'Strong systems begin with clear mental models, not framework memorization.',
    signal: 'Learn the system, not only the syntax.',
    tags: ['Computer science', 'Problem solving', 'Foundations'],
  },
  {
    number: '02',
    period: '2019 – 2023',
    type: 'Learning',
    title: 'Building breadth across the stack',
    description:
      'Expanded from core Java and SQL into web development, APIs, data modeling, and end-to-end application thinking.',
    challenge: 'Connect individual technical concepts into complete, usable software.',
    work: 'Practiced backend, frontend, database, and API development through academic and self-directed projects.',
    learning: 'Breadth creates context; depth turns that context into dependable engineering.',
    signal: 'Build enough of the whole system to understand the trade-offs.',
    tags: ['Java', 'SQL', 'Web development'],
  },
  {
    number: '03',
    period: 'July 2023',
    type: 'Milestone',
    title: 'Graduating with an engineering foundation',
    description:
      'Completed the B.Tech degree and moved from structured learning toward solving production-grade business problems.',
    challenge: 'Translate academic knowledge into practical engineering judgment.',
    work: 'Consolidated software design, database, networking, and problem-solving foundations.',
    learning: 'A degree opens the door; deliberate practice develops professional capability.',
    signal: 'Foundations become valuable when they are applied.',
    tags: ['B.Tech CSE', 'AIMT', 'Graduation'],
  },
  {
    number: '04',
    period: 'Aug 2024',
    type: 'Experience',
    title: 'Entering enterprise compliance engineering',
    description:
      'Joined Mente Consultancies and began working on AML, screening, customer due diligence, and regulated enterprise workflows.',
    challenge: 'Model complex regulatory requirements without losing clarity or traceability.',
    work: 'Built services and interfaces with Java, Spring Boot, Angular, React, and relational databases.',
    learning: 'In regulated systems, correctness, auditability, and usability must coexist.',
    signal: 'Domain understanding is an engineering multiplier.',
    tags: ['AML', 'CDD', 'Microservices'],
  },
  {
    number: '05',
    period: '2024 – 2025',
    type: 'Challenge',
    title: 'Scaling search and record processing',
    description:
      'Worked on screening workloads that combined high-volume records, fuzzy matching, search relevance, concurrency, and low-latency expectations.',
    challenge: 'Process approximately one to ten million records while improving speed and match quality.',
    work: 'Applied Apache Solr tuning, Redis, Java ExecutorService, batch and delta processing, and AI-assisted re-ranking.',
    learning: 'Performance problems are architecture, data, and observability problems before they are code problems.',
    signal: 'Measure the bottleneck before optimizing the path.',
    tags: ['Apache Solr', 'Concurrency', 'AI/ML'],
  },
  {
    number: '06',
    period: '2025 – Apr 2026',
    type: 'Work',
    title: 'Owning compliance workflows end to end',
    description:
      'Expanded into case management, sanctions, CDD, CRP, STR, SAR, event-driven integrations, releases, and production debugging.',
    challenge: 'Keep multi-step workflows reliable across services, queues, databases, and user-facing screens.',
    work: 'Implemented Kafka and RabbitMQ flows, tuned CDD calculations, coordinated tasks, and supported Linux deployments and RCA.',
    learning: 'Operational reliability is part of feature design, not a final deployment step.',
    signal: 'Ownership continues after the code is merged.',
    tags: ['Kafka', 'RabbitMQ', 'Production support'],
  },
  {
    number: '07',
    period: 'May 2026',
    type: 'Experience',
    title: 'Moving into supply-chain planning',
    description:
      'Joined SCA Technologies as a Senior Software Engineer, bringing performance and workflow experience into enterprise planning systems.',
    challenge: 'Learn a new domain while contributing across a mature full-stack platform.',
    work: 'Worked across Java, Spring Boot, Ember.js, SQL Server, PostgreSQL, REST APIs, and reporting systems.',
    learning: 'The domain changes, but sound boundaries, clear data, and reliable delivery remain constant.',
    signal: 'Transfer principles, then learn the terrain.',
    tags: ['Supply chain', 'Full stack', 'Senior engineer'],
  },
  {
    number: '08',
    period: '2026 – Present',
    type: 'Impact',
    title: 'Re-architecting data for long-term scale',
    description:
      'Designed historical-data migration and archival flows while improving the query paths used by active planning workloads.',
    challenge: 'Preserve access to growing historical data without slowing current operational workloads.',
    work: 'Separated data lifecycles, tuned SQL, added indexes, and managed controlled schema evolution with Flyway.',
    learning: 'Data lifecycle decisions shape performance, maintainability, and future delivery speed.',
    signal: 'Treat data growth as an architecture concern.',
    tags: ['Data architecture', 'SQL tuning', 'Flyway'],
  },
  {
    number: '09',
    period: '2026 – Present',
    type: 'Ownership',
    title: 'Connecting delivery, reporting, and reliability',
    description:
      'Built reporting automation and webhook visibility while staying involved in UAT, releases, production support, and root-cause analysis.',
    challenge: 'Make long-running data work visible, dependable, and easier to operate.',
    work: 'Automated report jobs, validation, status notifications, and optimized Tableau and Power BI processing.',
    learning: 'A system is only complete when teams can observe, trust, and operate it.',
    signal: 'Reliable delivery is part of the architecture.',
    tags: ['Automation', 'Reporting', 'RCA'],
  },
  {
    number: '10',
    period: 'Next',
    type: 'Direction',
    title: 'Broader systems, deeper impact',
    description:
      'Continuing toward larger architecture ownership, stronger product thinking, and systems that create measurable business value.',
    challenge: 'Balance deeper technical specialization with broader product and business context.',
    work: 'Continue strengthening system design, architecture communication, mentoring, and end-to-end product ownership.',
    learning: 'The next level is not more technology; it is better judgment about where technology matters.',
    signal: 'Stay curious. Build with intent.',
    tags: ['System design', 'Product thinking', 'Leadership'],
  },
]

export const skillGroups = [
  {
    index: '01',
    title: 'Languages',
    description: 'The core languages used to design, build, query, and integrate systems.',
    skills: ['Java', 'JavaScript', 'TypeScript', 'SQL', 'C', 'C++'],
  },
  {
    index: '02',
    title: 'Backend and APIs',
    description: 'Production services, security, persistence, and API delivery.',
    skills: [
      'Spring Boot',
      'Spring MVC',
      'Spring Security',
      'Spring Data JPA',
      'Hibernate',
      'jOOQ',
      'Node.js',
      'Express.js',
      'REST APIs',
    ],
  },
  {
    index: '03',
    title: 'Frontend',
    description: 'Modern and legacy enterprise interfaces across multiple frameworks.',
    skills: [
      'React',
      'Angular',
      'AngularJS',
      'Ember.js',
      'Redux',
      'NgRx',
      'Tailwind CSS',
      'Material UI',
    ],
  },
  {
    index: '04',
    title: 'Data and search',
    description: 'Operational databases, caching, search, migration, and performance.',
    skills: [
      'PostgreSQL',
      'SQL Server',
      'MySQL',
      'MongoDB',
      'Redis',
      'Apache Solr',
      'Flyway',
      'Query tuning',
    ],
  },
  {
    index: '05',
    title: 'Architecture and messaging',
    description: 'Patterns for scalable, asynchronous, and distributed workloads.',
    skills: [
      'Microservices',
      'System design',
      'Event-driven architecture',
      'Kafka',
      'RabbitMQ',
      'Multithreading',
      'Concurrency',
    ],
  },
  {
    index: '06',
    title: 'Cloud and delivery',
    description: 'Tooling for repeatable builds, releases, environments, and operations.',
    skills: [
      'AWS',
      'Azure',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'GitLab CI',
      'Linux',
      'Nginx',
      'Maven',
    ],
  },
  {
    index: '07',
    title: 'AI, data and reporting',
    description: 'Connecting operational systems to models, data processing, and insight.',
    skills: [
      'AI/ML integration',
      'AI APIs',
      'Apache Spark',
      'Tableau',
      'Power BI',
    ],
  },
]
