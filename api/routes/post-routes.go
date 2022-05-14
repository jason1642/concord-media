package routes

import (
	// "context"
	"fmt"
	"net/http"

	// "time"
	"github.com/gin-gonic/gin"
)


func TestUserRoute(c*gin.Context) {
	// var ctx, cancel = context.WithTimeout(context.Background(), 100*time.Second)
	fmt.Println(c.Params)




	c.JSON(http.StatusOK, "THIS IS THE TEST USERS ROUTE")
	// defer cancel()
}