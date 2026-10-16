# BuildLab Demoblaze QA Project

## Project Overview

This project is part of the BuildLab Stage 1 Quality Assurance program. It focuses on testing the Demoblaze web application using manual testing techniques and Cypress automation.

## Application Under Test

- **Application:** [Demoblaze](https://www.demoblaze.com/)
- **Testing Approach:** Hybrid (Manual and Automation)
- **Automation Framework:** Cypress
- **Programming Language:** JavaScript

## Testing Scope

The project focuses on key e-commerce functionality, including:

- Viewing product details
- Adding products to the shopping cart
- Verifying the cart total for one product

## Automated Test Cases

| Test Case ID | Test Scenario |
|---|---|
| DB-TC-002 | Open product details |
| DB-TC-015 | Add product to cart |
| DB-TC-017 | Verify cart total for one item |

## Tools and Technologies

- Cypress
- JavaScript
- Node.js and npm
- Git and GitHub
- Google Docs and Google Sheets for test documentation

## Project Structure

```text
BuildLab-Demoblaze/
├── cypress/
│   └── e2e/
│       ├── DB-TC-002-product-details.cy.js
│       ├── DB-TC-015-add-product-to-cart.cy.js
│       └── DB-TC-017-verify-cart-total.cy.js
├── evidence/
│   ├── DB-TC-002-product-details.png
│   ├── DB-TC-015-add-to-cart.png
│   └── DB-TC-017-cart-total.png
├── cypress.config.js
├── package.json
├── package-lock.json
├── README.md
└── .gitignore
```

## Getting Started

### Prerequisites

- Node.js and npm
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/josephtitidasola30-lgtm/BuildLab-Demoblaze-QA.git
cd BuildLab-Demoblaze-QA
```

Install dependencies:

```bash
npm install
```

### Running the Tests

Open the Cypress Test Runner:

```bash
npx cypress open
```

Alternatively, run the tests in headless mode:

```bash
npx cypress run
```

## Test Evidence

Screenshots showing the successful execution of the three Cypress tests are available in the `evidence/` folder.

## Project Status

The initial three Cypress automated tests have been executed successfully. Manual test documentation and further testing activities are part of the ongoing project.

## Disclaimer

Demoblaze is a publicly available demonstration application. Testing is performed for educational and QA practice purposes.