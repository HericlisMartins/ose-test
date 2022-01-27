# ose-test

Integration react and PHP with GitHub API fetching data from magento/magento2 repository

# Test Instructions

Write an integration that retrieves the last 10 commits from the 2.4-develop branch in the magento/magento2 github repository.
https://github.com/magento/magento2/commits/2.4-develop
https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api
Display the commit hash, commit author's name, commit date and commit message
Write 2 versions
write the integration in React and display the results in HTML linking the commit hash back to github
write an integration in PHP that can be run from the command line and displays the results in the console
3 hours should be enough to get both of these working

# How to use

- PHP:
  cd ose-test/php
  php index.php

- React:
  cd ose-test/react-demo
  npm install
  npm start
