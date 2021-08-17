# Angular code challenge
This challenge consist in a trivia game built in Angular

### Principal libraries and frameworks being used
- Angular 12 (Javascript framework)

The code also includes a few libraries that don't affect in the logic so they are excluded from the required experience: Tailwindcss (CSS tool)

## Before the live coding challenge
- Clone the repository locally and install all the dependencies
- If you want to understand more about the Public API being used, check [here](https://opentdb.com/)
- Check how the `base.store.ts` class is defined, this base class is a simple Store used in the app, this way you won't need to think how to integrate one
- Check the schema of `question.model.ts`, this represents the questions used in the game and it will be the one you use to develop the next feature

### Tasks to do during the live code challenge
There are multiple task requested by the company, choose the ones you think you can handle in the
time we have and do as many as you can. You need to start from the top, if you feel you can not handle
the next one, move the to one below (but some of them could be a blocker of the next one).

- Review why the site is not loading the `/home` page (main page)
- Create a logic to finish the trivia game, this needs to be activated once the user has picked all its answers. It needs to let the user know how many answers were correct/incorrect  
- Create a test which checks if the answer selected by the user gets colored once they click on it.
- Add a logic to show a message to the user if we couldn't fetch the answers from the API.
- Create a test to check if the logic of the failed request to the API is working correctly
