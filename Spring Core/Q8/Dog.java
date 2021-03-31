package com.capgemini.springAssignment.Q8;

import org.springframework.beans.factory.DisposableBean;
import org.springframework.beans.factory.InitializingBean;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;

public class Dog implements InitializingBean,DisposableBean  {
    private  String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void eat(){
        System.out.println(getName());
    }


    @Override
    public void afterPropertiesSet() throws Exception {
        System.out.println("Initializing bean");
    }

    @Override
    public void destroy() throws Exception {
        System.out.println("Destroy");
    }

    // Called using init-method and destroy-method
    public void myInit(){
        System.out.println("Dog bean created");
    }

    public  void  myDest(){
        System.out.println("destroy-method");
    }

    
    @PostConstruct
    public void postConstruct(){
        System.out.println("init called");
    }

    @PreDestroy
    public  void  preDestroy(){
        System.out.println("destroy called");
    }
}
