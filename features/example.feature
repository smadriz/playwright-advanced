Feature: Example feature for Playwright with Cucumber
  As a user, I want to verify various functionalities of a website.

  Scenario: Verify the Playwright website title
    Given I navigate to "https://playwright.dev"
    Then the page title should be "Fast and reliable end-to-end testing for modern web apps | Playwright"

  Scenario: Verify a specific element exists on the Playwright homepage
    Given I navigate to "https://playwright.dev"
    Then I should see an element with selector ".navbar__logo"

  Scenario: Perform a search on the Playwright website
    Given I navigate to "https://playwright.dev"
    When I type "browser testing" into the search box with selector ".search__input"
    And I press the "Enter" key
    Then I should see results containing "Browser Testing with Playwright"