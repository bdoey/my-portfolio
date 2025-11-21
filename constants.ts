
import { ExperienceItem, ProjectCategory, SkillCategory, EducationItem, PublicationItem } from './types';

export const PERSONAL_INFO = {
  name: "Brandon Doey",
  role: "Full-Stack Data Scientist",
  location: "Orlando, FL",
  email: "brandon.doey@icloud.com",
  phone: "561.459.7801",
  github: "github.com/bdoey/my-portfolio",
  summary: "Accomplished Full-Stack Data Scientist with extensive experience designing, building, and deploying scalable, end-to-end machine learning and business intelligence systems. Proven expertise in developing everything from high-throughput forecasting engines to next-generation agentic AI workflows."
};

export const ABOUT_CONTENT = {
  bio: "I thrive on leveraging data to uncover insights that drive impactful business decisions. My goal is to help organizations unlock the full potential of their data, delivering strategic recommendations that fuel growth, optimize operations, and drive innovation.\n\nWith extensive experience in both model development and data engineering, I bridge the gap between complex technical architectures and strategic business objectives. From architecting self-optimizing forecasting pipelines to designing novel multi-agent frameworks, I am passionate about building intelligent systems that solve real-world problems."
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "verizon-senior-mgr",
    role: "Senior Manager - Data Science",
    company: "Verizon",
    period: "Aug 2024 – Present",
    highlights: [
      "Led the design of a novel multi-agent framework to automate churn analysis, reducing manual investigation time by 60%.",
      "Architected a self-optimizing churn forecasting pipeline using Optuna and NeuralProphet, achieving 15% higher accuracy.",
      "Designed an innovative XGBoost-Prophet hybrid ensemble model increasing accuracy by 10% with 25% less compute.",
      "Led end-to-end execution of A/B tests to validate model performance against core business KPIs."
    ]
  },
  {
    id: "verizon-principal",
    role: "Principal Data Engineer",
    company: "Verizon",
    period: "Jan 2021 – Aug 2024",
    highlights: [
      "Spearheaded first Qlik-powered end-to-end data pipeline combining 120M+ records, tracking over $45B in revenue.",
      "Developed Python automation for product hierarchy data, reducing turnaround time by 95%.",
      "Engineered scalable Google Apps Script solutions upholding Verizon's $130B revenue recognition pipeline."
    ]
  },
  {
    id: "verizon-supervisor",
    role: "Systems Analysis & Programming Supervisor",
    company: "Verizon",
    period: "Mar 2017 – Jan 2021",
    highlights: [
      "Integrated Finance Corporate Systems into ServiceNow CMDB (15 teams), increasing customer satisfaction by 60%.",
      "Managed diverse team supporting ERP Portal infrastructure (SAP & PeopleSoft).",
      "Implemented process improvements resulting in 44% faster resolution time on critical system issues."
    ]
  },
  {
    id: "aon-lead",
    role: "Lead Systems Analyst",
    company: "Aon",
    period: "Jan 2015 – Mar 2017",
    highlights: [
      "Translated complex business requirements for a benefits platform serving 150,000+ employees.",
      "Designed robust data validation workflows ensuring high integrity for downstream analytics.",
      "Led technical training programs and created seamless transition documentation."
    ]
  },
  {
    id: "aon-analyst",
    role: "Systems Analyst",
    company: "Aon",
    period: "Apr 2012 – Jan 2015",
    highlights: [
      "Served as SME on proprietary web portal, debugging complex data processing issues.",
      "Conducted comprehensive QA testing preventing critical data-related production issues."
    ]
  },
  {
    id: "hostdime",
    role: "Linux Server Analyst",
    company: "HostDime Global Corp",
    period: "Jul 2008 – Apr 2012",
    highlights: [
      "Managed fleet of CentOS web servers, maintaining 99.95% uptime.",
      "Built foundational experience in optimizing scalable compute infrastructure."
    ]
  }
];

