package main

import (
	"fmt"
	"log"
	"os"
	"strconv"

	r "github.com/dancannon/gorethink"
	"github.com/gin-gonic/gin"
)

var session *r.Session
var g *gin.Engine

//Conntect to rethinkDB
func initDatabase() {
	//settings for LOCAL development
	Address := "localhost:28015"
	Database := "imdbsearch"
	AuthKey := ""
	Message := "establishing db connection to LOCAL db..."

	//if second argument on startup passed
	if len(os.Args) == 2 {
		if os.Args[1] == "staging" {
			//settings for STAGING development
			Address = "217.160.126.204:28015"
			Database = "imdbsearch"
			AuthKey = "ohChies7"
			Message = "establishing db connection to STAGING db..."
		}
		if os.Args[1] == "production" {
			//settings for PRODUCTION development
			Address = "217.160.126.204:28015"
			Database = "imdbsearch"
			AuthKey = "ohChies7"
			Message = "Don't mess up! Establishing db connection to PRODUCTION db... "
		}
	}

	//if more than 2 arguments passed on startup
	if len(os.Args) > 2 {
		fmt.Println("Usage: imdbsearch [staging||production]")
	}

	fmt.Print(Message)
	var err error
	//Connect to rethinkDB
	session, err = r.Connect(r.ConnectOpts{
		Address:  Address,
		Database: Database,
		AuthKey:  AuthKey,
	})
	if err != nil {
		log.Fatalln(err.Error())
	}
	session.SetMaxOpenConns(5)
	fmt.Println("done.")
}

//creates some testdata in local-dev and staging
func createTestData() {
	var err error
	fmt.Print("creating testData ... ")

	//Drops and creates accounts-Table
	err = r.Db("imdbsearch").TableDrop("accounts").Exec(session)
	err = r.Db("imdbsearch").TableCreate("accounts").Exec(session)
	if err != nil {
		log.Fatal(err)
		log.Fatal("Could not create table")
	}

	//Creates some test accounts
	for i := 0; i < 10; i++ {
		account := new(Account)
		account.ID = strconv.Itoa(i)
		account.SurveyId = strconv.Itoa(i)
		_, err := r.Table("accounts").Insert(account).RunWrite(session)
		if err != nil {
			log.Fatal(err)
		}
	}

	fmt.Println("done.")
}

func bootstrap() {

	fmt.Println("bootstrapping")

	//initDatabase()
	//go createTestData()

	// Init Gin-Gonic
	g = gin.Default()
	g.Static("/app", "./app")

	initRouting()
	port := "3000"
	//if PORT passed as env-variable, use the port
	if os.Getenv("PORT") != "" {
		port = os.Getenv("PORT")
	}

	// Listen and serve on 0.0.0.0:3000
	g.Run(":" + port)
}
