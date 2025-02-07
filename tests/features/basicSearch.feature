Feature: Search

Scenario: User can perform basic search
Given user is on any page of the Quartex Published Site
When user enters "Brown" in the basic search input box
# And Start to type your And step here the search button is clicked
# Then Start to type your Then step here user is navigated to the Browse All page
# And the first page of search results is displayed
# And the assets listed meet the search criteria

# | Search term | Number of search results | Title of asset listed |
# | Brown | 59 | 1 April 1875. Browning, Robert to Pollock, Lady. |

# Scenario: User can filter search results by Colection
# Given user has performed a successful basic search
# When user selects to filter the search results by collection (from the filter results panel)
# Then the assets listed meet the search and filter criteria
# Example Test Data:
# | Search term | Collection filtered by| Number of search results | Title of asset listed |
# | Brown | Interwar Periodicals | 13 | Woman's Weekly, July-December 1919 |

# Scenario: User is presented with no search results if nothing is available
# GIVEN user has performed a successful basic search
# WHEN there are no assets meeting the search criteria
# THEN user is navigated to the Browse All page
# AND a message is output informing the user that no results are available
# Example Test Data:
# | Search term | Message |
# | Quartex | Sorry, no results found that match your criteria.