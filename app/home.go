package app

import (
   "github.com/gin-gonic/gin"
   "net/http"
)

var g *gin.Engine

func Home(c *gin.Context) {
      reference := c.Params.ByName("reference")
      mode := c.Params.ByName("mode")
      c.HTML(http.StatusOK, "layout.html", gin.H{
            "title": "Main website",
            "reference": reference,
            "mode": mode,
        })
}


func NotFound(c *gin.Context) {
      c.JSON(404, gin.H{"status": "not found"})
}
