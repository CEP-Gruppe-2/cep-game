package main

import "fmt"
import "net/http"
import "log"

func main(){
	// Serve static files from the frontend/dist directory.
	fs := http.FileServer(http.Dir("./frontend/dist"))
	http.Handle("/", fs)

	// Start the server.
	fmt.Println("Server listening on port 3000")
	log.Panic(
		http.ListenAndServe(":3000", nil),
	)
}