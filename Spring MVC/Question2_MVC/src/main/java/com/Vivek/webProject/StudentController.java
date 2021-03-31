package com.Vivek.webProject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller

public class StudentController {
	double si;
	@RequestMapping("/Calculate")
	public ModelAndView helloWorld(@RequestParam("pAmount") String p,
									@RequestParam("years") String y,
									@RequestParam("interest") String i) {
		ModelAndView model = new ModelAndView("result");
		double a=Double.parseDouble(p);
		double t=Double.parseDouble(y);
		double r=Double.parseDouble(i);
		si = (a*t*r)/100;
		model.addObject("SI", si);
		return model;
	}
	
	@RequestMapping("/")
	public ModelAndView testFunction() {
		System.out.println("model1.....");
		ModelAndView model = new ModelAndView("simpleInterest");
		return model;
	}
}
