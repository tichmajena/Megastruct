import { getJSON } from "./_api";

export const get = async (request) => {
  //   if (!request.context.userid) {
  //     // the user has never visited the site before
  //     // and so doesn't yet have a userid, which is
  //     // set in `handle`, in src/hooks.js
  //     return { body: [] };
  //   }
  try {
    // fetch and return
    const response = await getJSON(request, `wp/v2/service`);

    if (response.status === 404) {
      // the user has visited before, but hasn't yet
      // created a todo list.
      // start with an empty array
      return { body: [] };
    }
    return {
      headers: {
        "cache-control": "public, max-age=3600",
      },
      status: response.status,
      body: { services: response.body },
    };
  } catch (error) {
    // handle error
    console.log("ERROR: ", error);
  }

  //const response = await getJSON(request, `tutor/v1/quiz-question-answer/11/`);
};
