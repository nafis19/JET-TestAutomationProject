# JET-TestAutomationProject

This is a sample test automation project using codeceptjs framework with puppeteer. Code is written in Javascript and puppeteer is used as helper.


## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [How to run the Tests](#How-o-run-the-Tests)
* [To get a report](#to-get-a-report)
* [Can be improved in future](#can-be-improved-in-future)

## General info
This project is a simple test automation project with few simple test cases on the order flow of Takeaway website.
	
## Technologies
Project is created with:
* codeceptjs: ^3.0.5
* puppeteer: ^8.0.0
* IDE: VS Code

## Prerequisites
node needs to be installed

## Installation
Go to your command prompt and follow:

```
git clone https://github.com/nafis19/JET-TestAutomationProject.git

cd JET-TestAutomationProject

npm install

```


## How to run the Tests
To run the tests from command prompt:

```
npx codeceptjs run --steps

```

## To get a report

```
npm install -g allure-commandline

allure serve

```

## Can be improved in future
1. Better element locators
2. Implementation of page objects
3. Adding BDD