export const PROJECTS: ProjectCategory[] = [
  {
    id: "gen-ai",
    category: "Generative AI",
    link: "#",
    items: [
      "AI Enabled Financial Literacy Q&A System",
      "LLM Powered Data Anomaly Detection App",
      "AI Research Summarizer with LLM Feedback"
    ]
  },
  {
    id: "fintech",
    category: "FinTech Apps",
    link: "#",
    items: [
      "BNPL Credit Worthiness App",
      "DJIA Analysis using NLP and MACD",
      "Trading Agent using Q-Learning"
    ]
  },
  {
    id: "data-science",
    category: "Data Science",
    link: "#",
    items: [
      "Stock Market Prediction using LSTM",
      "Churn Prediction using RF Classifier",
      "Bankruptcy Prediction using Ensemble ML"
    ]
  },
  {
    id: "ml",
    category: "Machine Learning",
    link: "#",
    items: [
      "Customer Segmentation using Clustering",
      "Dropout Prediction Neural Network",
      "Sentiment Analysis using LDA"
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages & Modeling",
    skills: [
      {
        name: "Python",
        description: "The primary language for modern data science and machine learning. I leverage Python for building end-to-end pipelines, developing complex models with PyTorch/TensorFlow, and scripting automation tasks for large-scale systems."
      },
      {
        name: "R",
        description: "A powerful language used for statistical computing and graphics. I utilize R for exploratory data analysis (EDA), hypothesis testing, and creating advanced visualizations to derive insights from financial datasets."
      },
      {
        name: "SQL",
        description: "The backbone of data retrieval and management. I write optimized queries for BigQuery and Teradata to extract, transform, and aggregate millions of records from disparate systems for downstream analysis."
      },
      {
        name: "JavaScript",
        description: "Used for full-stack web development and interactive visualizations. I apply JavaScript to build frontend interfaces for ML models and automate workflows within the Google Apps Script ecosystem."
      },
      {
        name: "TypeScript",
        description: "A strongly typed superset of JavaScript that enhances code reliability. I use TypeScript to build robust, scalable web applications and data dashboards, ensuring type safety across complex codebases."
      },
      {
        name: "Go",
        description: "A high-performance language optimized for concurrency. I explore Go for building efficient microservices and low-latency backend systems that require high throughput in data processing pipelines."
      },
      {
        name: "Rust",
        description: "Known for memory safety and speed without garbage collection. I use Rust for performance-critical components of data pipelines and for optimizing custom CLI tools where Python's overhead is too high."
      },
      {
        name: "Solidity",
        description: "The standard language for implementing smart contracts on Ethereum. I use Solidity to develop decentralized finance (DeFi) applications and explore blockchain-based data integrity solutions."
      },
      {
        name: "DNN",
        description: "Deep Neural Networks form the core of modern AI. I design and train DNN architectures for complex tasks like image recognition, anomaly detection, and predictive modeling in financial contexts."
      },
      {
        name: "RNN",
        description: "Recurrent Neural Networks are essential for sequential data. I implement LSTM and GRU variants to model time-series data, such as stock price movements and temporal churn patterns."
      },
      {
        name: "RAG",
        description: "Retrieval-Augmented Generation combines LLMs with external knowledge bases. I build RAG systems to ground generative responses in proprietary business data, reducing hallucinations and improving accuracy."
      },
      {
        name: "NLP",
        description: "Natural Language Processing enables machines to understand text. I apply NLP techniques like tokenization, sentiment analysis, and named entity recognition to extract value from unstructured documents and earnings calls."
      }
    ]
  },
  {
    category: "AI & ML Frameworks",
    skills: [
      {
        name: "PyTorch",
        description: "My go-to open-source machine learning library for research and production. I use PyTorch for dynamic computation graphs, developing custom neural network architectures, and fine-tuning large language models."
      },
      {
        name: "TensorFlow",
        description: "An end-to-end open-source platform for machine learning. I utilize TensorFlow for deploying scalable models in production environments and leveraging its ecosystem, including TFX for pipeline orchestration."
      },
      {
        name: "Keras",
        description: "A high-level neural networks API running on top of TensorFlow. I use Keras for rapid prototyping of deep learning models, allowing for quick iteration on architecture designs and hyperparameter tests."
      },
      {
        name: "NumPy",
        description: "The fundamental package for scientific computing in Python. I rely on NumPy for high-performance N-dimensional array objects and numerical operations that underpin almost all data science workflows."
      },
      {
        name: "Pandas",
        description: "A fast, powerful, and flexible data analysis tool. I extensive use Pandas for data manipulation, cleaning, and preparation, transforming raw datasets into structured formats ready for modeling."
      },
      {
        name: "Polars",
        description: "A lightning-fast DataFrame library written in Rust. I use Polars as a high-performance alternative to Pandas when dealing with extremely large datasets that require multi-threaded processing."
      },
      {
        name: "Scikit-learn",
        description: "The industry standard for classical machine learning. I leverage Scikit-learn for robust implementations of regression, clustering, and dimensionality reduction algorithms, as well as model evaluation metrics."
      },
      {
        name: "XGBoost",
        description: "An optimized distributed gradient boosting library. I use XGBoost for structured/tabular data problems, particularly for winning Kaggle competitions and building high-accuracy classification models in production."
      },
      {
        name: "LightGBM",
        description: "A gradient boosting framework that uses tree-based learning algorithms. I prefer LightGBM for its training speed and efficiency, especially when working with large datasets and high-dimensional features."
      },
      {
        name: "CatBoost",
        description: "A high-performance open source library for gradient boosting on decision trees. I utilize CatBoost for its superior handling of categorical features without the need for extensive preprocessing."
      },
      {
        name: "BERT",
        description: "Bidirectional Encoder Representations from Transformers. I fine-tune BERT models for various NLP tasks, such as text classification, sentiment analysis, and question answering systems."
      },
      {
        name: "SpaCy",
        description: "An industrial-strength NLP library. I use SpaCy for building information extraction pipelines, performing efficient tokenization, and managing large-scale text processing tasks in production environments."
      },
      {
        name: "NeuralProphet",
        description: "A neural network-based time-series model inspired by Prophet. I apply NeuralProphet for forecasting business metrics with high accuracy, handling seasonality and changing trends better than traditional methods."
      },
      {
        name: "Optuna",
        description: "An automatic hyperparameter optimization software framework. I integrate Optuna into training pipelines to efficiently search search spaces and maximize model performance metrics automatically."
      },
      {
        name: "MLX",
        description: "An array framework for machine learning on Apple Silicon. I explore MLX to leverage local hardware acceleration for training and inference, enabling efficient development on Mac devices."
      },
      {
        name: "CUDA",
        description: "A parallel computing platform and API model by NVIDIA. I utilize CUDA to accelerate deep learning training and inference by harnessing the massive parallelism of GPU hardware."
      }
    ]
  },
  {
    category: "Generative & Agentic AI",
    skills: [
      {
        name: "AutoGen",
        description: "A framework that enables the development of LLM applications using multiple agents. I use AutoGen to create conversable agents that collaborate to solve complex tasks autonomously."
      },
      {
        name: "PydanticAI",
        description: "A library for building AI agents with Pydantic data validation. I leverage PydanticAI to ensure structured, type-safe interactions between LLMs and external tools within agentic workflows."
      },
      {
        name: "CrewAI",
        description: "A framework for orchestrating role-playing autonomous AI agents. I design CrewAI systems where agents with specific roles and goals work together to execute multi-step processes."
      },
      {
        name: "Haystack",
        description: "An end-to-end framework for building NLP pipelines. I use Haystack to build modular search and question-answering systems that integrate retrieval, reading, and generation components."
      },
      {
        name: "Hugging Face",
        description: "The hub for state-of-the-art machine learning models. I utilize the Hugging Face ecosystem for accessing pre-trained models, datasets, and libraries like Transformers and Diffusers."
      },
      {
        name: "Smolagents",
        description: "A library for building lightweight, efficient AI agents. I use Smolagents to deploy capable agents in resource-constrained environments without the overhead of heavier frameworks."
      },
      {
        name: "Unsloth",
        description: "An optimized library for faster and memory-efficient LLM fine-tuning. I apply Unsloth to accelerate the fine-tuning process of Llama and Mistral models, significantly reducing training time."
      },
      {
        name: "Chroma",
        description: "An open-source embedding database. I use Chroma as a vector store for RAG applications, enabling efficient semantic search and retrieval of relevant context for LLMs."
      },
      {
        name: "Weaviate",
        description: "A cloud-native vector database. I deploy Weaviate for scalable, production-grade vector search, handling millions of embeddings with low latency and rich filtering capabilities."
      },
      {
        name: "Ollama",
        description: "A tool for running large language models locally. I use Ollama to experiment with and deploy open-weights models like Llama 3 and Gemma directly on local infrastructure for privacy and speed."
      },
      {
        name: "LM Studio",
        description: "A desktop application for discovering and running local LLMs. I use LM Studio for quick evaluation and comparison of different quantized models before deploying them to production."
      },
      {
        name: "vLLM",
        description: "A high-throughput and memory-efficient LLM serving engine. I utilize vLLM to serve models in production, taking advantage of PagedAttention for optimal performance."
      },
      {
        name: "LangChain",
        description: "A framework for developing applications powered by language models. I use LangChain to chain together prompts, models, and parsers, building complex cognitive architectures."
      }
    ]
  },
  {
    category: "MLOps & Business Intelligence",
    skills: [
      {
        name: "Google Cloud",
        description: "My primary cloud platform for deploying scalable applications. I architect solutions using GCP services like Compute Engine, Cloud Storage, and Cloud Functions to support data infrastructure."
      },
      {
        name: "VertexAI",
        description: "Google Cloud's unified AI platform. I use VertexAI for the entire ML lifecycle, from training and hyperparameter tuning to deploying models to endpoints and monitoring them."
      },
      {
        name: "BigQuery",
        description: "A serverless, highly scalable enterprise data warehouse. I utilize BigQuery for analytics at petabyte scale, running complex SQL queries to derive business intelligence."
      },
      {
        name: "Apache Airflow",
        description: "A platform to programmatically author, schedule, and monitor workflows. I create DAGs in Airflow to orchestrate complex data pipelines, ensuring data freshness and dependency management."
      },
      {
        name: "Kubernetes",
        description: "An open-source system for automating deployment, scaling, and management of containerized applications. I manage K8s clusters to host scalable microservices and ML model servers."
      },
      {
        name: "Docker",
        description: "A platform for developing, shipping, and running applications. I containerize all my applications and models using Docker to ensure consistency across development, testing, and production environments."
      },
      {
        name: "ServiceNow",
        description: "A cloud-based platform for IT service management. I integrate ServiceNow with data pipelines to automate incident response and manage IT workflows related to system health."
      },
      {
        name: "Smartsheet",
        description: "A modern work management platform. I use Smartsheet APIs to automate project tracking and synchronize business data with analytical dashboards."
      },
      {
        name: "Collibra",
        description: "A data intelligence cloud platform. I utilize Collibra for data governance, cataloging assets to ensure data quality and compliance across the organization."
      },
      {
        name: "Teradata",
        description: "A provider of database and analytics-related software. I work with Teradata systems for high-performance enterprise data warehousing and running in-database analytics."
      },
      {
        name: "MLflow",
        description: "An open source platform for the machine learning lifecycle. I use MLflow to track experiments, package code into reproducible runs, and manage model versions from experimentation to production."
      },
      {
        name: "WandB",
        description: "Weights & Biases, a developer-first MLOps platform. I use WandB for visualizing experiment results, tracking model training metrics in real-time, and collaborating on model improvements."
      },
      {
        name: "Jenkins",
        description: "an open source automation server. I configure Jenkins pipelines for CI/CD, automating the testing and deployment of code changes to ensure reliable software delivery."
      },
      {
        name: "Looker",
        description: "A business intelligence software and big data analytics platform. I build LookML models and dashboards in Looker to provide stakeholders with self-service data exploration capabilities."
      },
      {
        name: "Qlik Sense",
        description: "A modern data analytics platform. I design interactive visualizations and dashboards in Qlik Sense, enabling users to uncover hidden insights through associative data exploration."
      },
      {
        name: "Tableau",
        description: "A visual analytics platform transforming the way we use data to solve problems. I create compelling Tableau dashboards that communicate complex data stories to executive leadership."
      }
    ]
  }
];

export const EDUCATION: EducationItem[] = [
  {
    degree: "MS, Finance Technology (FinTech)",
    institution: "University of Central Florida",
    concentration: "Concentration in AI/ML applications for FinTech innovation."
  },
  {
    degree: "BS, Management Information Systems",
    institution: "University of Central Florida",
    concentration: "Concentration in database management, systems analysis, and project management."
  }
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    citation: "Doey, B., et al. (2025). \"How negative tones in earnings calls shape media narratives.\"",
    link: "Review of Behavioral Finance",
    description: "This study investigates the relationship between earnings call sentiment and subsequent media coverage sentiment. Understanding these intricate connections between information channels aids communication experts and market analysts in shaping strategic messaging and predicting market impacts.",
    url: "https://doi.org/10.1108/RBF-08-2024-0228"
  },
  {
    citation: "Doey, B., et al. (2025). \"Linguistic complexity and gender in financial analysis: Evidence from earnings call questioning patterns.\"",
    link: "Journal of Behavioral Finance",
    description: "This study examines gender-based differences in linguistic complexity during earnings conference calls. Our findings suggest that gender diversity in analyst ranks may enhance information extraction during earnings calls through complementary questioning strategies.",
    url: "https://doi.org/10.1080/15427560.2025.2556660"
  }
];
