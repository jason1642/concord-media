package main

import (
	"api/routes"
	"database/sql"
	"fmt"
	"log"
	"net/http"
	"os"
	"time"

	"github.com/gin-contrib/cors"
	_ "github.com/go-sql-driver/mysql"

	// "rest-api/routes"
	"github.com/gin-gonic/gin"
) 



func main() { 

	MysqlUrl := os.Getenv("MYSQL_URL")

	db, err := sql.Open("mysql", MysqlUrl)
	if err != nil {
		panic(err)
	}
	// See "Important settings" section.
	db.SetConnMaxLifetime(time.Minute * 3)
	db.SetMaxOpenConns(10)
	db.SetMaxIdleConns(10)

	
	port := os.Getenv("PORT")

	if port == "" {
		port = "5060"
	}
 

	router := gin.New()
	router.Use(gin.Logger())

	router.Use(cors.Default())
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	router.GET("/user-test", routes.TestUserRoute)





//this runs the server and allows it to listen to requests.
	// router.Run(":" + port) // listen and serve on 0.0.0.0:8080 



	
	router.Run()

	fmt.Printf("Starting server at port 8080\n")
	if err := http.ListenAndServe(":8080", nil); err != nil {
			fmt.Println("what an error")
			log.Fatal(err)
	}
} 