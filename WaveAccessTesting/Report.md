# Accessibility Test Report using **WAVE**

## 1. What is WAVE?

WAVE (**Web Accessibility Evaluation Tool**) is a free online tool that analyzes the accessibility of websites according to WCAG (_Web Content Accessibility Guidelines_). It allows users to quickly identify critical errors, warnings, and elements that affect the structure and usability of a website.

After entering a website URL into the WAVE interface, a report is generated highlighting:

- **Errors** – critical accessibility issues that should be fixed first,
- **Alerts** – warnings that may indicate potential problems requiring manual review,
- **Features** – correct elements that improve accessibility,
- **Structure** – elements defining hierarchy and content organization (headings, regions, sections),
- **ARIA** – use of ARIA attributes that support accessibility for screen reader users.

## 2. Key Terms

- **Errors (critical errors):** indicate where the website breaks basic accessibility rules. They can prevent people with disabilities from properly using the site (e.g., missing alternative text for images, missing headings).
- **Alerts (warnings):** not always errors but require further inspection. They may indicate missing structures, attributes needing verification, or potential navigation problems.

## 3. Tested Website

`URL: [https://ticktrack.work/](https://ticktrack.work/)  `

## 4. WAVE Analysis Results

### Alerts

- **2 Alerts**
  - **No heading structure** – the website lacks heading hierarchy (H1, H2, etc.), which makes navigation difficult for screen reader users.
  - **No page regions** – no defined page regions (such as `navigation`, `main content`, `footer`).

### Features

- **1 Feature**
  - **Language defined** – the language of the page is set in the code, which supports proper screen reader operation.

### Structure

- **2 Structural Elements**
  - Two **inline frames (_iframe_)** are present. They may reduce accessibility if they lack descriptive labels.

### ARIA

- **2 ARIA elements**
  - **ARIA label** – present, but requires verification of correctness.
  - **ARIA tabindex** – used, but must be checked to ensure logical navigation order.

### Contrast

- **No contrast errors detected** – text and background colors meet `WCAG AA` and `AAA` contrast requirements.

## 5. Summary

The analysis of **ticktrack.work** with WAVE showed:

- missing heading and region structures, which are significant accessibility problems,
- ARIA elements present but requiring validation,
- no contrast errors (text meets accessibility standards),
- correctly defined page language.

### Recommendations:

1. Add a proper heading hierarchy (H1, H2, H3) to the content.
2. Introduce page regions (`<header>`, `<main>`, `<nav>`, `<footer>`).
3. Ensure iframes have descriptive alternative labels.
4. Verify correct implementation of ARIA attributes.
