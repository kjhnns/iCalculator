package main

func initRouting() {

	g.GET("/", home)

	//TESTING: some dummy-routes for development and testing. not for produciton usage! implement auth!
	g.GET("/accounts", accounts)
	g.GET("/movie/getbytitle/:title", movieGetByTitle)
	g.GET("/test", test)
}
