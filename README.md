# Front-End-Junior-Task

This is a Front-end task used in the recruitment process at **Forte Digital**. This repo is created based on the `create-react-app`. It consists of a list of participants. For now it has two pages:
​

1. Participants List page
1. Edit Participant page

To check your Front-end skills please complete three tasks specified in this document and send us zipped repo to an address you have received in the email. Before zipping the repo remember to remove `node_modules` directory.
<br>
<br>
To run the development environment please install node: https://nodejs.org/en/download/ and yarn: https://classic.yarnpkg.com/en/docs/install/.
<br>
<br>
API is implemented using json-server. It's configured to serve the content from the db.json file. For details of json-server please go to https://github.com/typicode/json-server.
​<br>
<br>
The rest of the instructions can be found in README in the `front-end-task` folder.

## Remark

You are free to install external libraries. However, you should show us that you can do some styling on your own. Also, try not to over-engineer this task.

## Task One - Validation of participant editing

You need to work on the `Edit Participant` page.

- Load details of a participant from API (http://localhost:3001/participants/:id) and display it in the form
- Add Missing fields: `workStart`, `workEnd` allowing to edit dates
- Make all fields required (name, email, workStart, workEnd)
- Validate if the email is correct
- Validate if `workEnd` date is after `workStart` date
- Update participant data in `db.json` on form submit using API endpoint (PUT http://localhost:3001/participants/:id)

## Task Two - Add `Add participant` page

You should create new page for adding a new participant.

- Link to the page should be in the `Participants List` page heading
- `Add participant` page should have the same form fields and validation as `Edit Participant` page
- Add participant to `db.json` on form submit using API endpoint (POST http://localhost:3001/participants)
- Consider reusing components added in the "Task One"

## Task Three - Page styling and semantic HTML

​You need to work on `Participants List`, `Add Participant` and `Edit Participant` page.

- Change the HTML markup to the more semantic one.
- Style all pages according to the design:
  https://www.figma.com/file/DNF5oDSn7NTO4Ls1kVkK1K/Task?node-id=1%3A2
- Remember about accessibility and RWD
