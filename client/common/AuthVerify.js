
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return null;
  }
};

const withAuth = (Component) => {
     const user = false
        if (user) {
            console.log("user exist!")
            const decodedJwt = parseJwt(user.accessToken);
      
            if (decodedJwt.exp * 1000 < Date.now()) {
                console.log("Log out immediately!")
            }
          } else { 
            console.log("Log out immediately!") }
    return Component;
  };
  
  withAuth.getInitialProps = async () => {
    const response = await fetch("http://localhost:4000/user/me");
    const data = await response.json();
    return { data };
  };
  
  export default withAuth;
 