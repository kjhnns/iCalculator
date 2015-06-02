package main

import (
   "fmt"
   ctrl "github.com/kjhnns/iseseminar/app"
)

func initRouting() {

   fmt.Println("routing")
   g.Static("/public", "./public")


   g.LoadHTMLGlob("templates/*")


	g.GET("/", ctrl.home)
}
