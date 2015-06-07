package main

import (
   "fmt"
   ctrl "github.com/kjhnns/iseseminar/app"
)

func initRouting() {

   fmt.Println("Routing")
   g.Static("/public", "./public")
   g.LoadHTMLGlob("templates/*")



   g.GET("/:reference/:mode", ctrl.Home)
   g.GET("/", ctrl.NotFound)
}
