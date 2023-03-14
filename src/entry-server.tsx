const protectedPaths = ["/protected"]; // add any route you wish in here
// middleware for protected paths
export default createHandler(
  ({ forward }) => {
    return async event => {
      if (protectedPaths.includes(new URL(event.request.url).pathname)) {
        const user = await getUser(event.request);
        if (!user) {
          return redirect("/"); // a page for a non logged in user
        }
      }
      return forward(event); // if we got here, and the pathname is inside the `protectedPaths` array - a user is logged in
    };
  },
  // middleware for 404
  ({ forward }) => {
    return async event => {
      const response = await forward(event);
      if (response.status === 404) {
        return new Response("Not found", { status: 404 });
      }
      return response;
    };
  },
  renderAsync(event => <StartServer event={event} />)
);
