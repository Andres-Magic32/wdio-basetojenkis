# qa-automation
Test automation project. This project is focused on the execution of scripts that test, validate and verify many of the requirements that are in the different projects that we have in the company


## Run Locally

Clone the project

```bash
  git clone https://github.com/finerioconnect/qa-automation.git
```

Go to the project directory

```bash
  cd qa-automation
```

Install dependencies

```bash
  npm install
```

Run backend tests locally MAC/UBUNTU

```bash
  ENVIRONMENT=sandbox npm run local-test-back
```

Run backend tests locally on WINDOWS

```bash
  SET ENVIRONMENT=staging&&npm run local-test-back
```

Run frontend tests locally on MAC/UBUNTU

```bash
  ENVIRONMENT=sandbox npm run local-test-chrome-front
```

Run frontend tests locally on WINDOWS

```bash
  SET ENVIRONMENT=staging&&npm run local-test-chrome-front
```

Run backend tests remotely on MAC/UBUNTU (browserstack need credentials)

```bash
  ENVIRONMENT=sandbox npm run remote-test-back
```

Run backend tests remotely on WINDOWS (browserstack need credentials)

```bash
  SET ENVIRONMENT=staging&&npm run remote-test-back
```

Run frontend tests remotely on MAC/UBUNTU (browserstack need credentials)

```bash
  ENVIRONMENT=sandbox npm run remote-test-front
```

Run frontend tests remotely on WINDOWS (browserstack need credentials)

```bash
  SET ENVIRONMENT=staging&&npm run remote-test-front
```

Generate Allure Report

```bash
  allure generate allure-results/ --clean && allure open
```


## OBSERVATIONS
For the executions it is necessary to have the .env document configured in the root of the project. This file has 
all the credentials.

Please contact me at adrian.benedettob@finerioconnect.com so that we can share the credentials in a secure way.

