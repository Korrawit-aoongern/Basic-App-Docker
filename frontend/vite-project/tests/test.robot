*** Settings ***
Library    SeleniumLibrary
Suite Setup    Open Browser To Base Url
Suite Teardown    Close All Browsers

*** Variables ***
${BASE_URL}    %{BASE_URL=http://localhost:5173/}

*** Keywords ***
Open Browser To Base Url
    Open Browser    ${BASE_URL}    edge

*** Test Cases ***
Text Testing
    Page Should Contain    Basic
