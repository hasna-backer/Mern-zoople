const signup-handler=(req, res) => {
	const { username, password } = req.body
  //   req.body=
  //   {
  // 	usernam:"hasna"	,
  // 	password:"123456"
  //   }
  
	// Simple check: if username already exists
	const userExists = users.find(user => user.username === username)
	if (userExists) {
	  return res.send('<h2>User already exists. Try another username.</h2>')
	}
  
	// Save user in "database"
	users.push({ username, password })
  
	// Redirect to home
	res.redirect(`/home?username=${username}`)
  }

  const signup-view= (req, res) => {
	res.send(signupPage)
  }

  const home-view=(req, res) => {
	const { username } = req.query
	res.send(homePage(username || 'Guest'))
  }