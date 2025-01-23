Feature: Example feature for Playwright with Cucumber
  As a user, I want to visit the Playwright website and check the title.

  Scenario: Verify the Playwright website title
    Given I navigate to "https://playwright.dev"
    Then the page title should be "Fast and reliable end-to-end testing for modern web apps | Playwright"