---
sidebar_position: 1
---

# Radio-Spectrum SHARC

## Introduction to SHARC

Welcome to **SHARC**, a powerful simulator designed to support **SHARing and Compatibility** studies of radiocommunication systems. Developed and maintained by the **Telecommunications Regulatory Authority (TRA)** of Brazil, **ANATEL**, SHARC implements the framework specified in [ITU-R M.2101](https://www.itu.int/rec/R-REC-M.2101/en), focusing on **modeling and simulating IMT networks and systems** for use in sharing and compatibility studies.

### Purpose of SHARC

SHARC helps users simulate and evaluate various radiocommunication systems to understand how they share and coexist in the radio spectrum. Whether you're assessing interference, spectrum allocation, or compatibility across different communication technologies, SHARC provides the tools you need to ensure the optimal use of radio frequencies.

## Key Features of SHARC

- **Compatibility Studies**: Simulate interactions between different systems like IMT (International Mobile Telecommunications), satellite services, and terrestrial systems.
- **Flexible and Scalable**: SHARC supports simulation of both **satellite** and **terrestrial** communication systems, offering both large-scale global studies and localized scenarios.
- **Modular Architecture**: The software is designed to be easily extensible, allowing users to add their own models, systems, and study areas.
- **Integration with ITU Framework**: SHARC operates according to the international guidelines set by the ITU-R recommendations, ensuring that simulations align with industry standards.

---

## Requirements

Before setting up SHARC, make sure that you have the following installed:

- **Python 3.12**: You can download Python from the official [Python website](https://www.python.org/downloads/).
- **PEP 8 Style Guide**: Contributing to SHARC? Please follow the [PEP8 style guide](https://www.python.org/dev/peps/pep-0008/) to keep the codebase clean and consistent.

---

## Get Started with SHARC

Ready to dive into SHARC and contribute? Follow the steps below to set up SHARC for local development.

### 1. Fork the SHARC Repository

Start by forking the official SHARC repository to your GitHub account:

- Visit the [SHARC GitHub repository](https://github.com/Radio-Spectrum/SHARC).
- Click on the **Fork** button at the top right of the page.

1. Fork the `sharc` repo on GitHub.
2. Clone your fork locally:

    `$ git clone https://github.com/Radio-Spectrum/SHARC`

    `$ cd SHARC/`

3. Install python 3.12 or equivalent and the virutalenv module in your system (SHARC has been tested from versions 3.12 versions).
4. Install your local copy into a virtualenv.
    
    `$ cd sharc`

    `$ python3 -m venv .venv`

    `$ source .venv/bin/activate`

    You shall see (.venv) in the begining of your command prompt indicating that the virutalenv has been activated.
    Now, instal all the dependencies for development.
    `$ pip install -r requirements.txt`

    Install sharc on your local enviroment.
    Run from the source code directory root:
    `$ pip install -e .`
