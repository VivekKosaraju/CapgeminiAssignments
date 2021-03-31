package com.capgemini.springAssignment.Q7;

import org.springframework.expression.Expression;
import org.springframework.expression.ExpressionParser;
import org.springframework.expression.spel.standard.SpelExpressionParser;

public class SPELDemo {
    public static void main(String[] args) {

       
        ExpressionParser parser = new SpelExpressionParser();

        Expression exp = parser.parseExpression("'World'");
        String msg = (String)exp.getValue();
        System.out.println(msg);


        ExpressionParser parser1 = new SpelExpressionParser();
        Expression exp1 = parser1.parseExpression("'Welcome Vivek'.concat('!')");
        String message = (String) exp1.getValue();
        System.out.println(message);
    }
}
