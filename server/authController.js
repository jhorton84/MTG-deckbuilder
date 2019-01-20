const axios = require('axios');

module.exports = {
    // /auth/callback?code=abc
    login : (req, res) => {
        // code looks like abc
        // { name: 'tyler', 'picture: '' }
        const { code } = req.query;
        console.log('----------code', code);
        const payload = {
            client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
            client_secret: process.env.AUTH0_CLIENT_SECRET,
            code,
            grant_type: 'authorization_code',
            // redirect_uri: `https://${req.headers.host}/auth/callback`
            redirect_uri: `http://${req.headers.host}/auth/callback`
        };

        function tradeCodeForAccessToken() {
            // access token looks like 123
            return axios.post(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/oauth/token`, payload);
        }

        function tradeAccessTokenForUserInfo(response) {
            console.log('------------- response.data.access_token', response.data.access_token);
            return axios.get(`https://${process.env.REACT_APP_AUTH0_DOMAIN}/userinfo?access_token=${response.data.access_token}`)
            
        }

        function storeUserInfoInDataBase(response) {
            console.log('user info', response.data);
            const user = response.data;
            const db = req.app.get('db');
            return db.get_user([user.sub]).then(users => {
              if(users.length){
                req.session.user = {
                  name: users[0].name,
                  email: users[0].email,
                  picture: users[0].picture,
                  auth0_id: users[0].auth0_id
                }
                res.redirect('/');
              } else {
                return db.create_user([
                    user.name,
                    user.email,
                    user.picture,
                    user.sub, // this is essentially: ex: github | 234453
                ]).then(newUsers => {
                    console.log('------newUsers', newUsers);
                  req.session.user = newUsers[0];
                  res.redirect('/');
                })
              } 
            })
            
        }

        tradeCodeForAccessToken()
        .then(tradeAccessTokenForUserInfo)
        .then(storeUserInfoInDataBase)
        .catch(error => {
            console.log('error in login route', error);
            res.status(500).send('Something went wrong on the server.')
        })
    },

    getUser: (req, res) => {
        res.json({ user: req.session.user });
    },

    // LOGOUT
    logout: (req, res) => {
        req.session.destroy();
        res.send();
    }

}