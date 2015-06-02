package main

import (
	"time"
)

// ######## Database Models ########

//Defining Account-Document
type Account struct {
	ID        string `gorethink:"id,omitempty"`
	CreatedAt time.Time
	UpdatedAt time.Time
	SurveyId  string
}
