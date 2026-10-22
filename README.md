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
- Removing a product from the shopping cart

## Automated Test Cases

| Test Case ID | Test Scenario |
|---|---|
| DB-TC-002 | Open product details |
| DB-TC-015 | Add product to cart |
| DB-TC-017 | Verify cart total for one item |
| DB-TC-019 | Remove an item from the cart |

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
│       ├── DB-TC-017-verify-cart-total.cy.js
│       └── DB-TC-019-remove-item-from-cart.cy.js
├── evidence/
│   ├── DB-TC-002-product-details.png
│   ├── DB-TC-015-add-to-cart.png
│   ├── DB-TC-017-cart-total.png
│   ├── DB-TC-019-remove-item-from-cart.png
│   └── week2-cypress-suite-report.txt
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

Run all Cypress tests in headless mode:

```bash
npx cypress run
```

To run the four documented test cases specifically:

```bash
npx cypress run --spec "cypress/e2e/DB-TC-002-product-details.cy.js,cypress/e2e/DB-TC-015-add-product-to-cart.cy.js,cypress/e2e/DB-TC-017-verify-cart-total.cy.js,cypress/e2e/DB-TC-019-remove-item-from-cart.cy.js"
```

## Test Evidence

The `evidence/` folder contains screenshots associated with the four automated test cases and the Week 2 Cypress suite execution report.

- `DB-TC-002-product-details.png`
- `DB-TC-015-add-to-cart.png`
- `DB-TC-017-cart-total.png`
- `DB-TC-019-remove-item-from-cart.png`
- `week2-cypress-suite-report.txt`

## Latest Automation Results

The four documented Cypress test cases were executed together.

| Metric | Result |
|---|---:|
| Test cases executed | 4 |
| Passed | 4 |
| Failed | 0 |
| Total reported duration | 46 seconds |

All four spec files passed during the recorded suite execution. Cypress reported no automatically captured screenshots and no video recording for that run.

## Project Status

The project currently includes four automated Cypress test cases covering product details, adding a product to the cart, verifying the cart total for one item, and removing a product from the cart.

The latest recorded execution completed successfully, with all four tests passing. Manual test documentation and other planned QA activities remain part of the wider project.

## Disclaimer

Demoblaze is a publicly available demonstration application. Testing is performed for educational and QA practice purposes.
