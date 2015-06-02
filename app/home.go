package app

import (
   "github.com/gin-gonic/gin"
   "net/http"
)

var g *gin.Engine

func Home(c *gin.Context) {
      c.HTML(http.StatusOK, "layout.html", gin.H{
            "title": "Main website",
        })
}
