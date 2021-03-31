package com.Vivek.webProject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller

public class StudentController {

	@RequestMapping("/")
	public ModelAndView helloWorld() {
		System.out.println("model1.....");
		ModelAndView model = new ModelAndView("index","msg","hello Vivek");
		model.addObject("msg2", "Vicky");
		return model;
	}
	
	@RequestMapping("/hello")
	public ModelAndView testFunction() {
		System.out.println("model2.....");
		ModelAndView model = new ModelAndView("helloWorld");
		return model;
	}
}
