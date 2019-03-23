package com.org.movielibrary.controller;


import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.core.io.ClassPathResource;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.org.movielibrary.model.Movie;

@RestController
public class MovieController {
	
	private String fileName="data/movies.json";
	
	@PostMapping("/api/movie/add")
    Movie newMovie( @RequestBody Movie movie) throws IOException {
		
		
		Gson gson = new GsonBuilder().create();
		File resource = new ClassPathResource(
				this.fileName).getFile();
		List<Movie> data = gson.fromJson(new FileReader(resource),  List.class);		
		
		data.add(movie);
		//gson.toJson(data, new FileWriter(jsonOutput));
		FileWriter fw = new FileWriter(resource);
        
		gson.toJson(data, fw);
        fw.close();
		return movie;
		
	}
	
	@PostMapping("/api/movie/search")
	List<Movie> searchMovie( @RequestBody Movie movie) throws IOException {		
		Gson gson = new GsonBuilder().create();
		File resource = new ClassPathResource(
				this.fileName).getFile();
		Movie[] data = gson.fromJson(new FileReader(resource),  Movie[].class);		
		List<Movie> dataNew = new ArrayList<Movie>();
		for(Movie m : data)
		{
			if(m.equals(movie))
			{
				dataNew.add(m);
			}
		}
		return dataNew;
		
	}
	
	@RequestMapping(value = "/api/movie/update/{index}", method = RequestMethod.POST)
    Movie updateMovie(@PathVariable("index")  int index , @RequestBody Movie movie) throws IOException, ParseException {
		
		
		Gson gson = new GsonBuilder().create();
		File resource = new ClassPathResource(
				this.fileName).getFile();
		List<Movie> data = gson.fromJson(new FileReader(resource),  List.class);		
		
		data.set(index, movie);
		FileWriter fw = new FileWriter(resource);
        
		gson.toJson(data, fw);
        fw.close();
		return movie;
		
	}
	
	@RequestMapping(value = "/api/movie/delete/{index}", method = RequestMethod.GET)
	void deleteMovie(@PathVariable("index") int index ) throws IOException {
		
		Gson gson = new GsonBuilder().create();
		File resource = new ClassPathResource(
				this.fileName).getFile();
		List<Movie> data = gson.fromJson(new FileReader(resource),  List.class);		
		
		data.remove(index);
		FileWriter fw = new FileWriter(resource);
        
		gson.toJson(data, fw);
        fw.close();
	}
	
	@RequestMapping(value = "/api/movie/get/{index}", method = RequestMethod.GET)
	Movie getMovie(@PathVariable("index") int index ) throws IOException {
		
		Gson gson = new GsonBuilder().create();
		File resource = new ClassPathResource(
				this.fileName).getFile();
		Movie[] data = gson.fromJson(new FileReader(resource),  Movie[].class);
		
		return data[index];
		
	}
	
	@GetMapping("/api/movie/list")
	List<Movie> all() throws IOException {
		
		Gson gson = new Gson();
		File resource = new ClassPathResource(
				this.fileName).getFile();
		List<Movie> data = gson.fromJson(new FileReader(resource),  List.class);
		return data;
	}

}
