import postRoute from "./post.route";


const commonRoutes = {
  prefix: "/",
  routes: [
    {
      path: 'posts',
      route: postRoute,
    }
  ],
};

export default commonRoutes;
