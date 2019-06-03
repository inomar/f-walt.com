import { HttpLink } from "apollo-link-http";
import { withData } from "next-apollo";

const config = {
  link: new HttpLink({
    uri: "https://app.graphcms.com/ab02ad7b498d403cbeab781e9e7886dd/master/graphiql", // Server URL (must be absolute)
  })
};

export default withData(config);
