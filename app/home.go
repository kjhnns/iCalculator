package app

import (
   "github.com/gin-gonic/gin"
   "net/http"
)

var g *gin.Engine

func home(c *gin.Context) {
  c.HTML(http.StatusOK, "index.html", gin.H{
      "title": "Main website",
  })
}
