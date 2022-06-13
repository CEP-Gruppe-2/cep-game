package main

import (
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func main() {
	// Serve static files from the frontend/dist directory.
	http.Handle("/assets/", http.StripPrefix("/assets/", http.FileServer(http.Dir("dist/assets/"))))
	http.Handle("/res/", http.StripPrefix("/res/", http.FileServer(http.Dir("res/"))))

	tmpl := template.Must(template.ParseFiles("dist/index.html"))
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		tmpl.Execute(w, nil)
	})

	// Start the server.
	fmt.Println("Server listening on port 3000")
	log.Panic(
		http.ListenAndServe(":3000", nil),
	)
}
