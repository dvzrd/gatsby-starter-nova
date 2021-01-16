---
name: contact
action: /thanks
method: POST
title: Contact
description: Raise your questions, concerns or suggestions by filling out the contact form.
heading: Get in touch.
subheading: Fill out the contact form below.
button: Contact
fields:
  - order: 0
    required: true
    type: text
    name: name
    label: Full name
  - order: 1
    required: true
    type: email
    name: email
    label: Email address
  - order: 2
    required: false
    type: phone
    name: phone
    label: Phone number
  - order: 3
    required: true
    type: textarea
    name: description
    label: Description
    placeholder: Please be as descriptive as possible to get a better response.
---
