package com.Vivek.WebApp;



import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class controllerClass {

	@RequestMapping("/")
	public ModelAndView startingMethod() {
		
		ModelAndView model = new ModelAndView("login");
		return model;
		
	} 
	
	@RequestMapping(value = "/login",method = RequestMethod.POST)
	public ModelAndView loginCheck( @Valid @ModelAttribute("user") UserClass user,BindingResult result) {
		System.out.println(user.getUsername());
		if(result.hasErrors())
		{
			System.out.println("Error.....");
			ModelAndView model = new ModelAndView("login");
			return model;
		}
		if(user.getUsername().equals("Vivek") && user.getPassword().equals("123"))
		{
			ModelAndView model = new ModelAndView("success");
			return model;
		}
		else {
			ModelAndView model = new ModelAndView("error");
			return model;
		}
	}
}
