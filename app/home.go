package app

import (
	"fmt"
	"github.com/gin-gonic/gin"
	"net/http"
	"strconv"
)

var g *gin.Engine

func hasBit(n int, pos uint) bool {
	val := n & (1 << pos)
	return (val > 0)
}

func Home(c *gin.Context) {
	reference := c.Params.ByName("reference")
	modeStr := c.Params.ByName("mode")
	mode, _ := strconv.ParseUint(modeStr, 10, 8)

	fmt.Println("New Quiz Session")
	fmt.Printf("Advertisement: \t\t %t \n", hasBit(int(mode), 1))
	fmt.Printf("Limited Features: \t %t \n", hasBit(int(mode), 0))

	c.HTML(http.StatusOK, "layout.html", gin.H{
		"title":     "iCalculator",
		"reference": reference,
		"advert":    hasBit(int(mode), 1),
		"features":  hasBit(int(mode), 0),
		"basic":     bool(hasBit(int(mode), 1) || hasBit(int(mode), 0)),
	})
}

func NotFound(c *gin.Context) {
	c.JSON(404, gin.H{"status": "not found"})
}
