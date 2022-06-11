package main

import "fmt"
import "net/http"
import "log"

func main(){
	// Serve static files from the frontend/dist directory.
	fs := http.FileServer(http.Dir("dist"))
	http.Handle("/", fs)
	http.Handle("/res/", http.StripPrefix("/res/", http.FileServer(http.Dir("res/"))))

	// Start the server.
	fmt.Println("Server listening on port 3000")
	log.Panic(
		http.ListenAndServe(":3000", nil),
	)
}