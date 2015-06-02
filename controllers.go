package main

import (
	//"fmt"
	"encoding/json"
	"fmt"
	r "github.com/dancannon/gorethink"
	"github.com/gin-gonic/gin"
	"io/ioutil"
	"log"
	"net/http"
	"strings"
)

// serve home view
func home(c *gin.Context) {
	c.Redirect(http.StatusMovedPermanently, "app/index.html")
}

//TESTING fetch all records from "accounts" table
func accounts(c *gin.Context) {
	rows, _ := r.Table("accounts").Run(session)
	var accounts []Account
	_ = rows.All(&accounts)
	c.JSON(http.StatusOK, accounts)
}

// a test function
func test(c *gin.Context) {
	type Message struct {
		Name string
		Body string
		Time int64
	}
	m := Message{"Alice", "Hello", 1294706395881547000}
	c.JSON(http.StatusOK, m)
}

// get a movie by title
func movieGetByTitle(c *gin.Context) {
	// get params from requested url
	title := c.Params.ByName("title")

	// replace spaces for omdapi
	fmt.Println("searching for: " + title)
	title = strings.Replace(title, " ", "+", -1)
	fmt.Println("replaced searching for: " + title)

	// omdbapi call
	res, err := http.Get("http://www.omdbapi.com/?t=" + title + "&y=&plot=short&r=json")
	if err != nil {
		log.Fatal(err)
	}
	rawJSON, err := ioutil.ReadAll(res.Body)
	defer res.Body.Close()
	if err != nil {
		log.Fatal(err)
	}

	// convert the rawJSON
	// map of interfaces can receive any value types
	resJSON := map[string]interface{}{}
	err = json.Unmarshal(rawJSON, &resJSON)
	if nil != err {
		panic(err)
	}

	fmt.Println(resJSON)
	c.JSON(http.StatusOK, resJSON)
}
