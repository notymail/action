const core = require('@actions/core');

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  try {
    const url = core.getInput('url');
    const to = core.getInput('to');
    const subject = core.getInput('subject');
    const body = core.getInput('body');
    const apiKey = core.getInput('apiKey');
    let headers = {
      'Content-Type': 'application/json',
      'User-Agent': `notymail-action@${process.env['GITHUB_ACTION_REF']}`,
    };
    if (apiKey) {
      headers = {
        ...headers,
        'x-api-key': apiKey,
      };
    }
    fetch(`${url}/send/email`, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        to,
        subject,
        body,
      }),
    }).then((response) => {
      if (response.status >= 300) {
        response.json().then((data) => core.setFailed(JSON.stringify(data)));
      }

      core.setOutput('sent', true);
    });
  } catch (error) {
    core.setFailed(error.message);
  }
}

module.exports = {
  run,
};
